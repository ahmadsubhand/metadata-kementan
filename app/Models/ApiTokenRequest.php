<?php

namespace App\Models;

use App\Enums\ApiRequestStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Sanctum\PersonalAccessToken;

class ApiTokenRequest extends Model
{
    use HasFactory;
    
    protected $fillable = [
       'personal_access_token_id',
       'user_id',
       'application_name',
       'application_description',
       'status',
       'message',
       'approved_at'
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
        $this->status = ApiRequestStatus::Approved->value;
        $this->approved_at = now();
        $this->save();
    }
}
