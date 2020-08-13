<?php


namespace App\Repositories\Interfaces;

/** Interface for the CaptureRepository 
 * Need index, store, release, and isCaptured functions.
 */
interface CaptureRepositoryInterface
{
    /** Grab all of the current user's pokemon. The user is known by the api_key passed as the authorization */
    public function index();
    /** Store a captured pokemon in the database related to the current user. */
    public function store($id);
    /** Release a captured pokemon related to the current user */
    public function release($pokemonid);
    /** find a pokemon captured by the current user by pokemon id */
    public function isCaptured($pokemonid);
}
