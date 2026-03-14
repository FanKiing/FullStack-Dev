<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\SeminaireController;

Route::get('/seminaires', [SeminaireController::class, 'index'])->name('seminaires.index');
Route::get('/seminaires/create', [SeminaireController::class, 'create'])->name('seminaires.create');
Route::post('/seminaires', [SeminaireController::class, 'store'])->name('seminaires.store');
Route::get('/seminaires/{id}', [SeminaireController::class, 'show'])->name('seminaires.show');

Route::get('/', function () {
    return view('welcome');
});
