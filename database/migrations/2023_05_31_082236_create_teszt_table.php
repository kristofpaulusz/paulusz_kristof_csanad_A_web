<?php

use App\Models\Teszt;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teszt', function (Blueprint $table) {
            $table->id();
            $table->string('kerdes');
            $table->string('v1');
            $table->string('v2');
            $table->string('v3');
            $table->string('v4');
            $table->string('helyes')->default('v1');
            $table->foreignId('kategoriaId')->references('id')->on('kategoria');
            $table->timestamps();
        });
        Teszt::create(['kerdes' => 'Mi a kedvenc színem?', 'v1' => 'Zöld', 'v2' => "Kék", 'v3' => "Barna", 'v4' => "Piros", 'kategoriaId' => 1]);
        Teszt::create(['kerdes' => 'Mennyi 2 * 2', 'v1' => '4', 'v2' => "5", 'v3' => "6", 'v4' => "11", 'kategoriaId' => 2]);

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teszt');
    }
};
