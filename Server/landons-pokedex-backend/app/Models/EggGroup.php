<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EggGroup extends Model
{
    public $timestamps = false;

    public $table = 'egg_groups';

    protected $hidden = ['pivot'];

    protected $fillable = [
        "name"
    ];

    /** Return the pokemon that have a specific egg group */
    public function pokemon(){
        //belongsToMany($related, $table = null, $foreignPivotKey = null, $relatedPivotKey = null,
        //$parentKey = null, $relatedKey = null, $relation = null)
        return $this->belongsToMany(Pokemon::class, 'pokemon_egg_groups', 'egg_groups_id', 'pokemon_id');
    }
    
}
