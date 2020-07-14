<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    protected $fillable = [
        'user_id', 'job_id', 'name','description', 'address', 'latitude', 'longitude', 'active', 'logo_url', 'last_seen'
    ];

    protected $hidden = [
        'user_id', 'job_id', 'last_seen', 'created_at', 'updated_at',
    ];

    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public function wares()
    {
        return $this->hasManyThrough(Ware::class, Category::class);
    }

}
