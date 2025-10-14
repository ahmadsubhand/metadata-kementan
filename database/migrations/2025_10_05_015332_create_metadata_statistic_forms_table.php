<?php

use App\Enums\BooleanType;
use App\Enums\FormStatus;
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
        Schema::create('metadata_statistic_forms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->timestamps();
            $table->enum('status', array_column(FormStatus::cases(), 'value'))->default(FormStatus::Draft->value);
            $table->timestamp('approved_at')->nullable();
            $table->text('message')->nullable();


            // Halaman awal
            $table->string('activity_title');
            $table->integer('activity_year');
            $table->foreignId('data_collection_approach_id')->constrained();
            $table->foreignId('activity_sector_id')->constrained();
            $table->foreignId('statistical_activity_type_id')->constrained();
            $table->enum('statistical_activity_recommendation', array_column(BooleanType::cases(), 'value'));
            $table->string('recommendation_identity')->nullable();

            // I. PENYELENGGARA
            $table->string('organizing_agency')->nullable();
            $table->string('organizing_agency_full_address')->nullable();
            $table->string('organizing_agency_phone')->nullable();
            $table->string('organizing_agency_fax')->nullable();
            $table->string('organizing_agency_email')->nullable();

            // II. PENANGGUNG JAWAB
            $table->string('responsible_echelon_1_unit')->nullable();
            $table->string('responsible_echelon_2_unit')->nullable();
            $table->string('technical_responsible_name')->nullable();
            $table->string('technical_responsible_position')->nullable();
            $table->string('technical_responsible_address')->nullable();
            $table->string('technical_responsible_phone')->nullable();
            $table->string('technical_responsible_fax')->nullable();
            $table->string('technical_responsible_email')->nullable();

            // III. PERENCANAAN DAN PERSIAPAN
            $table->text('activity_background')->nullable();
            $table->text('activity_objective')->nullable();
            $table->date('activity_planning_start_date')->nullable();
            $table->date('activity_planning_end_date')->nullable();
            $table->date('design_start_date')->nullable();
            $table->date('design_end_date')->nullable();
            $table->date('data_collection_start_date')->nullable();
            $table->date('data_collection_end_date')->nullable();
            $table->date('data_processing_start_date')->nullable();
            $table->date('data_processing_end_date')->nullable();
            $table->date('data_analysis_start_date')->nullable();
            $table->date('data_analysis_end_date')->nullable();
            $table->date('result_dissemination_start_date')->nullable();
            $table->date('result_dissemination_end_date')->nullable();
            $table->date('evaluation_start_date')->nullable();
            $table->date('evaluation_end_date')->nullable();
            // collected_variables table

            // IV. DESAIN KEGIATAN
            $table->foreignId('activity_conduct_id')->nullable()->constrained();
            $table->foreignId('frequency_of_implementation_id')->nullable()->constrained();
            $table->foreignId('data_collection_type_id')->nullable()->constrained();
            $table->foreignId('data_collection_coverage_id')->nullable()->constrained();
            // activity_regions table
            // data_collection_methods checkbox
            // data_collection_tools checkbox
            // data_collection_units checkbox

            // V. DESAIN SAMPEL
            $table->foreignId('sample_design_type_id')->nullable()->constrained();
            $table->foreignId('final_stage_sampling_method_id')->nullable()->constrained();
            $table->foreignId('sampling_method_id')->nullable()->constrained();
            $table->foreignId('final_stage_sampling_frame_id')->nullable()->constrained();
            $table->integer('overall_sample_fraction')->nullable();
            $table->integer('estimated_sampling_error')->nullable();
            $table->integer('sampling_unit')->nullable();
            $table->integer('observation_unit')->nullable();

            // VI. PENGUMPULAN DATA
            $table->enum('pilot_survey', array_column(BooleanType::cases(), 'value'))->nullable();
            // data_quality_check_method checkbox
            $table->enum('nonresponse_adjustment', array_column(BooleanType::cases(), 'value'))->nullable();
            $table->foreignId('data_collector_type_id')->nullable()->constrained();
            $table->foreignId('minimum_education_requirement_id')->nullable()->constrained();
            $table->integer('number_of_supervisors')->nullable();
            $table->integer('number_of_enumerators')->nullable();
            $table->enum('training_of_data_collector', array_column(BooleanType::cases(), 'value'))->nullable();

            // VII. PENGOLAHAN DAN ANALISIS
            $table->enum('editing_step', array_column(BooleanType::cases(), 'value'))->nullable();
            $table->enum('coding_step', array_column(BooleanType::cases(), 'value'))->nullable();
            $table->enum('data_entry_step', array_column(BooleanType::cases(), 'value'))->nullable();
            $table->enum('validation_step', array_column(BooleanType::cases(), 'value'))->nullable();
            $table->foreignId('analysis_method_id')->nullable()->constrained();
            // analysis_units checkbox
            // presentation_levels checkbox

            // VIII. DISEMINASI HASIL
            $table->enum('printed_product', array_column(BooleanType::cases(), 'value'))->nullable();
            $table->enum('digital_product', array_column(BooleanType::cases(), 'value'))->nullable();
            $table->enum('microdata_product', array_column(BooleanType::cases(), 'value'))->nullable();
            $table->date('printed_release_date')->nullable();
            $table->date('digital_release_date')->nullable();
            $table->date('microdata_release_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('metadata_statistic_forms');
    }
};
