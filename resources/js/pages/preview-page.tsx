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

const MetadataDocument = () => (
  <Document>
    <Page size={[611.33, 935.53]} style={styles.page}>
      <FirstPage />
      <OrganizerPage />
      <ResponsiblePage />
      <PlanningPage />
      <DesignPage />
      <SamplingPage />
      <CollectionPage />
      <AnalysisPage />
      <DisseminationPage />
    </Page>
  </Document>
);

const FirstPage = () => (
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
            Pengumpulan, Pengolahan, dan Penyajian Data Pokok Peternakan dan Kesehatan Hewan
          </Text>
        </View>
        <View style={[styles.border, styles.bold, styles.sectionPadding]}>
          <Text>Tahun: 2022</Text>
        </View>
      </WrapView>

      {/* Kode Kegiatan */}
      <WrapView style={[styles.border, styles.sectionPadding, styles.marginTop, styles.minHeight]}>
        <Text style={[styles.body, styles.bold]}>Kode Kegiatan (diisi oleh petugas): </Text>
      </WrapView>

      {/* Cara pengumpulan data */}
      <OptionView
        label={'Cara Pengumpulan Data:'}
        selectedValues={[1, 2, 3, 4]}
      >
        <OptionColumn options={[
          { label : 'Pencacahan Lengkap', value: 1 },
          { label : 'Survei', value: 2 },
        ]} />
        <OptionColumn options={[
          { label : 'Kompilasi Produk Administrasi', value: 3 },
          { label : 'Cara lain sesuai dengan perkembangan TI', value: 4 },
        ]} />
      </OptionView>

      {/* Sektor Kegiatan */}
      <OptionView
        label={'Sektor Kegiatan:'}
        selectedValues={[1, 2, 3, 4]}
      >
        <OptionColumn options={[
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
        <OptionColumn options={[
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
        selectedValues={[1, 2, 3, 4]}
      >
        <OptionColumn options={[
          { label: 'Statistik Dasar', value: 1 },
        ]}/>
        <OptionColumn options={[
          { label: 'Statistik Sektoral', value: 2 },
        ]}/>
        <OptionColumn options={[
          { label: 'Statistik Khusus', value: 3 },
        ]}/>
      </OptionView>

      {/* Rekomendasi Kegiatan */}
      <OptionView 
        label={'Jika kegiatan statistik sektoral, apakah mendapatkan rekomendasi kegiatan statistik dari BPS?'}
        selectedValues={[2]}
      >
        <View style={[styles.optionColumn]}>
          <View style={[styles.optionRow, { maxWidth: '100px' }]}>
            <Text>Ya</Text>
            <Text>- 1</Text>
          </View>
          <View style={[styles.optionRow, { maxWidth: '100px'}]}>
            <Text>Tidak</Text>
            <Text>- 2</Text>
          </View>
          <Text>Jika “Ya”, <Text style={styles.bold}>Identitas Rekomendasi: </Text>……………………………</Text>
        </View>
      </OptionView>
    </View>
  </View>
  </>
)

{/* I. PENYELENGGARA */}
const OrganizerPage = () => (
  <View>
    <H1View>I. PENYELENGGARA</H1View>

    {/* Instansi Penyelenggara */}
    <QuestionView number={'1.1.'} label={'Instansi Penyelenggara:'}>
      <Text>Sekretariat Direktorat Jenderal Peternakan dan Kesehatan Hewan, Kementerian Pertanian</Text>
    </QuestionView>

    {/* Alamat Lengkap Instansi Penyelenggara */}
    <QuestionView number={'1.2.'} label={'Alamat Lengkap Instansi Penyelenggara:'}>
      <Text style={[styles.h2MarginBottomOption]}>Jl. Harsono RM No. 3, Gedung C Lantai 6-7, Ragunan, Jakarta Selatan</Text>
      <View style={[styles.paragraphView]}>
        <View style={[styles.numberingView]}>
          <Text>Telepon   : (021) 7815580-83</Text>
          <Text>Faksimile : (021) 7815583</Text>
        </View>
        <Text>E-mail : <Text style={[styles.emailText]}>datinnakpusat@pertanian.go.id</Text></Text>
      </View>
    </QuestionView>
  </View>
)

// II. PENANGGUNG JAWAB
const ResponsiblePage = () => (
  <View style={[styles.marginTop]}>
    <H1View>II. PENANGGUNG JAWAB</H1View>

    {/* Unit Eselon Penanggung Jawab */}
    <QuestionView number={'2.1.'} label={'Unit Eselon Penanggung Jawab:'}>
      <View style={[styles.paragraphView]}>
        <Text>Eselon 1 : Direktorat Jenderal Peternakan dan Kesehatan Hewan, Kementerian Pertanian</Text>
        <Text>Eselon 2 : Sekretariat Direktorat Jenderal Peternakan dan Kesehatan Hewan, Kementerian Pertanian</Text>
      </View>
    </QuestionView>

    {/* Penanggung Jawab Teknis (setingkat Eselon 3) */}
    <QuestionView number={'2.2.'} label={'Penanggung Jawab Teknis (setingkat Eselon 3):'}>
      <View style={[styles.paragraphView]}>
          <Text>Jabatan : drh. Aslila Ramadhany Daulay</Text>
          <Text>Alamat : Jl. Harsono RM No. 3 Gedung C Lantai 7, Ragunan, Jakarta Selatan </Text>
          <View style={styles.numberingView}>
            <Text>Telepon : (021) 78844270 </Text>
            <Text>Faksimile : (021) 7815583 </Text>
          </View>
          <Text>Email: <Text style={styles.emailText}>datinnakpusat@pertanian.go.id</Text></Text>
        </View>
    </QuestionView>
  </View>
)

// III. PERENCANAAN DAN PERSIAPAN
const PlanningPage = () => (
  <View style={[styles.marginTop]}>
    <H1View>III. PERENCANAAN DAN PERSIAPAN</H1View>

    {/* Latar Belakang Kegiatan */}
    <QuestionView number={'3.1.'} label={'Latar Belakang Kegiatan:'}>
      <View style={[styles.paragraphView]}>
        <Text style={[styles.justify]}>
          Undang-Undang Nomor 25 Tahun 2004 tentang Sistem Perencanaan Pembangunan Nasional
          mengamanatkan bahwa perencanaan pembangunan didasarkan pada data dan informasi yang akurat
          dan dapat dipertanggungjawabkan. Hal ini menunjukan bahwa ketersediaan data dan informasi
          merupakan komponen penting dalam proses penyelenggaraan pembangunan utamanya dalam
          penentuan kebijakan, alat pengendalian untuk mencegah terjadinya kesalahan, serta mendukung
          penyelenggaraan pemerintahan yang transparan, akuntabel dan partisipatif.{'\n\n'}

          Penyediaan Data Ekonomi dan Data Pokok Subsektor Peternakan dan Kesehatan Hewan dilaksanakan
          oleh Direktorat Jenderal Peternakan dan Kesehatan Hewan melalui Kegiatan Pengumpulan,
          Pengolahan, serta Penyajian Data dan Informasi Peternakan dan Kesehatan Hewan. Data Ekonomi
          Subsektor Peternakan dan Kesehatan Hewan dikumpulkan dan diolah dari instansi terkait seperti Pusat
          Data dan Sistem Informasi Pertanian Kementerian Pertanian Republik Indonesia, Badan Pusat Statistik
          Republik Indonesia, dan Badan Koordinasi Penanaman Modal Republik Indonesia. Sementara Data
          Pokok Subsektor Peternakan dan Kesehatan Hewan dikumpulkan dan diolah secara bertahap, dimulai
          dari tingkat kecamatan, kabupaten/kota, dan provinsi. Hasil rekapitulasi data di tingkat provinsi dikirimkan
          ke Direktorat Jenderal Peternakan dan Kesehatan Hewan untuk diverifikasi, divalidasi, dan diolah.
          Selanjutnya Data Ekonomi dan Data Pokok Subsektor Peternakan dan Kesehatan Hewan yang telah
          diolah, disajikan dalam bentuk publikasi Buku Statistik Peternakan dan Kesehatan Hewan.{'\n\n'}

          Dalam rangka mendapatkan data pokok yang lebih berkualitas dan dapat dipertanggungjawabkan, Ditjen
          PKH telah menerbitkan Petunjuk Teknis Pengumpulan, Pengolahan, dan Penyajian Data Pokok PKH
          melalui Surat Keputusan Direktur Jenderal PKH Nomor 14087/Kpts/OT.040/F/11/2019. Petunjuk Teknis
          tersebut disusun bersama dengan Badan Pusat Statistik RI serta Pusat Data dan Sistem Informasi
          Pertanian Kementerian Pertanian.{'\n\n'}

          Sesuai Peraturan Presiden Nomor 39 Tahun 2019 tentang Satu Data Indonesia, tata kelola data
          pemerintahan harus menghasilkan data yang akurat, mutakhir, terpadu, dan dapat
          dipertanggungjawabkan. Prinsip Satu Data Indonesia harus memenuhi satu Standar Data, Metadata,
          Kode Referensi dan Data Induk yang mudah diakses dan dibagipakaikan. Oleh karena itu, Ditjen PKH
          selaku produsen data menyusun dan memutakhirkan Metadata Kegiatan Pengumpulan, Pengolahan,
          dan Penyajian Data Pokok Peternakan dan Kesehatan Hewan.{'\n'}
        </Text>
      </View>
    </QuestionView>

    {/* Tujuan Kegiatan */}
    <QuestionView number={'3.2.'} label={'Tujuan Kegiatan:'}>
      <View style={[styles.paragraphView]}>
        <Text style={[styles.justify]}>
          Kegiatan Pengumpulan, Pengolahan, dan Penyajian Data Pokok Peternakan dan Kesehatan Hewan
          dilaksanakan untuk mendapatkan data populasi ternak; pemotongan ternak tercatat dan tidak tercatat;
          produksi daging, telur, dan susu; pengeluaran ternak dan hasil ternak; serta pemasukan ternak dan hasil
          ternak.
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
        <RencanaJadwalKegiatanLevel2 label="1. Perencanaan Kegiatan" />
        <RencanaJadwalKegiatanLevel2 label="2. Desain" />
        <RencanaJadwalKegiatanLevel1 label="B. Pengumpulan" />
        <RencanaJadwalKegiatanLevel2 label="3. Pengumpulan Data" />
        <RencanaJadwalKegiatanLevel1 label="C. Pemeriksaan" />
        <RencanaJadwalKegiatanLevel2 label="4. Pengolahan Data" />
        <RencanaJadwalKegiatanLevel2 label="5. Analisis" />
        <RencanaJadwalKegiatanLevel1 label="D. Penyebarluasan" />
        <RencanaJadwalKegiatanLevel2 label="6. Diseminasi Hasil" />
        <RencanaJadwalKegiatanLevel2 label="7. Evaluasi" />
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
          [
            {
              variable_number: '1',
              variable_name: 'Populasi Ternak',
              variable_concept: 'Populasi ternak adalah kumpulan atau jumlah ternak yang hidup pada wilayah dan satu waktu tertentu, kecuali ayam ras pedaging.\n\n' +
                'Populasi ayam ras pedaging (broiler) adalah populasi ayam ras pedaging komersial yang hidup dan pernah hidup di dalam usaha budidaya selama setahun.\n\n',
              variable_definition: '',
              reference_time: 'Referensi waktu pendataan adalah tanggal yang ditetapkan sebagai titik pencatatan populasi, yaitu 31 Desember tahun sebelumnya (t-1). kecuali ayam ras pedaging yaitu populasi ayam ras pedaging yang hidup dan pernah hidup di dalam usaha budidaya selama 1 tahun.'
            },
            {
              variable_number: '2',
              variable_name: 'Pemotongan Ternak Tercatat  ',
              variable_concept: 'Pemotongan ternak tercatat adalah pemotongan ternak yang dilakukan di Rumah Potong Hewan Ruminansia (RPH-R), Rumah Potong Hewan Babi (RPH-B), dan Rumah Potong Hewan Unggas (RPH-U) baik milik pemerintah maupun swasta, serta tempat pemotongan hewan selain RPH yang dilaporkan kepada dinas atau dicatat oleh Dinas yang membidangi fungsi peternakan dan kesehatan hewan setempat.',
              variable_definition: 'Rumah Pemotongan Hewan (RPH) adalah suatu bangunan atau kompleks bangunan dengan desain dan syarat tertentu yang digunakan sebagai tempat memotong hewan (ruminansia, babi atau unggas) bagi konsumsi masyarakat umum, baik milik pemerintah maupun swasta.',
              reference_time: '1 tahun yang lalu (1 Januari s.d. 31 Desember tahun t1).'
            },
          ].map((item) => (
            <VariabelDikumpulkanData key={item.variable_number} number={item.variable_number} name={item.variable_name} 
            concept={item.variable_concept} definition={item.variable_definition} referenceTime={item.reference_time} />
          ))
        }
      </Table>
    </QuestionView>
  </View>
)

// IV. DESAIN KEGIATAN
const DesignPage = () => (
  <View style={styles.marginTop}>
    <H1View>IV. DESAIN KEGIATAN</H1View>

    {/* Kegiatan ini dilakukan */}
    <OptionView number="4.1." label={'Kegiatan ini dilakukan'} selectedValues={[2]}>
      <OptionColumn style={[styles.flex1]} options={[
        { label: 'Hanya sekali', value: 1 },
      ]} />
      <OptionColumn style={[styles.flex1]} options={[
        { label: 'Berulang', value: 2 },
      ]} />
    </OptionView>

    {/* Jika “berulang”, frekuensi penyelenggaraan */}
    <OptionView number="4.2." label={'Jika “berulang” (R.4.1. berkode 2), Frekuensi Penyelenggaraan:'} selectedValues={[7]}>
      <OptionColumn style={[styles.flex1]} options={[
        { label: 'Harian', value: 1 },
        { label: 'Mingguan', value: 2 },
        { label: 'Bulanan', value: 3 },
        { label: 'Triwulanan', value: 4 },
      ]} />
      <OptionColumn style={[styles.flex1]} options={[
        { label: 'Empat Bulanan', value: 5 },
        { label: 'Semesteran', value: 6 },
        { label: 'Tahunan', value: 7 },
        { label: '> Dua Tahunan', value: 8 },
      ]} />
    </OptionView>

    {/* Tipe Pengumpulan Data */}
    <OptionView number="4.3." label="Tipe Pengumpulan Data:">
      <OptionColumn options={[
        { label: 'Longitudinal Panel', value: 1 },
        { label: 'Cross Sectional', value: 2 },
        { label: 'Longitudinal Cross Sectional', value: 3 },
      ]} />
    </OptionView>

    {/* Cakupan Wilayah Pengumpulan Data */}
    <OptionView number="4.4." label="Cakupan Wilayah Pengumpulan Data:">
      <OptionColumn options={[
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

        <WilayahKegiatanData number={'1'} province={''} city={''}/>
        <WilayahKegiatanData number={'2'} province={''} city={''}/>
        <WilayahKegiatanData number={'3'} province={''} city={''}/>
      </Table>
    </QuestionView>

    {/* Metode Pengumpulan Data */}
    <OptionView number="4.6." label="Metode Pengumpulan Data:">
      <OptionColumn options={[
        { label: 'Wawancara', value: 1 },
        { label: 'Mengisi kuesioner sendiri (swacacah)', value: 2 },
        { label: 'Pengamatan (observasi)', value: 4 },
        { label: 'Pengumpulan data sekunder', value: 8 },
        { label: 'Lainnya', value: 16 },
      ]}/>
    </OptionView>

    {/* Sarana Pengumpulan Data */}
    <OptionView number="4.7." label="Sarana Pengumpulan Data:">
      <OptionColumn style={[{ maxWidth: '500px' }]} options={[
        { label: 'Pencil-and-Paper Interviewing (PAPI)', value: 1 },
        { label: 'Computer-assisted Personal Interviewing (CAPI)', value: 2 },
        { label: 'Computer-assisted Telephones Interviewing (CATI)', value: 4 },
        { label: 'Computer Aided Web Interviewing (CAWI)', value: 8 },
        { label: 'Mail', value: 16 },
        { label: 'Lainnya', value: 32 },
      ]}/>
    </OptionView>

    {/* Unit Pengumpulan Data */}
    <OptionView number="4.8." label="Unit Pengumpulan Data:">
      <OptionColumn options={[
        { label: 'Individu', value: 1 },
        { label: 'Rumah tangga', value: 2 },
        { label: 'Usaha/perusahaan', value: 4 },
        { label: 'Lainnya', value: 8 },
      ]}/>
    </OptionView>
  </View>
)

// V. DESAIN SAMPEL
const SamplingPage = () => (
  <View style={styles.marginTop}>
    <H1View>
      V. DESAIN SAMPEL {'\n'}
      <Text style={{ fontWeight: 'normal' }}>Diisi jika cara pengumpulan data adalah survei</Text>
    </H1View>

    {/* Jenis Rancangan Sampel */}
    <OptionView label="Jenis Rancangan Sampel:" number="5.1.">
      <OptionColumn options={[
        { label: 'Single Stage/Phase', value: 1 },
        { label: 'Multi Stage/Phase', value: 2 }
      ]} />
    </OptionView>

    {/* Metode Pemilihan Sampel Tahap Terakhir */}
    <OptionView label="Metode Pemilihan Sampel Tahap Terakhir:" number="5.2.">
      <OptionColumn options={[
        { label: 'Sampel Probabilitas', value: 1 },
        { label: 'Sampel Nonprobabilitas', value: 2 }
      ]} />
    </OptionView>
    
    {/* Jika “sampel probabilitas”, metode yang digunakan */}
    <OptionView label="a. Jika “sampel probabilitas”, metode yang digunakan:" number="5.3.">
      <OptionColumn options={[
        { label: 'Simple Random Sampling', value: 1 },
        { label: 'Systematic Random Sampling', value: 2 },
        { label: 'Stratified Random Sampling', value: 3 },
        { label: 'Cluster Sampling', value: 4 },
        { label: 'Probability Proportional to Size Sampling', value: 5 },
      ]} />
    </OptionView>

    {/* Jika “sampel nonprobabilitas”, metode yang digunakan */}
    <OptionView label="b. Jika “sampel nonprobabilitas”, metode yang digunakan:" number="5.3.">
      <OptionColumn options={[
        { label: 'Quota Sampling', value: 6 },
        { label: 'Accidental Sampling', value: 7 },
        { label: 'Purposive Sampling', value: 8 },
        { label: 'Snowball Sampling', value: 9 },
        { label: 'Saturation Sampling', value: 1 },
      ]} />
    </OptionView>

    {/* Kerangka Sampel Tahap Terakhir */}
    <QuestionView label="Kerangka Sampel Tahap Terakhir:" number="5.4." style={[styles.minHeightHalf]}>
      <Text />
    </QuestionView>

    {/* Fraksi Sampel Keseluruhan */}
    <QuestionView label="Fraksi Sampel Keseluruhan:" number="5.5." style={[styles.minHeightHalf]}>
      <Text />
    </QuestionView>

    {/* Nilai Perkiraan Sampling Error Variabel Utama */}
    <QuestionView label="Nilai Perkiraan Sampling Error Variabel Utama:" number="5.6." style={[styles.minHeightHalf]}>
      <Text />
    </QuestionView>

    {/* Unit Sampel */}
    <QuestionView label="Unit Sampel:" number="5.7." style={[styles.minHeightHalf]}>
      <Text />
    </QuestionView>

    {/* Unit Observasi */}
    <QuestionView label="Unit Observasi:" number="5.8." style={[styles.minHeightHalf]}>
      <Text />
    </QuestionView> 
  </View>

)

// VI. PENGUMPULAN DATA
const CollectionPage = () => (
  <View style={styles.marginTop}>
    <H1View>VI. PENGUMPULAN DATA</H1View>

    {/* Apakah Melakukan Uji Coba (Pilot Survey)? */}
    <OptionView label="Apakah Melakukan Uji Coba (Pilot Survey)?" number="6.1.">
      <OptionColumn options={[
        { label : 'Ya', value: 1 },
        { label : 'Tidak', value: 2 },
      ]} />
    </OptionView>

    {/* Metode Pemeriksaan Kualitas Pengumpulan Data */}
    <OptionView label="Metode Pemeriksaan Kualitas Pengumpulan Data:" number="6.2.">
      <OptionColumn options={[
        { label: 'Kunjungan kembali (revisit)', value: 1 },
        { label: 'Supervisi', value: 2 },
        { label: 'Task Force', value: 4 },
        { label: 'Lainnya', value: 8 },
      ]} />
    </OptionView>

    {/* Apakah Melakukan Penyesuaian Nonrespon? */}
    <OptionView label="Apakah Melakukan Penyesuaian Nonrespon?" number="6.3.">
      <OptionColumn options={[
        { label: 'Ya', value: 1 },
        { label: 'Tidak', value: 2 },
      ]} />
    </OptionView>

    {/* Petugas Pengumpulan Data */}
    <OptionView label="Petugas Pengumpulan Data:" number="6.4.">
      <OptionColumn style={[{ maxWidth: '500px' }]} options={[
        { label: 'Staf instansi penyelenggara', value: 1 },
        { label: 'Mitra/tenaga kontrak', value: 2 },
        { label: 'Staf instansi penyelenggara dan mitra/tenaga kontrak', value: 3 },
      ]} />
    </OptionView>

    {/* Persyaratan Pendidikan Terendah Petugas Pengumpulan Data */}
    <OptionView label="Persyaratan Pendidikan Terendah Petugas Pengumpulan Data:" number="6.5.">
      <OptionColumn options={[
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
          <Text>34 orang</Text>
        </View>
        <View style={styles.optionRow}>
          <Text>Pengumpul data/enumerator</Text>
          <Text>34 orang</Text>
        </View>
      </View>
    </QuestionView>

    {/* Apakah Melakukan Pelatihan Petugas? */}
    <OptionView label="Apakah Melakukan Pelatihan Petugas?" number="6.7.">
      <OptionColumn options={[
        { label: 'Ya', value: 1 },
        { label: 'Tidak', value: 2 },
      ]} />
    </OptionView>
  </View>
)

// VII. PENGOLAHAN DAN ANALISIS
const AnalysisPage = () => (
  <View style={styles.marginTop}>
    <H1View>VII. PENGOLAHAN DAN ANALISIS</H1View>
    
    {/* Tahapan Pengolahan Data */}
    <OptionViewRow number={'7.1.'} label={'Tahapan Pengolahan Data:'} options={[
      { label: 'Penyuntingan (Editing)', value: 1 },
      { label: 'Penyandian (Coding) ', value: 2 },
      { label: 'Data Entry', value: 2 },
      { label: 'Penyahihan (Validasi)', value: 1 }
    ]} />

    {/* Metode Analisis */}
    <OptionView number="7.2." label="Metode Analisis:">
      <OptionColumn 
        options={[
          { value: 1, label: 'Deskriptif' },
          { value: 2, label: 'Inferensia' },
          { value: 3, label: 'Deskriptif dan Inferensia' },
        ]}
      />
    </OptionView>

    {/* Unit Analisis */}
    <OptionView number="7.3." label="Unit Analisis:">
      <OptionColumn 
        options={[
          { value: 1, label: 'Individu' },
          { value: 2, label: 'Rumah tangga' },
        ]}
      />
      <OptionColumn 
        options={[
          { value: 1, label: 'Individu' },
          { value: 2, label: 'Rumah tangga' },
        ]}
      />
    </OptionView>

    {/* Tingkat Penyajian Hasil Analisis */}
    <OptionView number="7.4." label="Tingkat Penyajian Hasil Analisis:">
      <OptionColumn 
        options={[
          { value: 1, label: 'Nasional' },
          { value: 2, label: 'Provinsi' },
          { value: 3, label: 'Kabupaten/Kota' },
        ]}
      />
      <OptionColumn 
        options={[
          { value: 4, label: 'Kecamatan' },
          { value: 5, label: 'Lainnya' },
        ]}
      />
    </OptionView>
  </View>
)

// VIII. DISEMINASI HASIL
const DisseminationPage = () => (
  <View style={styles.marginTop}>
    <H1View>VIII. DISEMINASI HASIL</H1View>

    {/* Produk Kegiatan yang Tersedia untuk Umum */}
    <OptionViewRow number="8.1." label="Produk Kegiatan yang Tersedia untuk Umum:" options={[
      { label: 'Tercetak (hardcopy)', value: 1 },
      { label: 'Digital (softcopy) ', value: 2 },
      { label: 'Data Mikro', value: 2 },
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
        <RencanaRilisData label={'Tercetak'} date={'30'} month={'30'} year={'2024'} />
        <RencanaRilisData label={'Digital'} date={'30'} month={'30'} year={'2024'} />
        <RencanaRilisData label={'Data Mikro'} date={'-'} month={'-'} year={'-'} />
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

const RencanaJadwalKegiatanLevel2 = ({ label }: { label: string }) => (
  <TableRow>
    <TableData style={[styles.flex1]} isFirstData={true}>
      <Text style={[styles.sectionPadding, { paddingLeft: '18px' }]}>{label}</Text>
    </TableData>
    <TableData style={[styles.flex1, styles.flexCenter]}>
      <View style={[styles.borderRight, styles.sectionPadding, styles.tableRow, styles.flexCenter, styles.flex1]}>
        <Text style={[styles.bold]}>01</Text>
      </View>
      <View style={[styles.borderRight, styles.sectionPadding, styles.tableRow, styles.flexCenter, styles.flex1]}>
        <Text style={[styles.bold]}>01</Text>
      </View>
      <View style={[styles.sectionPadding, styles.tableRow, styles.flexCenter, styles.flex1]}>
        <Text style={[styles.bold]}>2021</Text>
      </View>
    </TableData>
    <TableData style={[styles.flexCenter, { width: '30px' }]}>
      <Text>s.d.</Text>
    </TableData>
    <TableData style={[styles.flex1, styles.flexCenter]}>
      <View style={[styles.borderRight, styles.sectionPadding, styles.tableRow, styles.flexCenter, styles.flex1]}>
        <Text style={[styles.bold]}>01</Text>
      </View>
      <View style={[styles.borderRight, styles.sectionPadding, styles.tableRow, styles.flexCenter, styles.flex1]}>
        <Text style={[styles.bold]}>01</Text>
      </View>
      <View style={[styles.sectionPadding, styles.tableRow, styles.flexCenter, styles.flex1]}>
        <Text style={[styles.bold]}>2021</Text>
      </View>
    </TableData>
  </TableRow>
)

const VariabelDikumpulkanData = (
  { number, name, concept, definition, referenceTime } :
  { number: string, name: string, concept?: string, definition?: string, referenceTime?: string }
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

const WilayahKegiatanData = ({ number, province, city } : { number: string, province: string, city: string }) => (
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

const RencanaRilisData = ({ label, date, month, year } : { label: string, date: string, month: string, year: string }) => (
  <TableRow>
    <TableData isFirstData={true} style={[styles.sectionPadding, styles.flexCenter, { width: '100px' }]}>
      <Text>{label}</Text>
    </TableData>
    <TableData style={[styles.flex1, styles.sectionPadding, styles.flexCenter]}>
      <Text>{date}</Text>
    </TableData>
    <TableData style={[styles.flex1, styles.sectionPadding, styles.flexCenter]}>
      <Text>{month}</Text>
    </TableData>
    <TableData style={[styles.flex1, styles.sectionPadding, styles.flexCenter]}>
      <Text>{year}</Text>
    </TableData>
  </TableRow>
)

// Component

const WrapView = ({ children, style, wrap=false } : { children: ReactNode, style?: Style[], wrap?: boolean }) => (
  <View wrap={wrap} style={style}>
    {children}
  </View>
)

const OptionColumn = ({ options, style=[] } : { options: {label: string, value: number}[], style?: Style[] }) => (
  <View style={[styles.optionColumn, styles.optionLabel, ...(style && [...style])]}>
    {options.map((option, index) => (
      <View style={[styles.optionRow]} key={index}>
        <Text style={[]}>{option.label}</Text>
        <View style={{ position: 'relative' }}>
          <Text>
            - {option.value}
          </Text>
          {option.value === 1 && (<View style={styles.optionChecked} />)}
        </View>
      </View>
    ))}
  </View>
)

const OptionView = (
  { children, selectedValues=[], label, number='', style=[] } :
  { children: ReactNode, selectedValues?: number[], label: string, number?: string, style?: Style[] }
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
      <Text>{selectedValues.length ? selectedValues.join(', ') : '  '}</Text>
    </View>
  </WrapView>
)

type OptionType = {
  value: number;
  label: string;
}
const OptionViewRow = ({ label, number, options } : { label: string, number: string, options: OptionType[] }) => (
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
                <Text style={styles.sectionPadding}>{option.value}</Text>
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

export default function PreviewPage() {
    return (
      <>
          <PDFViewer className="w-full min-h-screen">
              <MetadataDocument />
          </PDFViewer>
      </>
    )
}