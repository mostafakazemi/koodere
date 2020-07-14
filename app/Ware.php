<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ware extends Model
{
    protected $fillable = [
        'category_id', 'name','description' , 'code', 'price', 'show', 'image_url', 'priority', 'pinned'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function business()
    {
        return $this->category->business;
    }

    public function carts()
    {
        return $this->belongsToMany(Cart::class);
    }
}
