import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const data = {
        "results": [
            {
                "id": 175,
                "company": "PT Barito Renewables Energy Tbk",
                "code": "BREN",
                "business": "Infrastructures",
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/1694998470579l_BREN-logo.png",
                "description": "PT Barito Renewables Energy Tbk (selanjutnya disebut “Barito Renewables” atau “Perseroan”) adalah perusahaan holding yang berbasis di Indonesia, dan merupakan bagian dari Grup Barito Pacific. Barito Renewables berfokus pada strategi jangka panjang untuk menyediakan energi yang lebih bersih dan emisi yang lebih rendah dan mendukung target Indonesia untuk transisi menuju Net Zero Emission (NZE). Barito Renewables memulai operasional melalui salah satu entitas anak yaitu Star Energy Geothermal Group, produsen listrik tenaga panas bumi terkemuka.\r\n\r\nSaat ini Grup Perseroan mengoperasikan tiga aset panas bumi yang berlokasi di Jawa Barat, dengan total kapasitas terpasang sebesar 886MW, mewakili sekitar 38% pangsa pasar di Indonesia.",
                "eipo_start_at": "2023-09-18T00:00:00",
                "eipo_end_at": "2023-10-06T23:59:00",
                "phase": "Tanggal Akhir Bookbuilding",
                "phase_date": "2023-09-25T23:59:00",
                "type": "E-IPO"
            },
            {
                "id": 174,
                "company": "PT Sumber Sinergi Makmur Tbk",
                "code": "IOTF",
                "business": "Technology",
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/1694661694875l_LOGOFoxLoggerHD(BLUE).png",
                "description": "Perseroan, berkedudukan di Kota Administrasi Jakarta Pusat. didirikan dengan nama PT Sumber Sinergi Makmur berdasarkan Akta Pendirian No. 88 tanggal 19 Mei 2015, yang dibuat di hadapan Zainuddin, S.H., Notaris di Jakarta Pusat. Perseroan mendapatkan status badan hukum berdasarkan Surat Keputusan Menkumham No. AHU-2440801.01.01.Tahun 2015 tanggal 28 Mei 2015, serta telah didaftarkan pada Daftar Perseroan No. AHU-3510120.AH.01.11.Tahun 2015 tanggal 28 Mei 2015, dan juga telah diumumkan di BNRI No. 55 dan TBNRI No. 35363 tahun 2022  (“Akta Pendirian”).\r\n\r\nSejak pendirian dan mendapatkan status sebagai badan hukum, Anggaran Dasar Perseroan telah dan beberapa kali diubah dengan perubahan terakhir berdasarkan:\r\n\r\n1. Akta Pernyataan Keputusan Para Pemegang Saham No. 57 tanggal 25 Mei 2023, yang dibuat di hadapan Elizabeth Karina Leonita, S.H., M.Kn, notaris di Jakarta Selatan, sebagaimana telah disetujui oleh Menkumham berdasarkan Surat Keputusan No. AHU-0028881.AH.01.02.Tahun 2023 tanggal 25 Mei 2023 dan telah diberitahukan kepada Menkumham berdasarkan Surat Penerimaan Pemberitahuan Perubahan Anggaran Dasar No. AHU-AH.01.03-0068237 tanggal 25 Mei 2023 dan Surat Penerimaan Pemberitahuan Perubahan Data Perseroan No. AHU-AH.01.09-0120764 tanggal 25 Mei 2023, serta telah didaftarkan pada Daftar Perseroan No. AHU-0096180.AH.01.11.Tahun 2023 tanggal 25 Mei 2023, dan juga telah diumumkan di BNRI No. 054 dan TBNRI No. 019436 tanggal 7 Juli 2023 (“Akta No. 57/2023”), \r\n2. Akta Pernyataan Keputusan Para Pemegang Saham No. 84 tanggal 24 Juli 2023, yang dibuat dihadapan Elizabeth Karina Leonita, S.H., M.Kn, notaris di Jakarta Selatan, sebagaimana telah diberitahukan kepada Menkumham berdasarkan Surat Penerimaan Pemberitahuan Perubahan Anggaran Dasar No. AHU-AH.01.03-0096374 tanggal 24 Juli 2023, serta telah didaftarkan pada Daftar Perseroan No. AHU-0140940.AH.01.11.Tahun 2023 tanggal 24 Juli 2023 (“Akta No. 084/2023”)\r\n\r\n(Akta Pendirian beserta perubahan-perubahannya termasuk namun tidak terbatas sebagaimana termuat dalam Akta No. 57/2023 dan Akta No. 084/2023 selanjutnya disebut “Anggaran Dasar”).\r\n\r\nBerdasarkan Akta Pendirian, Perseroan memiliki maksud dan tujuan serta kegiatan usaha antara lain menjalankan usaha-usaha dibidang perdagangan, pembangunan, pengangkutan darat, perindustrian, perbengkelan, percetakan, pertanian dan jasa.\r\n\r\nSampai dengan tanggal Prospektus ini, kegiatan usaha yang dijalankan oleh Perseroan sebagai berikut:\r\n\r\n1. Perdagangan Besar Peralatan Telekomunikasi (KBLI No. 46523), sehubungan dengan penjualan alat GPS Tracker;\r\n2. Aktivitas Telekomunikasi Lainnya yang Tidak Dapat Diklasifikasikan di Tempat Lain (KBLI No. 61999), sehubungan dengan penjualan SIM Card GPS Tracker;\r\n3. Penerbitan Piranti Lunak (Software) (KBLI No. 58200), sehubungan dengan kepemilikan dan pengelolaan aplikasi Foxlogger; dan\r\n4. Portal Web dan/atau Platform Digital dengan Tujuan Komersial (KBLI No. 63122), sehubungan dengan kepemilikan dan pengelolaan website https://foxlogger.co.id/\r\n\r\nPerseroan bergerak dalam bidang penjualan GPS Pelacak Kendaraan. Perseroan melayani penjualan perangkat keras (hardware) dan perangkat lunak (software) untuk produk Internet of Things (IoT) transportasi darat berupa gps tracker / gps pelacak. Konsumen Perseroan mayoritas adalah perusahaan logistik, rental, pembiayaan, korporasi dan individu yang ingin memastikan posisi kendaraan selalu dalam keadaan yang terpantau dan tercatat dengan akurat aktivitasnya seperti pergi kemana saja, parkir dimana dan berapa lama, serta berapa jauh jarak tempuh yang dilalui. Perseroan memberikan layanan penjualan alat (gps tracker), layanan instalasi gps tracker, perangkat lunak (software tracking), purna jual, dan kustomisasi perangkat lunak yang selanjutnya dapat digunakan / diintegrasikan (melalui API) dengan perangkat lunak mandiri pelanggan.\r\n\r\nPerseroan memiliki layanan pelanggan via telepon dan online chat selama 24 Jam dengan dukungan teknis yang tersebar di Jakarta, Bogor, Depok, Tangerang, Bekasi, Cikarang, Karawang, Bandung, Jogjakarta, Solo, Semarang, Surabaya, Kediri, Malang, Denpasar, Makassar, Manado, Banjarmasin, Balikpapan, Pontianak, Medan, Palembang, dan Lampung.\r\n\r\nFox Logger\r\n\r\nFox Logger adalah software dan hardware pelacakan pertama di Indonesia yang bisa menerima data dari banyak merek GPS Car Tracker dengan Call Center 24 jam. Perseroan juga bekerjasama dengan beberapa manufaktur pembuat alat GPS Tracker di China agar layanan yang diberikan dapat menjadi lebih maksimal. Shenzen Jimi IoT merupakan perusahaan memanufaktur perangkat keras (gps tracker) di China dan merupakan pemasok Perseroan satu-satunya. Dengan Fox Logger GPS Tracking System 2.0, Perseroan menyediakan sistem pelacakan armada-armada bisnis ataupun pribadi serta dapat diaplikasikan pada segala macam jenis kendaraan.\r\n\r\nBerikut kategori produk dan jasa Perseroan:\r\n\r\nNo\r\n\r\nNama Produk\r\n\r\nDeskripsi\r\n\r\n1\r\n\r\nFox Logger 168\r\n\r\nFitur Alat : Lacak Posisi, Sadap Percakapan, Matikan Mesin via SMS, Tombol SOS, SMS Notifikasi Otomatis jika alat dicabut dari AKI\r\n\r\nCocok untuk : Mobil, Truck, Ambulan, Alat Berat, Generator Set (Genset)\r\n\r\n2\r\n\r\nFox Logger 212\r\n\r\nFitur Alat : Lacak Posisi, Matikan Mesin via SMS, SMS Notifikasi Otomatis jika alat dicabut dari AKI\r\n\r\nCocok untuk : Mobil, Motor, Truck, Ambulans, Generator Set (Genset)\r\n\r\n3\r\n\r\nFox Logger OBD\r\n\r\nFitur Alat : Lacak Posisi, Mudah dipasang, Matikan Mesin via SMS, Tidak Merusak Pengkabelan dan Garansi Mobil, SMS Notifikasi Otomatis jika alat dicabut dari AKI\r\n\r\nCocok untuk : Mobil dengan socket OBD\r\n\r\n4\r\n\r\nFox Logger Asset Tracker\r\n\r\nFitur Alat : Lacak Posisi, Mudah dipasang, Rekam Jejak 100 Hari, Lacak Posisi Keluarga, Mendengar Percakapan Secara Langsung\r\n\r\nCocok untuk : Barang Pribadi Berat, Harta atau Aset Berharga\r\n\r\nFox Logger memiliki fitur-fitur sebagai berikut:\r\n\r\n* Lacak Posisi dan Aktivitas Kendaraan\r\n* Matikan Mesin Kendaraan via Handphone\r\n* Monitor Suara Dalam Kabin\r\n* History Perjalanan\r\n\r\nUntuk pemasangan dan aplikasi tracking system disediakan secara gratis dikarenakan sudah melekat dengan produk bundling yang dijual oleh perseroan.\r\n\r\nPerseroan dan Perusahaan Anak memiliki keunggulan kompetitif sebagai berikut:\r\n\r\n1. Perseroan telah memiliki  sertifikasi yang berstandar internasional yang dapat menjamin kualitas dari software dan platform Perseroan dan Perusahaan Anak;\r\n2. Perseroan dan Perusahaan Anak memiliki tim IT yang dapat menyesuaikan fitur-fitur tambahan sesuai kebutuhan setiap pelanggan;\r\n3. Telah mendaftarkan dan mendapatkan sertifikasi postel untuk semua internet of things (IoT)\r\n4. Memiliki server pribadi.",
                "eipo_start_at": "2023-09-14T00:00:00",
                "eipo_end_at": "2023-10-09T23:59:00",
                "phase": "Awal Penawaran Umum",
                "phase_date": "2023-10-02T00:00:00",
                "type": "E-IPO"
            },
            {
                "id": 176,
                "company": "PT Koka Indonesia Tbk",
                "code": "KOKA",
                "business": "Infrastructures",
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/1695085243843l_Screenshot2023-09-18180528.png",
                "description": "PT Koka Indonesia Tbk (“Perseroan”) adalah suatu perseroan terbatas yang didirikan pada tahun 2011 dan bergerak dalam bidang kontraktor umum proyek konstruksi, teknik mesin, teknik geoteknik, desain interior, dan furniture. Perseroan memiliki kualifikasi yang tinggi dalam bidang konstruksi bangunan, konstruksi industri pabrik, dan jembatan & terowongan, dimana Perseroan telah melakukan serangkaian proyek rekayasa investasi dan konstruksi di Indonesia . Selama lebih dari 10 (sepuluh) tahun, Perseroan telah mengerjakan lebih dari 100 proyek di Indonesia, dimana dalam menjalankan kegiatan usahanya Perseroan menerapkan sistem manajemen mutu, kesehatan kerja, sistem manajemen keselamatan berdasarkan standar ISO 9001, ISO 14001, dan OHSAS 18001",
                "eipo_start_at": "2023-09-19T00:00:00",
                "eipo_end_at": "2023-10-09T23:59:00",
                "phase": "Tanggal Akhir Bookbuilding",
                "phase_date": "2023-09-26T23:59:00",
                "type": "E-IPO"
            },
            {
                "id": 177,
                "company": "PT PULAU SUBUR TBK",
                "code": "PTPS",
                "business": "Industrials",
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/1695174042947l_logopulausubur.png",
                "description": "PT Pulau Subur berdiri sejak tahun 1980 yang memiliki lahan perkebunan Kelapa Sawit pada 2 lokasi yaitu : Desa Gelebak Dalam, Kecamatan Rambutan, Kabupaten Banyuasin dan Desa Sukadarma, Kecamatan Jejawi, Kabupaten Ogan Komering Ilir (OKI), Palembang, Sumatera Selatan. Pada tahun 1981 perseroan memulai usahanya di bidang perkebunan karet dan jagung serta peternakan dan perikanan. Sering semakin meningkatnya tren permintaan terhadap CPO, pada tahun 2003 Perseroan memulai penanaman bibit kelapa sawit di lahan seluas 12,5 Ha kemudian Perseroan memutuskan untuk fokus pada pengembangan kelapa sawit hingga saat ini dengan total luas izin lokasi sebesar 1.180,39 Ha, total luas lahan 1.205,52 Ha terdiri dari lahan berstatus HGU 882,58 Ha dan APH 322,94 Ha. Jumlah produksi Ha/tahun 2022 sebesar 30.059 ton Tandan Buah Segar (TBS). Dapat dijabarkan luas lahan Tanaman Belum Menghasilkan (TBM) Perseroan adalah sebesar 94,89 Ha atau sebesar (8,70%) dan luas lahan Tanaman Menghasilkan (TM) 995,75 Ha (94,89%).\r\n\r\nPT Pulau Subur Tbk menjalankan usahanya menurut dan berdasarkan peraturan perundang-undangan yang berlaku di Republik Indonesia serta berkedudukan di Palembang, didirikan berdasarkan Akta Perseroan Terbatas PT Pulau Subur No. 1 tanggal 1 Oktober 1980 yang dibuat di hadapan Notaris Justin AR., S.H., Notaris di Palembang , yang telah memperoleh pengesahan dari Menteri Kehakiman Republik Indonesia sesuai dengan Surat Keputusan No. YA.5/13/21 tanggal 7 Juni 1982 serta telah didaftarkan dalam buku daftar Kepaniteraan Pengadilan Negeri Palembang di bawah No. 46/1982 tanggal 7 Juli 1982 dan telah diumumkan dalam Berita Negara Republik Indonesia No. 3728, Tambahan Berita Negara No. 50 tanggal 22 Juni 1999 (“Akta Pendirian Perseroan”).",
                "eipo_start_at": "2023-09-20T00:00:00",
                "eipo_end_at": "2023-10-09T23:59:00",
                "phase": "Awal Penawaran Umum",
                "phase_date": "2023-10-03T00:00:00",
                "type": "E-IPO"
            },
            {
                "id": 178,
                "company": "PT Logisticsplus International Tbk",
                "code": "LOPI",
                "business": "Transportation & Logistic",
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/1695174315118l_LOGOLOPI.jpeg",
                "description": "Perseroan merupakan perusahaan yang bergerak dalam bidang jasa pengurusan transportasi (Freight Forwarding) yang melayani pasar domestik dan luar negeri. Perseroan beralamat di SAV Building Jl. Kavling Polri No. 20, Jagakarsa, Jakarta Selatan 12620. Berdiri pada tahun 2013, Perseroan memulai aktivitas operasional di tahun 2016 dengan 2 unit truk, dengan total pelanggan hanya 3 perusahaan. Sampai saat ini, Perseroan terus mengembangkan usahanya hingga memiliki lebih dari 20 pelanggan dengan peningkatan armada baik milik sendiri maupun sewa.\r\n\r\nPerseroan merupakan perusahan hasil dari kerjasama antara para pengusaha Nasional yang ahli dibidang logistik/jasa pengiriman dengan anak perusahan Logisticsplus Inc yang berada di Indonesia. Atas hubungan istimewa ini menjadikan Perseroan mendapat hak istimewa untuk mempergunakan jaringan Logistics Plus Inc yang berkantor pusat di Amerika dan mempunyai kantor perwakilan di hampir 180 Negara. Pada saat Perseroan mendapatkan permintaan dari pelanggan yang ingin mengirimkan barang dari Indonesia ke luar negeri atau sebaliknya maka dapat memanfaatkan jaringan internasional tersebut. Perusahaan juga melayani pengurusan jasa kepabeanan, baik untuk tujuan ekspor maupun impor serta saat ini melayani jasa pergudangan yang meliputi: pengemasan, penyimpanan, pemilahan barang dan pelabelan.\r\n\r\nSelama bertahun-tahun Perseroan telah berpengalaman dalam melakukan berbagai macam pengiriman barang baik di dalam maupun di luar negeri serta membantu setiap kebutuhan pelanggan dalam mendistribusikan barang mereka, yang diantaranya: alat kesehatan, peralatan pengeboran minyak, peralatan pemurnian minyak, alat telekomunikasi, alat transportasi kereta, makanan, pembangkit listrik, dan juga membantu pengemasan, penyimpanan produk pelanggan, serta melayani jasa pengurusan dokumentasi bea cukai.",
                "eipo_start_at": "2023-09-20T00:00:00",
                "eipo_end_at": "2023-10-09T23:59:00",
                "phase": "Awal Penawaran Umum",
                "phase_date": "2023-10-04T00:00:00",
                "type": "E-IPO"
            },
            {
                "id": 172,
                "company": "PT Lovina Beach Brewery Tbk",
                "code": "STRK",
                "business": "Consumer Non-Cyclicals",
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/1693967320719l_LogoPTLovinaBeachBreweryTbk.png",
                "description": "PT Lovina Beach Brewery (“Perseroan”) adalah perusahaan yang menjadi salah satu pelopor dalam industri craft beer di Indonesia yang kegiatan usaha utamanya adalah melakukan distribusi minuman alkohol. Perseroan melalui Perusahaan Anak juga memproduksi minuman alkohol mulai dari proses awal brewing, distilling hingga menjadi produk minuman alkohol yang siap untuk didistribusikan. Bahan baku utama yang digunakan untuk memproduksi minuman alkohol diimpor dari berbagai negara seperti Jerman, Belgia dan lain-lain. Perseroan berkomitmen untuk memproduksi produk minuman alkohol yang berkualitas internasional.\r\n\r\nPerseroan mulai melakukan kegiatan usahanya dalam mendistribusikan minuman beralkohol pada tahun 2010 dimana pada saat itu Perseroan hanya mendistribusikan produk golongan A (produk minuman dengan kadar alkohol sebesar 0% hingga 5%). Kemudian pada tahun 2016 Perseroan mengembangkan kegiatan usahanya dengan mendistribusikan produk minuman alkohol golongan B (produk minuman dengan kadar alkohol sebesar 5,01% hingga 20,00%) dan golongan C (produk minuman dengan kadar alkohol sebesar 20,01% hingga 55,00%). Pada tahun 2020 Perseroan mendistribusikan minuman alkohol dengan cita rasa lokal.",
                "eipo_start_at": "2023-09-06T00:00:00",
                "eipo_end_at": "2023-10-10T23:59:00",
                "phase": "Awal Penawaran Umum",
                "phase_date": "2023-10-03T00:00:00",
                "type": "E-IPO"
            },
            {
                "id": 173,
                "company": "PT Kokoh Exa Nusantara Tbk",
                "code": "KOCI",
                "business": "Properties & Real Estate",
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/1694077439914l_LogoPTKEN(1).png",
                "description": "PT Kokoh Exa Nusantara (\"Perseroan\") merupakan perusahaan yang bergerak di bidang konstruksi dan real estat. Perseroan didirikan pada tahun 2019 dan berdomisili di Kabupaten Bangkalan, Madura, Provinsi Jawa Timur. Perseroan melaksanakan kegiatan usaha baik sebagai Pengembang (Developer) maupun Jasa Konstruksi. Saat ini, Perseroan sedang mengembangkan proyek PERUMAHAN KOKOH CITY, dan sedang memfokuskan penjualan rumah subsidi untuk Masyarakat Berpenghasilan Rendah (MBR) di samping penjualan rumah komersil yang dirancang dan dikembangkan dengan konsep “Kota Mandiri”. Kokoh City memiliki jarak sekitar 15 km dari pusat kota Surabaya. Kawasan Kokoh City termasuk dalam pengembangan GERBANG KERTASUSILA sebagai kawasan penyanggah kota besar Surabaya.\r\n\r\nPerseroan memperoleh dukungan teknologi pembuatan dinding rumah yang sudah dipantenkan oleh salah satu pemegang saham Perseroan yaitu PT Kokoh Anugerah Nusantara yang telah berpengalaman dalam industri real estat dan properti serta konstruksi sejak tahun 2015.\r\n\r\nMenurut Badan Pengelola Tabungan Perumahan Rakyat (BP Tapera) tahun 2022, Perseroan berada pada posisi 5 (lima) besar perannya dalam penyaluran Fasilitas Likuiditas Pembiayaan Perumahan (FLPP) untuk penjualan rumah tapak bagi MBR di Provinsi Jawa Timur dan juga merupakan penyumbang terbesar pada Kabupaten Bangkalan, Madura.",
                "eipo_start_at": "2023-09-07T00:00:00",
                "eipo_end_at": "2023-10-10T23:59:00",
                "phase": "Awal Penawaran Umum",
                "phase_date": "2023-09-27T00:00:00",
                "type": "E-IPO"
            }
        ],
        "err_code": "EC0000000",
        "err_message": "APPROVED/OK"
    }
    // console.log(mock);
    return NextResponse.json({ data })
}

// export default handler