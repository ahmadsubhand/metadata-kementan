<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('presentation_levels', function (Blueprint $table) {
            $table->id();
            $table->integer('code');
            $table->string('label');
        });

        Schema::create('metadata_statistic_form_presentation_level', function (Blueprint $table) {
            $table->id();
            $table->foreignId('metadata_statistic_form_id')->constrained()->cascadeOnDelete();
            $table->foreignId('presentation_level_id')->constrained()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('presentation_levels');
    }
};
