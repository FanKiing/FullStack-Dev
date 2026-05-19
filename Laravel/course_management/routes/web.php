<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProfileController;
use App\Models\Course;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('courses', CourseController::class);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['admin'])->prefix('admin')->group(function () {

});

Route::middleware(['teacher'])->prefix('teacher')->group(function () {

});


Route::prefix('teacher')
    ->middleware(['auth','teacher'])
    ->name('teacher.')
    ->group(function () {

        Route::resource('courses', CourseController::class);

});

require __DIR__.'/auth.php';
