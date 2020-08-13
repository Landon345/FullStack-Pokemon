<?php

namespace App\Repositories;

use App\Models\Ability;
use App\Models\EggGroup;
use App\Models\Pokemon;
use App\Models\Type;


class PokemonRepository implements Interfaces\PokemonRepositoryInterface
{
    private $amount = 20;

    /** Able to search based on name and description. Makes a paginated list of 15. */
    public function index($name, $description)
    {
        return Pokemon::where('name', 'like', '%' . $name . '%')
            ->where('description', 'like', '%' . $description . '%')->paginate($this->amount);
    }

    /** Returns every pokemon unpaginated */
    public function allIndex()
    {
        return Pokemon::all();
    }

    /** Shows a single pokemon based on the id given */
    public function show($id)
    {
        return Pokemon::find($id);
    }

    /** Able to search by type. But only a single type at a time. */
    public function type($type)
    {
        if ($type == null) {
            return Pokemon::paginate($this->amount);
        }

        $res = Type::where('name', 'like', '%' . $type . '%')->get()->all();

        if (count($res) != 0) {
            return $res[0]->pokemon()->paginate($this->amount);
        }

        return false;
    }

    /** Able to search by ability. But only a single ability at a time. */
    public function ability($ability)
    {
        if ($ability == null) {
            return Pokemon::paginate($this->amount);
        }

        $res = Ability::where('name', 'like', '%' . $ability . '%')->get()->all();

        if (count($res) != 0) {
            return $res[0]->pokemon()->paginate($this->amount);
        }

        return false;
    }

    /** Able to search by egg group. But only a single egg group at a time. */
    public function egg_group($egg_group)
    {
        if ($egg_group == null) {
            return Pokemon::paginate($this->amount);
        }

        $res = EggGroup::where('name', 'like', '%' . $egg_group . '%')->get()->all();

        if (count($res) != 0) {
            return $res[0]->pokemon()->paginate($this->amount);
        }

        return false;
    }
}
