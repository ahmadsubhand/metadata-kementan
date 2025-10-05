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
        Schema::create('data_analysis_units', function (Blueprint $table) {
            $table->id();
            $table->integer('code');
            $table->string('label');
        });

        Schema::create('data_analysis_unit_metadata_statistic_form', function (Blueprint $table) {
            $table->id();
            $table->foreignId('metadata_statistic_form_id')->constrained()->cascadeOnDelete();
            $table->foreignId('data_analysis_unit_id')->constrained()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_analysis_units');
    }
};
