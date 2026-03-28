<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Acteur extends Model
{
    public function films() {
        return $this->belongsToMany(Film::class)->withPivot('gain');
    }
}
