<?php

namespace App\Http\Controllers;

use App\Business;
use App\Http\Requests\BusinessStoreRequest;
use App\Job;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\View\View;

class BusinessController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Factory|View
     */
    public function index()
    {
        return view('Home.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Factory|View
     */
    public function create()
    {
        return view('Home.index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param BusinessStoreRequest $request
     * @return void
     */
    public function store(BusinessStoreRequest $request)
    {
        if ($request->validated()) {
            $job = Job::whereName($request->job)->first();
            $data = request()->except(['job']);
            $data['job_id'] = $job->id;

            if ($request->logo_url != null) {
                $random_name = Str::random(config('app.image.random_length')) . config('app.image.extensions');
                $this->save_base64($request->logo_url, config('app.image.dir.logo'), $random_name, config('app.image.size.logo'));
                $data['logo_url'] = config('app.image.dir.logo') . $random_name;
            }

            $response['business'] = user()->business()->create($data);
            $response['message'] = "Business added";
            user()->update(['type' => 'business']);
            return $response;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return string
     */
    public function show($id)
    {
        $business = Business::find($id);
        if (!$business || !$business->active)
            return 'Store not found';

        $response['business'] = Business::with(['categories' => function ($query) {
            $query->orderby('pinned', 'desc')->orderby('priority')->latest()->with(['wares' => function ($query) {
                $query->whereShow(1)->orderby('pinned', 'desc')->orderby('priority')->latest();
            }]);
        }])->find($id);
        $response['message'] = 'Store found';

        return $response;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return Factory|View
     */
    public function edit()
    {
        return view('Home.index');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'latitude' => 'required|regex:/^[0-9]{2}[.]+[0-9]{1,17}$/',
            'longitude' => 'required|regex:/^[0-9]{2}[.]+[0-9]{1,17}$/',
        ]);

        if ($validator->fails())
            return 'Error Validate';

        $data = $request->all();

//        return $request->logo_url;

        if ($request->logo_url != business()->logo_url) {
            if (file_exists(business()->logo_url))
                unlink(business()->logo_url);
            if ($request->logo_url != null) {
                $random_name = Str::random(config('app.image.random_length')) . config('app.image.extensions');
                $this->save_base64($request->logo_url, config('app.image.dir.logo'), $random_name, config('app.image.size.logo'));
                $data['logo_url'] = config('app.image.dir.logo') . $random_name;
            }
        } else
            $data['logo_url'] = business()->logo_url;

        business()->update($data);
        $response['business'] =  business();
        $response['message'] = "Business updated";
        return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Business $business
     * @return Factory|View
     */
    public function destroy(Business $business)
    {
        return view('Home.index');
    }

    public function active(Request $request)
    {
        try {
            business()->update([
                'active' => $request->state,
            ]);
            return 'Business activation updated';
        } catch (\Exception $e) {
            return 'Error on update';
        }
    }

}
