<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Departement extends Model
{
    protected $fillable = ['nom', 'slug'];

    public function employes(): HasMany
    {
        return $this->hasMany(Employe::class);
    }
}