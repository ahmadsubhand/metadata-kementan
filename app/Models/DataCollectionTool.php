<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class DataCollectionTool extends Model
{
    /** @use HasFactory<\Database\Factories\DataCollectionToolFactory> */
    use HasFactory;

    protected $fillable = ['code', 'label'];

    public $timestamps = false;

    public function metadataStatisticForms(): BelongsToMany
    {
        return $this->belongsToMany(MetadataStatisticForm::class);
    }
}
