<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class imageCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'url' => 'required',
            'description' => 'required|min:1',
            'category' => 'required|min:1',
            'title' => 'required|min:1'
        ];
    }
}
