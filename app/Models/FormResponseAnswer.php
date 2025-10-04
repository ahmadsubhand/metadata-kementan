<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormResponseAnswer extends Model
{
    /** @use HasFactory<\Database\Factories\FormResponseAnswerFactory> */
    use HasFactory;

    protected $fillable = [
        'form_response_id', 'form_question_id', 'form_column_id', 'form_question_option_id',
        'row_number', 'value_string', 'value_text', 'value_float', 'value_int', 'value_date'
    ];

    public $timestamps = false;

    public function formQuestionColumn()
    {
        return $this->belongsTo(FormQuestionColumn::class);
    }

    public function formQuestion()
    {
        return $this->belongsTo(FormQuestion::class);
    }

    public function formQuestionOption()
    {
        return $this->belongsTo(FormQuestionOption::class);
    }

    public function formResponse()
    {
        return $this->belongsTo(FormResponse::class);
    }
}
