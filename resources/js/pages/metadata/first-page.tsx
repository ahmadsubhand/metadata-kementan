import { SectionProps } from "@/types";
import FormLayout from "./form-layout";
import SectionLayout from "./section-layout";
import InputField from "@/components/input/input-field";
import SelectOption from "@/components/input/select-option";
import RadioOption from "@/components/input/radio-option";
import { MetadataStoreType } from "@/validators/metadata";

export default function FirstPage({ form } : SectionProps<MetadataStoreType>) {
    const statisticalActivityRecommendation = form.watch('statistical_activity_recommendation');

    return (
        <FormLayout>
            <SectionLayout>
                {/* Judul kegiatan */}
                <InputField 
                    form={form}
                    inputName={'activity_title'}
                    inputLabel={'Judul Kegiatan'}
                    inputPlaceholder={'Judul kegiatan'}
                    inputType={'text'}
                    className='w-full'
                />

                {/* Tahun */}
                <InputField 
                    form={form}
                    inputName={'activity_year'}
                    inputLabel={'Tahun'}
                    inputPlaceholder={'Tahun kegiatan'}
                    inputType={'number'}
                />
            </SectionLayout>
            
            <SectionLayout className='grid grid-cols-3'>
                {/* Cara Pengumpulan Data */}
                <SelectOption 
                    form={form}
                    selectName={'data_collection_approach_id'}
                    selectLabel={'Cara Pengumpulan Data'}
                    selectPlaceholder={'Pilih cara pengumpulan data'}
                    options={[
                        { label : 'Pencacahan Lengkap', value: 1 },
                        { label : 'Survei', value: 2 },
                        { label : 'Kompilasi Produk Administrasi', value: 3 },
                        { label : 'Cara lain sesuai dengan perkembangan TI', value: 4 },
                    ]}
                />

                {/* Sektor Kegiatan */}
                <SelectOption 
                    form={form}
                    selectName={'activity_sector_id'}
                    selectLabel={'Sektor Kegiatan'}
                    selectPlaceholder={'Pilih sektor kegiatan'}
                    options={[
                        { label: 'Pertanian dan Perikanan', value: 1 },
                        { label: 'Demografi dan Kependudukan', value: 2 },
                        { label: 'Pembangunan', value: 3 },
                        { label: 'Proyeksi Ekonomi', value: 4 },
                        { label: 'Pendidikan dan Pelatihan', value: 5 },
                        { label: 'Lingkungan', value: 6 },
                        { label: 'Keuangan', value: 7 },
                        { label: 'Globalisasi', value: 8 },
                        { label: 'Kesehatan', value: 9 },
                        { label: 'Industri dan Jasa', value: 10 },
                        { label: 'Teknologi Informasi dan Komunikasi', value: 11 },
                        { label: 'Perdagangan Internasional dan Neraca Perdagangan', value: 12 },
                        { label: 'Ketenagakerjaan', value: 13 },
                        { label: 'Neraca Nasional', value: 14 },
                        { label: 'Indikator Ekonomi Bulanan', value: 15 },
                        { label: 'Produktivitas', value: 16 },
                        { label: 'Harga dan Paritas Daya Beli', value: 17 },
                        { label: 'Sektor Publik, Perpajakan, dan Regulasi Pasar', value: 18 },
                        { label: 'Perwilayahan dan Perkotaan', value: 19 },
                        { label: 'Ilmu Pengetahuan dan Hak Paten', value: 20 },
                        { label: 'Perlindungan Sosial dan Kesejahteraan', value: 21 },
                        { label: 'Transportasi', value: 22 },
                    ]}
                />

                {/* Jenis Kegiatan Statistik */}
                <SelectOption 
                    form={form}
                    selectName={'statistical_activity_type_id'}
                    selectLabel={'Jenis Kegiatan Statistik'}
                    selectPlaceholder={'Pilih jenis kegiatan statistik'}
                    options={[
                        { label: 'Statistik Dasar', value: 1 },
                        { label: 'Statistik Sektoral', value: 2 },
                        { label: 'Statistik Khusus', value: 3 },
                    ]}
                />
            </SectionLayout>

            {/* Rekomendasi kegiatan */}
            <RadioOption
                form={form}
                radioName={'statistical_activity_recommendation'}
                radioLabel={'Jika kegiatan statistik sektoral, apakah mendapatkan rekomendasi kegiatan statistik dari BPS?'}
                options={[
                    { label: 'Ya', value: 1 },
                    { label: 'Tidak', value: 2 },
                ]}
            />
            {(statisticalActivityRecommendation === 1) && (
                <SectionLayout>
                    <InputField 
                        form={form}
                        inputName={'recommendation_identity'}
                        inputLabel={'Jika “Ya”, Identitas Rekomendasi'}
                        inputPlaceholder={'Nama'}
                        inputType={'text'}
                    />
                </SectionLayout>
            )}
        </FormLayout>
    )
}