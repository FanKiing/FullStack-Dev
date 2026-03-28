<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('acteur_film', function (Blueprint $table) {
            $table->foreignId('film_id')->constrained()->cascadeOnDelete();
            $table->foreignId('acteur_id')->constrained()->cascadeOnDelete();
            $table->float('gain');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('acteur_film');
    }
};
