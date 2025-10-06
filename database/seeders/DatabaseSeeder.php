<?php

namespace Database\Seeders;

use App\Models\ActivityConduct;
use App\Models\ActivitySector;
use App\Models\DataCollectionApproach;
use App\Models\DataCollectionCoverage;
use App\Models\DataCollectionMethod;
use App\Models\DataCollectionType;
use App\Models\FrequencyOfImplementation;
use App\Models\StatisticalActivityType;
use App\Models\DataCollectionTool;
use App\Models\DataCollectionUnit;
use App\Models\SampleDesignType;
use App\Models\FinalStageSamplingMethod;
use App\Models\ProbabilitySamplingMethod;
use App\Models\NonprobabilitySamplingMethod;
use App\Models\FinalStageSamplingFrame;
use App\Models\DataQualityCheckMethod;
use App\Models\DataCollectorType;
use App\Models\MinimumEducationRequirement;
use App\Models\AnalysisMethod;
use App\Models\DataAnalysisUnit;
use App\Models\PresentationLevel;
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

        ActivityConduct::factory()->createMany([
            ['label' => 'Hanya sekali', 'code' => 1],
            ['label' => 'Berulang', 'code' => 2],
        ]);

        FrequencyOfImplementation::factory()->createMany([
            ['label' => 'Harian', 'code' => 1],
            ['label' => 'Mingguan', 'code' => 2],
            ['label' => 'Bulanan', 'code' => 3],
            ['label' => 'Triwulanan', 'code' => 4],
            ['label' => 'Empat Bulanan', 'code' => 5],
            ['label' => 'Semesteran', 'code' => 6],
            ['label' => 'Tahunan', 'code' => 7],
            ['label' => '> Dua Tahunan', 'code' => 8],
        ]);

        DataCollectionType::factory()->createMany([
            ['label' => 'Longitudinal Panel', 'code' => 1],
            ['label' => 'Cross Sectional', 'code' => 2],
            ['label' => 'Longitudinal Cross Sectional', 'code' => 3],
        ]);

        DataCollectionCoverage::factory()->createMany([
            ['label' => 'Seluruh Wilayah Indonesia', 'code' => 1],
            ['label' => 'Sebagian Wilayah Indonesia', 'code' => 2],
        ]);

        DataCollectionMethod::factory()->createMany([
            ['label' => 'Wawancara', 'code' => 1],
            ['label' => 'Mengisi kuesioner sendiri (swacacah)', 'code' => 2],
            ['label' => 'Pengamatan (observasi)', 'code' => 4],
            ['label' => 'Pengumpulan data sekunder', 'code' => 8],
            ['label' => 'Lainnya', 'code' => 16],
        ]);

        // Data Collection Tools
        DataCollectionTool::factory()->createMany([
            ['label' => 'Pencil-and-Paper Interviewing (PAPI)', 'code' => 1],
            ['label' => 'Computer-assisted Personal Interviewing (CAPI)', 'code' => 2],
            ['label' => 'Computer-assisted Telephones Interviewing (CATI)', 'code' => 4],
            ['label' => 'Computer Aided Web Interviewing (CAWI)', 'code' => 8],
            ['label' => 'Mail', 'code' => 16],
            ['label' => 'Lainnya', 'code' => 32],
        ]);

        // Data Collection Units
        DataCollectionUnit::factory()->createMany([
            ['label' => 'Individu', 'code' => 1],
            ['label' => 'Rumah tangga', 'code' => 2],
            ['label' => 'Usaha/perusahaan', 'code' => 4],
            ['label' => 'Lainnya', 'code' => 8],
        ]);

        // Sample Design Type
        SampleDesignType::factory()->createMany([
            ['label' => 'Single Stage/Phase', 'code' => 1],
            ['label' => 'Multi Stage/Phase', 'code' => 2],
        ]);

        // Final Stage Sampling Method
        FinalStageSamplingMethod::factory()->createMany([
            ['label' => 'Sampel Probabilitas', 'code' => 1],
            ['label' => 'Sampel Nonprobabilitas', 'code' => 2],
        ]);

        // Probability Sampling Method
        ProbabilitySamplingMethod::factory()->createMany([
            ['label' => 'Simple Random Sampling', 'code' => 1],
            ['label' => 'Systematic Random Sampling', 'code' => 2],
            ['label' => 'Stratified Random Sampling', 'code' => 3],
            ['label' => 'Cluster Sampling', 'code' => 4],
            ['label' => 'Probability Proportional to Size Sampling', 'code' => 5],
        ]);

        // Nonprobability Sampling Method
        NonprobabilitySamplingMethod::factory()->createMany([
            ['label' => 'Quota Sampling', 'code' => 6],
            ['label' => 'Accidental Sampling', 'code' => 7],
            ['label' => 'Purposive Sampling', 'code' => 8],
            ['label' => 'Snowball Sampling', 'code' => 9],
            ['label' => 'Saturation Sampling', 'code' => 10],
        ]);

        // Final Stage Sampling Frame
        FinalStageSamplingFrame::factory()->createMany([
            ['label' => 'List Frame', 'code' => 1],
            ['label' => 'Area Frame', 'code' => 2],
        ]);

        // Data Quality Check Method
        DataQualityCheckMethod::factory()->createMany([
            ['label' => 'Kunjungan kembali (revisit)', 'code' => 1],
            ['label' => 'Supervisi', 'code' => 2],
            ['label' => 'Task Force', 'code' => 4],
            ['label' => 'Lainnya', 'code' => 8],
        ]);

        // Data Collector Type
        DataCollectorType::factory()->createMany([
            ['label' => 'Staf instansi penyelenggara', 'code' => 1],
            ['label' => 'Mitra/tenaga kontrak', 'code' => 2],
            ['label' => 'Staf instansi penyelenggara dan mitra/tenaga kontrak', 'code' => 3],
        ]);

        // Minimum Education Requirement
        MinimumEducationRequirement::factory()->createMany([
            ['label' => '≤ SMP', 'code' => 1],
            ['label' => 'SMA/SMK', 'code' => 2],
            ['label' => 'Diploma I/II/III', 'code' => 3],
            ['label' => 'Diploma IV/S1/S2/S3', 'code' => 4],
        ]);

        // Analysis Method
        AnalysisMethod::factory()->createMany([
            ['label' => 'Deskriptif', 'code' => 1],
            ['label' => 'Inferensia', 'code' => 2],
            ['label' => 'Deskriptif dan Inferensia', 'code' => 3],
        ]);

        // Analysis Units
        DataAnalysisUnit::factory()->createMany([
            ['label' => 'Individu', 'code' => 1],
            ['label' => 'Rumah tangga', 'code' => 2],
            ['label' => 'Usaha/perusahaan', 'code' => 4],
            ['label' => 'Lainnya', 'code' => 8],
        ]);

        // Presentation Levels
        PresentationLevel::factory()->createMany([
            ['label' => 'Nasional', 'code' => 1],
            ['label' => 'Provinsi', 'code' => 2],
            ['label' => 'Kabupaten/Kota', 'code' => 4],
            ['label' => 'Kecamatan', 'code' => 8],
            ['label' => 'Lainnya', 'code' => 16],
        ]);

    }
}
