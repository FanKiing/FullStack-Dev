<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Film extends Model
{
    use SoftDeletes;

    protected $fillable = ['title', 'description', 'duration', 'release_date', 'poster', 'category_id'];

    protected $casts = [
        'release_date' => 'date',
        'deleted_at' => 'datetime',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function actors(): BelongsToMany
    {
        return $this->belongsToMany(Actor::class)
                    ->withPivot('salary')
                    ->withTimestamps();
    }
}