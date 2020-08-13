<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePokemonEggGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pokemon_egg_groups', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pokemon_id')->references('id')->on('pokemon')->onDelete('cascade');
            $table->foreignId('egg_groups_id')->references('id')->on('egg_groups')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pokemon_egg_groups');
    }
}
