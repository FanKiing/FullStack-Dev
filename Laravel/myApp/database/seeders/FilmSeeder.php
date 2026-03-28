<?php

namespace Database\Seeders;

use App\Models\Film;
use App\Models\Category;
use App\Models\Actor;
use Illuminate\Database\Seeder;

class FilmSeeder extends Seeder
{
    public function run(): void
    {
        $categories = Category::all();
        $actors = Actor::all();
        
        $films = [
            ['title' => 'Inception', 'description' => 'A thief who steals corporate secrets', 'duration' => 148, 'release_date' => '2010-07-16'],
            ['title' => 'The Shawshank Redemption', 'description' => 'Two imprisoned men bond', 'duration' => 142, 'release_date' => '1994-09-23'],
            ['title' => 'Pulp Fiction', 'description' => 'The lives of two mob hitmen', 'duration' => 154, 'release_date' => '1994-10-14'],
        ];
        
        foreach ($films as $index => $filmData) {
            $film = Film::create(array_merge($filmData, [
                'category_id' => $categories->random()->id,
            ]));
            
            // Attach random actors with random salaries
            $randomActors = $actors->random(rand(2, 4));
            foreach ($randomActors as $actor) {
                $film->actors()->attach($actor->id, ['salary' => rand(100000, 5000000)]);
            }
        }
    }
}