<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWaresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wares', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('category_id')->unsigned();
            $table->foreign('category_id')->references('id')->on('categories');
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('code')->nullable();
            $table->string('price');
            $table->boolean('show')->default(1);
            $table->text('image_url')->nullable();
            $table->tinyInteger('priority')->unsigned()->default(config('app.priority'));
            $table->boolean('pinned')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wares');
    }
}
