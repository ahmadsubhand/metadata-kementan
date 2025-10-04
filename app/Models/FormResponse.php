<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormResponse extends Model
{
    /** @use HasFactory<\Database\Factories\FormResponseFactory> */
    use HasFactory;

    protected $fillable = ['user_id', 'form_id'];

    public function form()
    {
        return $this->belongsTo(Form::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function formResponseAnswers()
    {
        return $this->hasMany(FormResponseAnswer::class);
    }
}
