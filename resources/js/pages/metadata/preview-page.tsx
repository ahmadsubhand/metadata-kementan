import { MetadataStoreType } from '@/validators/metadata';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, Font } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';
import { ReactNode } from "react";

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: '/font/arial/ARIAL.TTF', // Regular
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      src: '/font/arial/ARIALI.TTF', // Italic
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
    {
      src: '/font/arial/ARIALBD.TTF', // Bold
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    {
      src: '/font/arial/ARIALBI.TTF', // Bold Italic
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    {
      src: '/font/arial/ARIALBLACKITALIC.TTF', // Black Italic (opsional)
      fontWeight: 900,
      fontStyle: 'italic',
    },
    {
      src: '/font/arial/ARIBLK.TTF', // Black
      fontWeight: 900,
      fontStyle: 'normal',
    },
  ],
});

const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fff',
      paddingTop: '85px',
      paddingLeft: '60px',
      paddingRight: '50px',
      paddingBottom: '85px',
      fontFamily: 'Arial'
    },

    body: { fontSize: 10 },
    h1: { fontSize: 11, textAlign: 'center' },
    italic: { fontStyle: 'italic' },
    bold: { fontWeight: 'bold' },
    border: { border: '1px solid gray' },
    borderRight: { borderRight: '1px solid gray' },
    marginTop: { marginTop: '-1px', },
    marginLeft: { marginLeft: '-1px', },
    lineHeight: { lineHeight: '17px' },
    sectionPadding: { padding: '5px' },
    h2MarginBottomOption: { marginBottom: '12px' },
    h2MarginBottomText: { marginBottom: '6px' },
    justify: { textAlign: 'justify' },
    center: { textAlign: 'center' },
    flex1: { flex: 1 },
    bgGray: { backgroundColor: 'rgb(241,241,241)' },
    minHeight: { minHeight: '70px' },
    minHeightHalf: { height: '42px' },

    headerView: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexDirection: 'row',
      width: '100%',
      paddingLeft: '15px',
      paddingRight: '20px'
    },

    logoView: { 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '3px', 
      justifyContent: 'flex-end',
    },

    titleView: {
      marginTop: '70px',
      marginBottom: '10px',
      textAlign: 'center',
      letterSpacing: '0.5px'
    },

    kegiatanView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '12px'
    },

    textView: {
      lineHeight: '17px',
      minHeight: '70px'
    },

    optionView: {
      display: 'flex',
      flexDirection: 'row',
      gap: '24px'
    },

    optionColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    },

    optionRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: '20px'
    },

    optionLabel: {
      maxWidth: '200px',
    },

    labelWidth: {
      width: '250px'
    },

    optionChecked: {
      width: '25px',
      height: '25px',
      borderRadius: '100',
      border: '2px solid rgb(0,97,166)',
      position: 'absolute',
      top: '-50%',
      left: '-50%', 
    },

    numberingView: {
      display: 'flex',
      flexDirection: 'row',
      gap: '12px'
    },

    h1View: {
      backgroundColor: 'rgb(213,213,213)'
    },

    emailText: {
      color: 'rgb(0,97,166)',
      textDecoration: 'underline'
    },

    paragraphView: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      maxWidth: '450px'
    },

    tableView: {
      display: 'flex',
      flexDirection: 'column',
      width: '450px'
    },

    tableRow: {
      display: 'flex',
      flexDirection: 'row'
    },

    tableCol: {
      display: 'flex',
      flexDirection: 'column'
    },

    flexCenter: {
      justifyContent: 'center',
      alignItems: 'center'
    }
})

const MetadataDocument = ({ data } : { data: MetadataStoreType }) => (
  <Document>
    <Page size={[611.33, 935.53]} style={styles.page}>
      <FirstPage data={data} />
      <OrganizerPage data={data} />
      <ResponsiblePage data={data} />
      <PlanningPage data={data} />
      <DesignPage data={data} />
      <SamplingPage data={data} />
      <CollectionPage data={data} />
      <AnalysisPage data={data} />
      <DisseminationPage data={data} />
    </Page>
  </Document>
);

const FirstPage = ({ data } : { data: MetadataStoreType }) => (
  <>
  {/* Header */}
  <View style={styles.headerView}>
    <View style={styles.logoView}>
      <Image src={'/bps.png'} style={{ width: '1.65cm' }}/>
      <Text style={{ fontSize: 12, fontStyle: 'italic', fontWeight: 'bold' }}>Badan Pusat Statistik</Text>
    </View>
    <View style={[styles.sectionPadding, styles.border, { paddingHorizontal: '32px' }]}>
      <Text style={{ fontSize: 14, fontWeight: 'bold' }}>MS-Keg</Text>
    </View>
  </View>

  {/* Main */}
  <View>
    <View style={styles.titleView}>
      <Text style={{ fontSize: 24 }}>METADATA STATISTIK</Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>KEGIATAN</Text>
    </View>

    <View>
      {/* Judul Kegiatan */}
      <WrapView style={[styles.kegiatanView, styles.border, styles.body, styles.sectionPadding]}>
        <View style={[styles.body, styles.bold, styles.textView, { flex: 1 }]}>
          <Text>
            Judul Kegiatan :{'\n'}
            {data.activity_title}
          </Text>
        </View>
        <View style={[styles.border, styles.bold, styles.sectionPadding]}>
          <Text>Tahun: {data.activity_year}</Text>
        </View>
      </WrapView>

      {/* Kode Kegiatan */}
      <WrapView style={[styles.border, styles.sectionPadding, styles.marginTop, styles.minHeight]}>
        <Text style={[styles.body, styles.bold]}>Kode Kegiatan (diisi oleh petugas): </Text>
      </WrapView>

      {/* Cara pengumpulan data */}
      <OptionView
        label={'Cara Pengumpulan Data:'}
        selectedValues={[data.data_collection_approach_id]}
      >
        <OptionColumn selectedValues={[data.data_collection_approach_id]} options={[
          { label : 'Pencacahan Lengkap', value: 1 },
          { label : 'Survei', value: 2 },
        ]} />
        <OptionColumn selectedValues={[data.data_collection_approach_id]} options={[
          { label : 'Kompilasi Produk Administrasi', value: 3 },
          { label : 'Cara lain sesuai dengan perkembangan TI', value: 4 },
        ]} />
      </OptionView>

      {/* Sektor Kegiatan */}
      <OptionView
        label={'Sektor Kegiatan:'}
        selectedValues={[data.activity_sector_id]}
      >
        <OptionColumn selectedValues={[data.activity_sector_id]} options={[
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
        ]}/>
        <OptionColumn selectedValues={[data.activity_sector_id]} options={[
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
        ]} />
      </OptionView>
      
      {/* Jenis Kegiatan Statistik : */}
      <OptionView
        label={'Jenis Kegiatan Statistik:'}
        selectedValues={[data.statistical_activity_type_id]}
      >
        <OptionColumn selectedValues={[data.statistical_activity_type_id]} options={[
          { label: 'Statistik Dasar', value: 1 },
        ]}/>
        <OptionColumn selectedValues={[data.statistical_activity_type_id]} options={[
          { label: 'Statistik Sektoral', value: 2 },
        ]}/>
        <OptionColumn selectedValues={[data.statistical_activity_type_id]} options={[
          { label: 'Statistik Khusus', value: 3 },
        ]}/>
      </OptionView>

      {/* Rekomendasi Kegiatan */}
      <OptionView 
        label={'Jika kegiatan statistik sektoral, apakah mendapatkan rekomendasi kegiatan statistik dari BPS?'}
        selectedValues={[data.statistical_activity_recommendation]}
      >
        <View style={[styles.optionColumn]}>
          <View style={[styles.optionRow, { maxWidth: '100px' }]}>
            <Text>Ya</Text>
            <View style={{ position: 'relative' }}>
              <Text>
                - 1
              </Text>
              {(data.statistical_activity_recommendation === 1) && (<View style={styles.optionChecked} />)}
            </View>
          </View>
          <View style={[styles.optionRow, { maxWidth: '100px'}]}>
            <Text>Tidak</Text>
            <View style={{ position: 'relative' }}>
              <Text>
                - 2
              </Text>
              {(data.statistical_activity_recommendation === 2) && (<View style={styles.optionChecked} />)}
            </View>
          </View>
          <Text>
            Jika “Ya”, <Text style={styles.bold}>Identitas Rekomendasi: </Text>{data.recommendation_identity || '……………………………'}
          </Text>
        </View>
      </OptionView>
    </View>
  </View>
  </>
)

{/* I. PENYELENGGARA */}
const OrganizerPage = ({ data } : { data: MetadataStoreType }) => (
  <View>
    <H1View>I. PENYELENGGARA</H1View>

    {/* Instansi Penyelenggara */}
    <QuestionView number={'1.1.'} label={'Instansi Penyelenggara:'} style={[styles.minHeightHalf]}>
      <Text>{data.organizing_agency}</Text>
    </QuestionView>

    {/* Alamat Lengkap Instansi Penyelenggara */}
    <QuestionView number={'1.2.'} label={'Alamat Lengkap Instansi Penyelenggara:'}>
      <Text style={[styles.h2MarginBottomOption]}>{data.organizing_agency_full_address}</Text>
      <View style={[styles.paragraphView]}>
        <View style={[styles.numberingView]}>
          <Text>Telepon   : {data.organizing_agency_phone}</Text>
          <Text>Faksimile : {data.organizing_agency_fax}</Text>
        </View>
        <Text>E-mail : <Text style={[styles.emailText]}>{data.organizing_agency_email}</Text></Text>
      </View>
    </QuestionView>
  </View>
)

// II. PENANGGUNG JAWAB
const ResponsiblePage = ({ data } : { data: MetadataStoreType }) => (
  <View style={[styles.marginTop]}>
    <H1View>II. PENANGGUNG JAWAB</H1View>

    {/* Unit Eselon Penanggung Jawab */}
    <QuestionView number={'2.1.'} label={'Unit Eselon Penanggung Jawab:'}>
      <View style={[styles.paragraphView]}>
        <Text>Eselon 1 : {data.responsible_echelon_1_unit}</Text>
        <Text>Eselon 2 : {data.responsible_echelon_2_unit}</Text>
      </View>
    </QuestionView>

    {/* Penanggung Jawab Teknis (setingkat Eselon 3) */}
    <QuestionView number={'2.2.'} label={'Penanggung Jawab Teknis (setingkat Eselon 3):'}>
      <View style={[styles.paragraphView]}>
          <Text>Jabatan : {data.technical_responsible_name}</Text>
          <Text>Alamat : {data.technical_responsible_email} </Text>
          <View style={styles.numberingView}>
            <Text>Telepon : {data.technical_responsible_phone} </Text>
            <Text>Faksimile : {data.technical_responsible_fax} </Text>
          </View>
          <Text>Email: <Text style={styles.emailText}>{data.technical_responsible_email}</Text></Text>
        </View>
    </QuestionView>
  </View>
)

// III. PERENCANAAN DAN PERSIAPAN
const PlanningPage = ({ data } : { data: MetadataStoreType }) => (
  <View style={[styles.marginTop]}>
    <H1View>III. PERENCANAAN DAN PERSIAPAN</H1View>

    {/* Latar Belakang Kegiatan */}
    <QuestionView number={'3.1.'} label={'Latar Belakang Kegiatan:'} style={[styles.minHeightHalf]}>
      <View style={[styles.paragraphView]}>
        <Text style={[styles.justify]}>
          {data.activity_background}
        </Text>
      </View>
    </QuestionView>

    {/* Tujuan Kegiatan */}
    <QuestionView number={'3.2.'} label={'Tujuan Kegiatan:'} style={[styles.minHeightHalf]}>
      <View style={[styles.paragraphView]}>
        <Text style={[styles.justify]}>
          {data.activity_objective}
        </Text>
      </View>
    </QuestionView>

    {/* Rencana Jadwal Kegiatan */}
    <QuestionView number={'3.3.'} label={'Rencana Jadwal Kegiatan:'}>
      <Table>
        <TableRow isFirstRow={true}>
          <TableData style={[styles.flexCenter, styles.flex1]} isFirstData={true} />
          <TableData style={[styles.flexCenter, styles.flex1]}>
            <Text style={[styles.center, styles.sectionPadding]}>Awal {'\n'} (tgl/bln/thn)</Text>
          </TableData>
          <TableData style={[{ width: '30px' }]}/>
          <TableData style={[styles.flexCenter, styles.flex1]}>
            <Text style={[styles.center, styles.sectionPadding]}>Akhir {'\n'} (tgl/bln/thn)</Text>
          </TableData>
        </TableRow>

        <RencanaJadwalKegiatanLevel1 label="A. Perencanaan" />
        <RencanaJadwalKegiatanLevel2 startDate={data.activity_planning_start_date} finishDate={data.activity_planning_end_date} label="1. Perencanaan Kegiatan" />
        <RencanaJadwalKegiatanLevel2 startDate={data.design_start_date} finishDate={data.design_end_date} label="2. Desain" />
        <RencanaJadwalKegiatanLevel1 label="B. Pengumpulan" />
        <RencanaJadwalKegiatanLevel2 startDate={data.data_collection_start_date} finishDate={data.data_collection_end_date} label="3. Pengumpulan Data" />
        <RencanaJadwalKegiatanLevel1 label="C. Pemeriksaan" />
        <RencanaJadwalKegiatanLevel2 startDate={data.data_processing_start_date} finishDate={data.data_processing_end_date} label="4. Pengolahan Data" />
        <RencanaJadwalKegiatanLevel2 startDate={data.data_analysis_start_date} finishDate={data.data_analysis_end_date} label="5. Analisis" />
        <RencanaJadwalKegiatanLevel1 label="D. Penyebarluasan" />
        <RencanaJadwalKegiatanLevel2 startDate={data.result_dissemination_start_date} finishDate={data.result_dissemination_end_date} label="6. Diseminasi Hasil" />
        <RencanaJadwalKegiatanLevel2 startDate={data.evaluation_start_date} finishDate={data.evaluation_end_date} label="7. Evaluasi" />
      </Table>
    </QuestionView>

    {/* Variabel (Karakteristik) yang Dikumpulkan */}
    <QuestionView number="3.4." label="Variabel (Karakteristik) yang Dikumpulkan:" wrap={true}>
      <Table>
        <TableRow style={[styles.bgGray]}>
          <TableData style={[styles.flexCenter, styles.sectionPadding]}>
            <Text style={[styles.center, { width: '16px' }]}>No.</Text>
          </TableData>
          <TableData style={[styles.flex1, styles.flexCenter, styles.sectionPadding]}>
            <Text style={[styles.center]}>Nama Variabel (Karakteristik)</Text>
          </TableData>
          <TableData style={[styles.flex1, styles.flexCenter, styles.sectionPadding]}>
            <Text style={[styles.center]}>Konsep</Text>
          </TableData>
          <TableData style={[styles.flex1, styles.flexCenter, styles.sectionPadding]}>
            <Text style={[styles.center]}>Definisi</Text>
          </TableData>
          <TableData style={[styles.flex1, styles.flexCenter, styles.sectionPadding]}>
            <Text style={[styles.center]}>Referensi Waktu (Periode Enumerasi)</Text>
          </TableData>
        </TableRow>

        {
          data.collected_variables ?
          data.collected_variables?.map((item) => (
            <VariabelDikumpulkanData key={item.variable_number} number={item.variable_number} name={item.variable_name} 
            concept={item.variable_concept} definition={item.variable_definition} referenceTime={item.reference_time} />
          )) :
          <VariabelDikumpulkanData number={1} name={''} concept={''} definition={''} referenceTime={''} />
        }
      </Table>
    </QuestionView>
  </View>
)

// IV. DESAIN KEGIATAN
const DesignPage = ({ data } : { data: MetadataStoreType }) => (
  <View style={styles.marginTop}>
    <H1View>IV. DESAIN KEGIATAN</H1View>

    {/* Kegiatan ini dilakukan */}
    <OptionView number="4.1." label={'Kegiatan ini dilakukan'} selectedValues={[data.activity_conduct_id]}>
      <OptionColumn selectedValues={[data.activity_conduct_id]} style={[styles.flex1]} options={[
        { label: 'Hanya sekali', value: 1 },
      ]} />
      <OptionColumn selectedValues={[data.activity_conduct_id]} style={[styles.flex1]} options={[
        { label: 'Berulang', value: 2 },
      ]} />
    </OptionView>

    {/* Jika “berulang”, frekuensi penyelenggaraan */}
    <OptionView number="4.2." label={'Jika “berulang” (R.4.1. berkode 2), Frekuensi Penyelenggaraan:'} selectedValues={[data.frequency_of_implementation_id]}>
      <OptionColumn selectedValues={[data.frequency_of_implementation_id]} style={[styles.flex1]} options={[
        { label: 'Harian', value: 1 },
        { label: 'Mingguan', value: 2 },
        { label: 'Bulanan', value: 3 },
        { label: 'Triwulanan', value: 4 },
      ]} />
      <OptionColumn selectedValues={[data.frequency_of_implementation_id]} style={[styles.flex1]} options={[
        { label: 'Empat Bulanan', value: 5 },
        { label: 'Semesteran', value: 6 },
        { label: 'Tahunan', value: 7 },
        { label: '> Dua Tahunan', value: 8 },
      ]} />
    </OptionView>

    {/* Tipe Pengumpulan Data */}
    <OptionView number="4.3." label="Tipe Pengumpulan Data:" selectedValues={[data.data_collection_type_id]}>
      <OptionColumn selectedValues={[data.data_collection_type_id]} options={[
        { label: 'Longitudinal Panel', value: 1 },
        { label: 'Cross Sectional', value: 2 },
        { label: 'Longitudinal Cross Sectional', value: 3 },
      ]} />
    </OptionView>

    {/* Cakupan Wilayah Pengumpulan Data */}
    <OptionView selectedValues={[data.data_collection_coverage_id]} number="4.4." label="Cakupan Wilayah Pengumpulan Data:">
      <OptionColumn selectedValues={[data.data_collection_coverage_id]} options={[
        { label: 'Seluruh Wilayah Indonesia', value: 1, },
        { label: 'Sebagian Wilayah Indonesia', value: 2 },
      ]} />
    </OptionView>

    {/* Jika “sebagian wilayah Indonesia” (R.4.4. berkode 2), Wilayah Kegiatan */}
    <QuestionView number="4.5." label="Jika “sebagian wilayah Indonesia” (R.4.4. berkode 2), Wilayah Kegiatan:">
      <Table>
        <TableRow style={[styles.bgGray]}>
          <TableData>
            <Text style={[styles.center, styles.sectionPadding, { width: '28px' }]}>No.</Text>
          </TableData>
          <TableData style={[styles.flexCenter, styles.flex1]}>
            <Text style={[styles.center, styles.sectionPadding]}>Provinsi</Text>
          </TableData>
          <TableData style={[styles.flexCenter, styles.flex1]}>
            <Text style={[styles.center, styles.sectionPadding]}>Kabupaten/Kota</Text>
          </TableData>
        </TableRow>

        {
          data.activity_regions?.length ?
          data.activity_regions?.map((region, index) => (
            <WilayahKegiatanData key={index} number={region.number} province={region.province} city={region.city_or_regency}/>
          )) :
          <>
          <WilayahKegiatanData number={1} province={''} city={''}/>
          </>
        }
      </Table>
    </QuestionView>

    {/* Metode Pengumpulan Data */}
    <OptionView number="4.6." label="Metode Pengumpulan Data:" selectedValues={data.data_collection_methods}>
      <OptionColumn selectedValues={data.data_collection_methods} options={[
        { label: 'Wawancara', value: 1 },
        { label: 'Mengisi kuesioner sendiri (swacacah)', value: 2 },
        { label: 'Pengamatan (observasi)', value: 3 },
        { label: 'Pengumpulan data sekunder', value: 4 },
        { label: 'Lainnya', value: 5 },
      ]}/>
    </OptionView>

    {/* Sarana Pengumpulan Data */}
    <OptionView number="4.7." label="Sarana Pengumpulan Data:" selectedValues={data.data_collection_tools}>
      <OptionColumn style={[{ maxWidth: '500px' }]} selectedValues={data.data_collection_tools} options={[
        { label: 'Pencil-and-Paper Interviewing (PAPI)', value: 1 },
        { label: 'Computer-assisted Personal Interviewing (CAPI)', value: 2 },
        { label: 'Computer-assisted Telephones Interviewing (CATI)', value: 3 },
        { label: 'Computer Aided Web Interviewing (CAWI)', value: 4 },
        { label: 'Mail', value: 5 },
        { label: 'Lainnya', value: 6 },
      ]}/>
    </OptionView>

    {/* Unit Pengumpulan Data */}
    <OptionView number="4.8." label="Unit Pengumpulan Data:"selectedValues={data.data_collection_units} >
      <OptionColumn selectedValues={data.data_collection_units} options={[
        { label: 'Individu', value: 1 },
        { label: 'Rumah tangga', value: 2 },
        { label: 'Usaha/perusahaan', value: 3 },
        { label: 'Lainnya', value: 4 },
      ]}/>
    </OptionView>
  </View>
)

// V. DESAIN SAMPEL
const SamplingPage = ({ data } : { data: MetadataStoreType }) => (
  <View style={styles.marginTop}>
    <H1View>
      V. DESAIN SAMPEL {'\n'}
      <Text style={{ fontWeight: 'normal' }}>Diisi jika cara pengumpulan data adalah survei</Text>
    </H1View>

    {/* Jenis Rancangan Sampel */}
    <OptionView label="Jenis Rancangan Sampel:" number="5.1." selectedValues={[data.sample_design_type_id]}>
      <OptionColumn selectedValues={[data.sample_design_type_id]} options={[
        { label: 'Single Stage/Phase', value: 1 },
        { label: 'Multi Stage/Phase', value: 2 }
      ]} />
    </OptionView>

    {/* Metode Pemilihan Sampel Tahap Terakhir */}
    <OptionView label="Metode Pemilihan Sampel Tahap Terakhir:" number="5.2." selectedValues={[data.final_stage_sampling_method_id]}>
      <OptionColumn selectedValues={[data.final_stage_sampling_method_id]} options={[
        { label: 'Sampel Probabilitas', value: 1 },
        { label: 'Sampel Nonprobabilitas', value: 2 }
      ]} />
    </OptionView>
    
    {/* Jika “sampel probabilitas”, metode yang digunakan */}
    <OptionView label="a. Jika “sampel probabilitas”, metode yang digunakan:" number="5.3." selectedValues={[data.probability_sampling_method_id]}>
      <OptionColumn selectedValues={[data.probability_sampling_method_id]} options={[
        { label: 'Simple Random Sampling', value: 1 },
        { label: 'Systematic Random Sampling', value: 2 },
        { label: 'Stratified Random Sampling', value: 3 },
        { label: 'Cluster Sampling', value: 4 },
        { label: 'Probability Proportional to Size Sampling', value: 5 },
      ]} />
    </OptionView>

    {/* Jika “sampel nonprobabilitas”, metode yang digunakan */}
    <OptionView label="b. Jika “sampel nonprobabilitas”, metode yang digunakan:" number="5.3." selectedValues={[data.nonprobability_sampling_method_id]}>
      <OptionColumn selectedValues={[data.nonprobability_sampling_method_id]} options={[
        { label: 'Quota Sampling', value: 6 },
        { label: 'Accidental Sampling', value: 7 },
        { label: 'Purposive Sampling', value: 8 },
        { label: 'Snowball Sampling', value: 9 },
        { label: 'Saturation Sampling', value: 1 },
      ]} />
    </OptionView>

    {/* Kerangka Sampel Tahap Terakhir */}
    <QuestionView label="Kerangka Sampel Tahap Terakhir:" number="5.4." style={[styles.minHeightHalf]}>
      <Text>{data.final_stage_sampling_frame_id}</Text>
    </QuestionView>

    {/* Fraksi Sampel Keseluruhan */}
    <QuestionView label="Fraksi Sampel Keseluruhan:" number="5.5." style={[styles.minHeightHalf]}>
      <Text>{data.overall_sample_fraction}</Text>
    </QuestionView>

    {/* Nilai Perkiraan Sampling Error Variabel Utama */}
    <QuestionView label="Nilai Perkiraan Sampling Error Variabel Utama:" number="5.6." style={[styles.minHeightHalf]}>
      <Text>{data.estimated_sampling_error}</Text>
    </QuestionView>

    {/* Unit Sampel */}
    <QuestionView label="Unit Sampel:" number="5.7." style={[styles.minHeightHalf]}>
      <Text>{data.sampling_unit}</Text>
    </QuestionView>

    {/* Unit Observasi */}
    <QuestionView label="Unit Observasi:" number="5.8." style={[styles.minHeightHalf]}>
      <Text>{data.observation_unit}</Text>
    </QuestionView> 
  </View>

)

// VI. PENGUMPULAN DATA
const CollectionPage = ({ data } : { data: MetadataStoreType }) => (
  <View style={styles.marginTop}>
    <H1View>VI. PENGUMPULAN DATA</H1View>

    {/* Apakah Melakukan Uji Coba (Pilot Survey)? */}
    <OptionView label="Apakah Melakukan Uji Coba (Pilot Survey)?" number="6.1." selectedValues={[data.pilot_survey]}>
      <OptionColumn selectedValues={[data.pilot_survey]} options={[
        { label : 'Ya', value: 1 },
        { label : 'Tidak', value: 2 },
      ]} />
    </OptionView>

    {/* Metode Pemeriksaan Kualitas Pengumpulan Data */}
    <OptionView label="Metode Pemeriksaan Kualitas Pengumpulan Data:" number="6.2." selectedValues={data.data_quality_check_methods}>
      <OptionColumn selectedValues={data.data_quality_check_methods} options={[
        { label: 'Kunjungan kembali (revisit)', value: 1 },
        { label: 'Supervisi', value: 2 },
        { label: 'Task Force', value: 3 },
        { label: 'Lainnya', value: 4 },
      ]} />
    </OptionView>

    {/* Apakah Melakukan Penyesuaian Nonrespon? */}
    <OptionView label="Apakah Melakukan Penyesuaian Nonrespon?" number="6.3." selectedValues={[data.nonresponse_adjustment]}>
      <OptionColumn selectedValues={[data.nonresponse_adjustment]} options={[
        { label: 'Ya', value: 1 },
        { label: 'Tidak', value: 2 },
      ]} />
    </OptionView>

    {/* Petugas Pengumpulan Data */}
    <OptionView label="Petugas Pengumpulan Data:" number="6.4." selectedValues={[data.data_collection_type_id]}>
      <OptionColumn selectedValues={[data.data_collection_type_id]} style={[{ maxWidth: '500px' }]} options={[
        { label: 'Staf instansi penyelenggara', value: 1 },
        { label: 'Mitra/tenaga kontrak', value: 2 },
        { label: 'Staf instansi penyelenggara dan mitra/tenaga kontrak', value: 3 },
      ]} />
    </OptionView>

    {/* Persyaratan Pendidikan Terendah Petugas Pengumpulan Data */}
    <OptionView label="Persyaratan Pendidikan Terendah Petugas Pengumpulan Data:" number="6.5." selectedValues={[data.minimum_education_requirement_id]}>
      <OptionColumn selectedValues={[data.minimum_education_requirement_id]} options={[
        { label: '≤ SMP', value: 1 },
        { label: 'SMA/SMK', value: 2 },
        { label: 'Diploma I/II/III', value: 3 },
        { label: 'Diploma IV/S1/S2/S3', value: 4 },
      ]} />
    </OptionView>

    {/* Jumlah Petugas */}
    <QuestionView number="6.6." label="Jumlah Petugas:">
      <View style={styles.optionColumn}>
        <View style={styles.optionRow}>
          <Text>Supervisor/penyelia/pengawas</Text>
          <Text>{data.number_of_supervisors} orang</Text>
        </View>
        <View style={styles.optionRow}>
          <Text>Pengumpul data/enumerator</Text>
          <Text>{data.number_of_enumerators} orang</Text>
        </View>
      </View>
    </QuestionView>

    {/* Apakah Melakukan Pelatihan Petugas? */}
    <OptionView label="Apakah Melakukan Pelatihan Petugas?" number="6.7." selectedValues={[data.training_of_data_collector]}>
      <OptionColumn selectedValues={[data.training_of_data_collector]} options={[
        { label: 'Ya', value: 1 },
        { label: 'Tidak', value: 2 },
      ]} />
    </OptionView>
  </View>
)

// VII. PENGOLAHAN DAN ANALISIS
const AnalysisPage = ({ data } : { data: MetadataStoreType }) => (
  <View style={styles.marginTop}>
    <H1View>VII. PENGOLAHAN DAN ANALISIS</H1View>
    
    {/* Tahapan Pengolahan Data */}
    <OptionViewRow number={'7.1.'} label={'Tahapan Pengolahan Data:'} options={[
      { label: 'Penyuntingan (Editing)', value: data.editing_step },
      { label: 'Penyandian (Coding) ', value: data.coding_step },
      { label: 'Data Entry', value: data.data_entry_step },
      { label: 'Penyahihan (Validasi)', value: data.validation_step }
    ]} />

    {/* Metode Analisis */}
    <OptionView number="7.2." label="Metode Analisis:" selectedValues={[data.analysis_method_id]}>
      <OptionColumn selectedValues={[data.analysis_method_id]} 
        options={[
          { value: 1, label: 'Deskriptif' },
          { value: 2, label: 'Inferensia' },
          { value: 3, label: 'Deskriptif dan Inferensia' },
        ]}
      />
    </OptionView>

    {/* Unit Analisis */}
    <OptionView number="7.3." label="Unit Analisis:" selectedValues={data.analysis_units}>
      <OptionColumn selectedValues={data.analysis_units} 
        options={[
          { value: 1, label: 'Individu' },
          { value: 2, label: 'Rumah tangga' },
        ]}
      />
      <OptionColumn selectedValues={data.analysis_units}
        options={[
          { value: 3, label: 'Usaha/perusahaan' },
          { value: 4, label: 'Lainnya' },
        ]}
      />
    </OptionView>

    {/* Tingkat Penyajian Hasil Analisis */}
    <OptionView number="7.4." label="Tingkat Penyajian Hasil Analisis:" selectedValues={data.presentation_levels}>
      <OptionColumn selectedValues={data.presentation_levels} 
        options={[
          { value: 1, label: 'Nasional' },
          { value: 2, label: 'Provinsi' },
          { value: 3, label: 'Kabupaten/Kota' },
        ]}
      />
      <OptionColumn selectedValues={data.presentation_levels}
        options={[
          { value: 4, label: 'Kecamatan' },
          { value: 5, label: 'Lainnya' },
        ]}
      />
    </OptionView>
  </View>
)

// VIII. DISEMINASI HASIL
const DisseminationPage = ({ data } : { data: MetadataStoreType }) => (
  <View style={styles.marginTop}>
    <H1View>VIII. DISEMINASI HASIL</H1View>

    {/* Produk Kegiatan yang Tersedia untuk Umum */}
    <OptionViewRow number="8.1." label="Produk Kegiatan yang Tersedia untuk Umum:" options={[
      { label: 'Tercetak (hardcopy)', value: data.printed_product },
      { label: 'Digital (softcopy) ', value: data.digital_product },
      { label: 'Data Mikro', value: data.microdata_product },
    ]}/>

    <QuestionView number="8.2." label="Jika pilihan R.8.1. kode 1, Judul dan Rencana Rilis Produk Kegiatan:">
      <Table>
        <TableRow>
          <TableData isFirstData={true} style={[styles.bgGray, styles.sectionPadding, styles.flexCenter, { width: '100px' }]}><Text>Jenis Diseminasi</Text></TableData>
          <TableCol style={[styles.flex1, styles.marginLeft]} isFirstCol={true}>
            <TableData style={[styles.bgGray, styles.sectionPadding, styles.flexCenter]} isFirstData={true}>
              <Text style={styles.center}>Rencana Rilis</Text>
            </TableData>
            <TableRow style={[{ paddingLeft: '1px' }]}>
              <TableData style={[styles.sectionPadding, styles.flex1, styles.flexCenter]}><Text>Tanggal</Text></TableData>
              <TableData style={[styles.sectionPadding, styles.flex1, styles.flexCenter]}><Text>Bulan</Text></TableData>
              <TableData style={[styles.sectionPadding, styles.flex1, styles.flexCenter]}><Text>Tahun</Text></TableData>
            </TableRow>
          </TableCol>
        </TableRow>
        <RencanaRilisData label={'Tercetak'} fullDate={data.printed_release_date} />
        <RencanaRilisData label={'Digital'} fullDate={data.digital_release_date} />
        <RencanaRilisData label={'Data Mikro'} fullDate={data.microdata_release_date} />
      </Table>
    </QuestionView>
  </View>
)

// Table Data

const RencanaJadwalKegiatanLevel1 = ({ label }: { label: string }) => (
  <TableRow>
    <TableData style={[styles.flex1]} isFirstData={true}>
      <Text style={[styles.bold, styles.sectionPadding]}>{label}</Text>
    </TableData>
    <TableData style={[styles.flex1]}/>
    <TableData style={[{ width: '30px' }]}/>
    <TableData style={[styles.flex1]}/>
  </TableRow>
)

const RencanaJadwalKegiatanLevel2 = (
  { label, startDate, finishDate } : 
  { label: string, startDate?: string | null, finishDate?: string | null }
) => {
  const [ yearStart, monthStart, dateStart ] = startDate ? startDate.split('-') : ' - - '.split('-');
  const [ yearFinish, monthFinish, dateFinish ] = finishDate ? finishDate.split('-') : ' - - '.split('-');
  
  return (
    <TableRow>
      <TableData style={[styles.flex1]} isFirstData={true}>
        <Text style={[styles.sectionPadding, { paddingLeft: '18px' }]}>{label}</Text>
      </TableData>
      <TableData style={[styles.flex1, styles.flexCenter]}>
        <View style={[styles.borderRight, styles.sectionPadding, styles.tableRow, styles.flexCenter, styles.flex1]}>
          <Text style={[styles.bold]}>{dateStart}</Text>
        </View>
        <View style={[styles.borderRight, styles.sectionPadding, styles.tableRow, styles.flexCenter, styles.flex1]}>
          <Text style={[styles.bold]}>{monthStart}</Text>
        </View>
        <View style={[styles.sectionPadding, styles.tableRow, styles.flexCenter, styles.flex1]}>
          <Text style={[styles.bold]}>{yearStart}</Text>
        </View>
      </TableData>
      <TableData style={[styles.flexCenter, { width: '30px' }]}>
        <Text>s.d.</Text>
      </TableData>
      <TableData style={[styles.flex1, styles.flexCenter]}>
        <View style={[styles.borderRight, styles.sectionPadding, styles.tableRow, styles.flexCenter, styles.flex1]}>
          <Text style={[styles.bold]}>{dateFinish}</Text>
        </View>
        <View style={[styles.borderRight, styles.sectionPadding, styles.tableRow, styles.flexCenter, styles.flex1]}>
          <Text style={[styles.bold]}>{monthFinish}</Text>
        </View>
        <View style={[styles.sectionPadding, styles.tableRow, styles.flexCenter, styles.flex1]}>
          <Text style={[styles.bold]}>{yearFinish}</Text>
        </View>
      </TableData>
    </TableRow>
  )
}

const VariabelDikumpulkanData = (
  { number, name, concept, definition, referenceTime } :
  { number: number, name: string, concept?: string | null, definition?: string | null, referenceTime?: string | null }
) => (
  <TableRow>
    <TableData style={[styles.flexCenter, styles.sectionPadding, { width: '28px' }]}>
      <Text style={[styles.center]}>{number}</Text>
    </TableData>
    <TableData style={[styles.flex1, styles.flexCenter, styles.sectionPadding]}>
      <Text style={[styles.center]}>{name}</Text>
    </TableData>
    <TableData style={[styles.flex1, styles.flexCenter, styles.sectionPadding]}>
      <Text style={[styles.center]}>{concept}</Text>
    </TableData>
    <TableData style={[styles.flex1, styles.flexCenter, styles.sectionPadding]}>
      <Text style={[styles.center]}>{definition}</Text>
    </TableData>
    <TableData style={[styles.flex1, styles.flexCenter, styles.sectionPadding]}>
      <Text style={[styles.center]}>{referenceTime}</Text>
    </TableData>
  </TableRow>
)

const WilayahKegiatanData = ({ number, province, city } : { number: number, province: string, city: string }) => (
  <TableRow>
    <TableData>
      <Text style={[styles.center, styles.sectionPadding, { width: '28px' }]}>{number}</Text>
    </TableData>
    <TableData style={[styles.flexCenter, styles.flex1]}>
      <Text style={[styles.center, styles.sectionPadding]}>{province}</Text>
    </TableData>
    <TableData style={[styles.flexCenter, styles.flex1]}>
      <Text style={[styles.center, styles.sectionPadding]}>{city}</Text>
    </TableData>
  </TableRow>
)

const RencanaRilisData = ({ label, fullDate } : { label: string, fullDate?: string | null }) => {
  const [ year, month, date ] = fullDate ? fullDate.split('-') : ''.split('---');
  return (
    <TableRow>
      <TableData isFirstData={true} style={[styles.sectionPadding, styles.flexCenter, { width: '100px' }]}>
        <Text>{label}</Text>
      </TableData>
      <TableData style={[styles.flex1, styles.sectionPadding, styles.flexCenter]}>
        <Text>{date || '-'}</Text>
      </TableData>
      <TableData style={[styles.flex1, styles.sectionPadding, styles.flexCenter]}>
        <Text>{month || '-'}</Text>
      </TableData>
      <TableData style={[styles.flex1, styles.sectionPadding, styles.flexCenter]}>
        <Text>{year || '-'}</Text>
      </TableData>
    </TableRow>
  )
}

// Component

const WrapView = ({ children, style, wrap=false } : { children: ReactNode, style?: Style[], wrap?: boolean }) => (
  <View wrap={wrap} style={style}>
    {children}
  </View>
)

const OptionColumn = (
  { options, style=[], selectedValues=[] } : 
  { options: {label: string, value: number}[], style?: Style[], selectedValues?: (number | null)[] | number[] | null }) => (
  <View style={[styles.optionColumn, styles.optionLabel, ...(style && [...style])]}>
    {options.map((option, index) => (
      <View style={[styles.optionRow]} key={index}>
        <Text>{option.label}</Text>
        <View style={{ position: 'relative' }}>
          <Text>
            - {option.value}
          </Text>
          {selectedValues?.includes(option.value) && (<View style={styles.optionChecked} />)}
        </View>
      </View>
    ))}
  </View>
)

const OptionView = (
  { children, selectedValues, label, number='', style=[] } :
  { children: ReactNode, selectedValues?: (number | null)[] | number[] | null, label: string, number?: string, style?: Style[] }
) => (
  <WrapView style={[styles.body, styles.border, styles.marginTop, styles.sectionPadding, styles.kegiatanView]}>
    {number !== '' &&
      <View style={[styles.body]}>
        <Text style={styles.bold}>{number}</Text>
      </View>
    }
    <View style={{ flex: 1 }}>
      <Text style={[styles.bold, styles.h2MarginBottomText]}>{label}</Text>
      <View style={[styles.optionView, ...(style && [...style])]}>
        {children}
      </View>
    </View>
    <View style={[styles.border, styles.sectionPadding]}>
      <Text>{(selectedValues && (typeof(selectedValues[0]) === 'number')) ? selectedValues.join(', ') : '  '}</Text>
    </View>
  </WrapView>
)

type OptionType = {
  value: number | null;
  label: string;
}
const OptionViewRow = (
  { label, number, options } : 
  { label: string, number: string, options: OptionType[] }
) => (
  <QuestionView label={label} number={number}>
      <View style={[styles.optionColumn, { gap: '0' }]}>
        {
          options.map((option, index) => (
            <View style={[styles.optionRow, { ...((index !== 0) && styles.marginTop) }, { alignItems: 'center' }]} key={index}>
              <View style={[styles.optionRow, { width: '300px' }]}>
                <View style={[{ width: '120px' }]}>
                  <Text>{option.label}</Text>
                </View>
                <View style={[styles.optionRow]}>
                  <Text>Ya</Text>
                  <View style={{ position: 'relative' }}>
                    <Text>- 1</Text>
                    {option.value === 1 && (<View style={styles.optionChecked} />)}
                  </View>
                </View>
                <View style={[styles.optionRow]}>
                  <Text>Tidak</Text>
                  <View style={{ position: 'relative' }}>
                    <Text>- 2</Text>
                    {option.value === 2 && (<View style={styles.optionChecked} />)}
                  </View>
                </View>
              </View>
              <View style={[styles.border, { marginLeft: '100px' }]}>
                <Text style={styles.sectionPadding}>{option.value || '  '}</Text>
              </View>
            </View>  
          ))
        }
      </View>
    </QuestionView>
)

const H1View = ({ children } : { children: ReactNode }) => (
  <WrapView>
    <Text style={[styles.border, styles.h1View, styles.h1, styles.bold, styles.sectionPadding]}>
      {children}
    </Text>
  </WrapView>
)

const QuestionView = (
  { children, number, label, style=[], wrap=false } : 
  { children: ReactNode, number: string, label: string, style?: Style[], wrap?: boolean }
) => (
  <WrapView wrap={wrap} style={[
    styles.border, styles.body, styles.sectionPadding, styles.numberingView, styles.marginTop, 
    ...(style && [ ...style ])
  ]}>
    <View style={[styles.body]}>
      <Text style={styles.bold}>{number}</Text>
    </View>
    <View>
      <Text style={[styles.h2MarginBottomText, styles.bold]}>{label}</Text>
      {children}
    </View>
  </WrapView>
)

const Table = ({ children } : { children: ReactNode }) => (
  <View style={[styles.tableView]}>
    {children}
  </View>
)

const TableRow = (
  { children, isFirstRow=false, style=[], wrap=false } :
  { children?: ReactNode, isFirstRow?: boolean, style?: Style[], wrap?: boolean }
) => (
  <WrapView wrap={wrap} style={[
    styles.tableRow, { ...(!isFirstRow && styles.marginTop)}, ...(style && [ ...style ]) 
  ]}>
    {children}
  </WrapView>
)

const TableData = (
  { children, isFirstData=false, style=[] } :
  { children?: ReactNode, isFirstData?: boolean, style?: Style[] }
) => (
  <View style={[styles.border, styles.tableRow, 
    { ...(!isFirstData && styles.marginLeft) }, 
    ...(style && [ ...style ])
  ]}>
    {children}
  </View>
)

const TableCol = (
  { children, isFirstCol=false, style=[] } :
  { children?: ReactNode, isFirstCol?: boolean, style?: Style[] }
) => (
  <View style={[styles.tableCol, 
    { ...(!isFirstCol && styles.marginTop) }, 
    ...(style && [ ...style ])
  ]}>
    {children}
  </View>
)

export default function PreviewPage({ data } : { data: MetadataStoreType }) {
    return (
      <>
          <PDFViewer className="w-full min-h-screen">
              <MetadataDocument data={data} />
          </PDFViewer>
      </>
    )
}