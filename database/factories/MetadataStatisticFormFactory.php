<?php

namespace Database\Factories;

use App\Enums\BooleanType;
use App\Enums\FormStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MetadataStatisticForm>
 */
class MetadataStatisticFormFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = fake()->randomElement([
            FormStatus::Pending->value,
            FormStatus::Approved->value,
        ]);

        return [ 
            'user_id' => User::factory(),
            'status' => $status,
            'approved_at' => $status === FormStatus::Approved->value ? now() : null,
            'activity_title' => fake()->sentence(rand(1, 5), false),
            'activity_year' => rand(2020, (int)date('Y')),
            'data_collection_approach_id' => rand(1, 4), 
            'activity_sector_id' => rand(1, 22),
            'statistical_activity_type_id' => rand(1, 3), 
            'statistical_activity_recommendation' => BooleanType::No->value,
        ];
    }

    public function approved(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => FormStatus::Approved->value,
            'approved_at' => now()
        ]);
    }

    public function draft(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => FormStatus::Draft->value,
            'approved_at' => now()
        ]);
    }
}
