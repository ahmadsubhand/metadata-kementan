<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MetadataStatisticForm;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MetadataStatisticApiController extends Controller
{
    public function index(): JsonResponse
    {
        $response = MetadataStatisticForm::all();

        return response()->json($response);
    }
}
