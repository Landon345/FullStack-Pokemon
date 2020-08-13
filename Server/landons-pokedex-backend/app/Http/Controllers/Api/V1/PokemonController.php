<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\PokemonService;

use App\Services\Interfaces\PokemonServiceInterface;

class PokemonController extends Controller
{
    private $pokemonService;

    /** Use object composition to inject a Pokemon Service class. */
    public function __construct(PokemonServiceInterface $pokemonService)
    {
        $this->pokemonService = $pokemonService;
    }

    /** check if we have a name and/or description to search for. Then, defer to the pokemonService index. */
    public function index(Request $request)
    {
        $name = "";
        $description = "";

        if ($request->has('name')) {
            $name = $request->input('name');
        }
        if ($request->has('description')) {
            $description = $request->input('description');
        }

        return $this->pokemonService->index($name, $description);
    }

    /** defer to pokemonService show */
    public function show($id)
    {
        return $this->pokemonService->show($id);
    }

    /** defer to pokemonService allIndex */
    public function allIndex()
    {
        return $this->pokemonService->allIndex();
    }

    /** defer to pokemonService type */
    public function type(Request $request)
    {
        $type = "";
        if ($request->has('type')) {
            $type = $request->input('type');
        }
        return $this->pokemonService->type($type);
    }
    /** defer to pokemonService ability */
    public function ability(Request $request)
    {
        $ability = "";
        if ($request->has('ability')) {
            $ability = $request->input('ability');
        }
        return $this->pokemonService->ability($ability);
    }
    /** defer to pokemonService egg_group */
    public function egg_group(Request $request)
    {
        $egg_group = "";
        if ($request->has('egg_group')) {
            $egg_group = $request->input('egg_group');
        }
        return $this->pokemonService->egg_group($egg_group);
    }
}
