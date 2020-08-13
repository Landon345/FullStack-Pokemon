<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Pokemon;

class ExistingPokemon extends Seeder
{
    /**
     * Run the database seeds.
     * Completely copied from Josh White.
     * @return void
     */
    
    //Globally holds [value1, value2 or null] stripped of leading and trailing characters
    private $value = [];

    //Globally holds [id => name] of currently operated on table / column type
    private $values = [];


    //Strip the leading and trailing characters off of types to be stored in $this->value
    private function cleanValues($column)
    {
        // Break from "[1, 2, ..]" into "[1  ", ... \"" ," n]" & remove unwanted characters
        $this->value = explode(",", $column);
        for($i=0; $i<count($this->value); $i++){
            $this->value[$i] = str_replace(["[","]","\"", " "], "", $this->value[$i]);
        }
    }

    // sets the $this->values array to the values in a column of the CSV file
    private function getValues($column_index)
    {
        $file = fopen('https://bitbucket.org/!api/2.0/snippets/myriadmobile/Rerr8E/96d04ea30f8e177149dd0c1c98271f1843b5f9b7/files/pokedex.csv', 'r');
        //Create a key value array '$values' = ['id' => 'name']
        $i = 0;
        while(! feof($file)) {
            $line = fgetcsv($file);
            $this->cleanValues($line[$column_index]);
            // Add key => value, where the $v from $this->value is not already in the values array
            foreach($this->value as $v){
                if(!in_array($v, $this->values, true))
                    $this->values[$i++] = $v;
            }
        }
        fclose($file);
    }

    // Insert the values = [id => key] into the table
    private function insertValues($table)
    {
        // Start at 1, 0 is = "$table" or column name
        for($i=1; $i<count($this->values); $i++){
            DB::table($table)->insert([
                'id' => $i,
                'name' => $this->values[$i]
            ]);
        }
    }

    // Get and insert the column values into a table
    private function getAndInsert($column, $table)
    {
        $this->getValues($column);
        $this->insertValues($table);
    }

    private function allPokemon()
    {
        $file = fopen('https://bitbucket.org/!api/2.0/snippets/myriadmobile/Rerr8E/96d04ea30f8e177149dd0c1c98271f1843b5f9b7/files/pokedex.csv', 'r');

        //Skip the first row
        fgetcsv($file);
        while(! feof($file)){
            $line = fgetcsv($file);

            // Insert the base pokemon
            $this->insertPokemon($line);

            //retrieve the newly created pokemon to attach related values
            $pokemon = \App\Models\Pokemon::find((int)$line[0]);

            // Clean the types to attach to the new pokemon
            $this->cleanValues($line[2]);
            for($i=0; $i<count($this->value); $i++)
                $pokemon->types()->attach(\App\Models\Type::where('name', (string) $this->value[$i])->get());

            // Clean the abilities to attach to the new pokemon
            $this->cleanValues($line[5]);
            foreach($this->value as $v)
                // attach the abilities to the pokemon by geting the id of the ability with the name specified by $v. 
                $pokemon->abilities()->attach(\App\Models\Ability::where('name', $v)->select('id')->get());

            // Clean the eggGroups and attach to the new pokemon
            $this->cleanValues($line[6]);
            foreach($this->value as $v)
                $pokemon->eggGroups()->attach(\App\Models\EggGroup::where('name', $v)->select('id')->get());
        }
        fclose($file);
    }

    private function insertPokemon($line)
    {
        DB::table('pokemon')->insert([
            'id' => (int) $line[0],
            'name' => (string) $line[1],
            'height' => (float) $line[3],
            'weight' => (float) $line[4],
            'stats' => (string) $line[7],
            'genus' => (string) $line[8],
            'description' => (string) $line[9],
        ]);
    }

    public function run()
    {
        // Gets and inserts values of columns with many values to allow for relationships
        $this->getAndInsert(2, 'types');
        $this->getAndInsert(5, 'abilities');
        $this->getAndInsert(6, 'egg_groups');
        $this->allPokemon();
    }
}
