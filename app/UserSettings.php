<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserSettings extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'user_id', 'password_question'
    ];
}
