<?php

namespace Database\Factories;

use App\Enums\ApiRequestStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ApiTokenRequest>
 */
class ApiTokenRequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = fake()->randomElement([
            ApiRequestStatus::Pending->value,
            ApiRequestStatus::Approved->value,
        ]);
        return [
            'user_id' => User::factory(),
            'application_name' => fake()->sentence(rand(1, 3), false),
            'application_description' => fake()->paragraph(rand(3, 5), false),
            'status' => $status,
            'approved_at' => $status === ApiRequestStatus::Approved->value ? now() : null
        ];
    }

    public function approved(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => ApiRequestStatus::Approved->value,
            'approved_at' => now()
        ]);
    }
}
