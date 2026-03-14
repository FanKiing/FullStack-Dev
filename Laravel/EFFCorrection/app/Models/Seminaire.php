<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Seminaire extends Model
{
    use HasFactory;

    protected $fillable = [
        'theme',
        'date_debut',
        'date_fin',
        'description',
        'cout_journalier',
        'animateur_id'
    ];

    public function animateur()
    {
        return $this->belongsTo(Animateur::class);
    }

    public function activites()
    {
        return $this->hasMany(Activite::class);
    }
}