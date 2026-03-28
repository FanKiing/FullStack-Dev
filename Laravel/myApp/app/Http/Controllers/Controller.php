<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Film;

abstract class Controller
{
    public function filter(Request $request)
{
    $films = Film::where('categorie_id', $request->categorie_id)
                ->with('categorie')
                ->get();

    return response()->json($films);
}
}
