<?php


use App\Business;
use App\Events\UserActivation;
use App\Job;
use App\User;
use App\Ware;
use Illuminate\Support\Facades\Route;


//Route::get('/test', function () {
//    if (auth()->check())
//        return user()->with(['business' => function ($query) {
//            $query->with(['categories' => function ($query) {
//                $query->orderby('pinned', 'desc')->orderby('priority')->latest();
//            }]);
//        }])->find(user()->id);
//
//    return 0;
//});

Route::get('/check-user', function () {
    if (auth()->user())
        return user()->with(['business' => function ($query) {
            $query->with(['categories' => function ($query) {
                $query->orderby('pinned', 'desc')->orderby('priority')->latest()->with(['wares' => function ($query) {
                    $query->orderby('pinned', 'desc')->orderby('priority')->latest();
                }]);
            }]);
        }])->find(user()->id);
    return 0;
});

Route::get('/refresh-csrf', function () {
    return csrf_token();
});

Route::get('/fetch-fresh', function () {
    return Ware::whereShow(1)->whereHas('category', function ($query) {
        $query->whereHas('business', function ($query) {
            $query->whereActive(1);
        });
    })->with(['category.business'])->latest()->paginate(config(['app.paginate.fresh']));
});

Route::get('/fetch-stores', function () {
    return Business::whereActive(1)->with(['job'])->latest()->paginate(config(['app.paginate.stores']));
});

Route::get('/fetch-locations', function () {
    return Business::whereActive(1)->with(['job'])->get();
});

Route::namespace('Auth')->group(function () {
    Route::get('/logout', 'LoginController@logout')->name('logout');
    Route::post('/login', 'LoginController@login');
    Route::post('/login/checkActivationCode', 'LoginController@checkActivationCode');
    Route::post('/login/checkPassword', 'LoginController@checkPassword');
    Route::post('/login/sendActivationCode', 'LoginController@sendActivationCode');
});

Route::middleware('auth')->group(function () {
    Route::get('password', 'Controller@home');
    Route::namespace('Auth')->group(function () {
        Route::post('password/reset', 'ResetPasswordController@reset')->name('password.update');
    });

    Route::get('/profile', 'Controller@home');
    Route::namespace('User')->group(function () {
        Route::post('/profile', 'UserController@update')->name('profile.update');
    });

    Route::post('/add-business', 'BusinessController@store')->name('business.store');


    Route::middleware('business')->group(function () {
//        Route::get('/business/panel', 'Controller@home');
//        Route::get('/business/settings', 'Controller@home');
//        Route::get('/business/add-ware', 'Controller@home');

        Route::post('/business/settings', 'BusinessController@update')->name('business.update');
        Route::post('/business/active', 'BusinessController@active');

        Route::resources([
            '/business/category' => 'CategoryController',
            '/business/ware' => 'WareController',
        ]);
        Route::post('/business/ware/show', 'WareController@changeWareShow');
        Route::post('/business/ware/pin', 'WareController@changeWarePin');
        Route::post('/business/ware/priority', 'WareController@changePriority')->name('ware.changePriority');

        Route::post('/business/category/pin', 'CategoryController@changeCategoryPin');
        Route::post('/business/category/priority', 'CategoryController@changePriority')->name('category.changePriority');
    });

});

Route::get('/fetch-store/{business}', 'BusinessController@show');

Route::get('{any}', function () {
    return view('Home.index');
})->where('any', '.*');

Route::post('get-all-jobs', function () {
    return Job::orderByRaw('name')->pluck('name');
});
