<?php

use App\Http\Controllers\ApiTokenRequestController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MetadataController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified', 'approved'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::controller(MetadataController::class)
        ->prefix('metadata')
        ->group(function () {
            Route::get('/', 'editOrCreate')->name('metadata');
            Route::get('/{id}', 'editOrCreate')->name('metadata.edit');
            Route::post('/draft', 'saveAsDraft')->name('metadata.draft');
            Route::put('/{id}/draft', 'saveAsDraft')->name('metadata.draft-update');
            Route::post('/submit', 'saveAsPending')->name('metadata.submit');
            Route::put('/{id}/submit', 'saveAsPending')->name('metadata.submit-update');
            Route::delete('/{id}', 'destroy')->name('metadata.destroy');
        });  

    Route::controller(ApiTokenRequestController::class)
        ->prefix('api')
        ->group(function () {
            Route::get('/', 'editOrCreate')->name('api');
            Route::get('/{id}', 'editOrCreate')->name('api.edit');
            Route::post('/', 'updateOrStore')->name('api.store');
            Route::post('/{id}/generate', 'generate')->name('api.generate');
            Route::put('/{id}', 'updateOrStore')->name('api.update');
            Route::delete('/{id}', 'destroy')->name('api.destroy');
        });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
