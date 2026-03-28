<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Actor;
use App\Models\Category;
use App\Http\Requests\FilmRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilmController extends Controller
{
    // a. Index action - get films with their categories
    public function index()
    {
        $films = Film::with('category')->get();
        return view('films.index', compact('films'));
    }

    // b. Filter action using jQuery AJAX
    public function filter(Request $request)
    {
        $categoryId = $request->category_id;
        
        if ($categoryId) {
            $films = Film::with('category')
                        ->where('category_id', $categoryId)
                        ->get();
        } else {
            $films = Film::with('category')->get();
        }
        
        return response()->json($films);
    }

    public function create()
    {
        $categories = Category::all();
        $actors = Actor::all();
        return view('films.create', compact('categories', 'actors'));
    }

    // d. Store action
    public function store(FilmRequest $request)
    {
        $validated = $request->validated();
        
        // Handle poster upload
        if ($request->hasFile('poster')) {
            $validated['poster'] = $request->file('poster')->store('posters', 'public');
        }
        
        $film = Film::create($validated);
        
        // Attach actors with their salaries
        if ($request->has('actors')) {
            foreach ($request->actors as $actorId => $salary) {
                if ($salary) {
                    $film->actors()->attach($actorId, ['salary' => $salary]);
                }
            }
        }
        
        return redirect()->route('films.index')
                        ->with('success', 'Film created successfully.');
    }

    public function edit(Film $film)
    {
        $categories = Category::all();
        $actors = Actor::all();
        $film->load('actors');
        
        return view('films.edit', compact('film', 'categories', 'actors'));
    }

    public function update(FilmRequest $request, Film $film)
    {
        $validated = $request->validated();
        
        // Handle poster upload
        if ($request->hasFile('poster')) {
            // Delete old poster if exists
            if ($film->poster) {
                Storage::disk('public')->delete($film->poster);
            }
            $validated['poster'] = $request->file('poster')->store('posters', 'public');
        }
        
        $film->update($validated);
        
        // Sync actors with their salaries
        $actorsData = [];
        if ($request->has('actors')) {
            foreach ($request->actors as $actorId => $salary) {
                if ($salary) {
                    $actorsData[$actorId] = ['salary' => $salary];
                }
            }
        }
        $film->actors()->sync($actorsData);
        
        return redirect()->route('films.index')
                        ->with('success', 'Film updated successfully.');
    }

    // f. Destroy action with soft delete
    public function destroy(Film $film)
    {
        $film->delete();
        
        return redirect()->route('films.index')
                        ->with('success', 'Film deleted successfully.');
    }

    // 8. Show action with actors details
    public function show(Film $film)
    {
        $film->load(['category', 'actors']);
        return view('films.show', compact('film'));
    }
    
    // Detach actor from film
    public function detachActor(Film $film, Actor $actor)
    {
        $film->actors()->detach($actor->id);
        
        return redirect()->route('films.show', $film)
                        ->with('success', 'Actor removed from film successfully.');
    }
}