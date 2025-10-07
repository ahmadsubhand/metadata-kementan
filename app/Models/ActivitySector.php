<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ActivitySector extends Model
{
    /** @use HasFactory<\Database\Factories\ActivitySectorFactory> */
    use HasFactory;

    protected $fillable = ['code', 'label'];

    public $timestamps = false;

    public function metadataStatisticForm(): HasOne
    {
        return $this->hasOne(MetadataStatisticForm::class);
    }
}
