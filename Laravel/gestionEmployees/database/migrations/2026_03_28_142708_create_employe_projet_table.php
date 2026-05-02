<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('employe_projet', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employe_id')->constrained()->onDelete('cascade');
            $table->foreignId('projet_id')->constrained()->onDelete('cascade');
            $table->decimal('salaire', 10, 2); // Salaire pour ce projet
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('employe_projet');
    }
};