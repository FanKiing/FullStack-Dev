<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Film;

class FilmController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $films = Film::with('categorie')->get();
            return view('films.index', compact('films'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $film = Film::create($request->all());
        $film->acteurs()->attach($request->acteurs);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // @noinspection PhpUnusedParameterInspection
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // @noinspection PhpUnusedParameterInspection
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $film = Film::find($id);
        $film->update($request->all());
        $film->acteurs()->sync($request->acteurs);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $film = Film::find($id);
        $film->delete();
    }
}
