<?php

use App\Http\Controllers\admin\MetadataController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified', 'approved'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::controller(MetadataController::class)
        ->prefix('metadata')
        ->group(function () {
            Route::get('/', 'index')->name('metadata');
            Route::post('/', 'saveAsDraft')->name('metadata.draft');
        });    
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
