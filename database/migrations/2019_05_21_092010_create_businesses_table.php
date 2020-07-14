<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBusinessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('businesses', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned()->unique();
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('job_id')->unsigned();
            $table->foreign('job_id')->references('id')->on('jobs');
            $table->string('name');
            $table->text('description')->nullable();
            $table->text('address')->nullable();
            $table->string('latitude', 20)->nullable()->default(null);
            $table->string('longitude', 20)->nullable()->default(null);
            $table->boolean('active')->default(true);
            $table->text('logo_url')->nullable();
            $table->dateTime('last_seen')->useCurrent();
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
        Schema::dropIfExists('businesses');
    }
}
