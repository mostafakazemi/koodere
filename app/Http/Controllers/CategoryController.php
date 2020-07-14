<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class CategoryController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function store(Request $request)
    {
        $categories = business()->categories()->pluck('name');
        $validator = Validator::make($request->all(), [
            'name' => [
                'required',
                Rule::notIn($categories),
            ],
        ]);

        if ($validator->fails())
            return "Error";

        business()->categories()->increment('priority');
        $response['category'] = Category::find(business()->categories()->create($request->all())->id);
        $response['message'] = "New category stored";
        return $response;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Category $category
     * @return string
     */
    public function update(Request $request, Category $category)
    {
        $categories = business()->categories()->pluck('name');
        $validator = Validator::make($request->all(), [
            'name' => [
                'required',
                Rule::notIn($categories),
            ],
        ]);

        if ($validator->fails()) {
            return "Error";
        }

        try {
            business()->categories()->whereId($category->id)->update(['name' => $request->name]);
            return "Success";
        } catch (\Exception $e) {
            return "Error";
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param Category $category
     * @return string
     */
    public function destroy(Request $request, Category $category)
    {
        $validator = Validator::make($request->all(), [
            'destination_category' => 'required',
        ]);

        if ($validator->fails()) {
            return "Error";
        }


        $destination_name = $request->destination_category;
        $destination_id = business()->categories()->whereName($destination_name)->pluck('id')->first();
        if ($destination_name == config('app.uncategorized')) {
            if (!$destination_id) {
                try {
                    business()->categories()->whereId($category->id)->update(['name' => config('app.uncategorized')]);
                    return "Change category's name to uncategorized";
                } catch (\Exception $e) {
                    return "Error on Changing category's name to uncategorized";
                }
            }
        }
        try {
            business()->categories()->whereId($category->id)->first()->wares()->update(['category_id' => $destination_id]);
            business()->categories()->whereId($category->id)->delete();
            $response['message'] = "Move to new destination category";

            $response['category'] = business()->categories()->whereName($destination_name)->with(['wares' => function ($query) {
                $query->orderByRaw('pinned DESC', 'priority')->latest();
            }])->first();

            return $response;
        } catch (\Exception $e) {
            return "Error on moving to new destination category";
        }
    }

    public function changeCategoryPin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'pinned' => [
                'required',
                Rule::in([true, false]),
            ],
        ]);

        if ($validator->fails())
            return 'Error Validate';


        business()->categories()->find($request->id)->update(['pinned' => $request->pinned]);
    }

    public function changePriority(Request $request)
    {
        foreach ($request->categories['id'] as $index => $id) {
            business()->categories()->find($id)->update([
                'priority' => $request->categories['priority'][$index],
                'pinned' => $request->categories['pinned'][$index],
            ]);
        }
    }

}
