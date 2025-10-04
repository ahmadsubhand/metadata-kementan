<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormGroup extends Model
{
    /** @use HasFactory<\Database\Factories\FormGroupFactory> */
    use HasFactory;

    protected $fillable = ['form_section_id', 'code', 'label', 'order'];

    public $timestamps = false;

    public function formSection()
    {
        return $this->belongsTo(FormSection::class);
    }

    public function formQuestions()
    {
        return $this->hasMany(FormQuestion::class);
    }
}
