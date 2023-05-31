<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TesztekController extends Controller
{
    public function index()
    {
        return DB::table('teszt as t')->join('kategoria as k', 'k.id', 't.kategoriaId')->select('*')->get();
    }
    public function tesztekByKategoria($id) {

        return DB::table('teszt as t')->join('kategoria as k', 'k.id', 't.kategoriaId')->select('*')->where('kategoriaId', $id)->get();
    }
}
