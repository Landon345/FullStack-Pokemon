<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Captured extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $types = array();
        foreach ($this->types as $type)
            $types[] = $type->name;

        return [
            'id' => $this->id,
            "name" => $this->name,
            "image" => "https://intern-pokedex.myriadapps.com/images/pokemon/" . $this->id . ".png",
            "types" => $types,
            "created_at" => $this->pivot->created_at
        ];
    }
    /** Return with success = true so frontend can be sure that it is correct */
    public function with($request)
    {
        return [
            'success' => true
        ];
    }
}
