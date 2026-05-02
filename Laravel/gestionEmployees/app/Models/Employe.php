<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Employe extends Model
{
    use SoftDeletes;

    protected $fillable = ['nom', 'email', 'photo', 'departement_id'];

    protected $casts = [
        'deleted_at' => 'datetime',
    ];

    public function departement(): BelongsTo
    {
        return $this->belongsTo(Departement::class);
    }

    public function projets(): BelongsToMany
    {
        return $this->belongsToMany(Projet::class)
                    ->withPivot('salaire')
                    ->withTimestamps();
    }
}