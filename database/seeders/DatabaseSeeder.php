<?php

namespace Database\Seeders;

use App\Models\Form;
use App\Models\FormGroup;
use App\Models\FormQuestion;
use App\Models\FormQuestionColumn;
use App\Models\FormQuestionOption;
use App\Models\FormSection;
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

        User::factory()
            ->state([
                'email' => $adminEmail,
                'name' => 'Super Admin',
                'password' => Hash::make($adminPassword),
            ])
            ->has(Form::factory()
                ->state([
                    'name' => 'Metadata Kementan',
                    'code' => 'metadata-kementan',
                ])

                // Halaman Awal
                ->has(FormSection::factory()
                    ->state([
                        'code' => 'Halaman Awal',
                        'label' => 'Halaman Awal',
                        'order' => 0
                    ])
                    // Judul Kegiatan
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'judul_kegiatan',
                            'label' => 'Judul Kegiatan',
                            'order' => 1,
                            'type' => 'text'
                        ])
                    )
                    // Tahun
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'tahun_kegiatan',
                            'label' => 'Tahun',
                            'order' => 2,
                            'type' => 'number'
                        ])
                    )
                    // Cara Pengumpulan Data
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'cara_pengumpulan_data',
                            'label' => 'Cara Pengumpulan Data',
                            'order' => 3,
                            'type' => 'select'
                        ])
                        ->has(FormQuestionOption::factory()
                            ->count(4)
                            ->sequence(
                                [ 'code' => '1', 'label' => 'Pencacahan Lengkap', 'order' => 1 ],
                                [ 'code' => '2', 'label' => 'Survei', 'order' => 2 ],
                                [ 'code' => '3', 'label' => 'Kompilasi Produk Administrasi', 'order' => 3 ],
                                [ 'code' => '4', 'label' => 'Cara lain sesuai dengan perkembangan TI', 'order' => 4 ],
                            )
                        )
                    )
                    // Sektor Kegiatan
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'sektor_kegiatan',
                            'label' => 'Sektor Kegiatan',
                            'order' => 4,
                            'type' => 'select',
                        ])
                        ->has(FormQuestionOption::factory()
                            ->count(22)
                            ->sequence(
                                ['code' => '1', 'label' => 'Pertanian dan Perikanan', 'order' => 1],
                                ['code' => '2', 'label' => 'Demografi dan Kependudukan', 'order' => 2],
                                ['code' => '3', 'label' => 'Pembangunan', 'order' => 3],
                                ['code' => '4', 'label' => 'Proyeksi Ekonomi', 'order' => 4],
                                ['code' => '5', 'label' => 'Pendidikan dan Pelatihan', 'order' => 5],
                                ['code' => '6', 'label' => 'Lingkungan', 'order' => 6],
                                ['code' => '7', 'label' => 'Keuangan', 'order' => 7],
                                ['code' => '8', 'label' => 'Globalisasi', 'order' => 8],
                                ['code' => '9', 'label' => 'Kesehatan', 'order' => 9],
                                ['code' => '10', 'label' => 'Industri dan Jasa', 'order' => 10],
                                ['code' => '11', 'label' => 'Teknologi Informasi dan Komunikasi', 'order' => 11],
                                ['code' => '12', 'label' => 'Perdagangan Internasional dan Neraca Perdagangan', 'order' => 12],
                                ['code' => '13', 'label' => 'Ketenagakerjaan', 'order' => 13],
                                ['code' => '14', 'label' => 'Neraca Nasional', 'order' => 14],
                                ['code' => '15', 'label' => 'Indikator Ekonomi Bulanan', 'order' => 15],
                                ['code' => '16', 'label' => 'Produktivitas', 'order' => 16],
                                ['code' => '17', 'label' => 'Harga dan Paritas Daya Beli', 'order' => 17],
                                ['code' => '18', 'label' => 'Sektor Publik, Perpajakan, dan Regulasi Pasar', 'order' => 18],
                                ['code' => '19', 'label' => 'Perwilayahan dan Perkotaan', 'order' => 19],
                                ['code' => '20', 'label' => 'Ilmu Pengetahuan dan Hak Paten', 'order' => 20],
                                ['code' => '21', 'label' => 'Perlindungan Sosial dan Kesejahteraan', 'order' => 21],
                                ['code' => '22', 'label' => 'Transportasi', 'order' => 22],
                            )
                        )
                    )
                    // Jenis Kegiatan Statistik
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'jenis_kegiatan_statistik',
                            'label' => 'Jenis Kegiatan Statistik',
                            'order' => 5,
                            'type' => 'select',
                        ])
                        ->has(FormQuestionOption::factory()
                            ->count(3)
                            ->sequence(
                                ['code' => '1', 'label' => 'Statistik Dasar', 'order' => 1],
                                ['code' => '2', 'label' => 'Statistik Sektoral', 'order' => 2],
                                ['code' => '3', 'label' => 'Statistik Khusus', 'order' => 3],
                            )
                        )
                    )
                    // Jika kegiatan statistik sektoral, apakah mendapatkan rekomendasi kegiatan statistik dari BPS?
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'rekomendasi_kegiatan_statistik',
                            'label' => 'Jika kegiatan statistik sektoral, apakah mendapatkan rekomendasi kegiatan statistik dari BPS?',
                            'order' => 6,
                            'type' => 'radio',
                        ])
                        ->has(FormQuestionOption::factory()
                            ->count(2)
                            ->sequence(
                                ['code' => '1', 'label' => 'Ya', 'order' => 1],
                                ['code' => '2', 'label' => 'Tidak', 'order' => 2],
                            )
                        )
                    )
                    // Jika ya, identitas rekomendasi
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'identitas_rekomendasi',
                            'label' => 'Jika “Ya”, identitas Rekomendasi',
                            'order' => 7,
                            'type' => 'text',
                        ])
                    )
                )

                // I. Penyelenggara
                ->has(FormSection::factory()
                    ->state([
                        'code' => 'Blok I',
                        'label' => 'I. Penyelenggara',
                        'order' => 1
                    ])
                    // 1.1. Instansi Penyelenggara
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'instansi_penyelenggara',
                            'label' => '1.1. Instansi Penyelenggara',
                            'order' => 1,
                            'type' => 'text'
                        ])
                    )
                    // 1.2 Alamat Lengkap Instansi Penyelenggara
                    ->has(FormGroup::factory()
                        ->state([
                            'code' => 'alamat_lengkap_instansi_penyelenggara',
                            'label' => '1.2 Alamat Lengkap Instansi Penyelenggara',
                            'order' => 2,
                        ])
                        ->has(FormQuestion::factory()
                            ->count(3)
                            ->sequence(
                                // Telepon
                                [
                                    'code' => 'telepon_instansi_penyelenggara',
                                    'label' => 'Telepon',
                                    'order' => 1,
                                    'type' => 'text'
                                ],
                                // Email
                                [
                                    'code' => 'email_instansi_penyelenggara',
                                    'label' => 'Email',
                                    'order' => 2,
                                    'type' => 'text'
                                ],
                                // Faksimile
                                [
                                    'code' => 'faksimile_instansi_penyelenggara',
                                    'label' => 'Faksimile',
                                    'order' => 3,
                                    'type' => 'text'
                                ]
                            )
                        )
                    )
                )

                // II. Penanggung Jawab
                ->has(FormSection::factory()
                    ->state([
                        'code' => 'Blok II',
                        'label' => 'II. Penanggung Jawab',
                        'order' => 2
                    ])
                    // 2.1. Unit Eselon Penanggung Jawab
                    ->has(FormGroup::factory()
                        ->state([
                            'code' => 'unit_eselon_penanggung_jawab',
                            'label' => '2.1. Unit Eselon Penanggung Jawab',
                            'order' => 1,
                        ])
                        ->has(FormQuestion::factory()
                            ->count(2)
                            ->sequence(
                                // Eselon 1
                                [
                                    'code' => 'eselon_1',
                                    'label' => 'Eselon 1',
                                    'order' => 1,
                                    'type' => 'text'
                                ],
                                // Eselon 2
                                [
                                    'code' => 'eselon_2',
                                    'label' => 'Eselon 2',
                                    'order' => 2,
                                    'type' => 'text'
                                ]
                            )
                        )
                    )
                    // 2.2. Penanggung Jawab Teknis (setingkat Eselon 3)
                    ->has(FormGroup::factory()
                        ->state([
                            'code' => 'penanggung_jawab_teknis',
                            'label' => '2.2. Penanggung Jawab Teknis (setingkat Eselon 3)',
                            'order' => 2,
                        ])
                        ->has(FormQuestion::factory()
                            ->count(5)
                            ->sequence(
                                // Jabatan
                                [
                                    'code' => 'jabatan_penanggung_jawab_teknis',
                                    'label' => 'Jabatan',
                                    'order' => 1,
                                    'type' => 'text'
                                ],
                                // Alamat
                                [
                                    'code' => 'alamat_penanggung_jawab_teknis',
                                    'label' => 'Alamat',
                                    'order' => 2,
                                    'type' => 'text'
                                ],
                                // Telepon
                                [
                                    'code' => 'telepon_penanggung_jawab_teknis',
                                    'label' => 'Telepon',
                                    'order' => 3,
                                    'type' => 'text'
                                ],
                                // Faksimile
                                [
                                    'code' => 'faksimile_penanggung_jawab_teknis',
                                    'label' => 'Faksimile',
                                    'order' => 4,
                                    'type' => 'text'
                                ],
                                // Email
                                [
                                    'code' => 'email_penanggung_jawab_teknis',
                                    'label' => 'Email',
                                    'order' => 5,
                                    'type' => 'text'
                                ]
                            )
                        )
                    )
                )

                // III. Perencanaan dan Persiapan
                ->has(FormSection::factory()
                    ->state([
                        'code' => 'Blok III',
                        'label' => 'III. Perencanaan dan Persiapan',
                        'order' => 3,
                    ])
                    // 3.1. Latar Belakang Kegiatan
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'latar_belakang_kegiatan',
                            'label' => '3.1. Latar Belakang Kegiatan',
                            'order' => 1,
                            'type' => 'textarea',
                        ])
                    )
                    // 3.2. Tujuan Kegiatan
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'tujuan_kegiatan',
                            'label' => '3.2. Tujuan Kegiatan',
                            'order' => 2,
                            'type' => 'textarea',
                        ])
                    )
                    // 3.3. Rencana Jadwal Kegiatan
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'rencana_jadwal_kegiatan',
                            'label' => '3.3. Rencana Jadwal Kegiatan',
                            'order' => 3,
                            'type' => 'table',
                        ])
                        ->has(FormQuestionColumn::factory()
                            ->count(2)
                            ->sequence(
                                [ 'code' => 'tanggal_mulai', 'label' => 'Tanggal Mulai', 'type' => 'date', 'order' => 1 ],
                                [ 'code' => 'tanggal_selesai', 'label' => 'Tanggal Selesai', 'type' => 'date', 'order' => 2 ]
                            )
                        )
                    )
                    // 3.4. Variabel (Karakteristik) yang Dikumpulkan
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'variabel_dikumpulkan',
                            'label' => '3.4. Variabel (Karakteristik) yang Dikumpulkan',
                            'order' => 4,
                            'type' => 'table',
                        ])
                        ->has(FormQuestionColumn::factory()
                            ->count(2)
                            ->sequence(
                                [ 'code' => 'nama_variabel', 'label' => 'Nama Variabel (Karakteristik)', 'type' => 'textarea', 'order' => 1 ],
                                [ 'code' => 'konsep', 'label' => 'Konsep', 'type' => 'textarea', 'order' => 2 ],
                                [ 'code' => 'definisi', 'label' => 'Definisi', 'type' => 'textarea', 'order' => 3 ],
                                [ 'code' => 'referensi_waktu', 'label' => 'Referensi Waktu (Periode Enumerasi)', 'type' => 'textarea', 'order' => 4 ],
                            )
                        )
                    )
                )

                // IV. Desain Kegiatan
                ->has(FormSection::factory()
                    ->state([
                        'code' => 'Blok IV',
                        'label' => 'IV. Desain Kegiatan',
                        'order' => 4,
                    ])
                    // 4.1. Kegiatan ini dilakukan
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'kegiatan_dilakukan',
                            'label' => '4.1. Kegiatan ini dilakukan',
                            'order' => 1,
                            'type' => 'radio',
                        ])
                        ->has(FormQuestionOption::factory()
                            ->count(2)
                            ->sequence(
                                [ 'code' => '1', 'label' => 'Hanya sekali', 'order' => 1 ],
                                [ 'code' => '2', 'label' => 'Berulang', 'order' => 2 ],
                            )
                        )
                    )
                    // 4.2. Jika “Berulang”, Frekuensi Penyelenggaraan
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'frekuensi_penyelenggaraan',
                            'label' => '4.2. Jika “Berulang”, Frekuensi Penyelenggaraan',
                            'order' => 2,
                            'type' => 'select',
                        ])
                        ->has(FormQuestionOption::factory()
                            ->count(8)
                            ->sequence(
                                ['code' => '1', 'label' => 'Harian', 'order' => 1],
                                ['code' => '2', 'label' => 'Mingguan', 'order' => 2],
                                ['code' => '3', 'label' => 'Bulanan', 'order' => 3],
                                ['code' => '4', 'label' => 'Triwulanan', 'order' => 4],
                                ['code' => '5', 'label' => 'Empat Bulanan', 'order' => 5],
                                ['code' => '6', 'label' => 'Semesteran', 'order' => 6],
                                ['code' => '7', 'label' => 'Tahunan', 'order' => 7],
                                ['code' => '8', 'label' => 'Dua Tahunan', 'order' => 8],
                            )
                        )
                    )
                    // 4.3. Tipe Pengumpulan Data
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'tipe_pengumpulan_data',
                            'label' => '4.3. Tipe Pengumpulan Data',
                            'order' => 3,
                            'type' => 'select',
                        ])
                        ->has(FormQuestionOption::factory()
                            ->count(3)
                            ->sequence(
                                ['code' => '1', 'label' => 'Longitudinal Panel', 'order' => 1],
                                ['code' => '2', 'label' => 'Cross Sectional', 'order' => 2],
                                ['code' => '3', 'label' => 'Longitudinal Cross Sectional', 'order' => 3],
                            )
                        )
                    )
                    // 4.4. Cakupan Wilayah Pengumpulan Data
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'cakupan_wilayah_pengumpulan_data',
                            'label' => '4.4. Cakupan Wilayah Pengumpulan Data',
                            'order' => 4,
                            'type' => 'radio',
                        ])
                        ->has(FormQuestionOption::factory()
                            ->count(2)
                            ->sequence(
                                ['code' => '1', 'label' => 'Seluruh Wilayah Indonesia', 'order' => 1],
                                ['code' => '2', 'label' => 'Sebagian Wilayah Indonesia', 'order' => 2],
                            )
                        )
                    )
                    // 4.5. Jika “Sebagian Wilayah Indonesia”, Wilayah Kegiatan
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'wilayah_kegiatan',
                            'label' => '4.5. Jika “Sebagian Wilayah Indonesia”, Wilayah Kegiatan',
                            'order' => 5,
                            'type' => 'table',
                        ])
                        ->has(FormQuestionColumn::factory()
                            ->count(2)
                            ->sequence(
                                [ 'code' => 'provinsi', 'label' => 'provinsi', 'type' => 'text', 'order' => 1 ],
                                [ 'code' => 'kabupaten', 'label' => 'kabupaten', 'type' => 'text', 'order' => 2 ]
                            )
                        )
                    )
                    // 4.6. Metode Pengumpulan Data
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'metode_pengumpulan_data',
                            'label' => '4.6. Metode Pengumpulan Data',
                            'order' => 6,
                            'type' => 'checkbox',
                        ])
                        ->has(FormQuestionOption::factory()
                            ->count(5)
                            ->sequence(
                                ['code' => '1', 'label' => 'Wawancara', 'order' => 1],
                                ['code' => '2', 'label' => 'Mengisi kuesioner sendiri (swacacah)', 'order' => 2],
                                ['code' => '4', 'label' => 'Pengamatan (observasi)', 'order' => 3],
                                ['code' => '8', 'label' => 'Pengumpulan data sekunder', 'order' => 4],
                                ['code' => '16', 'label' => 'Lainnya (sebutkan)', 'order' => 5],
                            )
                        )
                    )
                    // 4.7. Sarana Pengumpulan Data
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'sarana_pengumpulan_data',
                            'label' => '4.7. Sarana Pengumpulan Data',
                            'order' => 7,
                            'type' => 'checkbox',
                        ])
                        ->has(FormQuestionOption::factory()
                            ->count(6)
                            ->sequence(
                                ['code' => '1', 'label' => 'Pencil-and-Paper Interviewing (PAPI)', 'order' => 1],
                                ['code' => '2', 'label' => 'Computer-assisted Personal Interviewing (CAPI)', 'order' => 2],
                                ['code' => '4', 'label' => 'Computer-assisted Telephones Interviewing (CATI)', 'order' => 3],
                                ['code' => '8', 'label' => 'Computer Aided Web Interviewing (CAWI)', 'order' => 4],
                                ['code' => '16', 'label' => 'Mail', 'order' => 5],
                                ['code' => '32', 'label' => 'Lainnya (sebutkan)', 'order' => 6],
                            )
                        )
                    )
                    // 4.8. Unit Pengumpulan Data
                    ->has(FormQuestion::factory()
                        ->state([
                            'code' => 'unit_pengumpulan_data',
                            'label' => '4.8. Unit Pengumpulan Data',
                            'order' => 8,
                            'type' => 'checkbox',
                        ])
                        ->has(FormQuestionOption::factory()
                            ->count(4)
                            ->sequence(
                                ['code' => '1', 'label' => 'Individu', 'order' => 1],
                                ['code' => '2', 'label' => 'Rumah tangga', 'order' => 2],
                                ['code' => '4', 'label' => 'Usaha/perusahaan', 'order' => 3],
                                ['code' => '8', 'label' => 'Lainnya (sebutkan)', 'order' => 4],
                            )
                        )
                    )
                )
            )
            ->makeAdmin()
            ->create();
    }
}
