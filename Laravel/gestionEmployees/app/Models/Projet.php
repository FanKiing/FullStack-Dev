<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Projet extends Model
{
    use SoftDeletes;

    protected $fillable = ['titre', 'description', 'date_debut', 'date_fin'];

    protected $casts = [
        'date_debut' => 'date',
        'date_fin' => 'date',
        'deleted_at' => 'datetime',
    ];

    public function employes(): BelongsToMany
    {
        return $this->belongsToMany(Employe::class)
                    ->withPivot('salaire')
                    ->withTimestamps();
    }
}