<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    public function categorie() {
        return $this->belongsTo(Categorie::class);
    }

    public function acteurs() {
        return $this->belongsToMany(Acteur::class)->withPivot('gain');
    }
}
