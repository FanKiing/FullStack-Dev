<?php

namespace Database\Seeders;

use App\Models\Departement;
use Illuminate\Database\Seeder;

class DepartementSeeder extends Seeder
{
    public function run(): void
    {
        $departements = [
            'Informatique',
            'Ressources Humaines',
            'Marketing',
            'Finance',
            'Commercial',
            'Logistique',
            'Direction'
        ];
        
        foreach ($departements as $departement) {
            Departement::create([
                'nom' => $departement,
                'slug' => strtolower(str_replace(' ', '-', $departement)),
            ]);
        }
    }
}