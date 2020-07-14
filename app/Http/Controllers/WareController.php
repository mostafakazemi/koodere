<?php

namespace App\Http\Controllers;

use App\Category;
use App\Ware;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Alert;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class WareController extends Controller
{
    private $image_url = null;
//    private $categoryName = config('app.uncategorized');

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
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $categoryName = config('app.uncategorized');
        if ($request->category != null)
            $categoryName = $request->category;

        $categories = business()->categories()->get();
        $codes = [];

        foreach ($categories as $cat)
            $codes = array_merge($codes, $cat->wares()->pluck('code')->toArray());

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'code' => [
                'nullable',
                Rule::notIn($codes),
            ],
            'price' => 'required|numeric|min:500|max:999999999',
        ]);

        if ($validator->fails())
            return "Error in Validation";

        if ($request->image_url != null) {
            $random_name = Str::random(config('app.image.random_length')) . config('app.image.extensions');
            $this->save_base64($request->image_url, config('app.image.dir.ware'), $random_name, null, config('app.image.size.thumbnail'));
            $this->image_url = config('app.image.dir.ware') . config('app.image.dir.thumbnail') . $random_name;
        }

        if (!$category = business()->categories()->whereName($categoryName)->first()) {
            $category = Category::find(business()->categories()->create(['name' => $categoryName])->id);
        }

        $response['ware'] = Ware::find(Ware::create([
            'category_id' => $category->id,
            'name' => $request->name,
            'description' => $request->description,
            'code' => $request->code,
            'price' => $request->price,
            'image_url' => $this->image_url,
        ])->id);

        $response['message'] = 'New ware stored';
        $response['category'] = $category;

        return $response;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Ware $ware
     * @return string
     */
    public function update(Request $request, Ware $ware)
    {
        $categoryName = config('app.uncategorized');
        if ($request->cmp['category'] != null)
            $categoryName = $request->cmp['category'];

        $categories = business()->categories()->get();
        $codes = [];

        foreach ($categories as $cat)
            $codes = array_merge($codes, $cat->wares()->where('code', '!=', $ware->code)->pluck('code')->toArray());

        $validator = Validator::make($request->cmp, [
            'name' => 'required',
            'code' => [
                'nullable',
                Rule::notIn($codes),
            ],
            'price' => 'required|numeric|min:500|max:999999999',
        ]);

        if ($validator->fails()) {
            return "Error in Validation";
        }

        if ($request->cmp['image_url'] != $ware->image_url) {
            if (file_exists($ware->image_url))
                unlink($ware->image_url);
            $thumbnail_url = str_replace(config('app.image.dir.thumbnail'), '', $ware->image_url);
            if (file_exists($thumbnail_url))
                unlink($thumbnail_url);
            if ($request->cmp['image_url'] != null) {
                $random_name = Str::random(config('app.image.random_length')) . config('app.image.extensions');
                $this->save_base64($request->cmp['image_url'], config('app.image.dir.ware'), $random_name, null, config('app.image.size.thumbnail'));
                $this->image_url = config('app.image.dir.ware') . config('app.image.dir.thumbnail') . $random_name;
            }
        } else
            $this->image_url = $ware->image_url;

        if (!$category = business()->categories()->whereName($categoryName)->first()) {
            $category = Category::find(business()->categories()->create(['name' => $categoryName])->id);
        }

        $priority = $ware->priority;
        if ($ware->category_id != $category->id)
            $priority = config('app.priority');

        business()->categories()->find($ware->category_id)->wares()->whereId($ware->id)->update([
            'category_id' => $category->id,
            'name' => $request->cmp['name'],
            'description' => $request->cmp['description'],
            'code' => $request->cmp['code'],
            'price' => $request->cmp['price'],
            'image_url' => $this->image_url,
            'priority' => $priority,
        ]);

        $response['message'] = 'Ware updated';

        $response['category'] = business()->categories()->whereId($category->id)->with(['wares' => function ($query) {
            $query->orderByRaw('pinned DESC', 'priority')->latest();
        }])->first();

        return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Ware $ware
     * @return string
     */
    public function destroy(Ware $ware)
    {
        business()->categories()->find($ware->category_id)->wares()->first()->destroy($ware->id);
        return "Ware deleted";
    }


    public function changeWareShow(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ware_id' => 'required',
            'category_id' => 'required',
            'show' => [
                'required',
                Rule::in([true, false]),
            ],
        ]);

        if ($validator->fails())
            return 'Error Validate';


        business()->categories()->find($request->category_id)->wares()->whereId($request->ware_id)->update([
            'show' => $request->show,
        ]);
    }

    public function changeWarePin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ware_id' => 'required',
            'category_id' => 'required',
            'pinned' => [
                'required',
                Rule::in([true, false]),
            ],
        ]);

        if ($validator->fails())
            return 'Error Validate';


        business()->categories()->find($request->category_id)->wares()->whereId($request->ware_id)->update([
            'pinned' => $request->pinned,
        ]);
    }

    public function changePriority(Request $request)
    {
        foreach ($request->wares['id'] as $index => $id) {
            business()->categories()->find($request->category_id)->wares()->find($id)->update([
                'priority' => $request->wares['priority'][$index],
                'pinned' => $request->wares['pinned'][$index],
            ]);
        }
    }

}
