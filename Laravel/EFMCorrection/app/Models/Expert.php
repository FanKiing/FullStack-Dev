<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Expert extends Model
{
    protected $fillable = ['nom_complet'];

    public function evenements()
    {
        return $this->hasMany(Evenement::class);
    }
}
