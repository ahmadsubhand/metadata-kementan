<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiTokenStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'application_name' => 'required|string|max:255',
            'application_description' => 'required|string'
        ];
    }

    public function messages(): array
    {
        return [
            'application_name.max' => 'Nama aplikasi tidak boleh lebih dari 255 karakter',
        ];
    }
}
