<?php


namespace App\Services;

use App\Http\Resources\ApiError;
use App\Repositories\PokemonRepository;
use App\Http\Resources\PokemonDetail;
use App\Http\Resources\Pokemon as PokemonCollection;
use App\Repositories\Interfaces\PokemonRepositoryInterface;

class PokemonService implements Interfaces\PokemonServiceInterface
{
    private $pokemonRepository;

    /** Use object compostion to inject the PokemonRepository class */
    public function __construct(PokemonRepositoryInterface $pokemonRepository)
    {
        $this->pokemonRepository = $pokemonRepository;
    }

    /** return a collection of pokemon, give all the details as well, why not? */
    public function index($name, $description)
    {

        return PokemonDetail::collection($this->pokemonRepository->index($name, $description));
    }

    /** Return a collection of pokemon with little detail. */
    public function allIndex()
    {
        return PokemonCollection::collection($this->pokemonRepository->allIndex());
    }
    /** Show a single pokemon, if not there, return an api error */
    public function show($id)
    {
        $res = $this->pokemonRepository->show($id);
        if ($res)
            return new PokemonDetail($res);
        return ApiError::error(404, "Failed to find the pokemon with id of " . $id . ".");
    }
    /** Search by type, if none, return an api error */
    public function type($type)
    {
        $res = $this->pokemonRepository->type($type);
        if ($res) {
            return PokemonDetail::collection($res);
        }
        return response()->json(["data" => [], "meta" => ["last_page" => 1]]);
    }
    /** Search by ability, if none, return an api error */
    public function ability($ability)
    {
        $res = $this->pokemonRepository->ability($ability);
        if ($res) {
            return PokemonDetail::collection($res);
        }
        return response()->json(["data" => [], "meta" => ["last_page" => 1]]);
    }
    /** Search by egg_group, if none, return an api error */
    public function egg_group($egg_group)
    {
        $res = $this->pokemonRepository->egg_group($egg_group);
        if ($res) {
            return PokemonDetail::collection($res);
        }
        return response()->json(["data" => [], "meta" => ["last_page" => 1]]);
    }
}
