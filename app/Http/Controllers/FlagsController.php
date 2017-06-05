<?php

namespace App\Http\Controllers;

use App\Flag;
use App\Http\Controllers\Traits\Responds;
use Illuminate\Http\Request;

class FlagsController extends Controller
{
    use Responds;

    /**
     * List flags.
     * Accessible to admins only.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return $this->success(Flag::all());
    }

    /**
     * Create a flag.
     *
     * Accessible to anyone.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'observation_id' => 'required|integer|exists:observations,id',
            'reason' => 'required|max:255',
            'comments' => 'nullable|min:3',
        ]);

        $flag = Flag::create([
            'user_id' => $request->user()->id,
            'observation_id' => $request->observation_id,
            'reason' => $request->reason,
            'comments' => $request->comments,
        ]);

        return $this->success($flag);
    }

    /**
     * Delete a flag.
     *
     * @param $id
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id, Request $request)
    {
        $flag = Flag::findOrFail($id);

        // Only owners are allowed to delete a flag.
        if ($flag->user_id !== $request->user()->id) {
            return $this->unauthorized();
        }

        $flag->delete();

        return $this->success([
            'id' => $id
        ]);
    }
}
