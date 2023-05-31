<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Teszt extends Model
{
    protected $table = 'teszt';
    protected $fillable = ['kerdes', 'v1', 'v2', 'v3', 'v4', 'helyes', 'kategoriaId'];
}
