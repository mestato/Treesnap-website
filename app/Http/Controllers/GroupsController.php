<?php

namespace App\Http\Controllers;

use App\Collection;
use App\Group;
use App\Http\Controllers\Traits\Observes;
use App\Http\Controllers\Traits\Responds;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Observation;

class GroupsController extends Controller
{
    use Responds, Observes;

    /**
     * Get list of groups.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $this->validate($request, [
            'with_users' => 'nullable|boolean',
        ]);

        $groups = $user->groups()->with([
            'owner' => function ($query) use ($user) {
                $query->select(['users.id', DB::raw("IF(users.id = {$user->id}, 'You', users.name) AS name")]);
            },
        ])->withCount('users')->get();

        if ($request->with_users) {
            $groups->load([
                'users' => function ($query) {
                    $query->select('users.id');
                },
            ]);
        }

        return $this->success($groups);
    }

    /**
     * Create a new group.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:3|max:255',
            'share' => 'required|boolean',
        ]);

        $user = $request->user();

        $group = Group::create([
            'name' => $request->name,
            'user_id' => $request->user()->id,
        ]);

        $group->users()->attach($user->id, [
            'share' => $request->share ? true : false,
        ]);

        $group->setAttribute('owner', [
            'id' => $user->id,
            'name' => $user->name,
        ]);
        //$group->owner = $owner;

        $group->users_count = 0;

        return $this->created($group);
    }

    /**
     * Get a certain group.
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id, Request $request)
    {
        $user = $request->user();

        $group = Group::with([
            'users' => function ($query) {
                $query->select(['users.id', 'users.name']);
                $query->orderBy('users.name', 'asc');
                $query->orderBy('users.id', 'asc');
                $query->withCount('observations');
            },
        ])->findOrFail($id);

        // Protect group from being accessed by unauthorized users
        if ($group->user_id !== $user->id) {
            if (! $group->users->where('id', $user->id)->first()) {
                return $this->unauthorized();
            }
        }

        // Determine if user is sharing observations
        $is_sharing = $user->groups()->where('groups.id', $id)->first()->pivot->share ? true : false;

        return $this->success([
            'id' => $group->id,
            'name' => $group->name,
            'users' => $group->users,
            'owner' => $group->users->where('id', $group->user_id)->first(),
            'is_owner' => $user->id === $group->user_id,
            'is_sharing' => $is_sharing,
        ]);
    }

    /**
     * Get observations belonging to a group.
     *
     * @param $id
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function groupObservations($id, Request $request)
    {
        $user = $request->user();

        $group = Group::with([
            'users' => function ($query) {
                $query->select(['id', 'name']);
                $query->orderBy('name', 'asc');
            },
        ])->findOrFail($id);

        // Protect group from being accessed by unauthorized users
        if (! $group->users->where('id', $user->id)->first()) {
            return $this->unauthorized();
        }

        $observations = Observation::join('group_user', 'group_user.user_id', '=', 'observations.user_id')
            ->where('group_user.group_id', $id)
            ->where('group_user.share', true)
            ->orderBy('observations.id', 'desc')
            ->paginate(6);

        $observations->load([
            'confirmations' => function ($query) use ($user) {
                $query->where('user_id', $user->id);
            },
            'flags' => function ($query) use ($user) {
                $query->where('user_id', $user->id);
            },
            'collections' => function ($query) use ($user) {
                $query->where('user_id', $user->id);
            },
            'user' => function ($query) {
                $query->select('name', 'id');
            },
        ]);

        $data = [];
        foreach ($observations as $observation) {
            $json = $this->getObservationJson($observation, true, $user);
            $data[] = array_merge($json, ['user' => $observation->user]);
        }

        return $this->success(array_merge($observations->toArray(), [
            'data' => $data,
            'has_more_pages' => $observations->hasMorePages(),
            'count' => $observations->count(),
        ]));
    }

    /**
     * Remove a user from a group.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function detach(Request $request)
    {
        $this->validate($request, [
            'user_id' => 'required|integer',
            'group_id' => 'required|integer',
        ]);

        $user = $request->user();
        $group = Group::findOrFail($request->group_id);

        if ($group->user_id !== $user->id) {
            return $this->unauthorized();
        }

        if ($group->user_id === intval($request->user_id)) {
            return $this->validationError([
                'user' => ['The group leader cannot be removed from the group'],
            ]);
        }

        $group->users()->detach($request->user_id);

        return $this->created('User has been removed from group');
    }

    /**
     * Delete a group and detach any associated records.
     *
     * @param $id
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id, Request $request)
    {
        $group = Group::findOrFail($id);
        $user = $request->user();

        if ($group->user_id !== $user->id) {
            return $this->unauthorized();
        }

        $group->users()->detach();
        $group->delete();

        return $this->created('Group deleted successfully.');
    }

    /**
     * Remove authenticated from user a given group.
     *
     * @param \App\Group $group
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function exitGroup(Group $group, Request $request)
    {
        $this->authorize('exit', $group);

        $group->users()->detach($request->user()->id);

        return $this->success('Exited group successfully');
    }

    /**
     * Add users to a group.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function attach(Request $request)
    {
        $this->validate($request, [
            'users' => 'required|json',
            'group_id' => 'required|exists:groups,id',
        ]);

        $users = json_decode($request->users);

        foreach ($users as $id) {
            $user = User::whereDoesntHave('groups', function ($query) use ($request) {
                $query->where('group_id', $request->group_id);
            })->find($id);

            if ($user) {
                $user->groups()->attach($request->group_id);
            }
        }

        $group = Group::with([
            'users' => function ($query) {
                $query->select('id', 'name');
            },
        ])->findOrFail($request->group_id);

        return $this->success([
            'name' => $group->name,
            'users' => $group->users,
        ]);
    }

    /**
     * Get users that belong to the same group as the
     * currently authenticated user.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getGroupUsers(Request $request)
    {
        $this->validate($request, [
            'term' => 'nullable|max:100',
            'collection_id' => 'nullable|exists:collections,id',
        ]);

        $user = $request->user();

        $groups = $user->groups()->with([
            'users' => function ($query) use ($user, $request) {
                $query->where('users.id', '!=', $user->id);
                if (! empty($request->term)) {
                    $query->where(function ($query) use ($request) {
                        $query->where('users.name', 'like', "%{$request->term}%");
                        $query->orWhere('users.email', 'like', "%{$request->term}%");
                    });
                }

                if ($request->collection_id) {
                    $collection = Collection::find($request->collection_id);
                    if ($collection) {
                        $user_ids = $collection->users->map(function ($user) {
                            return $user->id;
                        });
                        if (! empty($user_ids)) {
                            $query->whereNotIn('users.id', $user_ids);
                        }
                    }
                }
            },
        ])->get();

        $users = [];
        $ids = [];
        foreach ($groups as $group) {
            foreach ($group->users as $user) {
                if (in_array($user->id, $ids)) {
                    continue;
                }
                $ids[] = $user->id;
                $users[] = [
                    'label' => $user->name,
                    'value' => $user->id,
                    'email' => $user->email,
                ];
            }
        }

        return $this->success($users);
    }

    /**
     * Patch sharing settings.
     *
     * @param \App\Group $group
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function changeSharing(Group $group, Request $request)
    {
        $this->validate($request, [
            'share' => 'required|boolean',
        ]);

        $user = $request->user();

        $belongsToGroup = $user->groups()->where('groups.id', $group->id)->first();
        if (! $belongsToGroup) {
            return $this->unauthorized();
        }

        // Update group settings
        $share = $request->share ? true : false;
        DB::table('group_user')->where('group_id', $group->id)->where('user_id', $user->id)->update([
            'share' => $share,
        ]);

        return $this->success($share);
    }
}
