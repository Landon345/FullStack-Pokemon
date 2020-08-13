<?php


namespace App\Repositories;

use Illuminate\Support\Facades\Auth;
use App\Models\Pokemon;
use DB;

class CaptureRepository implements Interfaces\CaptureRepositoryInterface
{
    /** Grab all of the current user's pokemon. The user is known by the api_key passed as the authorization */
    public function index()
    {
        return Auth::user()->pokemon->sortBy("id");
    }

    /** Store a captured pokemon in the database related to the current user. */
    public function store($id)
    {

        // I can add a row in the users_captured table either of these two ways.
        Pokemon::find($id)->users()->syncWithoutDetaching(Auth::user());
        //Auth::user()->pokemon()->syncWithoutDetaching($request->input('id'));
        return Pokemon::find($id);
    }

    /** Release a captured pokemon related to the current user */
    public function release($pokemonid)
    {
        // I can remove a row in the users_captured table either of these two ways.
        Pokemon::find($pokemonid)->users()->detach(Auth::user());
        //Auth::user()->pokemon()->detach($pokemonid);
        return Auth::user()->pokemon;
    }

    /** find a pokemon captured by the current user by pokemon id */
    public function isCaptured($pokemonid)
    {
        return Auth::user()->pokemon->find($pokemonid);
    }
}
