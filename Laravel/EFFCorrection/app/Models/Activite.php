<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Activite extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom_activite',
        'description',
        'seminaire_id'
    ];

    public function seminaire()
    {
        return $this->belongsTo(Seminaire::class);
    }
}