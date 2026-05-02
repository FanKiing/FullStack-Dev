<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('employes', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('email')->unique();
            $table->string('photo')->nullable();
            $table->foreignId('departement_id')->constrained()->onDelete('cascade');
            $table->softDeletes(); // Pour la suppression soft delete
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('employes');
    }
};