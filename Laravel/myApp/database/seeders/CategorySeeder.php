<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance', 'Thriller'];
        
        foreach ($categories as $category) {
            Category::create([
                'name' => $category,
                'slug' => strtolower($category),
            ]);
        }
    }
}