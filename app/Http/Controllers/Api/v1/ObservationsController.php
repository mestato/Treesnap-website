<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\v1\ResponseTrait;

class ObservationsController extends Controller
{
    use ResponseTrait;

    public function index(Request $request)
    {
        $user = $request->user();
        $observations = $user->observations()->get();
        $data = [];

        foreach ($observations as $observation) {
            $data[] = [
              'id' => $observation->id,
              'observation_category' => $observation->observation_category,
              'meta_data' => $observation->data,
              'location' => [
                'longitude' => $observation->longitude,
                'latitude' => $observation->latitude,
              ],
              'images' => $observation->images,
              'date' => $observation->collection_date,
              'data' => $observation->data,
            ];
        }

        return $this->success($data);
    }
}
