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
        Schema::create('form_response_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('form_response_id')->constrained();
            $table->foreignId('form_question_id')->constrained();
            $table->foreignId('form_column_id')->nullable()->constrained();
            $table->foreignId('form_question_option_id')->nullable()->constrained(); // value_option

            $table->integer('row_number')->nullable();
            $table->string('value_string')->nullable();
            $table->text('value_text')->nullable();
            $table->double('value_float')->nullable();
            $table->integer('value_int')->nullable();
            $table->date('value_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('form_response_answers');
    }
};
