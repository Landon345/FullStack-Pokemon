<?php


namespace App\Services\Interfaces;

/** Interface for the CaptureService 
 * Need index, store, release, and isCaptured functions.
 */
interface CaptureServiceInterface
{
    /** Returns a pokemon collection */
    public function index();
    /** returns a pokemon that user tried to capture */
    public function store($id);
    /** returns the remaining pokemon, not including the one just tried to release. */
    public function release($pokemonid);
    /** returns the pokemon if it is captured. Otherwise returns an api error that says that that pokemon was not captured. */
    public function isCaptured($pokemonid);
}
