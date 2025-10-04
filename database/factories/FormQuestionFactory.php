<?php

namespace Database\Factories;

use App\Models\FormGroup;
use App\Models\FormQuestion;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FormQuestion>
 */
class FormQuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
        ];
    }

    public function configure()
    {
        return $this->afterMaking(function (FormQuestion $question) {
            // Jika question punya group, ambil section_id dari group-nya
            if ($question->form_group_id && !$question->form_section_id) {
                $group = FormGroup::find($question->form_group_id);
                if ($group) {
                    $question->form_section_id = $group->form_section_id;
                }
            }
        })->afterCreating(function (FormQuestion $question) {
            // Pastikan setelah dibuat, tetap sinkron
            if ($question->form_group_id && !$question->form_section_id) {
                $group = FormGroup::find($question->form_group_id);
                if ($group) {
                    $question->update([
                        'form_section_id' => $group->form_section_id,
                    ]);
                }
            }
        });
    }
}
