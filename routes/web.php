<?php

use App\Http\Controllers\Admin\ItemCategoryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');


Route::prefix('admin')->name('admin.')->middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('Dashboard');
    });

    Route::prefix('item-categories')->name('item-categories.')->group(function () {
        Route::get('/', [ItemCategoryController::class, 'index'])->name('index');
        Route::post('/', [ItemCategoryController::class, 'store'])->name('store');
    });
});


require __DIR__.'/settings.php';
