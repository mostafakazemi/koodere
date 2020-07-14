<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('state', 20)->nullable();
            $table->timestamps();
        });

        Schema::create('ware_cart', function (Blueprint $table) {
            $table->bigInteger('cart_id')->unsigned();
            $table->foreign('cart_id')->references('id')->on('carts')->onDelete('cascade');

            $table->integer('ware_id')->unsigned();
            $table->foreign('ware_id')->references('id')->on('wares')->onDelete('cascade');

            $table->primary(['ware_id', 'cart_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carts');
    }
}
