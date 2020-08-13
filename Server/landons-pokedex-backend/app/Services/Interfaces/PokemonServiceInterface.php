<?php


namespace App\Services\Interfaces;

/** Interface for the PokemonService
 * Need index, allIndex, show, type, ability, and egg_group functions.
 */
interface PokemonServiceInterface
{
    /** return a collection of pokemon, give all the details as well, why not? */
    public function index($name, $description);
    /** Return a collection of pokemon with little detail. */
    public function allIndex();
    /** Show a single pokemon, if not there, return an api error */
    public function show($id);
    /** Search by type, if none, return an api error */
    public function type($type);
    /** Search by ability, if none, return an api error */
    public function ability($ability);
    /** Search by egg_group, if none, return an api error */
    public function egg_group($egg_group);
}
