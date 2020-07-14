<?php

namespace App\Http\Requests;

use App\Job;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BusinessStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $jobs = Job::pluck('name');
        return [
            'job' => [
                'required',
                Rule::in($jobs),
            ],
            'name' => 'required',
            'latitude' => 'required|regex:/^[0-9]{2}[.]+[0-9]{1,17}$/',
            'longitude' => 'required|regex:/^[0-9]{2}[.]+[0-9]{1,17}$/',
        ];
    }
}
