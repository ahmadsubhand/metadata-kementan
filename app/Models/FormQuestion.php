<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormQuestion extends Model
{
    /** @use HasFactory<\Database\Factories\FormQuestionFactory> */
    use HasFactory;

    protected $fillable = ['form_group_id', 'form_section_id', 'code', 'label', 'type', 'order'];

    public $timestamps = false;

    public function formGroup()
    {
        return $this->belongsTo(FormGroup::class);
    }

    public function formSection()
    {
        return $this->belongsTo(FormSection::class);
    }

    public function formQuestionColumns()
    {
        return $this->hasMany(FormQuestionColumn::class);
    }

    public function formQuestionOptions()
    {
        return $this->hasMany(FormQuestionOption::class);
    }

    public function formResponseAnswers()
    {
        return $this->hasMany(FormResponseAnswer::class);
    }
}
