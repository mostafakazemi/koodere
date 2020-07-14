<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class ActivationCode extends Model
{
    protected $fillable = ['user_id', 'code', 'used', 'expire'];

    public function scopeCreateCode($query,$user){
        return $query->create([
            'user_id' => $user->id,
            'code' => rand(1000,9999),
            'expire' => Carbon::now()->addMinutes(5),
        ]);
    }
}

