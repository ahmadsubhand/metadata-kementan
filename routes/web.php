<?php

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
            Route::get('/', 'index')->name('metadata');
            Route::get('/{id}', 'update')->name('metadata.update');
            Route::post('/', 'saveAsDraft')->name('metadata.draft');
            Route::delete('/{id}', 'destroy')->name('metadata.destroy');
        });    
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
