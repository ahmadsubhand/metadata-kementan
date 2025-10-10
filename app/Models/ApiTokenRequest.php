<?php

namespace App\Models;

use App\Enums\ApiRequestStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Sanctum\PersonalAccessToken;

class ApiTokenRequest extends Model
{
    protected $fillable = [
       'personal_access_token_id',
       'user_id',
       'application_name',
       'application_description',
       'status',
       'message',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function personalAccessToken(): BelongsTo
    {
        return $this->belongsTo(PersonalAccessToken::class);
    }

    public function approveAccess()
    {
        $this->status = ApiRequestStatus::Approved;
        $this->save();
    }
}
