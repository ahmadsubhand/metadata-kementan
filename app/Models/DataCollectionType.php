<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class DataCollectionType extends Model
{
    /** @use HasFactory<\Database\Factories\DataCollectionTypeFactory> */
    use HasFactory;

    protected $fillable = ['code', 'label'];

    public $timestamps = false;

    public function metadataStatisticForm(): HasOne
    {
        return $this->hasOne(MetadataStatisticForm::class);
    }
}
