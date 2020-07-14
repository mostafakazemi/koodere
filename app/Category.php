<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name', 'business_id', 'priority', 'pinned'
    ];

    public function wares()
    {
        return $this->hasMany(Ware::class);
    }

    public function business()
    {
        return $this->belongsTo(Business::class);
    }
}
