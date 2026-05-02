<?php

namespace Database\Seeders;

use App\Models\Employe;
use App\Models\Departement;
use Illuminate\Database\Seeder;

class EmployeSeeder extends Seeder
{
    public function run(): void
    {
        $departements = Departement::all();
        
        $employes = [
            ['nom' => 'Jean Dupont', 'email' => 'jean.dupont@example.com', 'photo' => 'https://via.placeholder.com/150'],
            ['nom' => 'Marie Martin', 'email' => 'marie.martin@example.com', 'photo' => 'https://via.placeholder.com/150'],
            ['nom' => 'Pierre Durand', 'email' => 'pierre.durand@example.com', 'photo' => 'https://via.placeholder.com/150'],
            ['nom' => 'Sophie Bernard', 'email' => 'sophie.bernard@example.com', 'photo' => 'https://via.placeholder.com/150'],
            ['nom' => 'Lucas Petit', 'email' => 'lucas.petit@example.com', 'photo' => 'https://via.placeholder.com/150'],
            ['nom' => 'Emma Robert', 'email' => 'emma.robert@example.com', 'photo' => 'https://via.placeholder.com/150'],
            ['nom' => 'Thomas Richard', 'email' => 'thomas.richard@example.com', 'photo' => 'https://via.placeholder.com/150'],
            ['nom' => 'Julie Dubois', 'email' => 'julie.dubois@example.com', 'photo' => 'https://via.placeholder.com/150'],
        ];
        
        foreach ($employes as $employeData) {
            Employe::create(array_merge($employeData, [
                'departement_id' => $departements->random()->id,
            ]));
        }
    }
}