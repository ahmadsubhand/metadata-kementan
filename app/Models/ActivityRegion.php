<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ActivityRegion extends Model
{
    /** @use HasFactory<\Database\Factories\ActivityRegionFactory> */
    use HasFactory;

    protected $fillable = ['metadata_statistic_form_id', 'number', 'province', 'city_or_regency'];

    public $timestamps = false;

    public function metadataStatisticForm(): BelongsTo
    {
        return $this->belongsTo(MetadataStatisticForm::class);
    }
}
