<?php

namespace Database\Seeders;

use App\Models\ActivitySector;
use App\Models\DataCollectionApproach;
use App\Models\StatisticalActivityType;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $adminEmail = env('ADMIN_EMAIL');
        $adminPassword = env('ADMIN_PASSWORD');

        User::factory()->makeAdmin()
            ->create([
                'email' => $adminEmail,
                'password' => Hash::make($adminPassword),
                'name' => 'Super Admin'
            ]);

        DataCollectionApproach::factory()->createMany([
            ['label' => 'Pencacahan Lengkap', 'code' => 1],
            ['label' => 'Survei', 'code' => 2],
            ['label' => 'Kompilasi Produk Administrasi', 'code' => 3],
            ['label' => 'Cara lain sesuai dengan perkembangan TI', 'code' => 4],
        ]);

        ActivitySector::factory()->createMany([
            [ 'label' => 'Pertanian dan Perikanan', 'code' => 1 ],
            [ 'label' => 'Demografi dan Kependudukan', 'code' => 2 ],
            [ 'label' => 'Pembangunan', 'code' => 3 ],
            [ 'label' => 'Proyeksi Ekonomi', 'code' => 4 ],
            [ 'label' => 'Pendidikan dan Pelatihan', 'code' => 5 ],
            [ 'label' => 'Lingkungan', 'code' => 6 ],
            [ 'label' => 'Keuangan', 'code' => 7 ],
            [ 'label' => 'Globalisasi', 'code' => 8 ],
            [ 'label' => 'Kesehatan', 'code' => 9 ],
            [ 'label' => 'Industri dan Jasa', 'code' => 10 ],
            [ 'label' => 'Teknologi Informasi dan Komunikasi', 'code' => 11 ],
            [ 'label' => 'Perdagangan Internasional dan Neraca Perdagangan', 'code' => 12 ],
            [ 'label' => 'Ketenagakerjaan', 'code' => 13 ],
            [ 'label' => 'Neraca Nasional', 'code' => 14 ],
            [ 'label' => 'Indikator Ekonomi Bulanan', 'code' => 15 ],
            [ 'label' => 'Produktivitas', 'code' => 16 ],
            [ 'label' => 'Harga dan Paritas Daya Beli', 'code' => 17 ],
            [ 'label' => 'Sektor Publik, Perpajakan, dan Regulasi Pasar', 'code' => 18 ],
            [ 'label' => 'Perwilayahan dan Perkotaan', 'code' => 19 ],
            [ 'label' => 'Ilmu Pengetahuan dan Hak Paten', 'code' => 20 ],
            [ 'label' => 'Perlindungan Sosial dan Kesejahteraan', 'code' => 21 ],
            [ 'label' => 'Transportasi', 'code' => 22 ],
        ]);

        StatisticalActivityType::factory()->createMany([
            [ 'label' => 'Statistik Dasar', 'code' => 1 ],
            [ 'label' => 'Statistik Sektoral', 'code' => 2 ],
            [ 'label' => 'Statistik Khusus', 'code' => 3 ],
        ]);
    }
}
