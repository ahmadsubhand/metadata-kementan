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
        Schema::create('collected_variables', function (Blueprint $table) {
            $table->id();
            $table->foreignId('metadata_statistic_form_id')->constrained();
            $table->integer('variable_number');
            $table->text('variable_name');
            $table->text('variable_concept')->nullable();
            $table->text('variable_definition')->nullable();
            $table->text('reference_time')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('collected_variables');
    }
};
