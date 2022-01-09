<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\produto;
use Illuminate\Auth\Access\Response;

class produtos extends Controller
{
    public function list()
    {
        $produtos = produto::all();
        return Response($produtos, 200)
            ->header('Content-Type', 'application/json');
    }
    public function get($id)
    {
        return produto::findOrFail($id);
    }
    public function add(Request $data)
    {
        $produto = produto::create([
            'nome' => $data->nome,
            'categoria' => $data->categoria,
            'preco' => $data->preco 
        ]);
        return Response($produto, 200)
            ->header('Content-Type', 'application/json');
    }
    public function update($id, Request $data)
    {
        $produto = produto::find($id);
        $produto->nome =  $data->nome;
        $produto->categoria = $data->categoria;
        $produto->preco = $data->preco;
        $produto->save();
        
        return Response($produto, 200)
            ->header('Content-Type', 'application/json');
    }
    public function delete($id)
    {
        $produto = produto::find($id);
        $produto->delete();

        return Response($produto, 200)
            ->header('Content-Type', 'application/json');
    }
}
