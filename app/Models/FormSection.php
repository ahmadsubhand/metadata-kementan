<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormSection extends Model
{
    /** @use HasFactory<\Database\Factories\FormSectionFactory> */
    use HasFactory;

    protected $fillable = ['form_id', 'code', 'label', 'order'];

    public $timestamps = false;

    public function form()
    {
        return $this->belongsTo(Form::class);
    }

    public function formGroups()
    {
        return $this->hasMany(FormGroup::class);
    }

    public function formQuestions()
    {
        return $this->hasMany(FormQuestion::class);
    }
}
