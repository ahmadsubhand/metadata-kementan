<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\ApiRequestStatus;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('api_token_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('personal_access_token_id')->nullable()->constrained();
            $table->foreignId('user_id')->constrained();
            $table->string('application_name');
            $table->text('application_description');
            $table->enum('status', array_column(ApiRequestStatus::cases(), 'value'))->default(ApiRequestStatus::Pending->value);
            $table->text('message')->nullable();
            $table->timestamp('approved_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('api_token_requests');
    }
};
