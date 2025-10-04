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
        Schema::create('form_questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('form_group_id')->nullable()->constrained();
            $table->foreignId('form_section_id')->constrained();
            
            $table->string('code');
            $table->string('label');
            $table->enum('type', ['text', 'textarea', 'number', 'date', 'radio', 'checkbox', 'select', 'table']);
            $table->integer('order');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('form_questions');
    }
};
