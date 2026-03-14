<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EvenementController;

Route::get('/evenements', [EvenementController::class,'index']);
Route::get('/evenements/{id}', [EvenementController::class,'show']);
Route::delete('/evenements/{id}', [EvenementController::class,'destroy']);

Route::get('/', function () {
    return view('welcome');
});
