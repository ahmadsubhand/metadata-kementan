<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CollectedVariable extends Model
{
    /** @use HasFactory<\Database\Factories\CollectedVariableFactory> */
    use HasFactory;

    protected $fillable = [
        'metadata_statistic_form_id', 
        'variable_number', 
        'variable_name', 
        'variable_concept', 
        'variable_definition', 
        'reference_time'
    ];

    public $timestamps = false;

    public function metadataStatisticForms(): BelongsTo
    {
        return $this->belongsTo(MetadataStatisticForm::class);
    }
}
