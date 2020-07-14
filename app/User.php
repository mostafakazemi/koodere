<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type', 'name', 'email', 'mobile', 'password', 'mobile_verified_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id', 'password', 'remember_token', 'created_at', 'updated_at', 'email_verified_at', 'mobile_verified_at'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function name()
    {
        if (user()->name != '')
            return user()->name;
        return user()->mobile;
    }

    public function activationCodes()
    {
        return $this->hasMany(ActivationCode::class);
    }

    public function userSettings()
    {
        return $this->hasOne(UserSettings::class);
    }

    public function business()
    {
        return $this->hasOne(Business::class);
    }

//    public function categories()
//    {
//        return $this->hasOne(Business::class)->hasMany(Category::class);
//    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }
}
