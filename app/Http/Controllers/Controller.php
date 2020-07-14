<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Image;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function home()
    {
        return view('Home.index');
    }

    public function save_base64($base64, $dir, $name, $image_size = null, $thumbnail_size = null)
    {
        if ($base64 == null)
            return;

        if (!is_dir($dir))
            mkdir($dir);

        while (file_exists($dir . $name))
            $name = str_replace('.', '_2.', $name);


        if ($image_size)
            Image::make(file_get_contents($base64))->resize($image_size, $image_size)->save($dir . $name);
        else
            Image::make(file_get_contents($base64))->save($dir . $name);

        if ($thumbnail_size) {
            if (!is_dir($dir . 'thumbnails/'))
                mkdir($dir . 'thumbnails/');
            Image::make($dir . $name)->resize($thumbnail_size, $thumbnail_size)->save($dir . 'thumbnails/' . 'thumbnail_' . $name);
        }

    }
}
