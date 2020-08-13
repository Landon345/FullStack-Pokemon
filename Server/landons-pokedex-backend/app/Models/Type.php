<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    public $timestamps = false;

    public $table = 'types';

    protected $hidden = ['pivot'];

    protected $fillable = [
        "name"
    ];

    /** return the pokemon that have a specific type */
    public function pokemon(){
        return $this->belongsToMany(Pokemon::class, 'pokemon_type');
    }
}
