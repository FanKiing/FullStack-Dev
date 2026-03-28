<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\FilmController;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');


Route::get('/', function () {
    return redirect()->route('films.index');
});

Route::resource('films', FilmController::class);
Route::post('films/filter', [FilmController::class, 'filter'])->name('films.filter');
Route::delete('films/{film}/actors/{actor}', [FilmController::class, 'detachActor'])->name('films.actors.detach');

require __DIR__.'/settings.php';
