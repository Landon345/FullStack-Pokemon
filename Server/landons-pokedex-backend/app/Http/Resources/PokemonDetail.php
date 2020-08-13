<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PokemonDetail extends JsonResource
{
    /**
     *  Filter out the names of the models
     *
     * @param array objects [{ name => "", id => "" }] $arr
     * @return array ["name", "name"]
     */

    private function filter_names($arr)
    {
        $filtered = array();
        foreach($arr as $a)
            $filtered[] = $a->name;
        return $filtered;
    }

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            "name"=> $this->name,
            "image" => "https://intern-pokedex.myriadapps.com/images/pokemon/" . $this->id . ".png",
            "types"=> $this->filter_names($this->types),
            "height"=>$this->height,
            "weight"=> $this->weight,
            "abilities"=> $this->filter_names($this->abilities),
            "egg_groups"=> $this->filter_names($this->eggGroups),
            "stats"=> json_decode($this->stats),
            "genus"=> $this->genus,
            "description"=> $this->description,
        ];
    }
    /** Return with success = true so frontend can be sure that it is correct */
    public function with($request){
        return [
            'success' => true
        ];
    }
}
