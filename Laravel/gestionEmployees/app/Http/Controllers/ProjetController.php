<?php

namespace App\Http\Controllers;

use App\Models\Projet;
use App\Models\Employe;
use App\Models\Departement;
use App\Http\Requests\ProjetRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjetController extends Controller
{
    public function index()
    {
        $projets = Projet::all();
        $departements = Departement::all();
        return view('projets.index', compact('projets', 'departements'));
    }

    public function filter(Request $request)
    {
        $departementId = $request->departement_id;
        
        if ($departementId) {
            $projets = Projet::whereHas('employes', function($query) use ($departementId) {
                $query->where('departement_id', $departementId);
            })->with('employes.departement')->get();
        } else {
            $projets = Projet::with('employes.departement')->get();
        }
        
        return response()->json($projets);
    }

    public function create()
    {
        $employes = Employe::with('departement')->get();
        return view('projets.create', compact('employes'));
    }

    public function store(ProjetRequest $request)
    {
        $validated = $request->validated();
        
        $projet = Projet::create($validated);

        if ($request->has('employes')) {
            foreach ($request->employes as $employeId => $salaire) {
                if ($salaire) {
                    $projet->employes()->attach($employeId, ['salaire' => $salaire]);
                }
            }
        }
        
        return redirect()->route('projets.index')
                        ->with('success', 'Projet créé avec succès.');
    }

    public function edit(Projet $projet)
    {
        $employes = Employe::with('departement')->get();
        $projet->load('employes');
        
        return view('projets.edit', compact('projet', 'employes'));
    }

    public function update(ProjetRequest $request, Projet $projet)
    {
        $validated = $request->validated();
        
        $projet->update($validated);

        $employesData = [];
        if ($request->has('employes')) {
            foreach ($request->employes as $employeId => $salaire) {
                if ($salaire) {
                    $employesData[$employeId] = ['salaire' => $salaire];
                }
            }
        }
        $projet->employes()->sync($employesData);
        
        return redirect()->route('projets.index')
                        ->with('success', 'Projet mis à jour avec succès.');
    }

    public function destroy(Projet $projet)
    {
        $projet->delete();
        
        return redirect()->route('projets.index')
                        ->with('success', 'Projet supprimé avec succès.');
    }

    public function show(Projet $projet)
    {
        $projet->load('employes.departement');
        return view('projets.show', compact('projet'));
    }

    public function detachEmploye(Projet $projet, Employe $employe)
    {
        $projet->employes()->detach($employe->id);
        
        return redirect()->route('projets.show', $projet)
                        ->with('success', 'Employé retiré du projet avec succès.');
    }
}