<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormQuestionOption extends Model
{
    /** @use HasFactory<\Database\Factories\FormQuestionOptionFactory> */
    use HasFactory;

    protected $fillable = ['form_question_id', 'code', 'label', 'order'];

    public $timestamps = false;

    public function formQuestion()
    {
        return $this->belongsTo(FormQuestion::class);
    }

    public function formResponseAnswers()
    {
        return $this->hasMany(FormResponseAnswer::class);
    }
}
