<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PromptController;
use App\Http\Middleware\AuthMiddleware;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('prompts', PromptController::class)->middleware(AuthMiddleware::class);