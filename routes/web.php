<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/produtos', 'produtos@list');

$router->get('/produtos/{id}', 'produtos@get');

$router->post('/produtos', 'produtos@add');

$router->put('/produtos/{id}', 'produtos@update');

$router->delete('/produtos/{id}', 'produtos@delete');
