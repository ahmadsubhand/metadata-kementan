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
use App\Models\AnalysisUnit;
use App\Models\CollectedVariable;
use App\Models\MetadataStatisticForm;
use App\Models\PresentationLevel;
use App\Models\SamplingMethod;
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

        $user = User::factory()->makeAdmin()
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
        SamplingMethod::factory()->createMany([
            ['label' => 'Simple Random Sampling', 'code' => 1],
            ['label' => 'Systematic Random Sampling', 'code' => 2],
            ['label' => 'Stratified Random Sampling', 'code' => 3],
            ['label' => 'Cluster Sampling', 'code' => 4],
            ['label' => 'Probability Proportional to Size Sampling', 'code' => 5],
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
        AnalysisUnit::factory()->createMany([
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

        MetadataStatisticForm::factory()
            ->state([
                'user_id' => $user->id,

                // Halaman awal
                'activity_title' => 'Pengumpulan, Pengolahan, dan Penyajian Data Pokok Peternakan dan Kesehatan Hewan',
                'activity_year' => '2022',
                'data_collection_approach_id' => 3,
                'activity_sector_id' => 1,
                'statistical_activity_type_id' => 2,
                'statistical_activity_recommendation' => 2,
                'recommendation_identity' => null,
            
                // I. PENYELENGGARA
                'organizing_agency' => 'Sekretariat Direktorat Jenderal Peternakan dan Kesehatan Hewan, Kementerian Pertanian',
                'organizing_agency_full_address' => 'Jl. Harsono RM No. 3, Gedung C Lantai 6-7, Ragunan, Jakarta Selatan',
                'organizing_agency_phone' => '(021) 7815580-83',
                'organizing_agency_fax' => '(021) 7815583',
                'organizing_agency_email' => 'datinnakpusat@pertanian.go.id',
            
                // II. PENANGGUNG JAWAB
                'responsible_echelon_1_unit' => 'Direktorat Jenderal Peternakan dan Kesehatan Hewan, Kementerian Pertanian',
                'responsible_echelon_2_unit' => 'Sekretariat Direktorat Jenderal Peternakan dan Kesehatan Hewan, Kementerian Pertanian',
                'technical_responsible_name' => 'drh. Aslila Ramadhany Daulay',
                'technical_responsible_position' => null,
                'technical_responsible_address' => 'Jl. Harsono RM No. 3 Gedung C Lantai 7, Ragunan, Jakarta Selatan',
                'technical_responsible_phone' => '(021) 78844270',
                'technical_responsible_fax' => '(021) 7815583',
                'technical_responsible_email' => 'datinnakpusat@pertanian.go.id',
            
                // III. PERENCANAAN DAN PERSIAPAN
                'activity_background' => "Undang-Undang Nomor 25 Tahun 2004 tentang Sistem Perencanaan Pembangunan Nasional " .
                    "mengamanatkan bahwa perencanaan pembangunan didasarkan pada data dan informasi yang akurat  " .
                    "dan dapat dipertanggungjawabkan. Hal ini menunjukan bahwa ketersediaan data dan informasi " .
                    "merupakan komponen penting dalam proses penyelenggaraan pembangunan utamanya dalam " .
                    "penentuan kebijakan, alat pengendalian untuk mencegah terjadinya kesalahan, serta mendukung " .
                    "penyelenggaraan pemerintahan yang transparan, akuntabel dan partisipatif.\n\n" .
                    "Penyediaan Data Ekonomi dan Data Pokok Subsektor Peternakan dan Kesehatan Hewan dilaksanakan " .
                    "oleh Direktorat Jenderal Peternakan dan Kesehatan Hewan melalui Kegiatan Pengumpulan, " .
                    "Pengolahan, serta Penyajian Data dan Informasi Peternakan dan Kesehatan Hewan. Data Ekonomi " .
                    "Subsektor Peternakan dan Kesehatan Hewan dikumpulkan dan diolah dari instansi terkait seperti Pusat " .
                    "Data dan Sistem Informasi Pertanian Kementerian Pertanian Republik Indonesia, Badan Pusat Statistik " .
                    "Republik Indonesia, dan Badan Koordinasi Penanaman Modal Republik Indonesia. Sementara Data " .
                    "Pokok Subsektor Peternakan dan Kesehatan Hewan dikumpulkan dan diolah secara bertahap, dimulai " .
                    "dari tingkat kecamatan, kabupaten/kota, dan provinsi. Hasil rekapitulasi data di tingkat provinsi dikirimkan " .
                    "ke Direktorat Jenderal Peternakan dan Kesehatan Hewan untuk diverifikasi, divalidasi, dan diolah. " .
                    "Selanjutnya Data Ekonomi dan Data Pokok Subsektor Peternakan dan Kesehatan Hewan yang telah " .
                    "diolah, disajikan dalam bentuk publikasi Buku Statistik Peternakan dan Kesehatan Hewan.\n\n" .
                    "Dalam rangka mendapatkan data pokok yang lebih berkualitas dan dapat dipertanggungjawabkan, Ditjen " .
                    "PKH telah menerbitkan Petunjuk Teknis Pengumpulan, Pengolahan, dan Penyajian Data Pokok PKH " .
                    "melalui Surat Keputusan Direktur Jenderal PKH Nomor 14087/Kpts/OT.040/F/11/2019. Petunjuk Teknis " .
                    "tersebut disusun bersama dengan Badan Pusat Statistik RI serta Pusat Data dan Sistem Informasi " .
                    "Pertanian Kementerian Pertanian.\n\n" .
                    "Sesuai Peraturan Presiden Nomor 39 Tahun 2019 tentang Satu Data Indonesia, tata kelola data " .
                    "pemerintahan harus menghasilkan data yang akurat, mutakhir, terpadu, dan dapat " .
                    "dipertanggungjawabkan. Prinsip Satu Data Indonesia harus memenuhi satu Standar Data, Metadata, " .
                    "Kode Referensi dan Data Induk yang mudah diakses dan dibagipakaikan. Oleh karena itu, Ditjen PKH " .
                    "selaku produsen data menyusun dan memutakhirkan Metadata Kegiatan Pengumpulan, Pengolahan, " .
                    "dan Penyajian Data Pokok Peternakan dan Kesehatan Hewan.",
                'activity_objective' => "Kegiatan Pengumpulan, Pengolahan, dan Penyajian Data Pokok Peternakan dan Kesehatan Hewan ".
                    "ilaksanakan untuk mendapatkan data populasi ternak; pemotongan ternak tercatat dan tidak tercatat; " .
                    "produksi daging, telur, dan susu; pengeluaran ternak dan hasil ternak; serta pemasukan ternak dan hasil ".
                    "ternak.",
                'activity_planning_start_date' => '2021-01-01',
                'activity_planning_end_date' => '2021-12-31',
                'design_start_date' => '2021-01-01',
                'design_end_date' => '2021-12-31',
                'data_collection_start_date' => '2022-01-01',
                'data_collection_end_date' => '2022-03-31',
                'data_processing_start_date' => '2022-04-01',
                'data_processing_end_date' => '2022-05-31',
                'data_analysis_start_date' => '2022-06-01',
                'data_analysis_end_date' => '2022-06-30',
                'result_dissemination_start_date' => '2022-11-30',
                'result_dissemination_end_date' => '2022-12-31',
                'evaluation_start_date' => '2022-12-01',
                'evaluation_end_date' => '2022-12-31',
                // collected_variables table
            
                // IV. DESAIN KEGIATAN
                'activity_conduct_id' => 2,
                'frequency_of_implementation_id' => 7,
                'data_collection_type_id' => 3,
                'data_collection_coverage_id' => 1,
                // 'data_collection_methods' => '',
                // 'data_collection_tools' => '',
                // 'data_collection_units' => '',
            
                // V. DESAIN SAMPEL
                'sample_design_type_id' => null,
                'final_stage_sampling_method_id' => null,
                'sampling_method_id' => null,
                'final_stage_sampling_frame_id' => null,
                'overall_sample_fraction' => null,
                'estimated_sampling_error' => null,
                'sampling_unit' => null,
                'observation_unit' => null,
            
                // VI. PENGUMPULAN DATA
                'pilot_survey' => 2,
                // 'data_quality_check_method' => '',
                'nonresponse_adjustment' => 2,
                'data_collector_type_id' => 1,
                'minimum_education_requirement_id' => 2,
                'number_of_supervisors' => 34,
                'number_of_enumerators' => 68,
                'training_of_data_collector' => 2,
            
                // VII. PENGOLAHAN DAN ANALISIS
                'editing_step' => 2,
                'coding_step' => 2,
                'data_entry_step' => 1,
                'validation_step' => 1,
                'analysis_method_id' => 1,
                // 'analysis_units' => '',
                // 'presentation_levels' => '',
            
                // VIII. DISEMINASI HASIL
                'printed_product' => 1,
                'digital_product' => 1,
                'microdata_product' => 2,
                'printed_release_date' => '2022-11-30',
                'digital_release_date' => '2022-11-30',
                'microdata_release_date' => null,
            ])
            ->has(CollectedVariable::factory()->count(8)->sequence(
                [
                    'variable_number' => 1,
                    'variable_name' => "Populasi Ternak",
                    'variable_concept' => 
                        "Populasi ternak adalah kumpulan atau jumlah ternak yang hidup pada wilayah dan satu waktu tertentu " .
                        "kecuali ayam ras pedaging.\n\n" .
                        "Populasi ayam ras pedaging (broiler) adalah populasi ayam ras pedaging komersial yang hidup " .
                        "dan pernah hidup di dalam usaha budidaya selama setahun.", 
                    'variable_definition' => null, 
                    'reference_time' => "Referensi waktu pendataan adalah tanggal yang ditetapkan sebagai titik pencatatan " .
                        "populasi, yaitu 31 Desember tahun sebelumnya (t-1). kecuali ayam ras pedaging yaitu populasi ayam ras " .
                        "pedaging yang hidup dan pernah hidup di dalam usaha budidaya selama 1 tahun."
                ],
                [
                    'variable_number' => 2,
                    'variable_name' => "Pemotongan Ternak Tercatat",
                    'variable_concept' =>
                        "Pemotongan ternak tercatat adalah pemotongan ternak yang dilakukan di Rumah Potong Hewan Ruminansia (RPH-R), " .
                        "Rumah Potong Hewan Babi (RPH-B), dan Rumah Potong Hewan Unggas (RPH-U) baik milik pemerintah maupun swasta, " .
                        "serta tempat pemotongan hewan selain RPH yang dilaporkan kepada dinas atau dicatat oleh Dinas " .
                        "yang membidangi fungsi peternakan dan kesehatan hewan setempat.",
                    'variable_definition' =>
                        "Rumah Pemotongan Hewan (RPH) adalah suatu bangunan atau kompleks bangunan dengan desain dan syarat tertentu " .
                        "yang digunakan sebagai tempat memotong hewan (ruminansia, babi, atau unggas) bagi konsumsi masyarakat umum, " .
                        "baik milik pemerintah maupun swasta.",
                    'reference_time' => "1 tahun yang lalu (1 Januari s.d. 31 Desember tahun t-1)."
                ],
                [
                    'variable_number' => 3,
                    'variable_name' => "Pemotongan Ternak Tidak Tercatat",
                    'variable_concept' =>
                        "Pemotongan ternak tidak tercatat adalah pemotongan yang dilakukan oleh orang perorangan " .
                        "yang tidak dilaporkan kepada dinas atau tidak dicatat oleh Dinas yang membidangi fungsi peternakan " .
                        "dan kesehatan hewan setempat.",
                    'variable_definition' => null,
                    'reference_time' => "1 tahun yang lalu (1 Januari s.d. 31 Desember tahun t-1)."
                ],
                [
                    'variable_number' => 4,
                    'variable_name' => "Produksi Daging",
                    'variable_concept' =>
                        "Produksi daging adalah karkas hasil pemotongan ternak di wilayah tersebut ditambah dengan bagian yang dapat dimakan (edible portion) selama waktu tertentu.",
                    'variable_definition' =>
                        "Bagian yang dapat dimakan (edible portion) adalah organ-organ dan bagian selain karkas yang dapat dikonsumsi, " .
                        "meliputi jeroan (edible offal) dan daging variasi (fancy meat).",
                    'reference_time' => "1 tahun yang lalu (1 Januari s.d. 31 Desember tahun t-1)."
                ],
                [
                    'variable_number' => 5,
                    'variable_name' => "Produksi Telur",
                    'variable_concept' =>
                        "Produksi telur adalah jumlah produksi telur unggas (ayam buras, ayam ras petelur, burung puyuh, dan itik) selama setahun, " .
                        "termasuk yang ditetaskan, rusak, diperdagangkan, dikonsumsi, dan diberikan ke orang lain.",
                    'variable_definition' => null,
                    'reference_time' => "1 tahun yang lalu (1 Januari s.d. 31 Desember tahun t-1)."
                ],
                [
                    'variable_number' => 6,
                    'variable_name' => "Produksi Susu",
                    'variable_concept' =>
                        "Produksi susu adalah jumlah air susu yang keluar dari sapi betina selama satu tahun, " .
                        "termasuk yang diberikan kepada pedet/anak sapi, rusak, diperdagangkan, dikonsumsi, dan diberikan kepada orang lain.",
                    'variable_definition' => null,
                    'reference_time' => "1 tahun yang lalu (1 Januari s.d. 31 Desember tahun t-1)."
                ],
                [
                    'variable_number' => 7,
                    'variable_name' => "Pengeluaran Ternak dan Hasil Ternak",
                    'variable_concept' =>
                        "Pengeluaran adalah kegiatan mengirimkan ternak (penjualan dan/atau pengurangan lain) ke unit pemelihara ternak lain, " .
                        "baik dalam kabupaten/kota maupun ke luar kabupaten/kota (provinsi lain atau luar negeri).",
                    'variable_definition' => null,
                    'reference_time' => "1 tahun yang lalu (1 Januari s.d. 31 Desember tahun t-1)."
                ],
                [
                    'variable_number' => 8,
                    'variable_name' => "Pemasukan Ternak dan Hasil Ternak",
                    'variable_concept' =>
                        "Pemasukan adalah kegiatan mendatangkan ternak (pembelian dan/atau penambahan lain) dari unit pemelihara ternak lain, " .
                        "baik yang berasal dari dalam kabupaten/kota maupun dari luar kabupaten/kota (provinsi lain atau luar negeri).",
                    'variable_definition' => null,
                    'reference_time' => "1 tahun yang lalu (1 Januari s.d. 31 Desember tahun t-1)."
                ],
            ))
            ->afterCreating(function (MetadataStatisticForm $form) {
                $relations = [
                    // use id instead label or code
                    'dataCollectionMethods' => [2, 4],
                    'dataCollectionTools' => [1, 4],
                    'dataCollectionUnits' => [4],
                    'dataQualityCheckMethods' => [4],
                    'analysisUnits' => [4],
                    'presentationLevels' => [1, 2],
                ];

                foreach ($relations as $relation => $value) {
                    $form->{$relation}()->sync($value);
                }
            })
            ->create();
    }
}
