<?php

namespace App\Http\Controllers;

use App\Models\Prompt;
use App\Models\Famille;
use Illuminate\Http\Request;

class PromptController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $prompts = Prompt::with('famille')->paginate(9);
        return view('prompts.index', compact('prompts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $familles = Famille::all();
        return view('prompts.create', compact('familles'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
        'titre' => 'required',
        'description' => 'required',
        'prompt_text' => 'required',
        'famille_id' => 'required'
        ]);
        Prompt::create($validated);
        return redirect()->route('prompts.index')->with('success', 'Prompt ajouté avec succès');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
    public function destroy(Prompt $prompt)
    {
        Prompt::destroy($prompt->id);
        return redirect()->route('prompts.index')->with('success', 'Prompt supprimé');
    }
}
