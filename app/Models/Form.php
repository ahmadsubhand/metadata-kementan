<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    /** @use HasFactory<\Database\Factories\FormFactory> */
    use HasFactory;

    protected $fillable = ['user_id', 'name', 'code'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function formSections()
    {
        return $this->hasMany(FormSection::class);
    }

    public function formResponses()
    {
        return $this->hasMany(FormResponse::class);
    }
}
