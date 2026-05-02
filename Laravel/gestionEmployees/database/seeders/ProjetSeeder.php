<?php

namespace Database\Seeders;

use App\Models\Projet;
use App\Models\Employe;
use Illuminate\Database\Seeder;

class ProjetSeeder extends Seeder
{
    public function run(): void
    {
        $employes = Employe::all();
        
        $projets = [
            [
                'titre' => 'Migration Cloud',
                'description' => 'Migration de l\'infrastructure vers le cloud',
                'date_debut' => '2024-01-01',
                'date_fin' => '2024-06-30'
            ],
            [
                'titre' => 'Application Mobile',
                'description' => 'Développement d\'une application mobile cross-platform',
                'date_debut' => '2024-02-01',
                'date_fin' => '2024-08-31'
            ],
            [
                'titre' => 'Refonte Site Web',
                'description' => 'Refonte complète du site web corporatif',
                'date_debut' => '2024-03-01',
                'date_fin' => '2024-07-31'
            ],
            [
                'titre' => 'CRM Interne',
                'description' => 'Développement d\'un système CRM interne',
                'date_debut' => '2024-04-01',
                'date_fin' => '2024-12-31'
            ],
            [
                'titre' => 'Formation IA',
                'description' => 'Programme de formation en intelligence artificielle',
                'date_debut' => '2024-05-01',
                'date_fin' => '2024-09-30'
            ],
        ];
        
        foreach ($projets as $projetData) {
            $projet = Projet::create($projetData);
            
            // Attacher des employés aléatoires avec des salaires
            $randomEmployes = $employes->random(rand(2, 5));
            foreach ($randomEmployes as $employe) {
                $projet->employes()->attach($employe->id, ['salaire' => rand(30000, 80000)]);
            }
        }
    }
}
