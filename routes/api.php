<?php

use App\Http\Controllers\Api\MetadataStatisticApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::controller(MetadataStatisticApiController::class)->group(function () {
        Route::get('metadata', 'index');
    });
});
