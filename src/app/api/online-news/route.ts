import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    // const keys = 'REOKDYVABBXSV33L'
    // const data = await fetch().then()
    // const url = 'https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=95a79502985240c9bdb867600ba242a1'
    // const res = await fetch(url)
    const data = {
        "count": 2302,
        "results": [
            {
                "id": 598934,
                "source": "U.Today",
                "type": "CRYPTO",
                "title": "Shiba Inu Weekly Burn Rate Rises as Under 1 Billion SHIB Are Burned",
                "description": "Shiba Inu daily volumes also up 100% as traders bet on SHIB price",
                "content": "Shiba Inu daily volumes also up 100% as traders bet on SHIB price",
                "link": "https://u.today/shiba-inu-weekly-burn-rate-rises-as-under-1-billion-shib-are-burned",
                "img_url": "https://resources.cryptocompare.com/news/64/18007595.jpeg",
                "pub_date": "2023-09-24T17:15:00.000",
                "prices": [
                    {
                        "code": "SHIB",
                        "name": "Shiba Inu",
                        "price": 0.11294797000000001,
                        "change": -0.0003155299999999944,
                        "change_pct": -0.0027858047826527913
                    }
                ]
            },
            {
                "id": 598933,
                "source": "Detikcom",
                "type": "STOCK",
                "title": "Zulhas Serahkan Bantuan Beras 2 Ton untuk Masyarakat di Pasar Legi Solo",
                "description": "Menteri Perdagangan Zulkifli Hasan (Zulhas) menyerahkan bantuan beras untuk masyarakat kurang mampu di acara Pasar Murah di Pasar Legi Solo.",
                "content": "Menteri Perdagangan Zulkifli Hasan (Zulhas) menyerahkan bantuan beras untuk masyarakat kurang mampu di acara Pasar Murah di Pasar Legi Solo.",
                "link": "https://finance.detik.com/berita-ekonomi-bisnis/d-6948182/zulhas-serahkan-bantuan-beras-2-ton-untuk-masyarakat-di-pasar-legi-solo?utm_source=ajaib&utm_medium=agregator&utm_campaign=partnership",
                "img_url": "https://akcdn.detik.net.id/community/media/visual/2023/09/24/kemendag.jpeg",
                "pub_date": "2023-09-24T17:13:39.000",
                "prices": []
            },
            {
                "id": 598932,
                "source": "Okezone.com",
                "type": "STOCK",
                "title": "Ini Cara Buka Deposito Bank Mandiri Secara Online",
                "description": "Cara membuka deposito Bank Mandiri secara online wajib diketahui.",
                "content": "Cara membuka deposito Bank Mandiri secara online wajib diketahui.",
                "link": "https://economy.okezone.com/read/2023/09/24/622/2888591/ini-cara-buka-deposito-bank-mandiri-secara-online?utm_source=ajaib&utm_medium=aggregator",
                "img_url": "https://img.okezone.com/dynamic/content/2023/09/24/622/2888591/ini-cara-buka-deposito-bank-mandiri-secara-online-aLjmWNMTyV.JPG?w=300",
                "pub_date": "2023-09-24T17:02:49.000",
                "prices": [
                    {
                        "code": "BMRI",
                        "name": "Bank Mandiri (Persero) Tbk",
                        "price": 6000,
                        "change": 0,
                        "change_pct": 0
                    },
                    {
                        "code": "BACA",
                        "name": "Bank Capital Indonesia Tbk.",
                        "price": 131,
                        "change": 0,
                        "change_pct": 0
                    }
                ]
            },
            {
                "id": 598931,
                "source": "Detikcom",
                "type": "STOCK",
                "title": "Main Judi Online Enggak Bisa Bikin Kaya, Malah Jadi Miskin!",
                "description": "Direktur Eksekutif CELIOS Bhima Yudhistira Adhinegara menjelaskan bukannya membuat kaya raya, judi online justri bisa memiskinkan pelakunya.",
                "content": "Direktur Eksekutif CELIOS Bhima Yudhistira Adhinegara menjelaskan bukannya membuat kaya raya, judi online justri bisa memiskinkan pelakunya.",
                "link": "https://finance.detik.com/berita-ekonomi-bisnis/d-6948065/main-judi-online-enggak-bisa-bikin-kaya-malah-jadi-miskin?utm_source=ajaib&utm_medium=agregator&utm_campaign=partnership",
                "img_url": "https://akcdn.detik.net.id/community/media/visual/2023/03/21/judi-online_169.jpeg",
                "pub_date": "2023-09-24T17:00:08.000",
                "prices": []
            },
            {
                "id": 598930,
                "source": "iNews",
                "type": "STOCK",
                "title": "Gaji YouTuber 1.000 Subscriber per Bulan, Ternyata Besarannya Fantastis!",
                "description": "",
                "content": "",
                "link": "https://www.inews.id/amp/finance/bisnis/gaji-youtuber-1000-subscriber-per-bulan-ternyata-besarannya-fantastis?utm_source=ajaib&utm_medium=partnership&utm_campaign=aggregator",
                "img_url": "https://img.inews.co.id/files/inews_new/2023/09/24/gaji_youtuber_1000_subscriber.jpg",
                "pub_date": "2023-09-24T16:57:00.000",
                "prices": []
            },
            {
                "id": 598928,
                "source": "U.Today",
                "type": "CRYPTO",
                "title": "Weekend Bitcoin Volatility Hits Shockingly Low Levels",
                "description": "Cryptocurrency sector currently navigating through uncharted territories as Bitcoin, preeminent digital currency, exhibits unparalleled low level of volatility",
                "content": "Cryptocurrency sector currently navigating through uncharted territories as Bitcoin, preeminent digital currency, exhibits unparalleled low level of volatility",
                "link": "https://u.today/weekend-bitcoin-volatility-hits-shockingly-low-levels",
                "img_url": "https://resources.cryptocompare.com/news/64/18006942.jpeg",
                "pub_date": "2023-09-24T16:48:00.000",
                "prices": [
                    {
                        "code": "BTC",
                        "name": "Bitcoin",
                        "price": 409632626.59999996,
                        "change": 108640.5,
                        "change_pct": 0.0002652848274764339
                    }
                ]
            },
            {
                "id": 598927,
                "source": "Detikcom",
                "type": "STOCK",
                "title": "Zulhas: Harga Bapok di Pasar Legi Surakarta Murah dan Terjangkau",
                "description": "Di Pasar Legi, Zulhas melakukan pemantauan harga dan ketersediaan pasokan barang kebutuhan pokok (bapok).",
                "content": "Di Pasar Legi, Zulhas melakukan pemantauan harga dan ketersediaan pasokan barang kebutuhan pokok (bapok).",
                "link": "https://finance.detik.com/berita-ekonomi-bisnis/d-6948179/zulhas-harga-bapok-di-pasar-legi-surakarta-murah-dan-terjangkau?utm_source=ajaib&utm_medium=agregator&utm_campaign=partnership",
                "img_url": "https://akcdn.detik.net.id/community/media/visual/2023/09/24/kemendag-1.jpeg",
                "pub_date": "2023-09-24T16:47:12.000",
                "prices": []
            },
            {
                "id": 598929,
                "source": "Sindonews",
                "type": "STOCK",
                "title": "Daftar Uji Coba Gratis KA Cepat Whoosh Tahap 2 Dibuka, Begini Tata Cara dan Syaratnya",
                "description": "Pendaftaran uji coba operasional KA Cepat Whoosh tahap 2 untuk masyarakat secara gratis kembali dibuka, berikut tata cara dan syaratnya.",
                "content": "Pendaftaran uji coba operasional KA Cepat Whoosh tahap 2 untuk masyarakat secara gratis kembali dibuka, berikut tata cara dan syaratnya.",
                "link": "https://ekbis.sindonews.com/read/1209183/34/daftar-uji-coba-gratis-ka-cepat-whoosh-tahap-2-dibuka-begini-tata-cara-dan-syaratnya-1695546551?utm_source=ajaib&utm_medium=aggregator",
                "img_url": "https://pict.sindonews.net/dyn/850/pena/news/2023/09/24/34/1209183/daftar-uji-coba-gratis-ka-cepat-whoosh-tahap-2-dibuka-begini-tata-cara-dan-syaratnya-lsp.jpg",
                "pub_date": "2023-09-24T16:41:57.000",
                "prices": [
                    {
                        "code": "BBRI",
                        "name": "Bank Rakyat Indonesia (Persero) Tbk.",
                        "price": 5350,
                        "change": 0,
                        "change_pct": 0
                    }
                ]
            },
            {
                "id": 598926,
                "source": "Kontan",
                "type": "STOCK",
                "title": "Suku Bunga Masih Tinggi, Simak Prospek dan Rekomendasi Saham Properti di 2023",
                "link": "https://investasi.kontan.co.id/news/suku-bunga-masih-tinggi-simak-prospek-dan-rekomendasi-saham-properti-di-2023",
                "img_url": "https://foto.kontan.co.id/9_2T0rce8RrdOT_rd7Jmikl4kpk=/smart/2011/07/15/1254438056p.jpg",
                "pub_date": "2023-09-24T16:37:38.000",
                "prices": []
            },
            {
                "id": 598924,
                "source": "CoinTelegraph",
                "type": "CRYPTO",
                "title": "How to buy Bitcoin in Dubai",
                "description": "Experience zero tax on crypto trades  find out how to buy Bitcoin in Dubai.",
                "content": "Experience zero tax on crypto trades  find out how to buy Bitcoin in Dubai.",
                "link": "https://cointelegraph.com/news/how-to-buy-bitcoin-in-dubai",
                "img_url": "https://resources.cryptocompare.com/news/16/18006532.jpeg",
                "pub_date": "2023-09-24T16:34:00.000",
                "prices": [
                    {
                        "code": "BTC",
                        "name": "Bitcoin",
                        "price": 409632626.59999996,
                        "change": 108640.5,
                        "change_pct": 0.0002652848274764339
                    }
                ]
            },
            {
                "id": 598922,
                "source": "Detikcom",
                "type": "STOCK",
                "title": "Nagita Slavina Sebut UMKM yang Dibantunya Lebih Berkembang dan Sukses",
                "description": "Nagita Slavina kembali menggelar program Jajarans Festival untuk ketiga kalinya. Ia mengaku programnya tersebut membuat UMKM makanan tradisional lebih  sukses.",
                "content": "Nagita Slavina kembali menggelar program Jajarans Festival untuk ketiga kalinya. Ia mengaku programnya tersebut membuat UMKM makanan tradisional lebih  sukses.",
                "link": "https://finance.detik.com/detiktv/d-6948165/nagita-slavina-sebut-umkm-yang-dibantunya-lebih-berkembang-dan-sukses?utm_source=ajaib&utm_medium=agregator&utm_campaign=partnership",
                "img_url": "https://akcdn.detik.net.id/community/media/visual/2023/08/15/nagita-slavina-5_169.jpeg",
                "pub_date": "2023-09-24T16:31:33.000",
                "prices": []
            },
            {
                "id": 598923,
                "source": "Detikcom",
                "type": "STOCK",
                "title": "Pendaftaran Uji Coba Kereta Cepat Dikeluhkan Bermasalah, Ternyata Kuota Habis",
                "description": "Pendaftaran uji coba gratis Kereta Cepat Jakarta-Bandung yang bakal diberi nama Whoosh tahap 2 dibuka lagi hari ini.",
                "content": "Pendaftaran uji coba gratis Kereta Cepat Jakarta-Bandung yang bakal diberi nama Whoosh tahap 2 dibuka lagi hari ini.",
                "link": "https://finance.detik.com/infrastruktur/d-6948132/pendaftaran-uji-coba-kereta-cepat-dikeluhkan-bermasalah-ternyata-kuota-habis?utm_source=ajaib&utm_medium=agregator&utm_campaign=partnership",
                "img_url": "https://akcdn.detik.net.id/community/media/visual/2023/09/17/mewah-begini-penampakan-interior-kereta-cepat-6_169.jpeg",
                "pub_date": "2023-09-24T16:30:16.000",
                "prices": []
            },
            {
                "id": 598925,
                "source": "CoinTelegraph",
                "type": "CRYPTO",
                "title": "BTC price tracks $26.5K as Bitcoin speculator supply hits 12-year low",
                "description": "BTC price action stays firmly within an established range, while analysis shows that overall Bitcoin investor composition is changing.",
                "content": "BTC price action stays firmly within an established range, while analysis shows that overall Bitcoin investor composition is changing.",
                "link": "https://cointelegraph.com/news/btc-price-bitcoin-speculator-supply-12-year-low",
                "img_url": "https://resources.cryptocompare.com/news/16/18006485.jpeg",
                "pub_date": "2023-09-24T16:30:09.000",
                "prices": [
                    {
                        "code": "BTC",
                        "name": "Bitcoin",
                        "price": 409632626.59999996,
                        "change": 108640.5,
                        "change_pct": 0.0002652848274764339
                    }
                ]
            },
            {
                "id": 598921,
                "source": "Kontan",
                "type": "STOCK",
                "title": "Simak Rekomendasi Saham Pilihan Saat Net Buy Asing Berpotensi Mengalir Lagi",
                "link": "https://investasi.kontan.co.id/news/simak-rekomendasi-saham-pilihan-saat-net-buy-asing-berpotensi-mengalir-lagi",
                "img_url": "https://foto.kontan.co.id/Aj-CscaPXKKjgqqFT1neT3zmcxg=/smart/2023/08/04/481519810p.jpg",
                "pub_date": "2023-09-24T16:21:04.000",
                "prices": []
            },
            {
                "id": 598920,
                "source": "U.Today",
                "type": "CRYPTO",
                "title": "Cardano (ADA) Celebrates 6th Anniversary of Genesis Block Creation",
                "description": "Cardano has reached major milestone not available for every project out there",
                "content": "Cardano has reached major milestone not available for every project out there",
                "link": "https://u.today/cardano-ada-celebrates-6th-anniversary-of-genesis-block-creation",
                "img_url": "https://resources.cryptocompare.com/news/64/18005982.jpeg",
                "pub_date": "2023-09-24T16:13:00.000",
                "prices": [
                    {
                        "code": "ADA",
                        "name": "Cardano",
                        "price": 3788.61083,
                        "change": -11.495170000000144,
                        "change_pct": -0.0030249603563690442
                    }
                ]
            },
            {
                "id": 598919,
                "source": "cryptonews",
                "type": "CRYPTO",
                "title": "This Exchange Holds 5% of All Bitcoin Ever Made",
                "description": "Coinbaseholds nearly 1 millionBitcoin (BTC)in its wallets, accounting for approximately 5% of the total existing BTC supply. Blockchain intelligence platform Arkham has identified Coinbase as the largest Bitcoin entity in the world, holding a total of 947,755 BTC (worth over $25 billion). \"This makes Coinbase the largest Bitcoin entity in the world on Arkham, with almost 5% of all BTC in existence - about as much as Satoshi Nakamoto,\" the platform said in a recent tweet.... Read More: This Exchange Holds 5% of All Bitcoin Ever Made",
                "content": "Coinbaseholds nearly 1 millionBitcoin (BTC)in its wallets, accounting for approximately 5% of the total existing BTC supply. Blockchain intelligence platform Arkham has identified Coinbase as the largest Bitcoin entity in the world, holding a total of 947,755 BTC (worth over $25 billion). \"This makes Coinbase the largest Bitcoin entity in the world on Arkham, with almost 5% of all BTC in existence - about as much as Satoshi Nakamoto,\" the platform said in a recent tweet.... Read More: This Exchange Holds 5% of All Bitcoin Ever Made",
                "link": "https://cryptonews.com/news/exchange-holds-5-of-all-bitcoin-ever-made.htm",
                "img_url": "https://resources.cryptocompare.com/news/52/18005987.jpeg",
                "pub_date": "2023-09-24T16:12:00.000",
                "prices": [
                    {
                        "code": "BTC",
                        "name": "Bitcoin",
                        "price": 409632626.59999996,
                        "change": 108640.5,
                        "change_pct": 0.0002652848274764339
                    },
                    {
                        "code": "ARKM",
                        "name": "Arkham",
                        "price": 5559.928,
                        "change": -53.9350000000004,
                        "change_pct": -0.009607466373867762
                    }
                ]
            },
            {
                "id": 598915,
                "source": "Detikcom",
                "type": "STOCK",
                "title": "BPJS Ketenagakerjaan Puji Keterlibatan BNI dalam Perlindungan PMI",
                "description": "Apresiasi tersebut diberikan karena BNI mendorong diaspora dan pekerja migran Indonesia (PMI) di Hong Kong untuk mendapat data kependudukan yang layak.",
                "content": "Apresiasi tersebut diberikan karena BNI mendorong diaspora dan pekerja migran Indonesia (PMI) di Hong Kong untuk mendapat data kependudukan yang layak.",
                "link": "https://finance.detik.com/berita-ekonomi-bisnis/d-6948123/bpjs-ketenagakerjaan-puji-keterlibatan-bni-dalam-perlindungan-pmi?utm_source=ajaib&utm_medium=agregator&utm_campaign=partnership",
                "img_url": "https://akcdn.detik.net.id/community/media/visual/2023/09/24/bni-2_169.png",
                "pub_date": "2023-09-24T16:08:33.000",
                "prices": [
                    {
                        "code": "BBNI",
                        "name": "Bank Negara Indonesia  (Persero) Tbk.",
                        "price": 9750,
                        "change": 0,
                        "change_pct": 0
                    }
                ]
            },
            {
                "id": 598917,
                "source": "Okezone.com",
                "type": "STOCK",
                "title": "Pasca Pandemi, Miliarder Asia Gencar Investasi Hotel di Singapura hingga Rp92 Triliun",
                "description": "10 miliarder Asia kini tengah gencar melakukan investasi di hotel pasca pandemi.",
                "content": "10 miliarder Asia kini tengah gencar melakukan investasi di hotel pasca pandemi.",
                "link": "https://economy.okezone.com/read/2023/09/24/455/2888726/pasca-pandemi-miliarder-asia-gencar-investasi-hotel-di-singapura-hingga-rp92-triliun?utm_source=ajaib&utm_medium=aggregator",
                "img_url": "https://img.okezone.com/dynamic/content/2023/09/24/455/2888726/pasca-pandemi-miliarder-asia-gencar-investasi-hotel-di-singapura-hingga-rp92-triliun-13xiTfo5Fc.jpg?w=300",
                "pub_date": "2023-09-24T16:02:13.000",
                "prices": [
                    {
                        "code": "BACA",
                        "name": "Bank Capital Indonesia Tbk.",
                        "price": 131,
                        "change": 0,
                        "change_pct": 0
                    }
                ]
            },
            {
                "id": 598918,
                "source": "Okezone.com",
                "type": "STOCK",
                "title": "Intip Prediksi IHSG Pekan Depan, Ini Daftar Rekomendasi Sahamnya",
                "description": "Indeks Harga Saham Gabungan (IHSG) pada Senin (25/9/2023) berpotensi naik pada sepanjang perdagangan.",
                "content": "Indeks Harga Saham Gabungan (IHSG) pada Senin (25/9/2023) berpotensi naik pada sepanjang perdagangan.",
                "link": "https://economy.okezone.com/read/2023/09/24/278/2888742/intip-prediksi-ihsg-pekan-depan-ini-daftar-rekomendasi-sahamnya?utm_source=ajaib&utm_medium=aggregator",
                "img_url": "https://img.okezone.com/dynamic/content/2023/09/24/278/2888742/intip-prediksi-ihsg-pekan-depan-ini-daftar-rekomendasi-sahamnya-0kGIcWlqFz.JPG?w=300",
                "pub_date": "2023-09-24T16:01:38.000",
                "prices": [
                    {
                        "code": "BACA",
                        "name": "Bank Capital Indonesia Tbk.",
                        "price": 131,
                        "change": 0,
                        "change_pct": 0
                    },
                    {
                        "code": "BBCA",
                        "name": "Bank Central Asia Tbk",
                        "price": 9075,
                        "change": 0,
                        "change_pct": 0
                    },
                    {
                        "code": "UNVR",
                        "name": "Unilever Indonesia Tbk",
                        "price": 3850,
                        "change": 0,
                        "change_pct": 0
                    }
                ]
            },
            {
                "id": 598914,
                "source": "Detikcom",
                "type": "STOCK",
                "title": "McDonald's Akan Naikkan Biaya Royalti di AS Jadi 5%",
                "description": "McDonald's berencana akan menaikkan biaya royalti bagi pemegang waralaba yang membuka restoran baru di AS dan Kanada.",
                "content": "McDonald's berencana akan menaikkan biaya royalti bagi pemegang waralaba yang membuka restoran baru di AS dan Kanada.",
                "link": "https://finance.detik.com/berita-ekonomi-bisnis/d-6947966/mcdonalds-akan-naikkan-biaya-royalti-di-as-jadi-5?utm_source=ajaib&utm_medium=agregator&utm_campaign=partnership",
                "img_url": "https://akcdn.detik.net.id/community/media/visual/2023/09/21/mcd-dituntut-gegara-ketumpahan-kopi_169.png",
                "pub_date": "2023-09-24T16:00:07.000",
                "prices": []
            }
        ],
        "next": "/api/v1/news/feed?page=2&page_size=20",
        "previous": null,
        "total_pages": 116
    }
    return NextResponse.json({ data })
}

// export default handler