<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ability extends Model
{
    public $timestamps = false;

    public $table = 'abilities';

    protected $hidden = ['pivot'];

    protected $fillable = [
        "name"
    ];

    /** Return the pokemon that have this specific ability */
    public function pokemon(){
        return $this->belongsToMany(Pokemon::class, 'pokemon_abilities');
    }
}
