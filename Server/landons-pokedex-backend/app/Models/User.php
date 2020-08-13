<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Illuminate\Support\Str;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     * 
     * @var array
     */
    protected $fillable = [
        'name', 'email'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public static function boot()
    {
        parent::boot();
        // runs every time a new user is created. All users will 
        // get an email token even if email verification is turned off
        // in my routes file.
        static::creating(function ($user) {
            $user->email_token = Str::random(30);
        });
    }

    /** return the pokemon that a specific user captured */
    public function pokemon()
    {
        //belongsToMany($related, $table = null, $foreignPivotKey = null, $relatedPivotKey = null,
        //$parentKey = null, $relatedKey = null, $relation = null)
        //return $this->belongsToMany(Pokemon::class, 'users_captured', 'user_id', 'pokemon_id')->withTimestamps();
        return $this->belongsToMany(Pokemon::class, 'users_captured')->withTimestamps();
    }
}
