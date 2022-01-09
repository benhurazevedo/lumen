<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Factory;
use App\Models\produto as produto;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
	{
		$faker = Factory::create();
		for($i = 0; $i < 10; $i++)
		{
			produto::create([
				'nome' => $faker->name,
				'categoria' => $faker->name,
				'preco' => $faker->numberBetween(1, 400)
			]);
			echo "Registro (" . $i . ") cadastrado.";
		}
	}
}
