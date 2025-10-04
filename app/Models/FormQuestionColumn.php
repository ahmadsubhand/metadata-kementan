<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormQuestionColumn extends Model
{
    /** @use HasFactory<\Database\Factories\FormQuestionColumnFactory> */
    use HasFactory;

    protected $fillable = ['form_question_id', 'code', 'label', 'type', 'order'];

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
