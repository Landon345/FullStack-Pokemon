<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    //remove requirement for timestamps from Pokemon Table
    public $timestamps = false;

    public $table = 'pokemon';

    protected $hidden = ['pivot'];

    //this is for eager loading the relationships, so that it is faster
    protected $with = ['eggGroups', 'abilities', 'types'];

    //mass assignable items
    protected $fillable = [
        "name", "height", "weight", "stats", "genus", "description"
    ];

    /** Return the types of a specific pokemon */
    public function types()
    {
        return $this->belongsToMany(Type::class, 'pokemon_type', 'pokemon_id', 'type_id')->select(['type_id', 'name']);
    }

    /** Return the egg_groups of a specific pokemon */
    public function eggGroups()
    {
        //belongsToMany($related, $table = null, $foreignPivotKey = null, $relatedPivotKey = null,
        //$parentKey = null, $relatedKey = null, $relation = null)
        return $this->belongsToMany(EggGroup::class, 'pokemon_egg_groups', 'pokemon_id', 'egg_groups_id')->select(['egg_groups_id', 'name']);
    }

    /** Return the abilities of a specific pokemon */
    public function abilities()
    {
        return $this->belongsToMany(Ability::class, 'pokemon_abilities', 'pokemon_id', 'ability_id')->select(['ability_id', 'name']);
    }

    /** Return the users that have captured this specific pokemon */
    public function users()
    {
        return $this->belongsToMany(User::class, 'users_captured')->withTimestamps();
    }

}

