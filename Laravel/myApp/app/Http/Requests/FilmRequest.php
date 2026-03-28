<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FilmRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'duration' => 'required|integer|min:1',
            'release_date' => 'required|date',
            'poster' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'category_id' => 'required|exists:categories,id',
            'actors' => 'nullable|array',
            'actors.*' => 'nullable|numeric|min:0',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'The film title is required.',
            'title.max' => 'The film title must not exceed 255 characters.',
            'duration.required' => 'The film duration is required.',
            'duration.min' => 'The film duration must be at least 1 minute.',
            'release_date.required' => 'The release date is required.',
            'release_date.date' => 'Please provide a valid date.',
            'category_id.required' => 'Please select a category.',
            'category_id.exists' => 'The selected category is invalid.',
            'poster.image' => 'The poster must be an image file.',
            'poster.mimes' => 'The poster must be a JPEG, PNG, or JPG file.',
            'poster.max' => 'The poster must not exceed 2MB.',
        ];
    }
}