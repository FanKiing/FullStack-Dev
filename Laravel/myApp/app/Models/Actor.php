<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Actor extends Model
{
    protected $fillable = ['name', 'image'];

    public function films(): BelongsToMany
    {
        return $this->belongsToMany(Film::class)
                    ->withPivot('salary')
                    ->withTimestamps();
    }
}