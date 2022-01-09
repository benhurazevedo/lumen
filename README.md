# Lumen PHP Framework

[![Build Status](https://travis-ci.org/laravel/lumen-framework.svg)](https://travis-ci.org/laravel/lumen-framework)
[![Total Downloads](https://img.shields.io/packagist/dt/laravel/framework)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Stable Version](https://img.shields.io/packagist/v/laravel/framework)](https://packagist.org/packages/laravel/lumen-framework)
[![License](https://img.shields.io/packagist/l/laravel/framework)](https://packagist.org/packages/laravel/lumen-framework)

Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Lumen attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as routing, database abstraction, queueing, and caching.

## Official Documentation

Documentation for the framework can be found on the [Lumen website](https://lumen.laravel.com/docs).

## Contributing

Thank you for considering contributing to Lumen! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Lumen, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Lumen framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Instructions

1 - dar o comando no composer:
	php composer.phar create-project laravel/lumen nome-projeto

2 - dentro da pasta do projeto dar o comando
	php composer.phar require flipbox/lumen-generator

3 - depois vá em bootstrap/app.php e coloque a seguinte linha apos os singletons:
	#lumen generator
	$app->register(Flipbox\LumenGenerator\LumenGeneratorServiceProvider::class);

	#eloquent
	$app->withEloquent();

4 - criar o model
	php artisan make:model nome-model 

5 - crie o arquivo do banco de dados do sqlite 
	touch \database\database.sqlite

6- vá em .env e altere os seguintes campos:
	DB_CONNECTION=sqlite 
	//DB_HOST=127.0.0.1 (apagar os comentários)
	//DB_PORT=3306
	//DB_DATABASE=lumen
	//DB_USERNAME=homestead
	//DB_PASSWORD=secret

7 - cria a migration:
	php artisan make:migration nome-migration

8 - edita a migration: (exemplo)
	Schema::create('Produtos', function (Blueprint $table){
            $table->increments('id');
            $table->String('nome');
            $table->String('categoria');
            $table->float('preco');
        });

9 - edita o model: (exemplo)
	protected $table = 'Produtos';
    public $timestamps = false;
    protected $fillable = [
        'nome',
        'categoria',
        'preco'
    ];

10 - edita database/DatabaseSeeder:
	public function run()
	{
		$faker = Faker\Factory::create();
		for($i = 0; $i < 10; $i++)
		{
			App\Clientes::create([
				'nome' => $faker->name,
				'categoria' => $faker->name,
				'preco' => $faker->numberBetween(1, 400);
			]);
			echo "Registro (" . $i . ") cadastrado.";
		}
	}

11 - aplica a migration 
	php artisan migrate

12 - aplica o seed 
	php artisan db:seed 

13 - cria o controller
	php artisan make:controller nome-controller

14 - cria a rota

15 - preenche o controller

16 - executa na raiz do site o comando 
	php -S localhost:3000

17 - testa com o postman 
	http://localhost:3000/public/controller
