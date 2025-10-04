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
        Schema::create('form_question_columns', function (Blueprint $table) {
            $table->id();
            $table->foreignId('form_question_id')->constrained();
            
            $table->string('code');
            $table->string('label');
            $table->enum('type', ['text', 'textarea', 'number', 'date']);
            $table->integer('order');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('form_question_columns');
    }
};
