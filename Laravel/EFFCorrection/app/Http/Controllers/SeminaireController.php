<?php

namespace App\Http\Controllers;
use App\Models\Seminaire;
use App\Models\Animateur;

use Illuminate\Http\Request;

class SeminaireController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $seminaire = Seminaire::with('animateur')->get();
        return view('seminaires.index', compact('seminaires'));
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
        $request->validate([
            'theme' => 'required | string | max:255',
            'date_debut' => 'required | date',
            'date_fin' => 'required | date',
            'description' => 'required | string',
            'cout_journalier' => 'required | numeric',
            'animateur_id' => 'required | exists:animateurs,id',
        ]);

        Seminaire::create($request->all());

        return redirect()->route('seminaires.index')
            ->with('success', 'Séminaire ajouté avec succés');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $seminaire = Seminaire::with(['animateur','activites'])->findOrFail($id);
        return view('seminaires.show', compact('seminaires'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
