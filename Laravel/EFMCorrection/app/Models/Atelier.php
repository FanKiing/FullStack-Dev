<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Atelier extends Model
{
    protected $fillable = [
        'nom_atelier',
        'description',
        'evenement_id'
    ];

    public function evenement()
    {
        return $this->belongsTo(Evenement::class);
    }
}
