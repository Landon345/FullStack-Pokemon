<?php


namespace App\Repositories\Interfaces;

/** Interface for the PokemonRepository 
 * Need index, allIndex, show, type, ability, and egg_group functions.
 */
interface PokemonRepositoryInterface
{
    /** Able to search based on name and description. Makes a paginated list of 15. */
    public function index($name, $description);
    /** Returns every pokemon unpaginated */
    public function allIndex();
    /** Shows a single pokemon based on the id given */
    public function show($id);
    /** Able to search by type. But only a single type at a time. */
    public function type($type);
    /** Able to search by ability. But only a single ability at a time. */
    public function ability($ability);
    /** Able to search by egg group. But only a single egg group at a time. */
    public function egg_group($egg_group);
}
