
// EZZY Rate Data 2026

// Map Countries to B26 Zones (Initial)
const COUNTRY_ZONES = {
    "Singapore": 1,
    "Malaysia (West)": 2,
    "Malaysia (East)": 2, // Zone 2 (Same as West in B26)
    "Brunei Darussalam": 2,
    "UAE": 7,
    "Saudi Arabia": 9,
    "Hong Kong": "HK_Group",
    "Taiwan": "JP_KR_TW",
    "South Korea": "JP_KR_TW",
    "Australia": "Australia"
};

// UPS Saver Data (Transcribed from Express Saver Images)
const UPS_SAVER_DATA = {
    // Zone 1 (Singapore)
    1: {
        steps: {
            0.5: 228700, 1.0: 267400, 1.5: 323100, 2.0: 359000, 2.5: 394100,
            3.0: 429600, 3.5: 463900, 4.0: 499500, 4.5: 534400, 5.0: 569800,
            5.5: 539800, 6.0: 577100, 6.5: 612900, 7.0: 650300, 7.5: 687600,
            8.0: 715500, 8.5: 743000, 9.0: 770100, 9.5: 797700, 10.0: 824800,
            11.0: 870200, 12.0: 914900, 13.0: 960000, 14.0: 1003000, 15.0: 1046900,
            16.0: 1091900, 17.0: 1136300, 18.0: 1155900, 19.0: 1166700, 20.0: 1170800
        },
        heavy: { 21: 68300, 45: 67000, 71: 52200, 100: 52300, 300: 39700 } // Price Per Kg
    },
    // Zone 2 (Malaysia, Brunei)
    2: {
        steps: {
            0.5: 297600, 1.0: 357600, 1.5: 354300, 2.0: 405300, 2.5: 456500,
            3.0: 509700, 3.5: 563900, 4.0: 617300, 4.5: 670900, 5.0: 723600,
            5.5: 767600, 6.0: 811700, 6.5: 855700, 7.0: 892400, 7.5: 929500,
            8.0: 963300, 8.5: 997300, 9.0: 1031500, 9.5: 1066100, 10.0: 1100000,
            11.0: 1164500, 12.0: 1229400, 13.0: 1263600, 14.0: 1376300, 15.0: 1452000,
            20.0: 1593200
        },
        heavy: { 21: 93500, 45: 90100, 71: 71300, 100: 78900 }
    },
    // Zone 7 (UAE)
    7: {
        steps: {
            0.5: 388400, 1.0: 491800, 5.0: 1211400, 10.0: 1769200, 20.0: 3249400
        },
        heavy: { 21: 142600, 45: 140800, 71: 138100, 100: 138100 }
    },
    // Zone 9 (Saudi Arabia)
    9: {
        steps: {
            0.5: 613400, 1.0: 833100, 5.0: 2585700, 10.0: 4067600, 20.0: 6668700
        },
        heavy: { 21: 350400, 45: 346400, 71: 311000, 100: 297500 }
    },
    // HK Column
    "HK_Group": {
        steps: {
            0.5: 305900, 1.0: 376500, 5.0: 835300, 10.0: 1216900, 20.0: 2080700
        },
        heavy: { 21: 101500, 45: 99300, 71: 79900, 100: 78900 }
    },
    // Australia Column
    "Australia": {
        steps: {
            0.5: 228400, 1.0: 274300, 5.0: 655900, 10.0: 859300, 20.0: 1244600
        },
        heavy: { 21: 69100, 45: 69100, 71: 66100, 100: 65300 }
    },
    // JP/KR/TW Column
    "JP_KR_TW": {
        steps: {
            0.5: 373900, 1.0: 443700, 5.0: 924800, 10.0: 1134000, 20.0: 1950100
        },
        heavy: { 21: 88300, 45: 88300, 71: 77800, 100: 78200 }
    }
};

// UPS Expedited Data (Transcribed from Images)
const UPS_EXPEDITED_DATA = {
    // Zone 1 (Singapore)
    1: {
        steps: {
            1.0: 276400, 2.0: 350700, 3.0: 419600, 4.0: 488100, 5.0: 656700,
            6.0: 639100, 7.0: 720000, 8.0: 792300, 9.0: 852700, 10.0: 913300,
            15.0: 1159200, 20.0: 1296500
        },
        heavy: { 21: 68300, 45: 67000, 71: 52200, 100: 50600, 300: 38900 }
    },
    // Zone 2 (Malaysia, Brunei)
    2: {
        steps: {
            1.0: 332800, 2.0: 445700, 3.0: 560300, 4.0: 678800, 5.0: 795700,
            6.0: 892400, 7.0: 981200, 8.0: 1059100, 9.0: 1134300, 10.0: 1209400,
            15.0: 1596700, 20.0: 1751800
        },
        heavy: { 21: 93500, 45: 90100, 71: 77300, 100: 76000, 300: 69100 }
    },
    // Zone 7 (UAE)
    7: {
        steps: {
            1.0: 555100, 2.0: 795600, 3.0: 1035100, 4.0: 1277300, 5.0: 1519400,
            6.0: 1709600, 7.0: 1900000, 8.0: 2096000, 9.0: 2298000, 10.0: 2499100,
            15.0: 3180100, 20.0: 3725200
        },
        heavy: { 21: 142600, 45: 141800, 71: 138100, 100: 138100, 300: 136100 }
    },
    // Zone 9 (Saudi Arabia)
    9: {
        steps: {
            1.0: 812700, 2.0: 1242700, 3.0: 1671300, 4.0: 2096800, 5.0: 2522100,
            6.0: 2963000, 7.0: 3404200, 8.0: 3787000, 9.0: 4110500, 10.0: 4434400,
            15.0: 5787800, 20.0: 6668700
        },
        heavy: { 21: 350400, 45: 346400, 71: 311000, 100: 297500, 300: 246200 }
    },
    // HK Column
    "HK_Group": {
        steps: {
            1.0: 268100, 2.0: 359100, 3.0: 451500, 4.0: 547100, 5.0: 641300,
            6.0: 719100, 7.0: 790600, 8.0: 853500, 9.0: 914000, 10.0: 974600,
            15.0: 1286700, 20.0: 1411700
        },
        heavy: { 21: 101500, 45: 99300, 71: 79900, 100: 78900, 300: 69900 }
    },
    // Australia Column
    "Australia": {
        steps: {
            1.0: 439100, 2.0: 578500, 3.0: 709700, 4.0: 838100, 5.0: 972500,
            6.0: 1106100, 7.0: 1239400, 8.0: 1363700, 9.0: 1476000, 10.0: 1590000,
            15.0: 2064600, 20.0: 2401100
        },
        heavy: { 21: 69100, 45: 69100, 71: 66100, 100: 65300, 300: 57400 }
    },
    // JP/KR/TW Column
    "JP_KR_TW": {
        steps: {
            1.0: 423400, 2.0: 469900, 3.0: 576400, 4.0: 680700, 5.0: 789800,
            6.0: 898500, 7.0: 1006700, 8.0: 1107700, 9.0: 1198800, 10.0: 1291400,
            15.0: 1676600, 20.0: 1950100
        },
        heavy: { 21: 88300, 45: 88300, 71: 77800, 100: 75300, 300: 73300 }
    }
};

const COUNTRIES = [
    {
        id: "taiwan",
        name: "Taiwan",
        flag: "🇹🇼",
        rates: [
            { w: "1-5 Kg", price: 115000 },
            { w: "6-10 Kg", price: 115000 },
            { w: "11-22 Kg", price: 115000 },
            { w: "1-3 Kg (Sensitive)", price: 115000, note: "Usus, Baso Aci, Walet" }
        ],
        surcharges: [
            { name: "Sarang Burung Wallet", price: "Rp 195.000" },
            { name: "Aksesoris Emas", price: "Rp 325.000" }
        ],
        tc: [
            "Estimasi waktu pengantaran: 3-5 hari kerja.",
            "Dimensi maksimum: 70 x 70 x 300 cm.",
            "Penerima wajib melampirkan Alien Resident Certificate (ARC).",
            "Wajib konfirmasi via aplikasi EZWay.",
            "Dilarang: tumbuhan, obat diet, jengkol, petai, rokok, vape.",
            "Asuransi: 3% dari nilai barang (Optional)."
        ]
    },
    {
        id: "malaysia_west",
        name: "Malaysia (West)",
        flag: "🇲🇾",
        rates: [
            { w: "1-5 Kg", price: 77000 },
            { w: "6-20 Kg", price: 49000 },
            { w: "21-30 Kg", price: 47000 },
            { w: "31-99 Kg", price: 42000 },
            { w: "100 Kg", price: 40000 },
            { w: "300 Kg", price: 38000 },
            { w: "500 Kg", price: 37000 }
        ],
        surcharges: [
            { name: "Senjata Tajam (Keris, dll)", price: "Rp 46.000" },
            { name: "Tumbuhan", price: "Rp 65.000" },
            { name: "Aksesoris Emas", price: "Rp 325.000" }
        ],
        tc: [
            "Berat maksimum per paket: 40 kg (Regular).",
            "Multi-colly tersedia (min 10 kg).",
            "Max Dimensi: 120 x 70 x 60 cm.",
            "Senjata tajam & tumbuhan hanya untuk West Malaysia.",
            "Makanan basah harus kemas vacum.",
            "Asuransi: 3% dari nilai barang."
        ]
    },
    {
        id: "malaysia_east",
        name: "Malaysia (East)",
        flag: "🇲🇾",
        rates: [
            { w: "1-5 Kg", price: 119000 },
            { w: "6-20 Kg", price: 119000 },
            { w: "21-30 Kg", price: 112000 },
            { w: "31-99 Kg", price: 112000 },
            { w: "100 Kg", price: 105000 }
        ],
        surcharges: [
            { name: "Aksesoris Emas", price: "Rp 325.000" }
        ],
        tc: [
            "Estimasi pengiriman lebih lama dibanding West Malaysia.",
            "Syarat lain mengikuti ketentuan umum Malaysia."
        ]
    },
    {
        id: "singapore",
        name: "Singapore",
        flag: "🇸🇬",
        rates: [
            { w: "1 Kg", price: 84000 },
            { w: "2-5 Kg", price: 70000 },
            { w: "6-20 Kg", price: 56000 },
            { w: "21-30 Kg", price: 49000 },
            { w: "31-99 Kg", price: 42000 },
            { w: "100 Kg", price: 40000 },
            { w: "300 Kg", price: 38000 },
            { w: "500 Kg", price: 37000 }
        ],
        surcharges: [
            { name: "Aksesoris Emas", price: "Rp 325.000" }
        ],
        tc: [
            "Max Dimensi: 120 x 70 x 60 cm.",
            "Layanan multi-colly tersedia (min 10 kg).",
            "Dilarang: Senjata tajam, tumbuhan, obat diet, rokok, vape.",
            "Makanan basah tidak boleh digabung barang lain.",
            "Asuransi: Disarankan untuk barang > SGD 100."
        ]
    },
    {
        id: "hongkong",
        name: "Hong Kong",
        flag: "🇭🇰",
        rates: [
            { w: "1 Kg", price: 260000 },
            { w: "2-5 Kg", price: 224000 },
            { w: "6-20 Kg", price: 210000 },
            { w: "21-30 Kg", price: 196000 },
            { w: "Up 30 Kg", price: 189000 }
        ],
        surcharges: [],
        tc: [
            "Jadwal penerbangan: Rabu (1x seminggu).",
            "Cut-off: Selasa pukul 20.00 WIB.",
            "Dilarang: Obat diet, pil KB, rokok, vape.",
            "Biaya perubahan alamat: USD 15 / HKD 117."
        ]
    },
    {
        id: "brunei",
        name: "Brunei Darussalam",
        flag: "🇧🇳",
        rates: [
            { w: "1 Kg", price: 203000 },
            { w: "2-5 Kg", price: 175000 },
            { w: "6-20 Kg", price: 140000 },
            { w: "21-30 Kg", price: 133000 },
            { w: "Up 30 Kg", price: 126000 }
        ],
        surcharges: [],
        tc: [
            "Jadwal: Minggu (1x seminggu).",
            "Cut-off: Jumat pukul 18.00 WIB.",
            "Dilarang: Rokok, Vape, Tumbuhan, Obat diet."
        ]
    },
    {
        id: "korea",
        name: "South Korea",
        flag: "🇰🇷",
        rates: [
            { w: "1 Kg", price: 190000 },
            { w: "2-10 Kg", price: 140000 },
            { w: "11-20 Kg", price: 126000 }
        ],
        surcharges: [
            { name: "Parfum (Max 3kg)", price: "Rp 140.000" },
            { name: "Rokok (Max 1 slop)", price: "Rp 350.000" }
        ],
        tc: [
            "Jadwal: Minggu (1x seminggu).",
            "Cut-off: Jumat pukul 15.00 WIB.",
            "Wajib KTP atau Paspor penerima.",
            "Dilarang: Senjata tajam, obat diet, pil KB."
        ]
    },
    {
        id: "australia",
        name: "Australia",
        flag: "🇦🇺",
        rates: [
            { w: "1 Kg", price: 336000 },
            { w: "2-5 Kg", price: 238000 },
            { w: "6-20 Kg", price: 182000 },
            { w: "21-30 Kg", price: 168000 }
        ],
        surcharges: [
            { name: "Remote Area Surcharge", price: "Rp 250.000" },
            { name: "AQIS Inspection (Flat)", price: "AUD 165" }
        ],
        tc: [
            "Jadwal: Minggu (1x seminggu).",
            "Cut-off: Jumat pukul 18.00 WIB.",
            "AQIS (Quarantine) memeriksa seluruh barang masuk.",
            "Dilarang keras: Tumbuhan, daging, biji-bijian.",
            "Biaya AQIS akan dikenakan jika ada pemeriksaan lanjut."
        ]
    },
    {
        id: "uae",
        name: "UAE",
        flag: "🇦🇪",
        rates: [
            { w: "1 Kg", price: 266000 },
            { w: "2-5 Kg", price: 210000 },
            { w: "6-20 Kg", price: 154000 },
            { w: "21-30 Kg", price: 147000 }
        ],
        surcharges: [],
        tc: [
            "Jadwal: Minggu (1x seminggu).",
            "Cut-off: Jumat pukul 18.00 WIB.",
            "Batasan Berat: Garment (25kg), Makanan (10kg), Kosmetik (10kg), Obat luar (3kg).",
            "Dilarang: Vape, Rokok."
        ]
    },
    {
        id: "saudi",
        name: "Saudi Arabia",
        flag: "🇸🇦",
        rates: [
            { w: "1 Kg", price: 280000 },
            { w: "2-5 Kg", price: 196000 },
            { w: "6-20 Kg", price: 175000 },
            { w: "21-30 Kg", price: 161000 }
        ],
        surcharges: [],
        tc: [
            "Jadwal: Minggu (1x seminggu).",
            "Cut-off: Sabtu pukul 18.00 WIB.",
            "Max 3 pcs per paket jenis sama, total max 10kg.",
            "Wajib registrasi SFDA untuk produk tertentu.",
            "Dilarang: Vape, Rokok."
        ]
    }
];

function calculateUpsPrice(countryName, weightStr, type = 'saver') {
    const zoneKey = COUNTRY_ZONES[countryName];
    // Select Data Source
    const dataSource = (type === 'expedited') ? UPS_EXPEDITED_DATA : UPS_SAVER_DATA;

    if (!zoneKey || !dataSource[zoneKey]) return null;

    const data = dataSource[zoneKey];

    // Parse weight range
    let minW = 0.5;
    let parseMin = 1.0;
    let parseMax = 1.0;

    if (weightStr.includes("Kg")) {
        const clean = weightStr.replace("Kg", "").replace("Up", "").trim();
        const parts = clean.split("-");
        parseMin = parseFloat(parts[0]);
        if (parts.length > 1) {
            parseMax = parseFloat(parts[1]);
        } else {
            parseMax = parseMin;
        }
    }

    if (isNaN(parseMin)) parseMin = 1.0;
    if (isNaN(parseMax)) parseMax = parseMin;

    // Helper to get Price/Kg at specific weight
    function getRateAtWeight(w) {
        let total = 0;
        if (w <= 20.0) {
            // Find step
            const steps = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
            for (let s of steps) {
                if (s >= w) {
                    if (data.steps && data.steps[s]) {
                        total = data.steps[s];
                        w = s;
                        break;
                    }
                }
            }
        } else {
            // Heavy logic
            let ratePerKg = 0;
            if (data.heavy) {
                if (w >= 500 && data.heavy[500]) ratePerKg = data.heavy[500];
                else if (w >= 300 && data.heavy[300]) ratePerKg = data.heavy[300];
                else if (w >= 100 && data.heavy[100]) ratePerKg = data.heavy[100];
                else if (w >= 71 && data.heavy[71]) ratePerKg = data.heavy[71];
                else if (w >= 45 && data.heavy[45]) ratePerKg = data.heavy[45];
                else if (w >= 21 && data.heavy[21]) ratePerKg = data.heavy[21];
            }
            total = ratePerKg * w;
        }
        return (total > 0) ? (total / w) : 0;
    }

    // Scan the range (step 0.5 for small weights, step 1 for large)
    let minRate = Infinity;
    let maxRate = -Infinity;
    let valid = false;

    // Determine step size
    let step = (parseMax <= 20) ? 0.5 : 1.0;
    // Align start
    let current = Math.max(0.5, parseMin);

    // Safety for very large ranges "Up 30" -> lets cap at current + 5 or something reasonable if it's open ended
    if (weightStr.toLowerCase().includes("up")) {
        // "Up 30" -> Check 31, 35, 45, 71, 100
        // Custom logic for "Up 30"
        const checkpoints = [31, 45, 71, 100, 300, 500];
        checkpoints.forEach(kp => {
            if (kp >= parseMin) {
                const r = getRateAtWeight(kp);
                if (r > 0) {
                    if (r < minRate) minRate = r;
                    if (r > maxRate) maxRate = r;
                    valid = true;
                }
            }
        });
    } else {
        // Normal loop
        while (current <= parseMax + 0.001) { // float tolerance
            const r = getRateAtWeight(current);
            if (r > 0) {
                if (r < minRate) minRate = r;
                if (r > maxRate) maxRate = r;
                valid = true;
            }
            current += step;
        }
    }

    if (!valid) return null;

    return { min: minRate, max: maxRate };
}
