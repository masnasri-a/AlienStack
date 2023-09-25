import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    // const keys = 'REOKDYVABBXSV33L'
    // const data = await fetch().then()
    // const url = 'https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=95a79502985240c9bdb867600ba242a1'
    // const res = await fetch(url)
    const data ={
        "count": 20,
        "results": [
            {
                "code": "BBNI",
                "name": "Bank Negara Indonesia  (Persero) Tbk.",
                "price": 9750,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/BBNI_f759e069-7016-49e5-93a7-40ef7bcd1ea4.png"
            },
            {
                "code": "BBRI",
                "name": "Bank Rakyat Indonesia (Persero) Tbk.",
                "price": 5350,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/BBRI_36a674c2-53ad-462d-b185-041c7a3cdcd8.png"
            },
            {
                "code": "TLKM",
                "name": "Telkom Indonesia (Persero) Tbk.",
                "price": 3860,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/TLKM_8b85c855-20bd-46d4-86cf-234922d6e5fb.png"
            },
            {
                "code": "BBCA",
                "name": "Bank Central Asia Tbk",
                "price": 9075,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/BBCA_26374f11-22b2-4a00-82d1-b6c964086f76.png"
            },
            {
                "code": "MEDC",
                "name": "Medco Energi Internasional Tbk.",
                "price": 1600,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/MEDC_ab9458d7-56a3-4f96-8d00-e79aaf0ca657.png"
            },
            {
                "code": "BMRI",
                "name": "Bank Mandiri (Persero) Tbk",
                "price": 6000,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/BMRI_9195741d-6287-40a0-8dfa-ad2b5fb55a3b.png"
            },
            {
                "code": "META",
                "name": "Nusantara Infrastructure Tbk",
                "price": 218,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/META_aa6a1052-a6e1-4095-ab99-6ec15e6f0bd2.png"
            },
            {
                "code": "AMMN",
                "name": "Amman Mineral Internasional Tbk.",
                "price": 5450,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/AMMN_9bba88b2-2499-4c13-bee0-2b5b42850ef4.png"
            },
            {
                "code": "ASII",
                "name": "Astra International Tbk",
                "price": 6200,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/ASII_9aef37ac-2b7b-4805-a1f6-b57b93896473.png"
            },
            {
                "code": "BRPT",
                "name": "Barito Pacific Tbk.",
                "price": 1485,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/BRPT_5d9ca497-e17e-49df-8820-41d56ae5a41f.png"
            },
            {
                "code": "INKP",
                "name": "Indah Kiat Pulp & Paper Tbk.",
                "price": 11500,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/INKP_0ded811e-2d6b-4cbd-a7a6-79f3e0871edc.png"
            },
            {
                "code": "CARE",
                "name": "Metro Healthcare Indonesia Tbk.",
                "price": 525,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/CARE_43405e47-9d68-4f1a-990c-0e507b15c33e.png"
            },
            {
                "code": "PGEO",
                "name": "Pertamina Geothermal Energy Tbk.",
                "price": 1575,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/PGEO_4766929b-84a2-48ef-94f8-8ac725b786a1.png"
            },
            {
                "code": "BOGA",
                "name": "Bintang Oto Global Tbk.",
                "price": 1245,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/BOGA_6d234b46-e65f-40d7-88bf-41c01f556ee3.png"
            },
            {
                "code": "NATO",
                "name": "Surya Permata Andalan Tbk.",
                "price": 500,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/NATO_d1ec6329-a187-449b-9b2d-9ae107ff2eae.png"
            },
            {
                "code": "BRMS",
                "name": "Bumi Resources Minerals Tbk.",
                "price": 218,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/BRMS_47d75c0f-d0a1-4913-a771-8ad923e72bde.png"
            },
            {
                "code": "TCPI",
                "name": "Transcoal Pacific Tbk.",
                "price": 8900,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/TCPI_a9f8a581-785d-4d92-924e-421a1ed4d45e.png"
            },
            {
                "code": "ICBP",
                "name": "Indofood CBP Sukses Makmur Tbk.",
                "price": 11350,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/ICBP_d4513eb1-5b57-4746-8d2d-0d3b8f6899c6.png"
            },
            {
                "code": "GOTO",
                "name": "GoTo Gojek Tokopedia Tbk.",
                "price": 87,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [
                    {
                        "code": "K",
                        "description": "Perusahaan Tercatat yang menerapkan Saham Dengan Hak Suara Multipel dan tercatat di Papan Ekonomi Baru"
                    }
                ],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/GOTO_08ec305d-ce42-4e57-8a07-45687256aa5c.png"
            },
            {
                "code": "UNVR",
                "name": "Unilever Indonesia Tbk",
                "price": 3850,
                "change": 0,
                "change_pct": 0,
                "is_group": false,
                "is_watchlisted": false,
                "tradable_volume": 0,
                "special_notations": [],
                "icon_url": "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/UNVR_f3abca67-51c6-4eeb-9de5-29f2b052f862.png"
            }
        ],
        "next": null,
        "previous": null,
        "total_pages": null
    }
    return NextResponse.json({ data })
}

// export default handler