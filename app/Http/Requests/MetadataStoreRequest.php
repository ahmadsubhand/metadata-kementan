<?php

namespace App\Http\Requests;

use App\Enums\BooleanType;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class MetadataStoreRequest extends FormRequest
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
            'activity_title' => 'required|string|max:255',
            'activity_year' => 'required|integer|min:1900|max:' . date('Y'),
            'data_collection_approach_id' => 'required|exists:data_collection_approaches,id',
            'activity_sector_id' => 'required|exists:activity_sectors,id',
            'statistical_activity_type_id' => 'required|exists:statistical_activity_types,id',
            'statistical_activity_recommendation' => 'required|in:' . implode(',', array_column(BooleanType::cases(), 'value')),
            'recommendation_identity' => 'nullable|string|max:255',
        ];
    }

    public function messages(): array
    {
        return [
            'activity_year.max' => 'Tahun tidak boleh lebih dari tahun sekarang.',
        ];
    }
}
