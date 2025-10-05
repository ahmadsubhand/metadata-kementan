<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class FinalStageSamplingMethod extends Model
{
    /** @use HasFactory<\Database\Factories\FinalStageSamplingMethodFactory> */
    use HasFactory;

    protected $fillable = ['code', 'label'];

    public $timestamps = false;

    public function metadataStatisticForms(): HasOne
    {
        return $this->hasOne(MetadataStatisticForm::class);
    }
}
