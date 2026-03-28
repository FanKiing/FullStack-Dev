<?php

namespace Database\Seeders;

use App\Models\Actor;
use Illuminate\Database\Seeder;

class ActorSeeder extends Seeder
{
    public function run(): void
    {
        $actors = [
            ['name' => 'Leonardo DiCaprio', 'image' => 'https://via.placeholder.com/150'],
            ['name' => 'Tom Hanks', 'image' => 'https://via.placeholder.com/150'],
            ['name' => 'Meryl Streep', 'image' => 'https://via.placeholder.com/150'],
            ['name' => 'Brad Pitt', 'image' => 'https://via.placeholder.com/150'],
            ['name' => 'Natalie Portman', 'image' => 'https://via.placeholder.com/150'],
        ];
        
        foreach ($actors as $actor) {
            Actor::create($actor);
        }
    }
}