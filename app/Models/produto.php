<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class produto extends Model
{
    protected $table = 'produtos';
    public $timestamps = false;
    protected $fillable = [
        'nome',
        'categoria',
        'preco'
    ];
}
