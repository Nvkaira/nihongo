/* Nihongo Quest — Memphis Pop v2.
 * Peta pulau, maskot anjing laut "Azu", efek suara (WebAudio), combo, XP, dan animasi buka pulau.
 * Materi diambil dari ../shared/bab1-data.js.
 * Lompat langsung untuk review: index.html#step-N (0 = intro Fase 1, 14 = intro Boss, 20 = hasil).
 */
(function () {
  "use strict";

  const D1 = window.BAB1 || { nodes: [], stages: {}, unit: { label: "Bab 1", title: "はじめまして!|hajimemashite!", sub: "Kenalan & memperkenalkan diri" } };
  const D2 = window.BAB2 || { nodes: [], stages: {}, unit: { label: "Bab 2", title: "これ・それ・あれ|kore, sore, are", sub: "Benda di sekitarku & kepemilikan" } };
  const D3 = window.BAB3 || { nodes: [], stages: {}, unit: { label: "Bab 3", title: "ここ・そこ・あそこ|koko, soko, asoko", sub: "Tempat, arah, lantai & belanja" } };
  const D4 = window.BAB4 || { nodes: [], stages: {}, unit: { label: "Bab 4", title: "今 何時ですか|ima nanji desu ka", sub: "Waktu, hari, rutinitas & kata kerja" } };
  const D5 = window.BAB5 || { nodes: [], stages: {}, unit: { label: "Bab 5", title: "どこへ 行きますか|doko e ikimasu ka", sub: "Perjalanan, transportasi & kalender" } };
  const D6 = window.BAB6 || { nodes: [], stages: {}, unit: { label: "Bab 6", title: "何を 食べますか|nani o tabemasu ka", sub: "Makanan, kegiatan & ajakan bersama" } };

  const ALL_UNITS = {
    b1: D1.unit,
    b2: D2.unit,
    b3: D3.unit,
    b4: D4.unit,
    b5: D5.unit,
    b6: D6.unit,
  };

  const BAB_MATERIALS = {
    b1: {
      num: "1",
      title: "はじめまして!|hajimemashite!",
      sub: "Kenalan & memperkenalkan diri",
      color: "#FF5C8A",
      headerBg: "#FFE4EC",
      topics: [
        {
          tag: "Pola Dasar",
          text: "A は B です",
          romaji: "A wa B desu",
          meaning: "A adalah B",
          desc: "Pola kalimat paling mendasar untuk menyatakan identitas, status, profesi, atau nama.\nPartikel は bertindak sebagai penanda topik kalimat dan dilafalkan 'wa' (bukan ha). Sedangkan です (desu) adalah kopula sopan di akhir kalimat.",
          example: {
            jp: "わたしは がくせいです。",
            romaji: "Watashi wa gakusei desu.",
            id: "Saya adalah seorang pelajar / mahasiswa.",
            tokens: ["わたし|watashi", "は|wa", "がくせい|gakusei", "です|desu"],
          },
          tip: "Ingat, huruf は di sini dibaca 'wa' saat menjadi partikel topik!",
        },
        {
          tag: "Bentuk Negatif",
          text: "じゃありません",
          romaji: "ja arimasen",
          meaning: "Bukan / Tidak...",
          desc: "Bentuk negatif (penyangkalan) sopan dari です. Digunakan saat kamu ingin menyangkal suatu status atau identitas (A bukan B).",
          example: {
            jp: "わたしは せんせいじゃ ありません。",
            romaji: "Watashi wa sensei ja arimasen.",
            id: "Saya bukan seorang guru.",
            tokens: ["わたし|watashi", "は|wa", "せんせい|sensei", "じゃ|ja", "ありません|arimasen"],
          },
          tip: "Dalam situasi formal atau tulisan resmi, sering digunakan 'ではありません' (dewa arimasen).",
        },
        {
          tag: "Kalimat Tanya",
          text: "〜ですか",
          romaji: "〜 desu ka",
          meaning: "Apakah...?",
          desc: "Partikel か di ujung kalimat berfungsi sebagai tanda tanya. Kalimat positif diubah menjadi pertanyaan cukup dengan menambahkan か dan intonasi sedikit naik.",
          example: {
            jp: "たなかさんは かいしゃいんですか。",
            romaji: "Tanaka-san wa kaishain desu ka.",
            id: "Apakah Tuan Tanaka seorang karyawan kantor?",
            tokens: ["たなかさん|Tanaka-san", "は|wa", "かいしゃいん|kaishain", "ですか|desu ka"],
          },
          tip: "Dalam bahasa Jepang formal tidak perlu menambahkan tanda tanya '?', cukup akhiri dengan partikel か dan titik.",
        },
        {
          tag: "Kepemilikan",
          text: "A の B",
          romaji: "A no B",
          meaning: "B milik A / B dari A",
          desc: "Partikel の menghubungkan dua kata benda. Menyatakan kepemilikan, asal instansi, atau spesifikasi dari benda tersebut.",
          example: {
            jp: "これは わたしの ほんです。",
            romaji: "Kore wa watashi no hon desu.",
            id: "Ini adalah buku milik saya.",
            tokens: ["これ|kore", "は|wa", "わたし|watashi", "の|no", "ほん|hon", "です|desu"],
          },
          tip: "Urutannya: 'Pemilik' dulu baru 'Benda'. Kebalikan dari urutan bahasa Indonesia!",
        },
      ],
    },
    b2: {
      num: "2",
      title: "これ・それ・あれ|kore, sore, are",
      sub: "Benda di sekitarku & kepemilikan",
      color: "#FFC63D",
      headerBg: "#FFF7D6",
      topics: [
        {
          tag: "Kata Tunjuk Benda",
          text: "これ・それ・あれ",
          romaji: "kore, sore, are",
          meaning: "Ini, Itu, Itu (jauh)",
          desc: "Kata ganti penunjuk benda yang berdiri sendiri:\n• これ (kore) = Ini (dekat dengan pembicara)\n• それ (sore) = Itu (dekat dengan lawan bicara)\n• あれ (are) = Itu jauh (jauh dari pembicara dan lawan bicara)",
          example: {
            jp: "これは じしょです。",
            romaji: "Kore wa jisho desu.",
            id: "Ini adalah kamus.",
            tokens: ["これ|kore", "は|wa", "じしょ|jisho", "です|desu"],
          },
          tip: "Jika menanyakan benda yang dipegang lawan bicaramu, tanyalah dengan 'それ'. Lawan bicara akan menjawab dengan 'これ'.",
        },
        {
          tag: "Penunjuk Spesifik",
          text: "この・その・あの",
          romaji: "kono, sono, ano",
          meaning: "[Benda] ini / itu / itu (jauh)",
          desc: "Kata penunjuk yang WAJIB langsung diikuti kata benda:\n• この + Benda = [Benda] ini\n• その + Benda = [Benda] itu\n• あの + Benda = [Benda] itu (jauh)",
          example: {
            jp: "この かさは わたしのです。",
            romaji: "Kono kasa wa watashi no desu.",
            id: "Payung ini adalah milik saya.",
            tokens: ["この|kono", "かさ|kasa", "は|wa", "わたし|watashi", "の|no", "です|desu"],
          },
          tip: "Bedanya dengan 'これ': 'この' tidak bisa berdiri sendiri! Harus menempel pada bendanya, contoh: このほん (buku ini).",
        },
        {
          tag: "Tanya Pemilik",
          text: "だれの〜ですか",
          romaji: "dare no ~ desu ka",
          meaning: "Milik siapa...?",
          desc: "Pola kalimat untuk menanyakan kepemilikan suatu barang. Kata tanya だれ (dare = siapa) digabung dengan partikel の (milik).",
          example: {
            jp: "あれは だれの くるまですか。",
            romaji: "Are wa dare no kuruma desu ka.",
            id: "Itu mobil milik siapa?",
            tokens: ["あれ|are", "は|wa", "だれ|dare", "の|no", "くるま|kuruma", "ですか|desu ka"],
          },
          tip: "Saat menjawab singkat, cukup sebutkan nama pemilik + の, contoh: 'ケンさんのです' (Milik Ken).",
        },
        {
          tag: "Tanya Benda",
          text: "これは何ですか",
          romaji: "kore wa nan desu ka",
          meaning: "Ini apa?",
          desc: "Pertanyaan universal saat ingin mengetahui nama atau jenis benda yang kamu tunjuk. Huruf 何 dibaca 'nan' saat sebelum 'desu'.",
          example: {
            jp: "「これは なんですか。」「てちょうです。」",
            romaji: "Kore wa nan desu ka. Techou desu.",
            id: "Ini apa? Ini adalah buku agenda saku.",
            tokens: ["これ|kore", "は|wa", "なん|nan", "ですか|desu ka"],
          },
          tip: "Gunakan kalimat andalan ini saat kamu jalan-jalan di Jepang dan menemukan barang unik!",
        },
      ],
    },
    b3: {
      num: "3",
      title: "ここ・そこ・あそこ|koko, soko, asoko",
      sub: "Tempat, arah, lantai & belanja",
      color: "#14C3A2",
      headerBg: "#E0F8F3",
      topics: [
        {
          tag: "Penunjuk Tempat",
          text: "ここ・そこ・あそこ",
          romaji: "koko, soko, asoko",
          meaning: "Di sini, Di situ, Di sana",
          desc: "Kata penunjuk lokasi / tempat:\n• ここ (koko) = Di sini (tempat pembicara berada)\n• そこ (soko) = Di situ (tempat lawan bicara berada)\n• あそこ (asoko) = Di sana (tempat jauh dari keduanya)\n• どこ (doko) = Di mana?",
          example: {
            jp: "ここは きょうしつです。",
            romaji: "Koko wa kyoushitsu desu.",
            id: "Di sini adalah ruang kelas.",
            tokens: ["ここ|koko", "は|wa", "きょうしつ|kyoushitsu", "です|desu"],
          },
          tip: "Konsep jaraknya persis seperti これ・それ・あれ, tetapi ini khusus untuk tempat atau ruangan!",
        },
        {
          tag: "Arah & Bentuk Sopan",
          text: "こちら・そちら",
          romaji: "kochira, sochira",
          meaning: "Sebelah sini, Sebelah situ",
          desc: "Kata penunjuk arah, sekaligus bentuk LEBIH SOPAN dari koko/soko/asoko:\n• こちら (arah sini / di sini sopan)\n• そちら (arah situ / di situ sopan)\n• あちら (arah sana / di sana sopan)\n• どちら (arah mana / di mana sopan)",
          example: {
            jp: "うけつけは こちらです。",
            romaji: "Uketsuke wa kochira desu.",
            id: "Bagian resepsionis ada di sebelah sini.",
            tokens: ["うけつけ|uketsuke", "は|wa", "こちら|kochira", "です|desu"],
          },
          tip: "Sangat sering diucapkan oleh staf toko, kasir, atau resepsionis hotel saat melayani pelanggan.",
        },
        {
          tag: "Tanya Lokasi",
          text: "〜はどこですか",
          romaji: "〜 wa doko desu ka",
          meaning: "...ada di mana?",
          desc: "Pola kalimat untuk menanyakan letak atau keberadaan suatu tempat, fasilitas umum, gedung, atau ruangan.",
          example: {
            jp: "おてあらいは どこですか。",
            romaji: "Otearai wa doko desu ka.",
            id: "Toilet ada di sebelah mana?",
            tokens: ["おてあらい|otearai", "は|wa", "どこ|doko", "ですか|desu ka"],
          },
          tip: "Untuk versi yang lebih sopan (misal di pusat perbelanjaan), ganti どこ dengan どちら: '〜は どちらですか'.",
        },
        {
          tag: "Penghitung Lantai",
          text: "〜階 (かい)",
          romaji: "~kai / ~gai",
          meaning: "Lantai ke-...",
          desc: "Satuan hitung (counter) untuk menyebut tingkat atau lantai pada gedung. Perhatikan beberapa perubahan bunyi khusus:\n• 1F: いっかい (ikkai) | 2F: にかい (nikai)\n• 3F: さんがい (sangai) | 6F: ろっかい (rokkai)\n• 8F: はっかい (hakkai) | 10F: じゅっかい (jukkai)\n• Lantai berapa? = なんがい (nangai)",
          example: {
            jp: "しょくどうは ３かいです。",
            romaji: "Shokudou wa sangai desu.",
            id: "Kantin berada di lantai 3.",
            tokens: ["しょくどう|shokudou", "は|wa", "３かい|sangai", "です|desu"],
          },
          tip: "Lantai 3 dan pertanyaan 'lantai berapa' berbunyi 'gai', bukan 'kai'!",
        },
      ],
    },
    b4: {
      num: "4",
      title: "今 何時ですか|ima nanji desu ka",
      sub: "Waktu, hari, rutinitas & verba",
      color: "#FF8A3D",
      headerBg: "#FFEFE4",
      topics: [
        {
          tag: "Jam & Menit",
          text: "〜時・〜分",
          romaji: "~ji / ~fun (~pun)",
          meaning: "Jam... Lewat... Menit",
          desc: "Satuan untuk menyebut waktu jam dan menit:\n• 〜時 (ji) = Jam. Hati-hati: Jam 4 = よじ (yoji), Jam 7 = しちじ (shichiji), Jam 9 = くじ (kuji).\n• 〜分 (fun/pun) = Menit. Angka 1, 3, 4, 6, 8, 10 berbunyi 'pun' (misal: 1分 = いっぷん, 30分 = さんじっぷん / はん).",
          example: {
            jp: "いまは ９じ はんです。",
            romaji: "Ima wa kuji han desu.",
            id: "Sekarang jam 9 lewat 30 menit (setengah sepuluh).",
            tokens: ["いま|ima", "は|wa", "９じ|kuji", "はん|han", "です|desu"],
          },
          tip: "Kata はん (han) berarti 'setengah' atau tepat 30 menit.",
        },
        {
          tag: "Pagi & Siang-Malam",
          text: "午前 / 午後",
          romaji: "gozen / gogo",
          meaning: "Pagi (AM) / Siang-Malam (PM)",
          desc: "Penanda waktu dalam format 12 jam:\n• 午前 (gozen) = Pagi / AM (sebelum jam 12 siang)\n• 午後 (gogo) = Siang hingga malam / PM (setelah jam 12 siang)",
          example: {
            jp: "まいあさ ごぜん ６じに おきます。",
            romaji: "Maiasa gozen rokuji ni okimasu.",
            id: "Setiap pagi saya bangun jam 6 pagi.",
            tokens: ["まいあさ|maiasa", "ごぜん|gozen", "６じ|rokuji", "に|ni", "おきます|okimasu"],
          },
          tip: "Dalam bahasa Jepang, '午前 / 午後' selalu ditaruh di DEPAN jamnya (contoh: 午後 7時 = jam 7 malam).",
        },
        {
          tag: "Hari Sepekan",
          text: "曜日 (Hari)",
          romaji: "youbi",
          meaning: "Nama-Nama Hari",
          desc: "Nama 7 hari dalam sepekan terinspirasi dari unsur alam semesta:\n• Senin: げつようび (Bulan) | Selasa: かようび (Api)\n• Rabu: すいようび (Air) | Kamis: もくようび (Kayu)\n• Jumat: きんようび (Logam/Emas) | Sabtu: どようび (Bumi/Tanah)\n• Minggu: にちようび (Matahari)",
          example: {
            jp: "きょうは すいようびです。",
            romaji: "Kyou wa suiyoubi desu.",
            id: "Hari ini adalah hari Rabu.",
            tokens: ["きょう|kyou", "は|wa", "すいようび|suiyoubi", "です|desu"],
          },
          tip: "Pertanyaan untuk hari adalah 'なんようび' (nanyoubi = hari apa?).",
        },
        {
          tag: "Rentang Waktu",
          text: "〜から〜まで",
          romaji: "~kara ~made",
          meaning: "Dari... Sampai...",
          desc: "Menyatakan batas awal dan batas akhir untuk waktu maupun tempat:\n• 〜から (kara) = Mulai dari...\n• 〜まで (made) = Sampai / hingga...",
          example: {
            jp: "ぎんこうは ９じから ３じまでです。",
            romaji: "Ginkou wa kuji kara sanji made desu.",
            id: "Bank buka dari jam 9 sampai jam 3.",
            tokens: ["ぎんこう|ginkou", "は|wa", "９じから|kuji kara", "３じまで|sanji made", "です|desu"],
          },
          tip: "Bisa digunakan secara terpisah, contoh: 'ひるやすみは １２じからです' (Istirahat siang mulai jam 12).",
        },
      ],
    },
    b5: {
      num: "5",
      title: "どこへ 行きますか|doko e ikimasu ka",
      sub: "Perjalanan, transportasi & kalender",
      color: "#5B8CFF",
      headerBg: "#EBF1FF",
      topics: [
        {
          tag: "Arah Tujuan",
          text: "〜へ行きます",
          romaji: "~e ikimasu",
          meaning: "Pergi ke...",
          desc: "Partikel へ (dilafalkan 'e') menandai tempat tujuan perpindahan atau perjalanan. Diikuti kata kerja gerak seperti 行きます (pergi), 来ます (datang), atau 帰ります (pulang).",
          example: {
            jp: "わたしは にほんへ いきます。",
            romaji: "Watashi wa Nihon e ikimasu.",
            id: "Saya pergi ke Jepang.",
            tokens: ["わたし|watashi", "は|wa", "にほん|Nihon", "へ|e", "いきます|ikimasu"],
          },
          tip: "Partikel ini ditulis dengan huruf He (へ), tetapi DIBACA 'e' saat menunjukkan arah tujuan!",
        },
        {
          tag: "Alat Transportasi",
          text: "〜で行きます",
          romaji: "~de ikimasu",
          meaning: "Pergi dengan / naik [kendaraan]",
          desc: "Partikel で (de) menandai sarana, alat, atau jenis transportasi yang digunakan untuk melakukan perjalanan.",
          example: {
            jp: "でんしゃで とうきょうへ いきます。",
            romaji: "Densha de Toukyou e ikimasu.",
            id: "Pergi ke Tokyo dengan naik kereta.",
            tokens: ["でんしゃ|densha", "で|de", "とうきょう|Toukyou", "へ|e", "いきます|ikimasu"],
          },
          tip: "Jika berjalan kaki, gunakan kata 'あるいて' (aruite) tanpa memakai partikel で!",
        },
        {
          tag: "Tanya Waktu",
          text: "いつ (Kapan)",
          romaji: "itsu",
          meaning: "Kapan",
          desc: "Kata tanya untuk menanyakan waktu pelaksanaan suatu rencana, jadwal, atau aktivitas di masa lalu maupun masa depan.",
          example: {
            jp: "いつ にほんへ きますか。",
            romaji: "Itsu Nihon e kimasu ka.",
            id: "Kapan kamu akan datang ke Jepang?",
            tokens: ["いつ|itsu", "にほん|Nihon", "へ|e", "いきますか|ikimasu ka"],
          },
          tip: "Berbeda dengan jam atau hari yang memakai partikel に, kata tanya 'いつ' TIDAK boleh diikuti partikel に!",
        },
        {
          tag: "Teman / Rekan",
          text: "〜と (Bersama)",
          romaji: "~to",
          meaning: "Bersama / Dengan...",
          desc: "Partikel と (to) menandai orang atau rekan yang menemani saat melakukan suatu aktivitas bersama-sama.",
          example: {
            jp: "ともだちと デパートへ いきました。",
            romaji: "Tomodachi to depaato e ikimashita.",
            id: "Pergi ke department store bersama teman.",
            tokens: ["ともだち|tomodachi", "と|to", "デパート|depaato", "へ|e", "いきました|ikimashita"],
          },
          tip: "Jika bepergian atau melakukan sesuatu sendirian, gunakan kata 'ひとりで' (hitori de) tanpa partikel と.",
        },
      ],
    },
    b6: {
      num: "6",
      title: "何を 食べますか|nani o tabemasu ka",
      sub: "Makanan, kegiatan & ajakan bersama",
      color: "#14C3A2",
      headerBg: "#E6FBF5",
      topics: [
        {
          tag: "Objek Penderita",
          text: "〜を食べます",
          romaji: "~o tabemasu",
          meaning: "Makan / Minum [Benda]",
          desc: "Partikel を (dilafalkan 'o') menandai kata benda yang menjadi sasaran langsung atau objek dari suatu kata kerja aksi aktif.",
          example: {
            jp: "わたしは ごはんを たべます。",
            romaji: "Watashi wa gohan o tabemasu.",
            id: "Saya makan nasi.",
            tokens: ["わたし|watashi", "は|wa", "ごはん|gohan", "を|o", "たべます|tabemasu"],
          },
          tip: "Huruf hiragana を HANYA digunakan sebagai partikel kalimat dan dibaca persis seperti huruf お (o)!",
        },
        {
          tag: "Tempat Aksi",
          text: "〜でします",
          romaji: "~de shimasu",
          meaning: "Melakukan [aksi] di [tempat]",
          desc: "Partikel で (de) menandai lokasi fisik tempat suatu kegiatan aktif dilakukan (makan, minum, membaca, bekerja).",
          example: {
            jp: "レストランで ごはんを たべます。",
            romaji: "Resutoran de gohan o tabemasu.",
            id: "Makan nasi di restoran.",
            tokens: ["レストラン|resutoran", "で|de", "ごはん|gohan", "を|o", "たべます|tabemasu"],
          },
          tip: "Gunakan partikel で jika ada kegiatan aktif. Gunakan に jika hanya menyatakan keberadaan diam.",
        },
        {
          tag: "Ajakan Ramah",
          text: "〜ませんか",
          romaji: "~masen ka",
          meaning: "Maukah... bersama?",
          desc: "Bentuk negatif tanya yang santun untuk mengajak lawan bicara melakukan sesuatu bersama-sama tanpa terkesan memaksa.",
          example: {
            jp: "いっしょに おちゃを のみませんか。",
            romaji: "Isshoni ocha o nomimasen ka.",
            id: "Maukah minum teh hijau bersama-sama?",
            tokens: ["いっしょに|isshoni", "おちゃ|ocha", "を|o", "のみませんか|nomimasen ka"],
          },
          tip: "Jawaban jika menyetujui ajakan adalah: 'ええ、〜ましょう' (Ya, mari kita lakukan!).",
        },
        {
          tag: "Mari / Ayo",
          text: "〜ましょう",
          romaji: "~mashou",
          meaning: "Mari kita... / Ayo!",
          desc: "Bentuk ajakan inisiatif atau tanggapan menyetujui ketika kedua pihak sepakat untuk melakukan suatu aktivitas bersama.",
          example: {
            jp: "ちょっと やすみましょう。",
            romaji: "Chotto yasumimashou.",
            id: "Mari kita beristirahat sebentar.",
            tokens: ["ちょっと|chotto", "やすみましょう|yasumimashou"],
          },
          tip: "Dapat juga digunakan untuk merespons ajakan '〜ませんか' dengan hangat dan positif.",
        },
      ],
    },
  };

  const ALL_STAGES = {
    ...(D1.stages || { s1: D1.stage }),
    ...(D2.stages || {}),
    ...(D3.stages || {}),
    ...(D4.stages || {}),
    ...(D5.stages || {}),
    ...(D6.stages || {}),
  };
  let PHASES = (ALL_STAGES.s3_1 || ALL_STAGES.s2_1 || ALL_STAGES.s1 || D1.stage).phases;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const store = {
    get(k, d) {
      try {
        const v = localStorage.getItem(k);
        return v === null ? d : v;
      } catch (e) {
        return d;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem(k, v);
      } catch (e) {}
    },
    remove(k) {
      try {
        localStorage.removeItem(k);
      } catch (e) {}
    },
  };
  function buzz(p) {
    try {
      if (navigator.vibrate) navigator.vibrate(p);
    } catch (e) {}
  }

  const LINES = {
    greet: ["Halo! Aku Azu. Yuk jelajahi pulau!", "Pulau berikutnya nungguin kamu!", "Psst… tap aku kalau butuh semangat!"],
    pat: ["Hehe, geli!", "Kyuu~", "Pat pat lagi dong!", "Makasih, aku jadi semangat!"],
    patMax: ["KYAAA~ aku sayang kamu!", "Semangatku penuh 100%!"],
    correct: ["Mantap!", "Sugoi!", "Kamu jenius!", "Tepat banget!", "Lanjutkan!"],
    combo: ["Combo ×{n}! Lagi panas nih!", "×{n} beruntun! Nggak ada obat!", "Combo ×{n}! Gas terus!"],
    wrong: ["Gapapa, salah itu bagian dari belajar!", "Hampir! Baca penjelasannya ya.", "Santai, kita coba lagi!"],
    ko: ["HP habis… tapi aku tetap di sini!"],
    phase: {
      fundamental: "Kita mulai dari dasar ya!",
      practice: "Coba sendiri, aku temenin!",
      trivia: "Waktunya fakta seru!",
      boss: "Semangat! Kamu pasti bisa!",
    },
    pass: "Yeay! Pulau baru menunggu!",
    fail: "Gapapa! Istirahat bentar, lalu coba lagi ya.",
    unlock: "Pulau baru terbuka! Ayo ke sana!",
  };

  // Ikon garis 24×24 (gaya Lucide), digambar ulang.
  const ICONS = {
    torii: '<path d="M3 5.5c4 1.3 14 1.3 18 0"/><path d="M5 9.5h14"/><path d="M7.5 6.4V21"/><path d="M16.5 6.4V21"/><path d="M12 9.5V6.8"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5v-3a4 4 0 0 1 8 0v3"/>',
    volume: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9.5 9.5 0 0 1 0 13"/>',
    volumeX: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="m16 9 5 6M21 9l-5 6"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z"/>',
    heart: '<path d="M12 20s-7.5-4.4-9-9.2C2 7.4 4.2 4.5 7.4 4.5c1.9 0 3.4 1 4.6 2.6 1.2-1.6 2.7-2.6 4.6-2.6 3.2 0 5.4 2.9 4.4 6.3C19.5 15.6 12 20 12 20z"/>',
    flame: '<path d="M12 21.5c3.9 0 7-2.7 7-6.5 0-4.1-3.1-6.4-4.4-10-.9 2.3-2 3.5-3.3 4C11.4 5.8 10.2 3.5 8 2c.3 3.5-1.7 5.7-2.7 7.4C4.6 10.6 5 12.4 5 15c0 3.8 3.1 6.5 7 6.5z"/>',
    bolt: '<path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12z"/>',
    book: '<path d="M3 5h5.5A3.5 3.5 0 0 1 12 8.5V20a2.5 2.5 0 0 0-2.5-2.5H3z"/><path d="M21 5h-5.5A3.5 3.5 0 0 0 12 8.5V20a2.5 2.5 0 0 1 2.5-2.5H21z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    bulb: '<path d="M9.5 18h5M10.5 21.5h3"/><path d="M12 2.5a6.5 6.5 0 0 0-3.8 11.8c.7.5 1.3 1.4 1.3 2.4v1.3h5v-1.3c0-1 .6-1.9 1.3-2.4A6.5 6.5 0 0 0 12 2.5z"/>',
    crown: '<path d="M3.5 18.5h17"/><path d="m4 15.5-1-9 5 4 4-6 4 6 5-4-1 9z"/>',
    arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.5-4.5L3 9"/><path d="M3 4v5h5"/><path d="M4 13a8 8 0 0 0 14.5 4.5L21 15"/><path d="M21 20v-5h-5"/>',
    sparkle: '<path d="M12 3.5 13.9 9l5.6 2-5.6 2L12 18.5 10.1 13l-5.6-2 5.6-2z"/>',
    map: '<path d="m9 4.5-5.5 2v13l5.5-2 6 2 5.5-2v-13l-5.5 2z"/><path d="M9 4.5v13M15 6.5v13"/>',
    trophy: '<path d="M8 4.5h8v5a4 4 0 0 1-8 0z"/><path d="M8 6.5H4.5a3.5 3.5 0 0 0 3.8 4M16 6.5h3.5a3.5 3.5 0 0 1-3.8 4"/><path d="M12 13.5v4M8.5 20.5h7M10 17.5h4"/>',
  };
  const icon = (name, cls = "") =>
    `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name]}</svg>`;

  // ---------- Teks Jepang ----------
  const RUBY = /\{([^|}]+)\|([^}]+)\}/g;
  const parseSeg = (t) => {
    const i = t.lastIndexOf("|");
    if (i === -1) return { k: t, r: "" };
    return { k: t.slice(0, i), r: t.slice(i + 1) };
  };
  function jp(tokens, cls = "") {
    const segs = [].concat(tokens).map((t) => {
      const s = parseSeg(t);
      return `<span class="seg"><span class="kana">${s.k.replace(RUBY, "<ruby>$1<rt>$2</rt></ruby>")}</span>${s.r ? `<span class="romaji" lang="ja-Latn">${s.r}</span>` : ""}</span>`;
    });
    return `<span class="jp ${cls}" lang="ja">${segs.join("")}</span>`;
  }
  const rich = (html) =>
    String(html)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\[\[(.+?)\]\]/g, (_, t) => jp(t.split("+"), "jp--inline"));
  const enc = (tokens) => encodeURIComponent(JSON.stringify([].concat(tokens)));
  const dec = (s) => JSON.parse(decodeURIComponent(s));

  // ---------- Suara Ucapan & Pelafalan (Web Speech API Native + Dynamic Voice Detection) ----------
  const hasTTS = typeof window !== "undefined" && "speechSynthesis" in window;
  let jaVoiceCache = null;

  let jaVoiceOverride = undefined;
  function getJaVoice() {
    if (jaVoiceOverride !== undefined) return jaVoiceOverride;
    if (!hasTTS) return null;
    try {
      if (jaVoiceCache) return jaVoiceCache;
      const voices = speechSynthesis.getVoices() || [];
      if (!voices.length) return null;
      // 1. Voice khusus ja-JP
      let v = voices.find((v) => /^ja[-_]jp/i.test(v.lang));
      // 2. Voice bahasa prefix ja
      if (!v) v = voices.find((v) => /^ja/i.test(v.lang));
      // 3. Voice dengan nama mengandung Japanese atau Nihongo
      if (!v) v = voices.find((v) => /japanese|nihongo/i.test(v.name));
      if (v) jaVoiceCache = v;
      return v;
    } catch {
      return null;
    }
  }

  function loadVoices() {
    try {
      if (!hasTTS) return;
      jaVoiceCache = null;
      getJaVoice();
    } catch {}
  }

  if (hasTTS) {
    loadVoices();
    try {
      speechSynthesis.onvoiceschanged = loadVoices;
    } catch {}
  }

  // Mobile Audio Unlocker: Membuka kunci audio policy pada sentuhan/klik pertama di HP / browser
  let audioUnlocked = false;
  function unlockAudioPolicy() {
    if (audioUnlocked) return;
    audioUnlocked = true;
    try {
      if (typeof SFX !== "undefined" && SFX.ac) {
        const c = SFX.ac();
        if (c && c.state === "suspended") c.resume().catch(() => {});
      }
      if (hasTTS) {
        if (speechSynthesis.paused) {
          speechSynthesis.resume();
        }
        speechSynthesis.getVoices();
      }
    } catch {}
  }
  if (typeof window !== "undefined") {
    ["pointerdown", "touchstart", "keydown", "click"].forEach((evt) => {
      window.addEventListener(evt, unlockAudioPolicy, { passive: true });
    });
  }

  function prepareSpeechText(tokens) {
    const arr = [].concat(tokens);
    if (arr.length === 1) {
      const s = parseSeg(arr[0]);
      if (s.k === "は" && (s.r.toLowerCase() === "wa" || !s.r)) return "わ";
      if (s.k === "へ" && (s.r.toLowerCase() === "e" || !s.r)) return "え";
    }
    return arr
      .map((t) => {
        const s = parseSeg(t);
        let text = s.k.replace(RUBY, "$2");
        if (s.k === "は" && s.r.toLowerCase() === "wa") return "わ";
        if (s.k === "へ" && s.r.toLowerCase() === "e") return "え";
        return text;
      })
      .join("")
      .trim();
  }

  const AUDIO_MAP = {
    "わたしわがくせいです": "audio/b1_0.mp3",
    "わたしわせんせいじゃありません": "audio/b1_1.mp3",
    "たなかさんわかいしゃいんですか": "audio/b1_2.mp3",
    "これわわたしのほんです": "audio/b1_3.mp3",
    "これわじしょです": "audio/b2_0.mp3",
    "このかさわわたしのです": "audio/b2_1.mp3",
    "あれわだれのくるまですか": "audio/b2_2.mp3",
    "これわなんですか": "audio/b2_3.mp3",
    "ここわきょうしつです": "audio/b3_0.mp3",
    "うけつけわこちらです": "audio/b3_1.mp3",
    "おてあらいわどこですか": "audio/b3_2.mp3",
    "しょくどうわ３かいです": "audio/b3_3.mp3",
    "いまわ９じはんです": "audio/b4_0.mp3",
    "まいあさごぜん６じにおきます": "audio/b4_1.mp3",
    "きょうわすいようびです": "audio/b4_2.mp3",
    "ぎんこうわ９じから３じまでです": "audio/b4_3.mp3",
    "わたしわにほんえいきます": "audio/b5_0.mp3",
    "でんしゃでとうきょうえいきます": "audio/b5_1.mp3",
    "いつにほんえいきますか": "audio/b5_2.mp3",
    "ともだちとデパートえいきました": "audio/b5_3.mp3",
    "わたしわごはんをたべます": "audio/b6_0.mp3",
    "レストランでごはんをたべます": "audio/b6_1.mp3",
    "いっしょにおちゃをのみませんか": "audio/b6_2.mp3",
    "ちょっとやすみましょう": "audio/b6_3.mp3"
  };

  const audioCache = new Map();
  let currentAudio = null;

  function playLocalAudio(src, rate = 0.88) {
    try {
      hush();
      let aud = audioCache.get(src);
      if (!aud) {
        aud = new Audio(src);
        audioCache.set(src, aud);
      }
      aud.currentTime = 0;
      aud.playbackRate = Math.max(0.6, Math.min(1.2, rate));
      currentAudio = aud;
      const p = aud.play();
      if (p !== undefined) {
        p.catch((err) => {
          console.warn("[Audio Engine] playLocalAudio catch:", err);
        });
      }
      return true;
    } catch (e) {
      console.warn("[Audio Engine] playLocalAudio error:", e);
      return false;
    }
  }

  function say(tokens, rate = 0.88) {
    // 1. Hormati toggle suara di top dock
    if (typeof SFX !== "undefined" && !SFX.on) return;

    // 2. Siapkan teks yang dinormalisasi
    const text = prepareSpeechText(tokens);
    if (!text) return;

    hush();

    // Prioritas 1: Jika teks memiliki file audio lokal yang sudah di-bundle (100% bebas blokir ORB, 100% bebas izin browser, jernih)
    if (AUDIO_MAP[text]) {
      playLocalAudio(AUDIO_MAP[text], rate);
      return;
    }

    // Prioritas 2: Jika ada voice Jepang asli terpasang di browser (Chrome dengan Google 日本語, iOS dengan Kyoko, dsb)
    const jaVoice = getJaVoice();
    if (hasTTS && jaVoice) {
      try {
        if (speechSynthesis.paused) {
          speechSynthesis.resume();
        }

        const u = new SpeechSynthesisUtterance(text);
        u.lang = jaVoice.lang || "ja-JP";
        u.rate = Math.max(0.5, Math.min(1.2, rate));
        u.pitch = 1.0;
        u.voice = jaVoice;

        speechSynthesis.speak(u);

        if (speechSynthesis.paused) {
          speechSynthesis.resume();
        }
        return;
      } catch (err) {
        console.warn("[SpeechSynthesis] Gagal:", err);
      }
    }

    // Prioritas 3: Fallback bawaan SpeechSynthesis jika tanpa voice khusus
    if (hasTTS) {
      try {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "ja-JP";
        speechSynthesis.speak(u);
      } catch {}
    }
  }

  function hush() {
    if (hasTTS) {
      try {
        if (speechSynthesis.speaking || speechSynthesis.pending) {
          speechSynthesis.cancel();
        }
        if (speechSynthesis.paused) {
          speechSynthesis.resume();
        }
      } catch {}
    }
    if (currentAudio) {
      try {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      } catch {}
      currentAudio = null;
    }
  }

  if (typeof window !== "undefined") {
    window.__AUDIO_ENGINE__ = {
      say,
      hush,
      prepareSpeechText,
      getJaVoice,
      playLocalAudio,
      AUDIO_MAP,
      audioCache,
      hasJaVoice: () => !!getJaVoice(),
      setJaVoiceOverride: (v) => { jaVoiceOverride = v; },
      isUnlocked: () => audioUnlocked,
    };
  }

  function dismissToast() {
    const t = document.querySelector(".toast");
    if (t) {
      t.classList.remove("is-on");
      clearTimeout(toast.timer);
    }
  }

  function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) {
      t = document.createElement("div");
      t.className = "toast";
      t.setAttribute("role", "status");
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.remove("is-on");
    void t.offsetWidth;
    t.classList.add("is-on");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => t.classList.remove("is-on"), 2800);
  }

  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- Efek suara (disintesis, tanpa file audio) ----------
  const SFX = (() => {
    let ctx = null;
    let on = store.get("nq-sfx", "1") !== "0";
    function ac() {
      if (!ctx) {
        const C = window.AudioContext || window.webkitAudioContext;
        if (!C) return null;
        ctx = new C();
      }
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
      return ctx;
    }
    function tone(freq, { t = 0, dur = 0.12, type = "sine", vol = 0.16, slide = 0 } = {}) {
      if (!on) return;
      const c = ac();
      if (!c) return;
      const now = c.currentTime + t;
      const o = c.createOscillator();
      const g = c.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, now);
      if (slide) o.frequency.exponentialRampToValueAtTime(freq * slide, now + dur);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(vol, now + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      o.connect(g).connect(c.destination);
      o.start(now);
      o.stop(now + dur + 0.03);
    }
    const semi = (base, n) => base * Math.pow(2, n / 12);
    return {
      get on() {
        return on;
      },
      ac,
      toggle() {
        on = !on;
        store.set("nq-sfx", on ? "1" : "0");
        return on;
      },
      tap: () => tone(560, { dur: 0.05, type: "triangle", vol: 0.07 }),
      select: () => tone(660, { dur: 0.08, type: "triangle", vol: 0.1, slide: 1.25 }),
      place: (n) => tone(semi(440, Math.min(n, 8) * 2), { dur: 0.1, type: "triangle", vol: 0.12 }),
      // Nada naik mengikuti combo: makin panjang combo, makin tinggi dan memuaskan.
      correct(combo = 0) {
        const s = Math.min(combo, 10);
        tone(semi(660, s), { dur: 0.12, type: "triangle", vol: 0.15 });
        tone(semi(990, s), { t: 0.09, dur: 0.26, type: "triangle", vol: 0.15 });
      },
      wrong() {
        tone(230, { dur: 0.16, type: "sawtooth", vol: 0.05, slide: 0.7 });
        tone(170, { t: 0.1, dur: 0.28, vol: 0.12, slide: 0.8 });
      },
      pair: (n) => tone(semi(523, n * 3), { dur: 0.14, type: "triangle", vol: 0.14 }),
      pat() {
        tone(880, { dur: 0.09, vol: 0.12, slide: 1.7 });
        tone(1250, { t: 0.06, dur: 0.08, vol: 0.07, slide: 1.4 });
      },
      star: (i) => tone(semi(784, i * 4), { dur: 0.3, type: "triangle", vol: 0.15 }),
      unlock() {
        [0, 4, 7, 12, 16, 19].forEach((n, i) => tone(semi(523, n), { t: i * 0.075, dur: 0.32, type: "triangle", vol: 0.13 }));
      },
      sail: () => tone(260, { dur: 1.2, vol: 0.05, slide: 2.2 }),
      rattle() {
        [0, 0.09, 0.18].forEach((t) => tone(1500, { t, dur: 0.04, type: "square", vol: 0.04 }));
      },
      hit: () => tone(150, { dur: 0.28, type: "square", vol: 0.07, slide: 0.5 }),
      count: () => tone(1500, { dur: 0.03, type: "square", vol: 0.025 }),
    };
  })();

  // ---------- Partikel & teks melayang ----------
  const FX = (() => {
    const COLORS = ["#FF5C8A", "#14C3A2", "#FFC63D", "#5B8CFF", "#C9B8FF", "#FF8A3D"];
    let cv = null;
    let cx = null;
    let parts = [];
    let raf = 0;
    function ensure() {
      if (cv) return;
      cv = document.createElement("canvas");
      cv.className = "fx-canvas";
      cv.setAttribute("aria-hidden", "true");
      document.body.appendChild(cv);
      cx = cv.getContext("2d");
      resize();
      window.addEventListener("resize", resize);
    }
    function resize() {
      const r = window.devicePixelRatio || 1;
      cv.width = innerWidth * r;
      cv.height = innerHeight * r;
      cx.setTransform(r, 0, 0, r, 0, 0);
    }
    function add(p) {
      parts.push({ rot: rand(0, 6.28), vr: rand(-0.25, 0.25), r: rand(5, 9), c: pick(COLORS), s: Math.floor(rand(0, 3)), life: 1, ...p });
    }
    function run() {
      if (!raf) raf = requestAnimationFrame(tick);
    }
    function tick() {
      cx.clearRect(0, 0, innerWidth, innerHeight);
      parts = parts.filter((p) => p.life > 0 && p.y < innerHeight + 40);
      for (const p of parts) {
        p.vx *= 0.985;
        p.vy += p.g;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.life -= p.decay;
        cx.save();
        cx.globalAlpha = Math.max(0, Math.min(1, p.life * 1.6));
        cx.translate(p.x, p.y);
        cx.rotate(p.rot);
        cx.fillStyle = p.c;
        cx.strokeStyle = "#1D1B3A";
        cx.lineWidth = 1.5;
        cx.beginPath();
        if (p.s === 0) cx.rect(-p.r / 2, -p.r / 3, p.r, p.r * 0.66);
        else if (p.s === 1) cx.arc(0, 0, p.r / 2, 0, Math.PI * 2);
        else {
          cx.moveTo(0, -p.r / 2);
          cx.lineTo(p.r / 2, p.r / 2);
          cx.lineTo(-p.r / 2, p.r / 2);
          cx.closePath();
        }
        cx.fill();
        cx.stroke();
        cx.restore();
      }
      raf = parts.length ? requestAnimationFrame(tick) : 0;
    }
    function burst(x, y, { n = 22, power = 7 } = {}) {
      ensure();
      if (reduceMotion) n = Math.min(n, 6);
      for (let i = 0; i < n; i++) {
        const a = rand(0, Math.PI * 2);
        const v = power * rand(0.45, 1.2);
        add({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - power * 0.35, g: 0.26, decay: rand(0.012, 0.02) });
      }
      run();
    }
    function at(el, opts) {
      if (!el) return;
      const r = el.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2, opts);
    }
    function rain() {
      ensure();
      const n = reduceMotion ? 12 : 110;
      for (let i = 0; i < n; i++) add({ x: rand(0, innerWidth), y: rand(-260, -10), vx: rand(-1.2, 1.2), vy: rand(1, 3), g: 0.05, decay: 0.004 });
      run();
    }
    function float(html, x, y, cls = "", dx = 0) {
      const s = document.createElement("span");
      s.className = `fx-float ${cls}`;
      s.innerHTML = html;
      s.style.left = x + "px";
      s.style.top = y + "px";
      s.style.setProperty("--dx", dx + "px");
      s.setAttribute("aria-hidden", "true");
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1600);
    }
    return { burst, at, rain, float };
  })();

  // ---------- Maskot: Azu si anjing laut ----------
  const SEAL_SVG = `
<svg class="seal" viewBox="0 0 200 175" aria-hidden="true" focusable="false">
  <ellipse class="s-shadow" cx="100" cy="163" rx="64" ry="8"/>
  <g class="s-react"><g class="s-pose"><g class="s-all">
    <g class="s-tail"><path d="M148 146c14-4 28-14 38-9 6 4 1 12-7 13 8 3 8 11 0 12-11 1-22-6-31-9z"/></g>
    <g class="s-body">
      <path class="s-blob" d="M100 26c40 0 64 34 67 72 3 38-22 56-67 56s-70-18-67-56c3-38 27-72 67-72z"/>
      <ellipse class="s-belly" cx="100" cy="127" rx="38" ry="21"/>
      <g class="s-clip"><path d="m134 28 3.4 6.8 7.5 1-5.5 5.2 1.4 7.4-6.8-3.6-6.8 3.6 1.4-7.4-5.5-5.2 7.5-1z"/></g>
      <path class="s-brows" d="M68 66l15 5M132 66l-15 5"/>
      <g class="s-eye s-eye--l"><ellipse cx="78" cy="80" rx="7.5" ry="9"/><circle cx="80.8" cy="76.2" r="2.8"/></g>
      <g class="s-eye s-eye--r"><ellipse cx="122" cy="80" rx="7.5" ry="9"/><circle cx="124.8" cy="76.2" r="2.8"/></g>
      <path class="s-eyes-happy" d="M70 83q8-12 16 0M114 83q8-12 16 0"/>
      <path class="s-eyes-closed" d="M70 80q8 7 16 0M114 80q8 7 16 0"/>
      <ellipse class="s-blush" cx="63" cy="97" rx="10" ry="6"/>
      <ellipse class="s-blush" cx="137" cy="97" rx="10" ry="6"/>
      <path class="s-nose" d="M93 90q7-4 14 0q-2 7-7 8q-5-1-7-8z"/>
      <path class="s-mouth" d="M89 102q5.5 6 11 0q5.5 6 11 0"/>
      <path class="s-mouth-sad" d="M91 107q9-7 18 0"/>
      <path class="s-mouth-open" d="M90 101q10 17 20 0z"/>
      <g class="s-whisk"><circle cx="85" cy="99" r="1.8"/><circle cx="81" cy="94" r="1.8"/><circle cx="115" cy="99" r="1.8"/><circle cx="119" cy="94" r="1.8"/></g>
      <path class="s-sweat" d="M150 56c5 7 7 12 2 15-5 2-9-3-6-8z"/>
    </g>
    <g class="s-flip s-flip--l"><path d="M48 116c-15 3-24 15-20 22 4 6 17-1 28-12z"/></g>
    <g class="s-flip s-flip--r"><path d="M152 116c15 3 24 15 20 22-4 6-17-1-28-12z"/></g>
  </g></g></g>
</svg>`;

  const Buddy = (() => {
    const POSES = ["tilt", "tilt2", "look", "wave", "lie", "hop"];
    const REACT = {
      happy: { f: "f-happy", ms: 1300 },
      sad: { f: "f-sad", ms: 1900 },
      pat: { f: "f-closed", ms: 650 },
      party: { f: "f-happy", ms: 1500 },
      cheer: { f: "f-happy", ms: 1300 },
      comfort: { f: "f-closed", ms: 1900 },
    };
    let el, seal, bubble;
    let busy = false;
    let pats = 0;
    let idleT, poseT, reactT, bubbleT, patT;

    function mount() {
      el = document.createElement("div");
      el.className = "buddy";
      el.dataset.where = "map";
      el.innerHTML = `<p class="buddy-bubble" role="status" aria-live="polite"></p><button class="buddy-btn" type="button" aria-label="Azu si anjing laut. Ketuk untuk pat-pat!">${SEAL_SVG}</button>`;
      document.body.appendChild(el);
      seal = el.querySelector(".seal");
      bubble = el.querySelector(".buddy-bubble");
      el.querySelector(".buddy-btn").addEventListener("click", pat);
      idle();
      blink();
    }
    function where(w) {
      if (el.dataset.where !== w) {
        el.dataset.where = w;
        el.classList.remove("is-arriving");
        void el.offsetWidth;
        el.classList.add("is-arriving");
      }
      updateAtTop();
    }
    function updateAtTop() {
      if (!el) return;
      const atTop = el.dataset.where === "map" && window.scrollY < 140;
      el.classList.toggle("is-at-top", atTop);
    }
    function speak(text, ms = 2600) {
      bubble.textContent = text;
      bubble.classList.remove("is-on");
      void bubble.offsetWidth;
      bubble.classList.add("is-on");
      el.classList.add("has-bubble");
      clearTimeout(bubbleT);
      bubbleT = setTimeout(() => {
        bubble.classList.remove("is-on");
        el.classList.remove("has-bubble");
      }, ms);
    }
    function setPose(p) {
      seal.classList.remove(...POSES.map((x) => "p-" + x));
      if (p) seal.classList.add("p-" + p);
    }
    function react(kind, text) {
      const r = REACT[kind];
      busy = true;
      clearTimeout(poseT);
      setPose(null);
      clearTimeout(reactT);
      seal.classList.remove(...Object.keys(REACT).map((k) => "r-" + k), "f-happy", "f-sad", "f-closed");
      void seal.getBoundingClientRect();
      seal.classList.add("r-" + kind, r.f);
      if (text) speak(text);
      reactT = setTimeout(() => {
        seal.classList.remove("r-" + kind, r.f);
        busy = false;
      }, r.ms);
    }
    function pat() {
      SFX.pat();
      buzz(8);
      pats++;
      clearTimeout(patT);
      patT = setTimeout(() => (pats = 0), 1400);
      const r = seal.getBoundingClientRect();
      const n = pats >= 5 ? 7 : 2;
      for (let i = 0; i < n; i++) FX.float(icon("heart"), r.left + r.width * rand(0.3, 0.7), r.top + r.height * 0.25, "fx-heart", rand(-40, 40));
      if (pats >= 5) {
        pats = 0;
        react("party", pick(LINES.patMax));
        SFX.unlock();
        FX.at(seal, { n: 30, power: 8 });
      } else {
        react("pat", pick(LINES.pat));
      }
    }
    // Hidup di tempat: tiap beberapa detik berganti pose, lalu kembali duduk.
    function idle() {
      clearTimeout(idleT);
      idleT = setTimeout(() => {
        if (!busy && !document.hidden) {
          setPose(pick(POSES));
          poseT = setTimeout(() => setPose(null), rand(1500, 2800));
        }
        idle();
      }, rand(3200, 6200));
    }
    function blink() {
      setTimeout(() => {
        seal.classList.add("is-blink");
        setTimeout(() => seal.classList.remove("is-blink"), 130);
        if (Math.random() < 0.25) {
          setTimeout(() => {
            seal.classList.add("is-blink");
            setTimeout(() => seal.classList.remove("is-blink"), 120);
          }, 260);
        }
        blink();
      }, rand(2200, 5200));
    }
    return { mount, where, updateAtTop, say: speak, react, get el() { return seal; } };
  })();

  // ---------- State ----------
  const ALL_NODES = [
    { id: "b0", label: "Bab 0", title: "Kenalan Hiragana", sub: "あ・い・う・え・お", state: "done" },
    { id: "s1", label: "Stage 1-1", title: "Aku adalah…", sub: "は・です・じゃありません", state: "done", stage: true, playable: true },
    { id: "s2", label: "Stage 1-2", title: "Bertanya & “juga”", sub: "か・も", state: "done", stage: true, playable: true },
    { id: "s3", label: "Stage 1-3", title: "Perkenalan diri", sub: "の・さん", state: "done", stage: true, playable: true },
    { id: "s2_1", label: "Stage 2-1", title: "Ini dan Itu", sub: "これ・それ・あれ", state: "done", stage: true, playable: true },
    { id: "s2_2", label: "Stage 2-2", title: "Benda & Pilihan", sub: "この・その・あの", state: "done", stage: true, playable: true },
    { id: "s2_3", label: "Stage 2-3", title: "Milik Siapa & Hadiah", sub: "の・ほんの気持ち", state: "done", stage: true, playable: true },
    { id: "s3_1", label: "Stage 3-1", title: "Di Sini & di Sana", sub: "ここ・そこ・あそこ", state: "current", stage: true, playable: true },
    { id: "s3_2", label: "Stage 3-2", title: "Arah & Belanja", sub: "こちら・階・いくら", state: "locked", stage: true, playable: true },
    { id: "s4_1", label: "Stage 4-1", title: "Waktu & Hari", sub: "〜時〜分 / 曜日", state: "locked", stage: true, playable: true },
    { id: "s4_2", label: "Stage 4-2", title: "Rutinitas & Jam Kerja", sub: "ます・から〜まで", state: "locked", stage: true, playable: true },
    { id: "s5_1", label: "Stage 5-1", title: "Transportasi", sub: "行きます・へ・で", state: "locked", stage: true, playable: true },
    { id: "s5_2", label: "Stage 5-2", title: "Kalender & Rekan", sub: "日付・いつ・と", state: "locked", stage: true, playable: true },
    { id: "b6", label: "Bab 6", title: "Makanan & Kegiatan", sub: "を・で・ませんか", state: "locked", stage: true, playable: true },
  ];

  const ACCOUNTS_KEY = "nq-accounts";
  const PROGRESS_KEY = "nq-progress";
  const STREAK_KEY = "nq-streak";
  const READ_BOOKS_KEY = "nq-read-books";
  const WEEKDAY_SHORT = ["S", "S", "R", "K", "J", "S", "M"];
  const WEEKDAY_NAMES = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

  function getActiveUserId() {
    if (S && S.user) {
      const raw = S.user.provider === "google" ? S.user.email : S.user.name;
      if (raw) return String(raw).toLowerCase().trim();
    }
    return "guest";
  }

  function getScopedKey(baseKey) {
    return `${baseKey}:${getActiveUserId()}`;
  }

  function getAllAccounts() {
    try {
      const raw = store.get(ACCOUNTS_KEY, "{}");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function saveAccount(acc) {
    const all = getAllAccounts();
    const id = (acc.provider === "google" ? acc.email : acc.name).toLowerCase().trim();
    all[id] = acc;
    store.set(ACCOUNTS_KEY, JSON.stringify(all));
  }

  function toDateKey(d = new Date()) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function shiftDateKey(key, deltaDays) {
    const [y, m, d] = key.split("-").map(Number);
    return toDateKey(new Date(y, m - 1, d + deltaDays));
  }

  function normalizeStudyDates(arr) {
    if (!Array.isArray(arr)) return [];
    const valid = new Set();
    arr.forEach((v) => {
      if (typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v)) valid.add(v);
    });
    return [...valid].sort();
  }

  function loadStudyDates() {
    try {
      const scopedKey = getScopedKey(STREAK_KEY);
      let raw = store.get(scopedKey, "");
      if (!raw && !S.user) raw = store.get(STREAK_KEY, "");
      if (raw) {
        S.studyDates = normalizeStudyDates(JSON.parse(raw));
      } else {
        S.studyDates = [];
      }
    } catch {
      S.studyDates = [];
    }
  }

  function saveStudyDates() {
    S.studyDates = normalizeStudyDates(S.studyDates);
    const data = JSON.stringify(S.studyDates);
    store.set(getScopedKey(STREAK_KEY), data);
    if (!S.user) store.set(STREAK_KEY, data);
  }

  function loadReadBooks() {
    try {
      const scopedKey = getScopedKey(READ_BOOKS_KEY);
      let raw = store.get(scopedKey, "");
      if (!raw && !S.user) raw = store.get(READ_BOOKS_KEY, "{}");
      S.readBooks = raw ? JSON.parse(raw) : {};
    } catch {
      S.readBooks = {};
    }
  }

  function saveReadBooks() {
    const data = JSON.stringify(S.readBooks || {});
    store.set(getScopedKey(READ_BOOKS_KEY), data);
    if (!S.user) store.set(READ_BOOKS_KEY, data);
  }

  /** Catat tanggal belajar hari ini (waktu lokal). Kembalikan true jika baru tercatat hari ini. */
  function recordStudyToday() {
    const todayKey = toDateKey();
    if (!Array.isArray(S.studyDates)) S.studyDates = [];
    if (S.studyDates.includes(todayKey)) return false;
    S.studyDates = normalizeStudyDates([...S.studyDates, todayKey]);
    saveStudyDates();
    return true;
  }

  /** Hitung streak aktif, rekor terpanjang, dan kalender Senin-Minggu minggu berjalan dari S.studyDates. */
  function getStreakStats(now = new Date()) {
    const todayKey = toDateKey(now);
    const yesterdayKey = shiftDateKey(todayKey, -1);
    const dates = normalizeStudyDates(S.studyDates);
    const dateSet = new Set(dates);
    const studiedToday = dateSet.has(todayKey);

    let count = 0;
    let cursor = studiedToday ? todayKey : dateSet.has(yesterdayKey) ? yesterdayKey : null;
    while (cursor && dateSet.has(cursor)) {
      count++;
      cursor = shiftDateKey(cursor, -1);
    }

    let longest = 0;
    let run = 0;
    for (let i = 0; i < dates.length; i++) {
      if (i > 0 && shiftDateKey(dates[i - 1], 1) === dates[i]) run++;
      else run = 1;
      if (run > longest) longest = run;
    }

    const todayMonIdx = (now.getDay() + 6) % 7;
    const mondayKey = shiftDateKey(todayKey, -todayMonIdx);
    const days = WEEKDAY_SHORT.map((d, i) => {
      const dateKey = shiftDateKey(mondayKey, i);
      return {
        d,
        name: WEEKDAY_NAMES[i],
        dateKey,
        lit: dateSet.has(dateKey),
        today: dateKey === todayKey,
      };
    });

    return {
      count,
      longest,
      totalDays: dateSet.size,
      studiedToday,
      todayKey,
      days,
    };
  }

  function buildStreakDaysHtml(days) {
    return days
      .map(
        (day) =>
          `<span class="day-dot${day.lit ? " is-lit" : ""}${day.today ? " is-today" : ""}" title="${day.name} (${day.dateKey})${day.lit ? " — Belajar ✓" : day.today ? " — Hari ini" : ""}">${day.d}</span>`
      )
      .join("");
  }

  const API_MYSQL_URL = "http://localhost/nihongo_api/index.php";

  async function syncProgressToMySQL() {
    if (!S.user || !S.user.id) return;
    try {
      const nodeStates = {};
      S.nodes.forEach((n) => {
        nodeStates[n.id] = n.state;
      });
      await fetch(`${API_MYSQL_URL}?action=sync`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: S.user.id,
          activeStageId: S.activeStageId,
          xpTotal: S.xpTotal,
          hp: S.hp,
          starsBy: S.starsBy,
          nodes: nodeStates,
          studyDate: toDateKey(),
          readBooks: Object.keys(S.readBooks || {}),
        }),
      });
    } catch (e) {
      // offline fallback
    }
  }

  function saveProgress() {
    const nodeStates = {};
    S.nodes.forEach((n) => {
      nodeStates[n.id] = n.state;
    });
    const data = JSON.stringify({
      activeStageId: S.activeStageId,
      xpTotal: S.xpTotal,
      starsBy: S.starsBy,
      nodeStates,
    });
    store.set(getScopedKey(PROGRESS_KEY), data);
    if (!S.user) store.set(PROGRESS_KEY, data);
    syncProgressToMySQL();
  }

  function loadProgress(isNewAccount = false) {
    if (isNewAccount) {
      S.activeStageId = "s1";
      S.xpTotal = 0;
      S.starsBy = {};
      S.nodes = ALL_NODES.map((n) => {
        if (n.id === "b0") return { ...n, state: "done" };
        if (n.id === "s1") return { ...n, state: "current" };
        return { ...n, state: "locked" };
      });
      S.studyDates = [toDateKey()];
      S.readBooks = {};
      saveProgress();
      saveStudyDates();
      saveReadBooks();
      return;
    }

    const scopedKey = getScopedKey(PROGRESS_KEY);
    let raw = store.get(scopedKey, "");
    if (!raw && !S.user) {
      raw = store.get(PROGRESS_KEY, "");
    }

    if (raw) {
      try {
        const saved = JSON.parse(raw);
        if (saved && typeof saved === "object") {
          if (saved.nodeStates && typeof saved.nodeStates === "object") {
            S.nodes.forEach((n) => {
              const st = saved.nodeStates[n.id];
              if (st === "done" || st === "current" || st === "locked") n.state = st;
            });
          }
          if (saved.starsBy && typeof saved.starsBy === "object") S.starsBy = saved.starsBy;
          if (typeof saved.xpTotal === "number" && Number.isFinite(saved.xpTotal)) S.xpTotal = saved.xpTotal;
          if (typeof saved.activeStageId === "string" && saved.activeStageId) S.activeStageId = saved.activeStageId;
        }
      } catch {}
    } else {
      S.activeStageId = "s1";
      S.xpTotal = 0;
      S.starsBy = {};
      S.nodes = ALL_NODES.map((n) => {
        if (n.id === "b0") return { ...n, state: "done" };
        if (n.id === "s1") return { ...n, state: "current" };
        return { ...n, state: "locked" };
      });
    }
    loadStudyDates();
    loadReadBooks();
  }

  const S = {
    screen: "map",
    user: (() => {
      try {
        return JSON.parse(store.get("nq-user", "null"));
      } catch (e) {
        return null;
      }
    })(),
    romaji: store.get("nq-romaji", "1") !== "0",
    activeStageId: "s3_1",
    nodes: ALL_NODES.map((n) => ({ ...n })),
    starsBy: { s1: 3, s2: 3, s3: 3, s2_1: 3, s2_2: 3, s2_3: 3 },
    xpTotal: 720,
    studyDates: [],
    readBooks: {},
    openedStat: null,
    fresh: null,
    greeted: false,
    demoMode: false,
    prevFocus: null,
    steps: [],
    i: 0,
    fills: PHASES.map(() => 0),
    local: {},
    answered: false,
    start: 0,
    hp: 3,
    mistakes: 0,
    fast: 0,
    total: 0,
    correct: 0,
    combo: 0,
    best: 0,
    gain: 0,
    bankedGain: 0,
    preBossGain: null,
    wasAlreadyDone: false,
    banked: false,
  };

  let cfg, root;

  function refreshReadBooks(showCelebrate, label) {
    loadReadBooks();
    const addedStreak = showCelebrate ? recordStudyToday() : (loadStudyDates(), false);
    if (S.screen === "map") renderMap();
    if (showCelebrate) {
      SFX.unlock();
      const streak = getStreakStats();
      const streakSuffix = addedStreak ? ` Streak: ${streak.count} hari 🔥` : "";
      Buddy.react("party", `Okaeri! Hebat sudah menyelesaikan ${label || "materi Minna no Nihongo"}!${streakSuffix} 🎉`);
      toast(`Selesai membaca ${label || "materi"}!${streakSuffix} 🌟`);
    }
  }

  function start(opts) {
    cfg = Object.assign({ root: "#app", brand: "Nihongo Quest", fastMs: 15000 }, opts);
    root = document.querySelector(cfg.root);
    root.addEventListener("click", onClick);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (document.getElementById("login-modal-root")) {
          closeLoginModal();
          return;
        }
        if (document.getElementById("topic-modal-root")) {
          closeTopicModal();
          return;
        }
        if (S.openedStat) {
          closeStatCard();
          return;
        }
      }
    });
    root.addEventListener("keydown", (e) => {
      const isle = e.target.closest && e.target.closest(".isle");
      if (isle && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        if (isle.dataset.act === "reader-node") {
          ACT["reader-node"](isle);
        } else {
          onNode(isle.dataset.id);
        }
      }
    });
    root.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".btn, .isle, .chip-btn, .speak, .icon-btn, .toggle, .dock-btn")) SFX.tap();
    });
    window.addEventListener("resize", () => {
      updateDockNotch(false);
    });
    window.addEventListener("scroll", Buddy.updateAtTop, { passive: true });
    window.addEventListener("storage", (e) => {
      if (e.key === READ_BOOKS_KEY || e.key === getScopedKey(READ_BOOKS_KEY)) refreshReadBooks(false);
      else if (e.key === STREAK_KEY || e.key === getScopedKey(STREAK_KEY)) {
        loadStudyDates();
        if (S.screen === "map") renderMap();
      }
    });
    window.addEventListener("message", (e) => {
      if (e.data && e.data.type === "nq-reader-end") {
        refreshReadBooks(true, e.data.label);
      }
    });
    Buddy.mount();
    const m = location.hash.match(/^#step-(\d+)$/);
    if (location.hash === "#unlock") {
      // Demo: anggap Stage 1-1 baru saja lulus, lalu putar animasi buka pulau.
      S.demoMode = true;
      S.nodes = ALL_NODES.map((n, idx) => ({
        ...n,
        state: idx === 0 ? "done" : idx === 1 ? "current" : "locked",
      }));
      Object.assign(S, { activeStageId: "s1", starsBy: { s1: 3 }, xpTotal: 95, greeted: true });
      unlockNext(3);
      renderMap();
    } else if (m) {
      loadProgress();
      startLesson();
      go(Math.min(+m[1], S.steps.length - 1));
    } else {
      loadProgress();
      renderMap();
    }
  }
  window.NihongoMock = { start };

  const setRootClass = () => (root.className = `app app--${S.screen}${S.romaji ? "" : " romaji-off"}`);

  function renderTopDock() {
    const activeTab = S.activeDockTab || "avatar";
    const soundOn = SFX.on;
    const romajiOn = S.romaji;

    return `
      <nav class="top-dock" id="topDock" role="toolbar" aria-label="Aksi Cepat">
        <svg class="dock-defs" width="0" height="0" style="position:absolute;">
          <defs>
            <clipPath id="dock-scoop-clip" clipPathUnits="userSpaceOnUse">
              <path d="M 104 39 C 87 39 86 78 52 78 C 18 78 17 39 0 39 C 0 17.5 23.3 0 52 0 C 80.7 0 104 17.5 104 39 Z" />
            </clipPath>
          </defs>
        </svg>

        <!-- The sliding notch scoop ("Ellipse 12") matching web background -->
        <div class="dock-scoop" id="dockScoop" aria-hidden="true" style="--notch-x: 33px;">
          <div class="dock-scoop-body"></div>
        </div>

        <div class="dock-nav-items">
          <!-- 1. Avatar (Login / Profile) -->
          <button class="dock-btn dock-btn--avatar${activeTab === "avatar" ? " is-active" : ""}${S.user ? " is-logged-in" : ""}" 
                  type="button" 
                  data-act="dock-tab" 
                  data-tab="avatar" 
                  aria-label="${S.user ? 'Akun: ' + S.user.name : 'Masuk ke Akun'}">
            <div class="dock-avatar-inner">
              <svg viewBox="1280 960 810 770" fill="none">
                <!-- Outer double ring crescent -->
                <path d="M1837.94 1015.6C1980.34 1064.19 2082.74 1199.12 2082.74 1357.97C2082.74 1557.71 1920.82 1719.63 1721.08 1719.63C1652.94 1719.63 1589.21 1700.79 1534.8 1668.03C1571.46 1680.54 1610.77 1687.33 1651.67 1687.33C1851.41 1687.33 2013.33 1525.41 2013.33 1325.67C2013.33 1194.06 1943.04 1078.87 1837.94 1015.6ZM1651.67 964C1719.8 964 1783.54 982.843 1837.94 1015.6C1801.28 1003.09 1761.97 996.299 1721.08 996.299C1521.33 996.299 1359.41 1158.22 1359.41 1357.97C1359.41 1489.57 1429.71 1604.76 1534.8 1668.03C1392.4 1619.44 1290 1484.51 1290 1325.67C1290 1125.92 1451.92 964 1651.67 964Z" fill="#1D1B3A"/>
                <!-- Inner circle stroke -->
                <path d="M1685.17 1626.93C1527.79 1626.93 1400.2 1499.35 1400.2 1341.97C1400.2 1184.59 1527.79 1057 1685.17 1057C1842.55 1057 1970.13 1184.59 1970.13 1341.97C1970.13 1499.35 1842.55 1626.93 1685.17 1626.93Z" stroke-width="41.7" stroke-linecap="round" stroke-linejoin="round" stroke="#1D1B3A"/>
                <!-- Head Circle -->
                <path d="M1794.43 1292.2C1794.54 1306.58 1791.79 1320.84 1786.34 1334.15C1780.89 1347.45 1772.84 1359.54 1762.68 1369.71C1752.51 1379.88 1740.42 1387.92 1727.11 1393.37C1713.81 1398.82 1699.55 1401.57 1685.17 1401.46C1663.56 1401.46 1642.44 1395.06 1624.47 1383.05C1606.5 1371.04 1592.5 1353.98 1584.23 1334.02C1575.96 1314.05 1573.79 1292.08 1578.01 1270.89C1582.23 1249.69 1592.63 1230.23 1607.91 1214.95C1623.19 1199.67 1642.66 1189.26 1663.85 1185.04C1685.05 1180.83 1707.02 1182.99 1726.98 1191.26C1746.95 1199.53 1764.01 1213.53 1776.02 1231.5C1788.02 1249.47 1794.43 1270.59 1794.43 1292.2Z" stroke-width="41.7" stroke-linecap="round" stroke-linejoin="round" stroke="#1D1B3A"/>
                <!-- Shoulders Arc -->
                <path d="M1854.75 1571.05C1854.75 1526.07 1836.89 1482.94 1805.08 1451.13C1773.28 1419.33 1730.14 1401.46 1685.17 1401.46C1640.19 1401.46 1597.05 1419.33 1565.25 1451.13C1533.44 1482.94 1515.58 1526.07 1515.58 1571.05" stroke-width="41.7" stroke-linecap="round" stroke-linejoin="round" stroke="#1D1B3A"/>
              </svg>
              ${S.user ? '<span class="dock-avatar-badge" title="Terhubung"></span>' : ''}
            </div>
          </button>

          <!-- 2. Sound -->
          <button class="dock-btn dock-btn--sound${activeTab === "sound" ? " is-active" : ""}" 
                  type="button" 
                  data-act="dock-tab" 
                  data-tab="sound" 
                  aria-pressed="${soundOn}" 
                  aria-label="Efek Suara">
            <div class="dock-sound-circle">
              <svg viewBox="3980 1590 320 230" fill="none">
                <path d="M4014.64 1748.39V1669.78C4014.64 1662.16 4020.59 1655.97 4027.93 1655.97H4075.55C4077.31 1655.96 4079.05 1655.6 4080.66 1654.9C4082.27 1654.21 4083.73 1653.19 4084.94 1651.92L4124.78 1606.92C4133.15 1598.21 4147.45 1604.38 4147.45 1616.7V1801.49C4147.45 1813.89 4132.98 1820.01 4124.66 1811.13L4084.95 1766.39C4083.74 1765.07 4082.27 1764.03 4080.63 1763.31C4079 1762.59 4077.23 1762.22 4075.44 1762.22H4027.93C4020.59 1762.22 4014.64 1756.03 4014.64 1748.39Z" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" stroke="#1D1B3A" fill="#1D1B3A"/>
                <g class="sound-icon-status">
                  ${soundOn ? `
                    <path d="M4195 1675 C4220 1695 4220 1725 4195 1745" stroke="#1D1B3A" stroke-width="26" stroke-linecap="round"/>
                    <path d="M4240 1650 C4280 1685 4280 1735 4240 1770" stroke="#1D1B3A" stroke-width="26" stroke-linecap="round"/>
                  ` : `
                    <path d="M4280.26 1748.93L4200.58 1669.25M4280.26 1669.25L4200.58 1748.93" stroke-width="26" stroke-linecap="round" stroke="#1D1B3A"/>
                  `}
                </g>
              </svg>
            </div>
          </button>

          <!-- 3. Romaji Switch -->
          <button class="dock-btn dock-btn--romaji${activeTab === "romaji" ? " is-active" : ""}" 
                  type="button" 
                  data-act="dock-tab" 
                  data-tab="romaji" 
                  aria-pressed="${romajiOn}" 
                  aria-label="Bantuan Romaji">
            <span class="dock-switch-track" aria-hidden="true">
              <span class="dock-switch-thumb"></span>
            </span>
            <svg class="dock-romaji-svg" viewBox="7380 1630 1440 260" style="width: 76px; height: 15px; fill: #1D1B3A;">
              <path d="M7381.38 1880V1829.46H7404.81V1697.33H7381.38V1646.8H7515.99C7545.1 1646.8 7567.46 1652.27 7583.08 1663.2C7598.71 1674.04 7606.52 1689.96 7606.52 1710.96C7606.52 1724.53 7603.15 1735.81 7596.41 1744.79C7589.68 1753.78 7580.54 1760.18 7569.02 1763.98C7578.2 1767.01 7584.99 1771.75 7589.38 1778.19C7593.88 1784.64 7596.22 1792.5 7596.41 1801.78L7596.71 1813.94C7596.9 1819.11 7598.03 1823.02 7600.08 1825.65C7602.22 1828.19 7605.84 1829.46 7610.92 1829.46H7626.44V1880H7575.47C7556.81 1880 7543 1875.7 7534.01 1867.11C7525.12 1858.42 7520.58 1845.72 7520.39 1829.02L7520.1 1809.54C7519.8 1793.92 7512.58 1786.1 7498.42 1786.1H7479.23V1829.46H7499V1880H7381.38ZM7501.93 1695.87H7479.23V1745.38H7501.93C7520.68 1745.38 7530.06 1737.13 7530.06 1720.62C7530.06 1704.12 7520.68 1695.87 7501.93 1695.87ZM7755.06 1884.25C7730.94 1884.25 7710.09 1879.41 7692.51 1869.75C7675.03 1859.98 7661.55 1846.06 7652.08 1828C7642.61 1809.93 7637.87 1788.5 7637.87 1763.69C7637.87 1738.69 7642.61 1717.16 7652.08 1699.09C7661.55 1680.93 7675.03 1666.96 7692.51 1657.2C7710.09 1647.43 7730.94 1642.55 7755.06 1642.55C7779.28 1642.55 7800.12 1647.43 7817.61 1657.2C7835.09 1666.96 7848.56 1680.93 7858.04 1699.09C7867.51 1717.16 7872.24 1738.69 7872.24 1763.69C7872.24 1788.5 7867.51 1809.93 7858.04 1828C7848.56 1846.06 7835.09 1859.98 7817.61 1869.75C7800.12 1879.41 7779.28 1884.25 7755.06 1884.25ZM7755.06 1833.71C7765.99 1833.71 7774.39 1827.75 7780.25 1815.84C7786.11 1803.93 7789.04 1786.4 7789.04 1763.25C7789.04 1740.11 7786.11 1722.58 7780.25 1710.66C7774.39 1698.75 7765.99 1692.79 7755.06 1692.79C7744.12 1692.79 7735.72 1698.75 7729.86 1710.66C7724 1722.58 7721.07 1740.11 7721.07 1763.25C7721.07 1786.4 7724 1803.93 7729.86 1815.84C7735.72 1827.75 7744.12 1833.71 7755.06 1833.71ZM7892.31 1880V1829.46H7915.75V1697.33H7892.31V1646.8H8011.11L8060.48 1774.24L8111.45 1646.8H8218.83V1697.33H8195.39V1829.46H8218.83V1880H8101.2V1829.46H8121.71V1732.49L8063.41 1880H8021.8L7963.5 1732.49V1829.46H7984.01V1880H7892.31ZM8230.4 1880V1829.46H8251.64L8295.44 1697.33H8263.94V1646.8H8408.67L8463.46 1829.46H8484.7V1880H8353.3V1829.46H8377.47L8370.73 1803.83H8310.38L8302.76 1829.46H8326.93V1880H8230.4ZM8321.22 1767.21H8361.06L8342.46 1696.02L8321.22 1767.21ZM8590.46 1884.39C8579.62 1884.39 8569.61 1882.34 8560.43 1878.24C8551.25 1874.14 8544.22 1868.23 8539.33 1860.52L8533.47 1880H8493.19V1783.03H8535.67V1794.31C8535.67 1809.05 8537.77 1819.11 8541.97 1824.48C8546.27 1829.85 8551.2 1832.54 8556.77 1832.54C8562.72 1832.54 8567.51 1830 8571.12 1824.92C8574.83 1819.75 8576.69 1810.52 8576.69 1797.24V1697.33H8531.28V1646.8H8676.3V1697.33H8652.86V1810.42C8652.86 1833.17 8647.49 1851.19 8636.75 1864.47C8626.1 1877.75 8610.67 1884.39 8590.46 1884.39ZM8692.12 1880V1829.46H8717.02V1697.33H8692.12V1646.8H8818.09V1697.33H8793.19V1829.46H8818.09V1880H8692.12Z"/>
            </svg>
          </button>
        </div>
      </nav>
    `;
  }

  function updateDockNotch(smooth = true) {
    const dock = root ? root.querySelector(".top-dock") : null;
    if (!dock) return;
    const scoop = dock.querySelector(".dock-scoop");
    if (!scoop) return;

    const activeTab = S.activeDockTab || "avatar";
    const targetBtn = dock.querySelector(`.dock-btn[data-tab="${activeTab}"]`);
    if (!targetBtn) return;

    const dockRect = dock.getBoundingClientRect();
    const btnRect = targetBtn.getBoundingClientRect();

    let centerOffset = 0;
    if (activeTab === "romaji") {
      const track = targetBtn.querySelector(".dock-switch-track");
      if (track) {
        const trackRect = track.getBoundingClientRect();
        centerOffset = (trackRect.left + trackRect.width / 2) - dockRect.left - 52;
      } else {
        centerOffset = (btnRect.left + btnRect.width / 2) - dockRect.left - 52;
      }
    } else {
      centerOffset = (btnRect.left + btnRect.width / 2) - dockRect.left - 52;
    }

    if (!smooth) {
      scoop.style.transition = "none";
      scoop.style.setProperty("--notch-x", `${centerOffset}px`);
      void scoop.offsetWidth;
      scoop.style.transition = "";
    } else {
      scoop.style.setProperty("--notch-x", `${centerOffset}px`);
    }
  }

  const romajiToggle = () =>
    `<button class="toggle" type="button" data-act="romaji" aria-pressed="${S.romaji}"><span class="toggle-track" aria-hidden="true"><span class="toggle-thumb"></span></span><span class="toggle-label">Romaji</span></button>`;
  const soundBtn = () =>
    `<button class="icon-btn snd" type="button" data-act="sound" aria-pressed="${SFX.on}" aria-label="Efek suara">${icon(SFX.on ? "volume" : "volumeX")}</button>`;
  const btn = (label, act, cls = "btn-primary", attrs = "") =>
    `<button class="btn ${cls}" type="button" data-act="${act}" ${attrs}>${label}</button>`;
  const nextBtn = (attrs = "") => btn(`<span>Lanjut</span>${icon("arrowR")}`, "next", "btn-primary", attrs);
  const speakBtn = (tokens, label = "Dengarkan", cls = "speak") =>
    `<button class="${cls}" type="button" data-act="say" data-say="${enc(tokens)}" aria-label="${label}">${icon("volume")}</button>`;

  // ---------- Peta pulau ----------
  const K = 'stroke="#1D1B3A" stroke-width="2.5" stroke-linejoin="round"';
  const PROPS = {
    palm: `<path d="M-28 -4c-3-20 2-38 12-50" fill="none" stroke="#1D1B3A" stroke-width="9" stroke-linecap="round"/>
      <path d="M-28 -4c-3-20 2-38 12-50" fill="none" stroke="#C98A4B" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M-16 -54c-12-9-30-6-36 5 12-5 24-3 36-5z" fill="#14C3A2" ${K}/>
      <path d="M-16 -54c3-14 18-22 32-16-12 2-21 8-32 16z" fill="#14C3A2" ${K}/>
      <path d="M-16 -54c12-5 28-1 34 10-11-5-23-7-34-10z" fill="#14C3A2" ${K}/>
      <path d="M-16 -54c-7 9-8 22-1 30-1-10-1-20 1-30z" fill="#14C3A2" ${K}/>
      <circle cx="-13" cy="-47" r="4" fill="#C98A4B" ${K}/>
      <rect x="10" y="-28" width="32" height="26" rx="9" fill="#fff" ${K}/>
      <text class="prop-kana" x="26" y="-9">あ</text>`,
    torii: `<rect x="-25" y="-44" width="8" height="42" fill="#FF5C8A" ${K}/>
      <rect x="17" y="-44" width="8" height="42" fill="#FF5C8A" ${K}/>
      <rect x="-31" y="-38" width="62" height="7" rx="2" fill="#FF5C8A" ${K}/>
      <path d="M-40 -52q40-10 80 0l-3 9q-37-8-74 0z" fill="#FF5C8A" ${K}/>
      <rect x="-4" y="-46" width="8" height="9" fill="#FFC63D" ${K}/>`,
    lighthouse: `<path d="M14 -58l16-6M14 -52l16 2M-14 -58l-16-6M-14 -52l-16 2" stroke="#FFC63D" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M-13 -2l5-48h16l5 48z" fill="#fff" ${K}/>
      <path d="M-11.3 -18h22.6l1 9h-24.6z" fill="#FF5C8A" ${K}/>
      <path d="M-9.6 -36h19.2l.9 9h-21z" fill="#FF5C8A" ${K}/>
      <rect x="-11" y="-62" width="22" height="13" rx="3" fill="#FFC63D" ${K}/>
      <path d="M-14 -62l14-12 14 12z" fill="#FF5C8A" ${K}/>`,
    school: `<path d="M34 -2v-62" stroke="#1D1B3A" stroke-width="2.5"/>
      <path d="M34 -64l16 5-16 5z" fill="#FF5C8A" ${K}/>
      <rect x="-30" y="-38" width="60" height="36" fill="#fff" ${K}/>
      <path d="M-36 -36l36-22 36 22z" fill="#5B8CFF" ${K}/>
      <circle cx="0" cy="-43" r="6" fill="#FFC63D" ${K}/>
      <rect x="-7" y="-20" width="14" height="18" fill="#FF5C8A" ${K}/>
      <rect x="-24" y="-30" width="11" height="9" fill="#C9EFFB" ${K}/>
      <rect x="13" y="-30" width="11" height="9" fill="#C9EFFB" ${K}/>`,
    book: `<rect x="-24" y="-36" width="34" height="42" rx="4" fill="#FF5C8A" ${K}/>
      <rect x="-20" y="-32" width="26" height="34" rx="2" fill="#fff" ${K}/>
      <path d="M-15 -22h16M-15 -14h16M-15 -6h10" stroke="#1D1B3A" stroke-width="2.5" stroke-linecap="round"/>
      <g transform="translate(14, -20) rotate(25)">
        <path d="M-4 -20l8 0l-1 26l-3 6l-3 -6z" fill="#FFC63D" ${K}/>
        <path d="M-1 12l1 2l1 -2z" fill="#1D1B3A"/>
      </g>`,
    gadget: `<rect x="-30" y="-34" width="60" height="38" rx="8" fill="#5B8CFF" ${K}/>
      <circle cx="0" cy="-15" r="13" fill="#fff" ${K}/>
      <circle cx="0" cy="-15" r="7" fill="#1D1B3A"/>
      <rect x="-22" y="-42" width="16" height="8" rx="3" fill="#FFC63D" ${K}/>
      <circle cx="18" cy="-28" r="3.5" fill="#FF5C8A" ${K}/>`,
    gift: `<rect x="-26" y="-28" width="52" height="34" rx="6" fill="#14C3A2" ${K}/>
      <rect x="-30" y="-36" width="60" height="11" rx="4" fill="#FF5C8A" ${K}/>
      <path d="M-4 -36v42M4 -36v42" stroke="#FFC63D" stroke-width="4"/>
      <path d="M0 -36c-9-11-20 0 0 0c20 0 9-11 0 0z" fill="#FFC63D" ${K}/>`,
    store: `<rect x="-28" y="-32" width="56" height="34" rx="4" fill="#fff" ${K}/>
      <path d="M-32 -32l6 -14h52l6 14z" fill="#FF5C8A" ${K}/>
      <path d="M-22 -32l4 -14h8l-4 14z" fill="#FFC63D" ${K}/>
      <path d="M2 -32l4 -14h8l-4 14z" fill="#FFC63D" ${K}/>
      <rect x="-10" y="-18" width="20" height="20" rx="3" fill="#5B8CFF" ${K}/>
      <circle cx="-18" cy="-12" r="5" fill="#FFC63D" ${K}/>
      <circle cx="18" cy="-12" r="5" fill="#14C3A2" ${K}/>`,
    mall: `<rect x="-24" y="-48" width="48" height="50" rx="6" fill="#14C3A2" ${K}/>
      <rect x="-18" y="-42" width="36" height="10" rx="3" fill="#fff" ${K}/>
      <rect x="-18" y="-28" width="36" height="10" rx="3" fill="#fff" ${K}/>
      <path d="M-6 -14h12v16h-12z" fill="#FFC63D" ${K}/>
      <path d="M-12 -37l6 -4 6 4" fill="none" stroke="#FF5C8A" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M0 -23l6 -4 6 4" fill="none" stroke="#5B8CFF" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="16" cy="-54" r="5" fill="#FF5C8A" ${K}/>`,
    clock: `<circle cx="0" cy="-24" r="22" fill="#FFC63D" ${K}/>
      <circle cx="0" cy="-24" r="16" fill="#fff" ${K}/>
      <path d="M0 -24v-10M0 -24l7 5" stroke="#1D1B3A" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="0" cy="-24" r="2.5" fill="#FF5C8A"/>
      <ellipse cx="-16" cy="-42" rx="7" ry="5" transform="rotate(-30 -16 -42)" fill="#FF5C8A" ${K}/>
      <ellipse cx="16" cy="-42" rx="7" ry="5" transform="rotate(30 16 -42)" fill="#FF5C8A" ${K}/>
      <path d="M-12 -4l-5 6M12 -4l5 6" stroke="#1D1B3A" stroke-width="3" stroke-linecap="round"/>`,
    office: `<rect x="-22" y="-52" width="44" height="54" rx="5" fill="#5B8CFF" ${K}/>
      <rect x="-15" y="-46" width="9" height="7" rx="2" fill="#FFC63D"/>
      <rect x="6" y="-46" width="9" height="7" rx="2" fill="#FFC63D"/>
      <rect x="-15" y="-34" width="9" height="7" rx="2" fill="#fff"/>
      <rect x="6" y="-34" width="9" height="7" rx="2" fill="#fff"/>
      <rect x="-15" y="-22" width="9" height="7" rx="2" fill="#FFC63D"/>
      <rect x="6" y="-22" width="9" height="7" rx="2" fill="#fff"/>
      <rect x="-7" y="-10" width="14" height="12" rx="2" fill="#FF5C8A" ${K}/>
      <path d="M0 -52v-12" stroke="#1D1B3A" stroke-width="2.5"/>
      <circle cx="0" cy="-64" r="3" fill="#FF5C8A"/>`,
    train: `<path d="M-30 -24c0 -10 12 -16 32 -16 22 0 34 8 34 16v18h-66z" fill="#fff" ${K}/>
      <path d="M-30 -12h66v5h-66z" fill="#5B8CFF"/>
      <rect x="-22" y="-28" width="14" height="10" rx="3" fill="#14C3A2" ${K}/>
      <rect x="-2" y="-28" width="14" height="10" rx="3" fill="#14C3A2" ${K}/>
      <path d="M18 -26c6 0 12 3 14 7h-14z" fill="#FFC63D" ${K}/>
      <circle cx="-16" cy="-2" r="5" fill="#1D1B3A"/>
      <circle cx="16" cy="-2" r="5" fill="#1D1B3A"/>
      <path d="M-34 -1h68" stroke="#FF5C8A" stroke-width="2.5" stroke-linecap="round"/>`,
    calendar: `<rect x="-24" y="-34" width="48" height="42" rx="6" fill="#fff" ${K}/>
      <path d="M-24 -34h48v12h-48z" fill="#FF5C8A" ${K}/>
      <circle cx="-14" cy="-34" r="3" fill="#1D1B3A"/>
      <circle cx="0" cy="-34" r="3" fill="#1D1B3A"/>
      <circle cx="14" cy="-34" r="3" fill="#1D1B3A"/>
      <text x="0" y="-8" font-family="'Fredoka', sans-serif" font-weight="700" font-size="14" fill="#5B8CFF" text-anchor="middle">5月</text>
      <circle cx="0" cy="1" r="3" fill="#FFC63D"/>`,
    fuji: `<circle cx="28" cy="-52" r="12" fill="#FF5C8A" ${K}/>
      <path d="M-56 -4l38-54q18-9 36 0l38 54z" fill="#5B8CFF" ${K}/>
      <path d="M-18 -58q18-9 36 0l-7 11-7-5-5 7-6-7-6 5z" fill="#fff" ${K}/>`,
    bookMateri: `<rect x="-32" y="-36" width="64" height="40" rx="8" fill="#583E26" ${K}/>
      <path d="M-27 -34c10-6 21-4 27 2v32c-6-5-17-6-27-1z" fill="#FBEFD9" ${K}/>
      <path d="M27 -34c-10-6-21-4-27 2v32c6-5 17-6 27-1z" fill="#FADEC0" ${K}/>
      <path d="M-20 -20h13M-20 -12h11M7 -20h13M7 -12h11" stroke="#583E26" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M12 -38v16l5-4 5 4v-16z" fill="#FF5C8A" stroke="#1D1B3A" stroke-width="2"/>`,
    scrollJep: `<rect x="-26" y="-42" width="52" height="44" rx="8" fill="#FADEC0" ${K}/>
      <rect x="-31" y="-45" width="62" height="10" rx="5" fill="#FF5C8A" ${K}/>
      <rect x="-31" y="-4" width="62" height="10" rx="5" fill="#AD7258" ${K}/>
      <text x="0" y="-14" font-family="'Zen Maru Gothic', sans-serif" font-weight="900" font-size="18" fill="#371C0D" text-anchor="middle">日本</text>`,
  };
  const ISLES = {
    b0: { x: 116, y: 130, grass: "#C9B8FF", prop: "palm" },
    s1: { x: 284, y: 450, grass: "#14C3A2", prop: "torii" },
    s2: { x: 116, y: 670, grass: "#5B8CFF", prop: "lighthouse" },
    s3: { x: 284, y: 890, grass: "#FF8A3D", prop: "school" },
    s2_1: { x: 116, y: 1210, grass: "#FF5C8A", prop: "book" },
    s2_2: { x: 284, y: 1430, grass: "#14C3A2", prop: "gadget" },
    s2_3: { x: 116, y: 1650, grass: "#FFC63D", prop: "gift" },
    s3_1: { x: 284, y: 1970, grass: "#14C3A2", prop: "store" },
    s3_2: { x: 116, y: 2190, grass: "#5B8CFF", prop: "mall" },
    s4_1: { x: 284, y: 2510, grass: "#FF8A3D", prop: "clock" },
    s4_2: { x: 116, y: 2730, grass: "#C9B8FF", prop: "office" },
    s5_1: { x: 284, y: 3050, grass: "#5B8CFF", prop: "train" },
    s5_2: { x: 116, y: 3270, grass: "#FF5C8A", prop: "calendar" },
    b6: { x: 200, y: 3590, grass: "#14C3A2", prop: "fuji", scale: 1.15 },
  };
  const BRANCH_NODES = [
    { id: "b1_mat", bab: 1, mode: "materi", parent: "s1", x: 104, y: 445, grass: "#FFD166", prop: "bookMateri", code: "BAB 1 • KIRI", title: "Materi Indo" },
    { id: "b1_jep", bab: 1, mode: "jep",    parent: "s1", x: 446, y: 445, grass: "#FF5C8A", prop: "scrollJep",  code: "BAB 1 • KANAN", title: "Full Jepang" },
    { id: "b2_mat", bab: 2, mode: "materi", parent: "s2_1", x: -46, y: 1205, grass: "#14C3A2", prop: "bookMateri", code: "BAB 2 • KIRI", title: "Materi Indo" },
    { id: "b2_jep", bab: 2, mode: "jep",    parent: "s2_1", x: 296, y: 1205, grass: "#5B8CFF", prop: "scrollJep",  code: "BAB 2 • KANAN", title: "Full Jepang" },
    { id: "b3_mat", bab: 3, mode: "materi", parent: "s3_1", x: 104, y: 1965, grass: "#FFC63D", prop: "bookMateri", code: "BAB 3 • KIRI", title: "Materi Indo" },
    { id: "b3_jep", bab: 3, mode: "jep",    parent: "s3_1", x: 446, y: 1965, grass: "#FF5C8A", prop: "scrollJep",  code: "BAB 3 • KANAN", title: "Full Jepang" },
    { id: "b4_mat", bab: 4, mode: "materi", parent: "s4_1", x: 104, y: 2505, grass: "#14C3A2", prop: "bookMateri", code: "BAB 4 • KIRI", title: "Materi Indo" },
    { id: "b4_jep", bab: 4, mode: "jep",    parent: "s4_1", x: 446, y: 2505, grass: "#5B8CFF", prop: "scrollJep",  code: "BAB 4 • KANAN", title: "Full Jepang" },
    { id: "b5_mat", bab: 5, mode: "materi", parent: "s5_1", x: 104, y: 3045, grass: "#FF8A3D", prop: "bookMateri", code: "BAB 5 • KIRI", title: "Materi Indo" },
    { id: "b5_jep", bab: 5, mode: "jep",    parent: "s5_1", x: 446, y: 3045, grass: "#C9B8FF", prop: "scrollJep",  code: "BAB 5 • KANAN", title: "Full Jepang" },
  ];
  const WORLD_H = 3770;
  const SAND = "M-74 18C-78-6-50-26-10-28 34-30 74-16 76 10 78 34 40 44 0 44-42 44-70 38-74 18Z";
  const GRASS = "M-62 6C-64-14-36-30-4-31 30-32 62-18 62 0 62 14 34 20 0 20-34 20-60 18-62 6Z";
  const CLOUD = "M-28 12c-10 0-14-12-6-17-2-10 10-17 18-11 4-10 20-11 25-1 8-4 18 2 16 11 8 3 6 18-4 18z";
  const routeD = (a, b) => {
    const cy = Math.round((b.y - a.y) * 0.55);
    return `M${a.x} ${a.y} C${a.x} ${a.y + cy} ${b.x} ${b.y - cy} ${b.x} ${b.y}`;
  };
  const branchRouteD = (p, c) => {
    const mx = Math.round((p.x + c.x) / 2);
    const my = Math.min(p.y, c.y) - 34;
    return `M${p.x} ${p.y} Q${mx} ${my} ${c.x} ${c.y}`;
  };

  function readerIsleSVG(b) {
    const readKey = `b${b.bab}_${b.mode}`;
    const isRead = !!(S.readBooks && S.readBooks[readKey]);
    return `<g transform="translate(${b.x} ${b.y}) scale(0.72)">
      <g class="isle isle--reader${isRead ? " is-read" : ""}" data-act="reader-node" data-bab="${b.bab}" data-mode="${b.mode}" role="button" tabindex="0" aria-label="Buka Minna no Nihongo Bab ${b.bab} ${b.title} di tab baru">
        <g class="isle-inner">
          <ellipse class="isle-water" cx="0" cy="26" rx="86" ry="23"/>
          <path class="isle-sand" d="${SAND}"/>
          <path class="isle-grass" d="${GRASS}" fill="${b.grass}"/>
          <g class="isle-prop">${PROPS[b.prop]}</g>
          ${isRead ? `<g transform="translate(52 -24)"><circle r="15" fill="#14C3A2" stroke="#1D1B3A" stroke-width="2.5"/><path d="M-6 0l4 4 8-9" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></g>` : ""}
          <g class="isle-sign" transform="translate(0 68)">
            <rect x="-86" y="-22" width="172" height="50" rx="16"/>
            <text class="isle-code" y="-4">${b.code}</text>
            <text class="isle-title" y="17">${b.title}</text>
          </g>
        </g>
        <g class="isle-tab-badge" transform="translate(0 -66)">
          <rect x="-38" y="-12" width="76" height="22" rx="11" fill="${b.mode === "materi" ? "#FFC63D" : "#FF5C8A"}" stroke="#1D1B3A" stroke-width="2.5"/>
          <text y="3" font-family="'Fredoka', sans-serif" font-weight="700" font-size="10.5" fill="${b.mode === "materi" ? "#1D1B3A" : "#fff"}" text-anchor="middle">${b.mode === "materi" ? "MATERI ↗" : "JEPANG ↗"}</text>
        </g>
      </g>
    </g>`;
  }

  function isleSVG(n) {
    const P = ISLES[n.id];
    const sealed = S.fresh === n.id;
    const fog = n.state === "locked" || sealed;
    const stars = S.starsBy[n.id] || 0;
    const isLocked = sealed || n.state === "locked";
    const status = isLocked ? "terkunci" : n.state === "done" ? "selesai" : n.playable ? "siap dimainkan" : "segera hadir";
    return `<g transform="translate(${P.x} ${P.y})${P.scale ? ` scale(${P.scale})` : ""}">
      <g class="isle isle--${n.state}${sealed ? " is-sealed" : ""}" data-act="node" data-id="${n.id}" role="button" tabindex="0"${isLocked ? ' aria-disabled="true"' : ""} aria-label="${n.label}, ${n.title}, ${status}">
        <g class="isle-inner">
          ${n.state === "current" ? `<ellipse class="isle-ripple" cx="0" cy="26" rx="88" ry="24"/>` : ""}
          <ellipse class="isle-water" cx="0" cy="26" rx="88" ry="24"/>
          <path class="isle-sand" d="${SAND}"/>
          <path class="isle-grass" d="${GRASS}" fill="${P.grass}"/>
          <g class="isle-prop">${PROPS[P.prop]}</g>
          ${n.state === "done" ? `<g transform="translate(-52 -6)"><path d="M0 0v-34" stroke="#1D1B3A" stroke-width="2.5"/><path d="M0 -34l20 7-20 7z" fill="#FFC63D" ${K}/></g>` : ""}
          <g class="isle-sign" transform="translate(0 68)">
            <rect x="-86" y="-22" width="172" height="50" rx="16"/>
            <text class="isle-code" y="-4">${n.label.toUpperCase()}</text>
            <text class="isle-title" y="17">${n.title}</text>
          </g>
          ${
            n.state === "done"
              ? `<g class="isle-stars" transform="translate(0 44)">${[-22, 0, 22]
                  .map((x, i) => `<g transform="translate(${x} ${i === 1 ? -5 : 0}) scale(.75)"><path transform="translate(-12 -12)" d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" class="${i < stars ? "on" : ""}"/></g>`)
                  .join("")}</g>`
              : ""
          }
          ${
            fog
              ? `<g class="isle-fog">
              <g transform="translate(-34 -16)"><g class="cloud c1"><path d="${CLOUD}"/></g></g>
              <g transform="translate(36 -4) scale(.85)"><g class="cloud c2"><path d="${CLOUD}"/></g></g>
              <g transform="translate(-2 14) scale(1.1)"><g class="cloud c3"><path d="${CLOUD}"/></g></g>
              <g transform="translate(0 -10)"><g class="isle-lock"><circle r="21"/><g transform="translate(-12 -12)">${ICONS.lock}</g></g></g>
            </g>`
              : ""
          }
        </g>
        ${
          n.state === "current"
            ? `<g transform="translate(0 -98)"><g class="isle-marker${n.playable ? "" : " isle-marker--soon"}"><g class="isle-marker-bob"><rect x="-42" y="-16" width="84" height="32" rx="16"/><text y="6">${n.playable ? "MULAI!" : "SEGERA"}</text><path d="M-8 15l8 10 8-10" /></g></g></g>`
            : ""
        }
      </g>
    </g>`;
  }

  function worldSVG() {
    const ids = S.nodes.map((n) => n.id);
    let routes = "";
    let masks = "";
    for (let i = 0; i < ids.length - 1; i++) {
      const to = S.nodes[i + 1];
      const d = routeD(ISLES[ids[i]], ISLES[ids[i + 1]]);
      const fresh = S.fresh === to.id;
      if (fresh)
        masks += `<mask id="reveal-${to.id}" maskUnits="userSpaceOnUse" x="-122" y="0" width="644" height="${WORLD_H}"><path d="${d}" fill="none" stroke="#fff" stroke-width="18" style="stroke-dasharray:5000;stroke-dashoffset:5000"/></mask>`;
      routes += `<path class="route${to.state === "locked" && !fresh ? " route--locked" : ""}" data-to="${to.id}" d="${d}"${fresh ? ` mask="url(#reveal-${to.id})"` : ""}/>`;
    }
    const branchRoutes = BRANCH_NODES.map((b) => {
      const p = ISLES[b.parent];
      return `<path class="route--branch" d="${branchRouteD(p, b)}"/>`;
    }).join("");

    return `<svg class="world-svg" viewBox="-122 0 644 ${WORLD_H}" role="group" aria-label="Peta pulau Nihongo Quest">
      <defs>
        ${masks}
      </defs>
      <g class="routes">${branchRoutes}${routes}</g>
      <g class="boat-layer"></g>
      <g class="chapter-banner" transform="translate(200 285)">
        <rect x="-102" y="-15" width="204" height="30" rx="15" fill="#FF5C8A" stroke="#1D1B3A" stroke-width="2.5"/>
        <text x="0" y="5" font-family="'Fredoka', sans-serif" font-weight="700" font-size="11.5" fill="#fff" text-anchor="middle">BAB 1: PERKENALAN DIRI</text>
      </g>
      <g class="chapter-banner" transform="translate(200 1045)">
        <rect x="-102" y="-15" width="204" height="30" rx="15" fill="#FFC63D" stroke="#1D1B3A" stroke-width="2.5"/>
        <text x="0" y="5" font-family="'Fredoka', sans-serif" font-weight="700" font-size="11.5" fill="#1D1B3A" text-anchor="middle">BAB 2: BENDA DI SEKITARKU</text>
      </g>
      <g class="chapter-banner" transform="translate(200 1805)">
        <rect x="-102" y="-15" width="204" height="30" rx="15" fill="#14C3A2" stroke="#1D1B3A" stroke-width="2.5"/>
        <text x="0" y="5" font-family="'Fredoka', sans-serif" font-weight="700" font-size="11.5" fill="#fff" text-anchor="middle">BAB 3: TEMPAT & BELANJA</text>
      </g>
      <g class="chapter-banner" transform="translate(200 2345)">
        <rect x="-102" y="-15" width="204" height="30" rx="15" fill="#FF8A3D" stroke="#1D1B3A" stroke-width="2.5"/>
        <text x="0" y="5" font-family="'Fredoka', sans-serif" font-weight="700" font-size="11.5" fill="#fff" text-anchor="middle">BAB 4: WAKTU & JADWAL</text>
      </g>
      <g class="chapter-banner" transform="translate(200 2885)">
        <rect x="-102" y="-15" width="204" height="30" rx="15" fill="#5B8CFF" stroke="#1D1B3A" stroke-width="2.5"/>
        <text x="0" y="5" font-family="'Fredoka', sans-serif" font-weight="700" font-size="11.5" fill="#fff" text-anchor="middle">BAB 5: PERJALANAN & TANGGAL</text>
      </g>
      <g class="chapter-banner" transform="translate(200 3425)">
        <rect x="-102" y="-15" width="204" height="30" rx="15" fill="#C9B8FF" stroke="#1D1B3A" stroke-width="2.5"/>
        <text x="0" y="5" font-family="'Fredoka', sans-serif" font-weight="700" font-size="11.5" fill="#1D1B3A" text-anchor="middle">GERBANG BAB 6</text>
      </g>
      <g class="isles">${BRANCH_NODES.map(readerIsleSVG).join("")}${S.nodes.map(isleSVG).join("")}</g>
    </svg>`;
  }

  // Asset SVG kustom dari Figma untuk Statistik (Streak, XP, Bintang)
  const makeFlameSVG = (uid) => `<svg viewBox="28 32 62 88" fill="none" class="stat-svg-flame" aria-hidden="true">
    <defs>
      <linearGradient id="${uid}Grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FAAA2A"/>
        <stop offset="55%" stop-color="#FF8A3D"/>
        <stop offset="100%" stop-color="#914343"/>
      </linearGradient>
    </defs>
    <path d="M38.3992 96.9078C38.5276 105.057 41.9909 108.774 46.8658 115.731C38.5696 112.297 34.9274 109.058 31.5201 99.2607C30.5572 91.3649 30.9497 86.9325 32.5784 79.0254C32.5784 79.0254 42.0483 95.5456 38.3992 86.5549C36.9221 82.9154 39.9867 71.1749 43.1617 66.3943C46.288 61.6868 52.2387 56.7325 55.1966 47.4609C54.8449 53.3817 56.932 61.2307 51.0991 67.7313C63.4465 59.3608 67.4799 52.8476 65.9156 35.7313C79.7172 56.1323 84.4053 67.6296 65.3864 89.3784C75.3442 87.5595 79.0644 84.2888 80.7321 72.4372C86.7881 81.748 89.0161 88.5367 86.5529 99.7313C82.0198 110.81 77.2459 113.559 66.9739 115.731C74.3741 110.097 77.2184 106.377 77.028 97.3784C72.1315 100.563 69.4538 102.198 62.2115 101.143C53.165 89.7196 65.3864 70.5549 63.799 72.4372C62.2115 74.3196 45.0134 86.2298 45.2783 102.555C41.4098 100.64 39.6934 99.4537 38.3992 96.9078Z" fill="#FF8A3D"/>
    <path d="M38.3992 96.9078C38.5276 105.057 41.9909 108.774 46.8658 115.731C38.5696 112.297 34.9274 109.058 31.5201 99.2607C30.5572 91.3649 30.9497 86.9325 32.5784 79.0254C32.5784 79.0254 42.0483 95.5456 38.3992 86.5549C36.9221 82.9154 39.9867 71.1749 43.1617 66.3943C46.288 61.6868 52.2387 56.7325 55.1966 47.4609C54.8449 53.3817 56.932 61.2307 51.0991 67.7313C63.4465 59.3608 67.4799 52.8476 65.9156 35.7313C79.7172 56.1323 84.4053 67.6296 65.3864 89.3784C75.3442 87.5595 79.0644 84.2888 80.7321 72.4372C86.7881 81.748 89.0161 88.5367 86.5529 99.7313C82.0198 110.81 77.2459 113.559 66.9739 115.731C74.3741 110.097 77.2184 106.377 77.028 97.3784C72.1315 100.563 69.4538 102.198 62.2115 101.143C53.165 89.7196 65.3864 70.5549 63.799 72.4372C62.2115 74.3196 45.0134 86.2298 45.2783 102.555C41.4098 100.64 39.6934 99.4537 38.3992 96.9078Z" fill="url(#${uid}Grad)"/>
    <path d="M55.1966 47.4609C54.8449 53.3817 56.932 61.2307 51.0991 67.7313C63.4465 59.3608 67.4799 52.8476 65.9156 35.7313C79.7172 56.1323 84.4053 67.6296 65.3864 89.3784C75.3442 87.5595 79.0644 84.2888 80.7321 72.4372C86.7881 81.748 89.0161 88.5367 86.5529 99.7313C82.0198 110.81 77.2459 113.559 66.9739 115.731C74.3741 110.097 77.2184 106.377 77.028 97.3784C72.1315 100.563 69.4538 102.198 62.2115 101.143C53.165 89.7196 65.3864 70.5549 63.799 72.4372C62.2115 74.3196 45.0134 86.2298 45.2783 102.555C41.4098 100.64 39.6934 99.4537 38.3992 96.9078C38.5276 105.057 41.9909 108.774 46.8658 115.731C38.5696 112.297 34.9274 109.058 31.5201 99.2607C30.5572 91.3649 30.9497 86.9325 32.5784 79.0254C32.5784 79.0254 42.0483 95.5456 38.3992 86.5549C36.9221 82.9154 39.9867 71.1749 43.1617 66.3943C46.288 61.6868 52.2387 56.7325 55.1966 47.4609ZM55.1966 47.4609C55.2247 46.9892 55.2682 46.5298 55.3324 46.0843M55.1966 47.4609C55.2426 47.3168 55.2879 47.1716 55.3324 47.0254" fill="none" stroke-width="3.5" stroke="#1D1B3A"/>
  </svg>`;

  const STAT_ASSETS = {
    flame: makeFlameSVG("flameBadge"),
    flameBadge: makeFlameSVG("flameBadge"),
    flameBtn: makeFlameSVG("flameBtn"),

    bolt: `<svg viewBox="30 15 56 85" fill="none" class="stat-svg-bolt">
      <path d="M40.4409 58.0715L60.9163 17.4H82.4154L65.849 44.1111L83.7184 44.8556L41.837 94.2757L55.7974 58.0715H40.4409Z" fill="#2D2057" stroke-width="1" stroke="#262344"/>
      <path d="M32.9954 61.2358L53.4707 20.5643H74.9699L58.4034 47.2754L76.2728 48.0199L34.3914 97.44L48.3519 61.2358H32.9954Z" fill="#C9B8FF" stroke-width="1" stroke="#262344"/>
    </svg>`,

    star: `<svg viewBox="22 385 80 76" fill="none" class="stat-svg-star">
      <path d="M49.206 409.287C36.1485 408.615 25.4338 410.258 26.0232 415.989C26.6126 421.719 35.8917 428.809 42.0351 432.208C38.0614 446.154 35.1362 450.383 42.7227 455.614C50.2752 460.822 53.5241 454.209 65.1197 448.33C73.536 453.669 81.1186 460.343 88.2043 454.352C95.4041 448.264 85.1591 430.557 85.1591 430.557C85.1591 430.557 100.287 422.496 98.9116 414.532C97.5364 406.568 75.9252 407.15 75.9252 407.15C72.2971 397.693 67.6737 388.309 61.6816 388.503C55.6894 388.697 53.3278 392.378 49.206 409.287Z" fill="#FEE818" stroke="#663728" stroke-width="4.5"/>
      <path d="M53.2103 413.849C52.9156 414.432 48.982 413.748 46.727 413.849C44.472 413.95 45.0571 415.791 46.727 415.791C48.3969 415.791 55.1749 416.277 55.2732 415.791C55.3715 415.306 58.9078 400.252 59.2025 398.795C59.4972 397.338 57.2134 396.756 56.8449 398.212C56.4765 399.669 53.5051 413.266 53.2103 413.849Z" fill="white"/>
      <rect x="75.1162" y="413.169" width="12.1808" height="2" rx="1" fill="#FFF5F5"/>
      <rect x="33.4657" y="413.946" width="7.46566" height="2" rx="1" fill="white"/>
      <rect width="9.13723" height="2" rx="1" transform="matrix(0.275546 -0.961288 0.962915 0.269806 43.8783 446.039)" fill="white"/>
    </svg>`,

    flameCrest: `<svg class="card-ornament ornament-flames" viewBox="560 0 260 65" fill="none">
      <path d="M602.197 31.35C578.767 13.6734 556.923 35.9795 563.042 29.6665C569.16 23.3534 568.978 19.5656 583.662 10.3064C593.915 4.66644 601.9 3.65836 613.029 2.73073C635.539 0.952256 650.961 9.88551 658.914 14.9359C666.868 19.9864 635.344 8.95821 630.159 14.0942C642.358 21.9134 649.414 25.7094 663.809 30.5082C715.313 20.6744 730.615 18.5162 747.015 32.6126C733.457 29.3103 724.917 29.9784 706.636 39.3465C698.681 44.7016 694.829 47.2492 688.281 51.5518C680.792 55.8038 675.137 57.6044 661.974 59.5483C666.666 63.8505 671.931 63.4511 681.551 62.4944C668.477 71.911 628.176 63.6319 619.758 49.0266C616.322 43.0635 607.423 32.7491 602.197 31.35Z" fill="#FF8A3D" stroke-width="4" stroke="#1D1B3A"/>
      <path d="M651.5 26.2359C630.225 13.5309 610.39 29.5635 615.946 25.0259C621.501 20.4884 621.336 17.7659 634.67 11.1109C643.98 7.05716 651.23 6.33261 661.336 5.66587C681.775 4.38759 695.779 10.8084 703.002 14.4384C710.224 18.0684 681.599 10.1419 676.891 13.8334C687.967 19.4534 694.375 22.1818 707.446 25.6309C754.213 18.5629 768.108 17.0117 783 27.1435C770.689 24.7699 762.934 25.2501 746.334 31.9835C739.111 35.8324 735.613 37.6635 729.668 40.756C722.867 43.8122 717.732 45.1064 705.779 46.5035C710.04 49.5957 714.821 49.3086 723.557 48.621C711.685 55.3892 675.09 49.4386 667.446 38.941C664.326 34.6551 656.245 27.2416 651.5 26.2359Z" fill="#FFB483" stroke-width="4" stroke="#1D1B3A"/>
      <path d="M721.941 22.2774C706.237 12.6105 691.598 24.8092 695.698 21.3567C699.799 17.9043 699.677 15.8328 709.518 10.7692C716.39 7.68483 721.741 7.13353 729.2 6.62624C744.287 5.65363 754.623 10.539 759.954 13.301C765.284 16.0629 744.156 10.0319 740.681 12.8406C748.857 17.1168 753.586 19.1927 763.234 21.8171C797.752 16.4392 808.008 15.2589 819 22.9679C809.913 21.1619 804.189 21.5273 791.937 26.6505C786.606 29.579 784.024 30.9723 779.636 33.3253C774.616 35.6506 770.826 36.6353 762.004 37.6984C765.149 40.0511 768.678 39.8327 775.125 39.3095C766.363 44.4592 739.352 39.9315 733.71 31.9443C731.407 28.6832 725.443 23.0425 721.941 22.2774Z" fill="#F8F8F8" stroke-width="4" stroke="#1D1B3A"/>
    </svg>`,

    cloudCrest: `<svg class="card-ornament ornament-clouds" viewBox="745 140 235 110" fill="none">
      <path d="M762.96 215.22C690.63 214.916 717.596 171.305 760.019 179.025C760.318 177.782 760.76 176.468 761.363 175.081C775.226 143.202 815.289 140.06 809.413 173.121C811.158 163.791 823.288 167.792 824.909 168.383C824.707 168.303 824.328 168.146 823.74 167.888C817.279 165.054 829.247 141.438 851.388 155.052C868.235 134.19 898 146.697 895.825 172.091C915.85 162.176 925.014 175.2 920.535 186.688C980.958 188.989 909.578 213.839 928.815 212.592C948.052 211.346 937.615 223.104 921.58 227.988C905.544 232.872 911.444 224.124 900.264 222.448C889.405 226.66 883.404 226.405 872.857 221.514C864.003 228.318 858.778 230.585 846.98 219.901C832.926 227.051 824.813 225.645 810.064 216.708C792.798 227.181 781.962 226.968 762.96 215.22Z" fill="#1D1B3A"/>
      <path d="M757.739 226.213C685.412 226.974 711.733 182.971 754.265 190.065C754.545 188.818 754.968 187.498 755.55 186.102C768.942 154.022 808.955 150.29 803.566 183.434C805.174 174.08 817.361 177.901 818.99 178.469C818.787 178.391 818.406 178.24 817.814 177.991C811.312 175.252 822.931 151.462 845.271 164.749C861.808 143.641 891.754 155.708 889.953 181.132C909.831 170.922 919.185 183.81 914.876 195.363C975.327 196.773 904.32 222.672 923.537 221.142C942.753 219.613 932.491 231.523 916.529 236.643C900.567 241.762 906.338 232.928 895.134 231.418C884.339 235.789 878.334 235.623 867.716 230.887C858.963 237.821 853.772 240.164 841.818 229.655C827.871 237.012 819.738 235.725 804.86 227.007C787.749 237.733 776.911 237.68 757.739 226.213Z" fill="white"/>
      <path d="M891.153 235.986C853.5 235.828 867.538 213.125 889.622 217.144C889.777 216.497 890.008 215.813 890.322 215.091C897.539 198.496 918.394 196.86 915.335 214.07C916.244 209.214 922.558 211.296 923.402 211.604C923.297 211.562 923.099 211.481 922.793 211.347C919.43 209.871 925.66 197.577 937.186 204.665C945.956 193.804 961.451 200.315 960.319 213.535C970.743 208.373 975.513 215.153 973.182 221.133C1004.64 222.331 967.478 235.267 977.492 234.618C987.507 233.97 982.074 240.09 973.726 242.633C965.378 245.175 968.45 240.621 962.63 239.749C956.977 241.942 953.853 241.809 948.362 239.263C943.753 242.805 941.033 243.985 934.891 238.423C927.575 242.145 923.352 241.413 915.674 236.761C906.686 242.213 901.045 242.102 891.153 235.986Z" fill="#1D1B3A"/>
      <path d="M885.294 239.985C847.643 240.381 861.345 217.474 883.486 221.167C883.632 220.518 883.852 219.831 884.155 219.104C891.127 202.404 911.956 200.462 909.151 217.715C909.988 212.846 916.332 214.835 917.18 215.131C917.075 215.09 916.876 215.012 916.568 214.882C913.183 213.456 919.232 201.072 930.861 207.989C939.47 197 955.059 203.282 954.122 216.517C964.469 211.202 969.339 217.911 967.096 223.925C998.564 224.659 961.601 238.141 971.604 237.345C981.608 236.549 976.265 242.749 967.956 245.414C959.647 248.079 962.651 243.481 956.818 242.694C951.199 244.97 948.073 244.883 942.546 242.418C937.989 246.028 935.287 247.248 929.064 241.777C921.803 245.607 917.569 244.937 909.824 240.398C900.917 245.982 895.275 245.954 885.294 239.985Z" fill="white"/>
    </svg>`,

    sparkleCrest: `<svg class="card-ornament ornament-sparkles" viewBox="645 345 315 135" fill="none">
      <path d="M906.336 346.5C915.994 379.344 924.283 390.297 951.031 384.733C926.285 388.773 916.875 396.897 912.798 429.429C909.551 399.413 897.737 393.067 868.102 391.196C900.566 390.43 909.091 380.68 906.336 346.5Z" fill="#FFF781"/>
      <path d="M909.688 367.17C914.612 385.025 919.009 390.93 933.6 387.625C920.112 390.077 914.918 394.61 912.381 412.431C910.913 396.058 904.555 392.706 888.468 391.976C906.119 391.237 910.848 385.824 909.688 367.17Z" fill="white"/>
      <path d="M884.97 397.257C889.438 412.633 893.301 417.753 905.831 415.103C894.241 417.035 889.823 420.857 887.862 436.11C886.39 422.049 880.87 419.093 867 418.264C882.198 417.853 886.205 413.27 884.97 397.257Z" fill="#FFF781"/>
      <path d="M886.506 406.938C888.782 415.298 890.831 418.058 897.667 416.486C891.349 417.656 888.91 419.789 887.694 428.145C887.033 420.474 884.062 418.913 876.533 418.597C884.796 418.222 887.019 415.678 886.506 406.938Z" fill="white"/>
      <path d="M925.959 410.5C933.315 434.909 939.628 443.05 960 438.914C941.153 441.917 933.986 447.954 930.881 472.132C928.408 449.824 919.41 445.108 896.84 443.717C921.565 443.148 928.057 435.902 925.959 410.5Z" fill="#FFF781"/>
      <path d="M928.512 425.862C932.263 439.132 935.611 443.52 946.724 441.063C936.451 442.886 932.495 446.255 930.563 459.499C929.445 447.331 924.603 444.84 912.351 444.297C925.794 443.748 929.395 439.725 928.512 425.862Z" fill="white"/>
      <path d="M672.743 351.5C679.064 372.995 684.489 380.163 701.994 376.522C685.799 379.165 679.641 384.482 676.972 405.773C674.848 386.129 667.115 381.975 647.721 380.751C668.967 380.25 674.546 373.869 672.743 351.5Z" fill="#FFF781"/>
      <path d="M674.937 365.027C678.16 376.713 681.037 380.577 690.586 378.414C681.759 380.019 678.36 382.985 676.699 394.648C675.739 383.933 671.578 381.739 661.05 381.262C672.601 380.778 675.696 377.235 674.937 365.027Z" fill="white"/>
    </svg>`,
  };

  function renderStatCardContent(type, streakVal, xpVal, starsVal, totalStages, doneStages, daysHtml, lvl, curXp, xpPercent, streakInfo) {
    if (type === "xp") {
      return `
        <div class="stat-card stat-card--xp">
          ${STAT_ASSETS.cloudCrest}
          <div class="card-badge card-badge--xp">
            <div class="badge-glow">
              ${STAT_ASSETS.bolt}
            </div>
          </div>
          <div class="card-body">
            <div class="card-header-bar">
              <span class="card-tag">⚡ TOTAL PENGALAMAN</span>
            </div>
            <div class="card-count">${xpVal} XP</div>
            <p class="card-msg">Level ${lvl} Penjelajah! Raih ${250 - curXp} XP lagi untuk naik ke Level ${lvl + 1}.</p>
            <div class="card-extra">
              <div class="xp-bar-wrap" title="${curXp}/250 XP">
                <div class="xp-bar-inner" style="width:${xpPercent}%"></div>
              </div>
              <span style="font-size:11px; font-weight:700; opacity:.9;">${curXp}/250 XP</span>
            </div>
          </div>
        </div>
      `;
    }
    if (type === "stars") {
      return `
        <div class="stat-card stat-card--stars">
          ${STAT_ASSETS.sparkleCrest}
          <div class="card-badge card-badge--stars">
            <div class="badge-glow">
              ${STAT_ASSETS.star}
            </div>
          </div>
          <div class="card-body">
            <div class="card-header-bar">
              <span class="card-tag">⭐ BINTANG PETUALANG</span>
            </div>
            <div class="card-count">${starsVal} Bintang</div>
            <p class="card-msg">${starsVal} dari ${totalStages * 3} bintang terkumpul. ${doneStages} pulau telah dituntaskan dengan gemilang!</p>
            <div class="card-extra" style="font-size:11px; font-weight:700; opacity:.85;">
              Tips: Selesaikan Boss Challenge tanpa kehilangan HP untuk 3 bintang penuh!
            </div>
          </div>
        </div>
      `;
    }
    // Default: streak
    const sInfo = streakInfo || getStreakStats();
    const sDaysHtml = daysHtml || buildStreakDaysHtml(sInfo.days);
    const sMsg = sInfo.studiedToday
      ? "Api belajarmu membara! Belajar rutin setiap hari agar apimu tidak padam."
      : sInfo.count > 0
        ? `Streak ${sInfo.count} hari menunggu! Belajar hari ini agar apimu tidak padam.`
        : "Selesaikan 1 stage atau baca buku hari ini untuk menyalakan streak!";
    const sBadge = sInfo.studiedToday
      ? "Aktif Hari Ini 🔥"
      : sInfo.count > 0
        ? "Belajar Hari Ini ⏳"
        : "Mulai Hari Ini ✨";
    const sRecord = sInfo.longest > 1 ? ` · Rekor ${sInfo.longest} hr` : "";
    return `
      <div class="stat-card stat-card--streak">
        ${STAT_ASSETS.flameCrest}
        <div class="card-badge card-badge--streak">
          <div class="badge-glow">
            ${STAT_ASSETS.flameBadge}
          </div>
        </div>
        <div class="card-body">
          <div class="card-header-bar">
            <span class="card-tag">🔥 HARI BERUNTUN</span>
          </div>
          <div class="card-count">${streakVal} Hari</div>
          <p class="card-msg">${sMsg}</p>
          <div class="card-extra">
            <div class="streak-days" aria-label="Tracker 7 hari">${sDaysHtml}</div>
            <span class="streak-status-txt" style="font-size:11px; font-weight:700; margin-left:4px;">${sBadge}${sRecord}</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderStatsSection(streakInfo, xpVal, starsVal, totalStages, doneStages) {
    const sInfo = typeof streakInfo === "object" && streakInfo ? streakInfo : getStreakStats();
    const streakVal = sInfo.count;
    const daysHtml = buildStreakDaysHtml(sInfo.days);

    const lvl = Math.floor(xpVal / 250) + 1;
    const curXp = xpVal % 250;
    const xpPercent = Math.min(100, Math.round((curXp / 250) * 100));

    return `
      <section class="stats-widget${S.openedStat ? " is-open" : ""}" aria-label="Statistik belajar">
        <div class="stats-row">
          <button class="stat-btn stat-btn--streak" type="button" data-act="stat" data-stat="streak" aria-label="Buka detail streak ${streakVal} hari beruntun">
            <span class="stat-svg-ico">${STAT_ASSETS.flameBtn}</span>
            <strong>${streakVal}</strong>
            <span>hari beruntun</span>
          </button>
          <button class="stat-btn stat-btn--xp" type="button" data-act="stat" data-stat="xp" aria-label="Buka detail ${xpVal} XP">
            <span class="stat-svg-ico">${STAT_ASSETS.bolt}</span>
            <strong>${xpVal}</strong>
            <span>XP</span>
          </button>
          <button class="stat-btn stat-btn--stars" type="button" data-act="stat" data-stat="stars" aria-label="Buka detail ${starsVal} bintang">
            <span class="stat-svg-ico">${STAT_ASSETS.star}</span>
            <strong>${starsVal}</strong>
            <span>bintang</span>
          </button>
        </div>
        <div class="stat-card-wrap">
          <div class="stat-card-content">
            ${renderStatCardContent(S.openedStat || "streak", streakVal, xpVal, starsVal, totalStages, doneStages, daysHtml, lvl, curXp, xpPercent, sInfo)}
          </div>
          <button class="stat-card-close" type="button" data-act="stat-close" aria-label="Tutup tampilan dalam">×</button>
          <div class="card-nav-tabs">
            <button class="card-nav-pill${S.openedStat === "streak" || !S.openedStat ? " is-active" : ""}" type="button" data-act="stat-tab" data-stat="streak">🔥 Hari Beruntun</button>
            <button class="card-nav-pill${S.openedStat === "xp" ? " is-active" : ""}" type="button" data-act="stat-tab" data-stat="xp">⚡ Total XP</button>
            <button class="card-nav-pill${S.openedStat === "stars" ? " is-active" : ""}" type="button" data-act="stat-tab" data-stat="stars">⭐ Bintang</button>
          </div>
        </div>
      </section>
    `;
  }

  function openStatCard(type) {
    S.openedStat = type;
    const widget = root.querySelector(".stats-widget");
    if (!widget) return;
    const content = widget.querySelector(".stat-card-content");
    const stages = S.nodes.filter((n) => n.stage);
    const done = stages.filter((n) => n.state === "done").length;
    const stars = Object.values(S.starsBy).reduce((a, b) => a + b, 0);
    const sInfo = getStreakStats();
    const daysHtml = buildStreakDaysHtml(sInfo.days);

    const lvl = Math.floor(S.xpTotal / 250) + 1;
    const curXp = S.xpTotal % 250;
    const xpPercent = Math.min(100, Math.round((curXp / 250) * 100));

    if (content) {
      content.innerHTML = renderStatCardContent(
        type,
        sInfo.count,
        S.xpTotal,
        stars,
        stages.length,
        done,
        daysHtml,
        lvl,
        curXp,
        xpPercent,
        sInfo
      );
    }

    widget.querySelectorAll(".card-nav-pill").forEach((pill) => {
      pill.classList.toggle("is-active", pill.dataset.stat === type);
    });

    widget.classList.add("is-open");
    SFX.select();
    if (type === "stars") {
      const badge = widget.querySelector(".card-badge--stars");
      if (badge) FX.at(badge, { n: 16, power: 6 });
    }
  }

  function closeStatCard() {
    S.openedStat = null;
    const widget = root.querySelector(".stats-widget");
    if (widget) {
      widget.classList.remove("is-open");
      SFX.tap();
    }
  }

  function openTopicModal(babKey, topicIdx) {
    dismissToast();
    S.prevFocus = document.activeElement;
    const bab = BAB_MATERIALS[babKey];
    if (!bab || !bab.topics || !bab.topics[topicIdx]) return;
    const topic = bab.topics[topicIdx];

    closeTopicModal(true);

    const modalRoot = document.createElement("div");
    modalRoot.id = "topic-modal-root";
    modalRoot.className = "topic-modal-backdrop";
    modalRoot.setAttribute("role", "dialog");
    modalRoot.setAttribute("aria-modal", "true");
    modalRoot.setAttribute("aria-label", `Penjelasan materi: ${topic.text}`);

    const safeDesc = topic.desc
      ? topic.desc.split("\n").map((p) => `<p class="topic-desc-text">${p}</p>`).join("")
      : "";
    const soundTokensEnc = topic.example && topic.example.tokens ? enc(topic.example.tokens) : "";

    modalRoot.innerHTML = `
      <div class="topic-modal-card">
        <header class="topic-modal-header" style="background: ${bab.headerBg || "#FFF7D6"};">
          <div class="topic-modal-badge" style="border-color: ${bab.color || "#FFC63D"};">
            BAB ${bab.num} • ${topic.tag || "MATERI"}
          </div>
          <h2 class="topic-modal-title">${topic.text}</h2>
          <div class="topic-modal-subtitle">${topic.romaji} (${topic.meaning})</div>
          <button class="topic-modal-close" type="button" data-act="topic-modal-close" aria-label="Tutup penjelasan materi">×</button>
        </header>

        <div class="topic-modal-body">
          <div class="topic-block">
            <div class="topic-block-label">💡 Penjelasan Pola</div>
            ${safeDesc}
          </div>

          ${
            topic.example
              ? `
            <div class="topic-block">
              <div class="topic-block-label">🗣️ Contoh Kalimat</div>
              <div class="topic-example-card">
                <div class="topic-example-jp-row">
                  <span class="topic-example-jp">${topic.example.jp}</span>
                  ${
                    soundTokensEnc
                      ? `
                    <button class="topic-audio-btn" type="button" data-act="say" data-say="${soundTokensEnc}" aria-label="Dengarkan pengucapan audio">
                      ${icon("volume")}
                    </button>
                  `
                      : ""
                  }
                </div>
                <div class="topic-example-romaji">${topic.example.romaji}</div>
                <div class="topic-example-id">${topic.example.id}</div>
              </div>
            </div>
          `
              : ""
          }

          ${
            topic.tip
              ? `
            <div class="topic-tip-card">
              <span class="topic-tip-ico">⭐</span>
              <div class="topic-tip-text"><strong>Tips:</strong> ${topic.tip}</div>
            </div>
          `
              : ""
          }
        </div>

        <footer class="topic-modal-footer">
          <button class="topic-modal-btn-done" type="button" data-act="topic-modal-close">
            Mengerti! 👍
          </button>
        </footer>
      </div>
    `;

    modalRoot.addEventListener("click", (e) => {
      if (e.target === modalRoot) closeTopicModal();
    });

    root.appendChild(modalRoot);
    document.body.classList.add("modal-open");
    SFX.select();
    const closeBtn = modalRoot.querySelector(".topic-modal-close");
    if (closeBtn) setTimeout(() => closeBtn.focus(), 60);
  }

  function closeTopicModal(instant = false) {
    const modalRoot = document.getElementById("topic-modal-root");
    if (!modalRoot) return;
    document.body.classList.remove("modal-open");
    const restore = S.prevFocus;
    S.prevFocus = null;
    if (instant) {
      modalRoot.remove();
      return;
    }
    SFX.tap();
    modalRoot.classList.add("is-closing");
    setTimeout(() => {
      if (modalRoot.parentElement) modalRoot.remove();
      if (restore && typeof restore.focus === "function") try { restore.focus(); } catch {}
    }, 180);
  }

  // ---------- Fitur Masuk Web / Login & Google Auth (Figma Untitled 8) ----------
  function updateTopDockAuth() {
    const avatarBtn = root ? root.querySelector('.dock-btn--avatar') : null;
    if (!avatarBtn) return;
    avatarBtn.classList.toggle("is-logged-in", !!S.user);
    avatarBtn.setAttribute("aria-label", S.user ? `Akun: ${S.user.name}` : "Masuk ke Akun");
    let badge = avatarBtn.querySelector(".dock-avatar-badge");
    if (S.user) {
      if (!badge) {
        const inner = avatarBtn.querySelector(".dock-avatar-inner");
        if (inner) {
          badge = document.createElement("span");
          badge.className = "dock-avatar-badge";
          badge.title = "Terhubung";
          inner.appendChild(badge);
        }
      }
    } else {
      if (badge) badge.remove();
    }
  }

  function openLoginModal() {
    dismissToast();
    S.prevFocus = document.activeElement;
    closeTopicModal(true);
    closeLoginModal(true);

    const modalRoot = document.createElement("div");
    modalRoot.id = "login-modal-root";
    modalRoot.className = "login-modal-overlay";
    modalRoot.setAttribute("role", "dialog");
    modalRoot.setAttribute("aria-modal", "true");
    modalRoot.setAttribute("aria-label", "Masuk atau Daftar Akun Nihongo Quest");

    const svgBg = (window.FRAME15_LOGIN_SVG || "").replace(
      '<svg class="login-svg-bg"',
      '<svg class="login-svg-bg" preserveAspectRatio="xMidYMid slice"'
    );

    let authMode = "login"; // "login" | "register"

    modalRoot.innerHTML = `
      <div class="login-modal-card">
        ${svgBg}
        <button class="login-close-btn" type="button" aria-label="Tutup" data-login-act="close">✕</button>
        <div class="login-form-overlay">
          <!-- Mobile Only Avatar Header -->
          <div class="mobile-only-header">
            <div class="mobile-avatar">
              <svg viewBox="1280 960 810 770" fill="none">
                <path d="M1837.94 1015.6C1980.34 1064.19 2082.74 1199.12 2082.74 1357.97C2082.74 1557.71 1920.82 1719.63 1721.08 1719.63C1652.94 1719.63 1589.21 1700.79 1534.8 1668.03C1571.46 1680.54 1610.77 1687.33 1651.67 1687.33C1851.41 1687.33 2013.33 1525.41 2013.33 1325.67C2013.33 1194.06 1943.04 1078.87 1837.94 1015.6ZM1651.67 964C1719.8 964 1783.54 982.843 1837.94 1015.6C1801.28 1003.09 1761.97 996.299 1721.08 996.299C1521.33 996.299 1359.41 1158.22 1359.41 1357.97C1359.41 1489.57 1429.71 1604.76 1534.8 1668.03C1392.4 1619.44 1290 1484.51 1290 1325.67C1290 1125.92 1451.92 964 1651.67 964Z" fill="#1D1B3A"/>
                <path d="M1685.17 1626.93C1527.79 1626.93 1400.2 1499.35 1400.2 1341.97C1400.2 1184.59 1527.79 1057 1685.17 1057C1842.55 1057 1970.13 1184.59 1970.13 1341.97C1970.13 1499.35 1842.55 1626.93 1685.17 1626.93Z" stroke-width="41.7" stroke-linecap="round" stroke-linejoin="round" stroke="#1D1B3A"/>
                <path d="M1794.43 1292.2C1794.54 1306.58 1791.79 1320.84 1786.34 1334.15C1780.89 1347.45 1772.84 1359.54 1762.68 1369.71C1752.51 1379.88 1740.42 1387.92 1727.11 1393.37C1713.81 1398.82 1699.55 1401.57 1685.17 1401.46C1663.56 1401.46 1642.44 1395.06 1624.47 1383.05C1606.5 1371.04 1592.5 1353.98 1584.23 1334.02C1575.96 1314.05 1573.79 1292.08 1578.01 1270.89C1582.23 1249.69 1592.63 1230.23 1607.91 1214.95C1623.19 1199.67 1642.66 1189.26 1663.85 1185.04C1685.05 1180.83 1707.02 1182.99 1726.98 1191.26C1746.95 1199.53 1764.01 1213.53 1776.02 1231.5C1788.02 1249.47 1794.43 1270.59 1794.43 1292.2Z" stroke-width="41.7" stroke-linecap="round" stroke-linejoin="round" stroke="#1D1B3A"/>
                <path d="M1854.75 1571.05C1854.75 1526.07 1836.89 1482.94 1805.08 1451.13C1773.28 1419.33 1730.14 1401.46 1685.17 1401.46C1640.19 1401.46 1597.05 1419.33 1565.25 1451.13C1533.44 1482.94 1515.58 1526.07 1515.58 1571.05" stroke-width="41.7" stroke-linecap="round" stroke-linejoin="round" stroke="#1D1B3A"/>
              </svg>
            </div>
            <div>
              <div class="mobile-title" id="loginModalTitle">Masuk Akun</div>
              <div class="mobile-subtitle" id="loginModalSub">Simpan progres petualanganmu</div>
            </div>
          </div>

          <!-- Mode Switcher Tabs -->
          <div class="auth-mode-tabs" role="tablist" aria-label="Mode Akun">
            <button type="button" class="auth-tab is-active" id="tabModeLogin" data-auth-mode="login" role="tab" aria-selected="true">Masuk</button>
            <button type="button" class="auth-tab" id="tabModeRegister" data-auth-mode="register" role="tab" aria-selected="false">Daftar</button>
          </div>

          <form id="loginForm" novalidate onsubmit="return false;" style="display:flex; flex-direction:column; gap:inherit;">
            <div>
              <label class="login-field-label" for="loginUser">Username:</label>
              <input type="text" id="loginUser" class="login-input" placeholder="Masukkan username..." autocomplete="username" required>
            </div>
            <div>
              <label class="login-field-label" for="loginPass">Password:</label>
              <input type="password" id="loginPass" class="login-input" placeholder="Masukkan password..." autocomplete="current-password" required>
            </div>
            <div class="login-actions-row">
              <button type="submit" class="btn-submit-login" id="btnAuthSubmit">Masuk</button>
            </div>
          </form>

          <div class="auth-toggle-hint" id="authToggleHint">
            Belum punya akun? <button type="button" class="auth-toggle-btn" id="btnSwitchMode">Daftar sekarang</button>
          </div>
        </div>
      </div>
    `;

    function setAuthMode(mode) {
      authMode = mode;
      const tabLogin = modalRoot.querySelector("#tabModeLogin");
      const tabRegister = modalRoot.querySelector("#tabModeRegister");
      const btnSubmit = modalRoot.querySelector("#btnAuthSubmit");
      const hint = modalRoot.querySelector("#authToggleHint");
      const title = modalRoot.querySelector("#loginModalTitle");
      const sub = modalRoot.querySelector("#loginModalSub");
      const pass = modalRoot.querySelector("#loginPass");

      if (tabLogin) {
        tabLogin.classList.toggle("is-active", mode === "login");
        tabLogin.setAttribute("aria-selected", mode === "login");
      }
      if (tabRegister) {
        tabRegister.classList.toggle("is-active", mode === "register");
        tabRegister.setAttribute("aria-selected", mode === "register");
      }

      if (mode === "login") {
        if (btnSubmit) btnSubmit.textContent = "Masuk";
        if (pass) pass.setAttribute("autocomplete", "current-password");
        if (title) title.textContent = "Masuk Akun";
        if (sub) sub.textContent = "Lanjutkan progres petualanganmu";
        if (hint) {
          hint.innerHTML = 'Belum punya akun? <button type="button" class="auth-toggle-btn" id="btnSwitchMode">Daftar sekarang</button>';
          wireSwitch();
        }
      } else {
        if (btnSubmit) btnSubmit.textContent = "Daftar Akun";
        if (pass) pass.setAttribute("autocomplete", "new-password");
        if (title) title.textContent = "Daftar Akun Baru";
        if (sub) sub.textContent = "Mulai petualangan bahasa Jepangmu";
        if (hint) {
          hint.innerHTML = 'Sudah punya akun? <button type="button" class="auth-toggle-btn" id="btnSwitchMode">Masuk ke akun</button>';
          wireSwitch();
        }
      }
    }

    function wireSwitch() {
      const btn = modalRoot.querySelector("#btnSwitchMode");
      if (btn) {
        btn.addEventListener("click", () => {
          SFX.tap();
          setAuthMode(authMode === "login" ? "register" : "login");
        });
      }
    }

    modalRoot.querySelectorAll(".auth-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const mode = tab.dataset.authMode;
        if (mode && mode !== authMode) {
          SFX.tap();
          setAuthMode(mode);
        }
      });
    });

    wireSwitch();

    modalRoot.addEventListener("click", (e) => {
      if (e.target === modalRoot || e.target.closest('[data-login-act="close"]')) {
        closeLoginModal();
      }
    });

    const form = modalRoot.querySelector("#loginForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        handleAuthSubmit(modalRoot, authMode);
      });
    }

    document.body.appendChild(modalRoot);
    document.body.classList.add("modal-open");
    SFX.select();

    const userInput = modalRoot.querySelector("#loginUser");
    if (userInput) setTimeout(() => userInput.focus(), 120);
  }

  function closeLoginModal(instant = false) {
    const modalRoot = document.getElementById("login-modal-root");
    if (!modalRoot) return;
    document.body.classList.remove("modal-open");
    const restore = S.prevFocus;
    S.prevFocus = null;
    if (instant) {
      modalRoot.remove();
      return;
    }
    SFX.tap();
    modalRoot.classList.add("is-closing");
    setTimeout(() => {
      if (modalRoot.parentElement) modalRoot.remove();
      if (restore && typeof restore.focus === "function") try { restore.focus(); } catch {}
    }, 200);
  }

  async function handleAuthSubmit(modalRoot, authMode) {
    const userInput = modalRoot.querySelector("#loginUser");
    const passInput = modalRoot.querySelector("#loginPass");
    const username = userInput ? userInput.value.trim() : "";
    const password = passInput ? passInput.value.trim() : "";

    const shake = () => {
      const card = modalRoot.querySelector(".login-modal-card");
      if (card) {
        card.classList.remove("is-shaking");
        void card.offsetWidth;
        card.classList.add("is-shaking");
      }
      SFX.wrong();
    };

    if (!username || !password) {
      shake();
      toast("Harap isi username dan password!");
      return;
    }

    const cleanId = username.toLowerCase().trim();
    const all = getAllAccounts();

    if (authMode === "register") {
      if (username.length < 3) {
        shake();
        toast("Username minimal 3 karakter!");
        return;
      }
      if (password.length < 4) {
        shake();
        toast("Password minimal 4 karakter!");
        return;
      }
      if (all[cleanId]) {
        shake();
        toast(`Username "${username}" sudah terdaftar! Silakan masuk.`);
        return;
      }

      const userObj = {
        id: null,
        name: username,
        email: `${cleanId.replace(/[^a-z0-9]/g, "")}@nihongo.id`,
        password: password,
        provider: "local",
        createdAt: Date.now(),
      };

      // Coba simpan ke MySQL jika server backend aktif
      try {
        const res = await fetch(`${API_MYSQL_URL}?action=register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            email: userObj.email,
            password: password,
          }),
        });
        const json = await res.json();
        if (json && json.ok && json.user) {
          userObj.id = json.user.id;
        }
      } catch (err) {
        // fallback offline
      }

      saveAccount(userObj);
      S.user = { id: userObj.id, name: userObj.name, email: userObj.email, provider: userObj.provider, loginAt: Date.now() };
      store.set("nq-user", JSON.stringify(S.user));
      updateTopDockAuth();

      // Inisialisasi akun baru: Bab 1, 0 XP, 0 Bintang, Streak Hari 1
      loadProgress(true);
      if (S.screen === "map") renderMap();

      SFX.unlock();
      const msg = userObj.id ? `Akun "${username}" tersimpan ke MySQL! Selamat bertualang! 🌟` : `Akun "${username}" berhasil dibuat! Selamat bertualang! 🌟`;
      toast(msg);
      Buddy.say(`Selamat datang di Nihongo Quest, ${username}! Yuk mulai dari Bab 1! 🎉`, 3200);
      closeLoginModal();
    } else {
      // Login
      let mysqlSuccess = false;
      try {
        const res = await fetch(`${API_MYSQL_URL}?action=login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            identifier: username,
            password: password,
          }),
        });
        const json = await res.json();
        if (json && json.ok && json.user) {
          mysqlSuccess = true;
          const userObj = {
            id: json.user.id,
            name: json.user.username,
            email: json.user.email,
            password: password,
            provider: "local",
            createdAt: Date.now(),
          };
          saveAccount(userObj);
          S.user = {
            id: json.user.id,
            name: json.user.username,
            email: json.user.email,
            provider: "local",
            loginAt: Date.now(),
          };
          if (json.progress) {
            if (json.progress.active_stage_id) S.activeStageId = json.progress.active_stage_id;
            if (typeof json.progress.xp_total === "number") S.xpTotal = json.progress.xp_total;
            if (json.progress.stars_by_json) {
              try { S.starsBy = JSON.parse(json.progress.stars_by_json); } catch {}
            }
          }
        }
      } catch (err) {
        // fallback offline
      }

      if (!mysqlSuccess) {
        const acc = all[cleanId];
        if (!acc) {
          shake();
          toast(`Akun "${username}" belum terdaftar. Silakan pilih tab "Daftar" untuk membuat akun baru!`);
          return;
        }
        if (acc.password && acc.password !== password) {
          shake();
          toast("Password salah! Silakan coba lagi.");
          return;
        }

        S.user = {
          id: acc.id || null,
          name: acc.name,
          email: acc.email,
          provider: acc.provider || "local",
          loginAt: Date.now(),
        };
      }

      store.set("nq-user", JSON.stringify(S.user));
      updateTopDockAuth();

      // Muat progres tersimpan milik akun ini
      if (!mysqlSuccess) loadProgress(false);
      else saveProgress();
      if (S.screen === "map") renderMap();

      SFX.unlock();
      toast(`Selamat datang kembali, ${S.user.name}! ${mysqlSuccess ? "(MySQL Sync)" : ""} 🎉`);
      Buddy.say(`Senang melihatmu kembali, ${S.user.name}! Siap bertualang?`, 3000);
      closeLoginModal();
    }
  }

  function openAccountModal() {
    dismissToast();
    S.prevFocus = document.activeElement;
    closeTopicModal(true);
    closeLoginModal(true);

    const modalRoot = document.createElement("div");
    modalRoot.id = "topic-modal-root";
    modalRoot.className = "topic-modal-backdrop";
    modalRoot.setAttribute("role", "dialog");
    modalRoot.setAttribute("aria-modal", "true");
    modalRoot.setAttribute("aria-label", "Informasi Akun");

    const user = S.user || { name: "Petualang (Tamu)", email: "Belum masuk akun", provider: "guest" };
    const isGoogle = user.provider === "google";
    const isGuest = !S.user;
    const accStars = Object.values(S.starsBy || {}).reduce((a, b) => a + b, 0);
    const accDone = S.nodes.filter((n) => n.stage && n.state === "done").length;

    modalRoot.innerHTML = `
      <div class="topic-modal-card" style="max-width:440px;">
        <div class="topic-modal-header" style="background:#FFF6DE;">
          <div class="topic-modal-badge topic-header-tag">PROFIL PENGGUNA</div>
          <div class="topic-modal-title">Akun Nihongo Quest</div>
          <button class="topic-modal-close" type="button" data-act="topic-modal-close" aria-label="Tutup">✕</button>
        </div>

        <div class="topic-modal-body" style="padding:20px 24px;">
          <div class="account-profile-card">
            <div class="account-avatar-large">
              <svg viewBox="1280 960 810 770" fill="none">
                <path d="M1837.94 1015.6C1980.34 1064.19 2082.74 1199.12 2082.74 1357.97C2082.74 1557.71 1920.82 1719.63 1721.08 1719.63C1652.94 1719.63 1589.21 1700.79 1534.8 1668.03C1571.46 1680.54 1610.77 1687.33 1651.67 1687.33C1851.41 1687.33 2013.33 1525.41 2013.33 1325.67C2013.33 1194.06 1943.04 1078.87 1837.94 1015.6ZM1651.67 964C1719.8 964 1783.54 982.843 1837.94 1015.6C1801.28 1003.09 1761.97 996.299 1721.08 996.299C1521.33 996.299 1359.41 1158.22 1359.41 1357.97C1359.41 1489.57 1429.71 1604.76 1534.8 1668.03C1392.4 1619.44 1290 1484.51 1290 1325.67C1290 1125.92 1451.92 964 1651.67 964Z" fill="#1D1B3A"/>
                <path d="M1685.17 1626.93C1527.79 1626.93 1400.2 1499.35 1400.2 1341.97C1400.2 1184.59 1527.79 1057 1685.17 1057C1842.55 1057 1970.13 1184.59 1970.13 1341.97C1970.13 1499.35 1842.55 1626.93 1685.17 1626.93Z" stroke-width="41.7" stroke-linecap="round" stroke-linejoin="round" stroke="#1D1B3A"/>
                <path d="M1794.43 1292.2C1794.54 1306.58 1791.79 1320.84 1786.34 1334.15C1780.89 1347.45 1772.84 1359.54 1762.68 1369.71C1752.51 1379.88 1740.42 1387.92 1727.11 1393.37C1713.81 1398.82 1699.55 1401.57 1685.17 1401.46C1663.56 1401.46 1642.44 1395.06 1624.47 1383.05C1606.5 1371.04 1592.5 1353.98 1584.23 1334.02C1575.96 1314.05 1573.79 1292.08 1578.01 1270.89C1582.23 1249.69 1592.63 1230.23 1607.91 1214.95C1623.19 1199.67 1642.66 1189.26 1663.85 1185.04C1685.05 1180.83 1707.02 1182.99 1726.98 1191.26C1746.95 1199.53 1764.01 1213.53 1776.02 1231.5C1788.02 1249.47 1794.43 1270.59 1794.43 1292.2Z" stroke-width="41.7" stroke-linecap="round" stroke-linejoin="round" stroke="#1D1B3A"/>
                <path d="M1854.75 1571.05C1854.75 1526.07 1836.89 1482.94 1805.08 1451.13C1773.28 1419.33 1730.14 1401.46 1685.17 1401.46C1640.19 1401.46 1597.05 1419.33 1565.25 1451.13C1533.44 1482.94 1515.58 1526.07 1515.58 1571.05" stroke-width="41.7" stroke-linecap="round" stroke-linejoin="round" stroke="#1D1B3A"/>
              </svg>
            </div>
            <div class="account-user-name">${user.name}</div>
            <div class="account-badge-pill">
              ${isGoogle ? '✓ Terhubung dengan Google' : isGuest ? 'Mode Tamu (Belum Masuk)' : '✓ Akun Terdaftar'}
            </div>
            <div class="account-email-text">${user.email}</div>

            <div class="account-mini-stats">
              <div class="account-mini-stat"><strong>${S.xpTotal}</strong><span>Total XP</span></div>
              <div class="account-mini-stat"><strong>${accStars}</strong><span>Bintang</span></div>
              <div class="account-mini-stat"><strong>${accDone}/12</strong><span>Pulau</span></div>
            </div>

            <div class="account-actions-group">
              <button type="button" class="btn-account-stats" id="btnViewStats">
                📊 Lihat Statistik Belajar
              </button>
              <button type="button" class="btn-account-logout" id="btnLogoutUser">
                ${isGuest ? '🔐 Masuk / Daftar Akun' : 'Keluar / Ganti Akun'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    modalRoot.addEventListener("click", (e) => {
      if (e.target === modalRoot) {
        closeTopicModal();
      }
    });

    const btnStats = modalRoot.querySelector("#btnViewStats");
    if (btnStats) {
      btnStats.addEventListener("click", () => {
        closeTopicModal(true);
        openStatCard("streak");
        Buddy.say("Ini progres dan statistik belajarmu!", 2800);
      });
    }

    const btnLogout = modalRoot.querySelector("#btnLogoutUser");
    if (btnLogout) {
      btnLogout.addEventListener("click", () => {
        if (isGuest) {
          closeTopicModal(true);
          openLoginModal();
        } else {
          handleLogout();
          closeTopicModal();
        }
      });
    }

    root.appendChild(modalRoot);
    document.body.classList.add("modal-open");
    SFX.select();
    const closeBtn = modalRoot.querySelector(".topic-modal-close");
    if (closeBtn) setTimeout(() => closeBtn.focus(), 60);
  }

  function handleLogout() {
    S.user = null;
    store.remove("nq-user");
    updateTopDockAuth();

    // Beralih ke progres mode tamu
    loadProgress(false);
    if (S.screen === "map") renderMap();

    SFX.tap();
    toast("Kamu telah keluar dari akun. Progresmu tetap tersimpan aman di akun.");
    Buddy.say("Sampai jumpa lagi! Datamu tersimpan aman di akun.", 2600);
  }

  function renderGenshinBanner(activeUnit, activeBabKey, babMeta, totalStages, doneStages) {
    const mat = BAB_MATERIALS[activeBabKey] || {
      num: activeBabKey.replace("b", ""),
      title: activeUnit.title,
      sub: activeUnit.sub || activeUnit.desc || "",
      topics: [],
    };
    const num = parseInt(mat.num || activeBabKey.replace("b", ""), 10) || 1;
    const progressIdx = Math.max(0, Math.min(12, Number.isFinite(doneStages) ? doneStages : 0));

    const rawTitle = mat.title || (activeUnit && activeUnit.title) || "";
    const [rawKana, rawRomaji] = rawTitle.includes("|") ? rawTitle.split("|") : [rawTitle, ""];

    const bannerSvg = window.generateGenshinBannerSvg ? window.generateGenshinBannerSvg(num, progressIdx) : "";

    return `
      <div class="genshin-banner-wrapper">
        <div class="banner-master-wrap">
          ${bannerSvg}

          <div class="banner-v9-material-overlay">
            <div class="banner-v9-header-text">
              <h3 class="banner-v9-jp-title">${rawKana || ""}</h3>
              ${rawRomaji ? `<div class="banner-v9-romaji">${rawRomaji}</div>` : ""}
              <div class="banner-v9-sub">${mat.sub || activeUnit.sub || activeUnit.desc || ""}</div>
            </div>

            <div class="banner-v9-topics-grid">
              ${(mat.topics || [])
                .slice(0, 4)
                .map(
                  (topic, idx) => `
                <button type="button" class="banner-v9-topic-chip" data-act="topic-modal" data-bab="${activeBabKey}" data-topic="${idx}" title="Pelajari materi ${topic.text}">
                  ${topic.text}
                </button>
              `
                )
                .join("")}
            </div>
          </div>

          <div class="banner-v9-tab-overlay">
            ${babMeta
              .map((b, idx) => {
                const bNum = idx + 1;
                const isActive = b.key === activeBabKey;
                return `<button type="button" class="banner-v9-tab-hit ${isActive ? 'active' : ''}" data-act="select-bab" data-bab="${b.key}" aria-label="${b.label}" title="Lihat ${b.label}"></button>`;
              })
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderMap() {
    dismissToast();
    S.screen = "map";
    setRootClass();
    Buddy.where("map");
    const stages = S.nodes.filter((n) => n.stage);
    const done = stages.filter((n) => n.state === "done").length;
    const stars = Object.values(S.starsBy).reduce((a, b) => a + b, 0);

    const sid = S.activeStageId || "s1";
    let activeBabKey = "b1";
    if (sid.startsWith("s6") || sid === "b6") activeBabKey = "b6";
    else if (sid.startsWith("s5")) activeBabKey = "b5";
    else if (sid.startsWith("s4")) activeBabKey = "b4";
    else if (sid.startsWith("s3")) activeBabKey = "b3";
    else if (sid.startsWith("s2")) activeBabKey = "b2";
    if (S.selectedBabKey) activeBabKey = S.selectedBabKey;
    const activeUnit = ALL_UNITS[activeBabKey] || D1.unit;

    const babMeta = [
      { key: "b1", label: "Bab 1", color: "#FF5C8A", text: "#fff" },
      { key: "b2", label: "Bab 2", color: "#FFC63D", text: "#1D1B3A" },
      { key: "b3", label: "Bab 3", color: "#14C3A2", text: "#fff" },
      { key: "b4", label: "Bab 4", color: "#FF8A3D", text: "#fff" },
      { key: "b5", label: "Bab 5", color: "#5B8CFF", text: "#fff" },
      { key: "b6", label: "Bab 6", color: "#14C3A2", text: "#fff" },
    ];

    const activePlayable =
      stages.find((n) => n.state === "current") ||
      stages.find((n) => n.id === S.activeStageId) ||
      stages[stages.length - 1];
    const allDone = stages.every((n) => n.state === "done");
    const activeBabNum = activeBabKey.replace("b", "");
    const ctaHtml = activePlayable
      ? `<div class="map-cta-bar">
          <button type="button" class="btn-map-cta" data-act="continue-stage" data-id="${activePlayable.id}">
            ${icon(allDone ? "trophy" : "sparkle")}
            <span>${allDone ? `Latih Ulang ${activePlayable.label}` : `Lanjut ${activePlayable.label}: ${activePlayable.title}`}</span>
          </button>
          <button type="button" class="btn-map-cta btn-map-cta--sec" data-act="jump-bab" data-bab="${activeBabKey}">
            ${icon("map")}
            <span>Lihat Pulau Bab ${activeBabNum}</span>
          </button>
        </div>`
      : "";

    root.innerHTML = `
      <header class="topbar">
        <div class="brand">${icon("torii")}<span>${cfg.brand}</span></div>
        <div class="top-actions">${renderTopDock()}</div>
      </header>
      <main class="map">
        <div class="map-top-content">
          ${renderGenshinBanner(activeUnit, activeBabKey, babMeta, stages.length, done)}
          ${ctaHtml}
          ${renderStatsSection(getStreakStats(), S.xpTotal, stars, stages.length, done)}
        </div>
        <section class="world">
          <div class="world-inner">
            <p class="world-title">${icon("map")}<span>Kepulauan Nihongo Quest</span></p>
            ${worldSVG()}
          </div>
        </section>
      </main>`;
    requestAnimationFrame(() => updateDockNotch(false));
    if (S.fresh) unlockSequence(S.fresh);
    else if (!S.greeted) {
      S.greeted = true;
      setTimeout(() => Buddy.say(pick(LINES.greet), 3200), 700);
    }
  }

  function tween(ms, fn) {
    return new Promise((res) => {
      if (reduceMotion) {
        fn(1);
        return res();
      }
      const t0 = performance.now();
      (function f(now) {
        const t = Math.min(1, (now - t0) / ms);
        fn(t);
        if (t < 1) requestAnimationFrame(f);
        else res();
      })(t0);
    });
  }
  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

  // Animasi buka pulau: perahu membuka jalur → gembok bergetar & pecah → awan tersibak → konfeti.
  async function unlockSequence(id) {
    const isle = root.querySelector(`.isle[data-id="${id}"]`);
    const route = root.querySelector(`.route[data-to="${id}"]`);
    const reveal = root.querySelector(`#reveal-${id} path`);
    const r = isle.getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + r.top - innerHeight * 0.62, behavior: reduceMotion ? "auto" : "smooth" });
    await wait(reduceMotion ? 50 : 750);

    const len = route.getTotalLength();
    reveal.style.strokeDasharray = len;
    reveal.style.strokeDashoffset = len;
    const layer = root.querySelector(".boat-layer");
    layer.innerHTML = `<g class="boat"><path d="M-17 -2h34l-7 10h-20z" fill="#fff" ${K}/><path d="M0 -2v-22l13 18z" fill="#FF5C8A" ${K}/></g>`;
    const boat = layer.firstElementChild;
    SFX.sail();
    await tween(1500, (t) => {
      const e = easeInOut(t);
      reveal.style.strokeDashoffset = len * (1 - e);
      const p = route.getPointAtLength(len * e);
      boat.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${Math.sin(t * 18) * 6})`);
    });
    boat.classList.add("is-docked");

    isle.classList.add("is-shaking");
    SFX.rattle();
    buzz(20);
    await wait(reduceMotion ? 50 : 480);
    isle.classList.remove("is-shaking");
    isle.classList.add("is-unlocking");
    SFX.unlock();
    buzz([15, 50, 15]);
    FX.at(isle.querySelector(".isle-lock"), { n: 55, power: 10 });
    Buddy.react("party", LINES.unlock);
    await wait(reduceMotion ? 50 : 950);
    isle.classList.remove("is-sealed", "is-unlocking");
    const fog = isle.querySelector(".isle-fog");
    if (fog) fog.remove();
    route.removeAttribute("mask");
    boat.remove();
    S.fresh = null;
  }

  function onNode(id) {
    if (S.fresh) return;
    const i = S.nodes.findIndex((n) => n.id === id);
    const n = S.nodes[i];
    const isle = root.querySelector(`.isle[data-id="${id}"]`);
    if (n.state === "locked") {
      isle.classList.remove("is-shaking");
      void isle.getBoundingClientRect();
      isle.classList.add("is-shaking");
      SFX.rattle();
      buzz(20);
      return toast(`Pulau ini masih terkunci. Selesaikan ${S.nodes[i - 1].label} dulu ya!`);
    }
    if (ALL_STAGES[id]) {
      return startLesson(id), go(0);
    }
    if (n.playable) return startLesson(id), go(0);
    toast(n.state === "done" ? `${n.label} sudah selesai.` : `${n.label} sudah terbuka! Isinya segera hadir.`);
  }

  // ---------- Alur pelajaran ----------
  function startLesson(stageId) {
    dismissToast();
    S.activeStageId = stageId || S.activeStageId || "s1";
    const stageData = ALL_STAGES[S.activeStageId] || (D1.stages && D1.stages[S.activeStageId]) || D1.stage;
    const existingNode = S.nodes.find((n) => n.id === S.activeStageId);
    PHASES = stageData.phases;
    S.steps = [];
    PHASES.forEach((p, pi) => {
      S.steps.push({ type: "intro", phase: pi });
      p.steps.forEach((s, si) => S.steps.push({ ...s, phase: pi, idx: si, count: p.steps.length }));
    });
    S.steps.push({ type: "result", phase: PHASES.length });
    S.fills = PHASES.map(() => 0);
    Object.assign(S, {
      combo: 0,
      best: 0,
      gain: 0,
      bankedGain: 0,
      preBossGain: null,
      wasAlreadyDone: !!(existingNode && existingNode.state === "done"),
      banked: false,
    });
    S.screen = "lesson";
  }
  const cur = () => S.steps[S.i];
  const inBoss = (st) => st.phase === PHASES.length - 1;

  function go(i) {
    S.i = i;
    const st = cur();
    if (st.type === "intro" && inBoss(st)) {
      if (S.preBossGain === null) S.preBossGain = S.gain;
      else S.gain = S.preBossGain;
      Object.assign(S, { hp: 3, mistakes: 0, fast: 0, total: 0, correct: 0, banked: false });
    }
    renderLesson();
  }
  function next() {
    if (inBoss(cur()) && S.hp <= 0) return go(S.steps.length - 1);
    go(S.i + 1);
  }

  function fillFor(st, pi) {
    if (pi < st.phase) return 100;
    if (pi > st.phase) return 0;
    return st.type === "intro" ? 0 : Math.round(((st.idx + 1) / st.count) * 100);
  }
  function phaseSeg(p, pi, st) {
    const state = pi < st.phase ? " is-done" : pi === st.phase ? " is-active" : "";
    return `<li class="phase-seg phase-seg--${p.key}${state}"${pi === st.phase ? ' aria-current="step"' : ""}><span class="phase-bar"><span class="phase-fill" style="width:${S.fills[pi]}%"></span></span><span class="phase-name">${p.name}</span></li>`;
  }
  const hpHTML = () =>
    `<div class="hp${S.hp === 1 ? " is-low" : ""}" role="img" aria-label="HP ${S.hp} dari 3"><span class="hp-label">HP</span><span class="hp-bar">${[0, 1, 2]
      .map((i) => `<span class="hp-seg${i >= S.hp ? " is-lost" : ""}"></span>`)
      .join("")}</span></div>`;

  function hitHP() {
    const hp = root.querySelector(".hp");
    const seg = hp.querySelectorAll(".hp-seg")[S.hp];
    FX.at(seg, { n: 10, power: 4 });
    seg.classList.add("is-breaking");
    setTimeout(() => {
      seg.classList.remove("is-breaking");
      seg.classList.add("is-lost");
    }, 450);
    hp.classList.remove("is-hit");
    void hp.offsetWidth;
    hp.classList.add("is-hit");
    hp.classList.toggle("is-low", S.hp === 1);
    hp.setAttribute("aria-label", `HP ${S.hp} dari 3`);
    SFX.hit();
  }

  function renderLesson() {
    dismissToast();
    hush();
    setRootClass();
    Buddy.where("lesson");
    const st = cur();
    const view = VIEWS[st.type](st);
    const target = PHASES.map((p, pi) => fillFor(st, pi));
    const key = st.type === "result" ? "result" : PHASES[st.phase].key;
    root.innerHTML = `
      <div class="lesson lesson--${key}">
        <header class="lhead">
          <button class="icon-btn close" type="button" data-act="map" aria-label="Keluar ke peta">${icon("close")}</button>
          <ol class="phases" aria-label="Fase belajar">${PHASES.map((p, pi) => phaseSeg(p, pi, st)).join("")}</ol>
          ${inBoss(st) ? hpHTML() : ""}
          ${romajiToggle()}
        </header>
        <main class="stage-body"><div class="step step--${st.type}">${view.body}</div></main>
        <footer class="lfoot">${view.foot || ""}</footer>
        <div class="sheet" role="status" aria-live="polite" hidden></div>
      </div>`;
    const fills = root.querySelectorAll(".phase-fill");
    requestAnimationFrame(() => requestAnimationFrame(() => fills.forEach((f, pi) => (f.style.width = target[pi] + "%"))));
    S.fills = target;
    S.local = {};
    S.answered = false;
    S.start = performance.now();
    if (view.bind) view.bind(st);
    const tf = root.querySelector(".timer-fill");
    if (tf)
      tf.addEventListener("animationend", () => {
        const t = root.querySelector(".timer");
        t.classList.add("is-over");
        t.querySelector(".timer-text").textContent = "Bonus kilat lewat, santai aja";
      });
    if (st.type === "intro") {
      const k = PHASES[st.phase].key;
      if (k === "boss") Buddy.react("cheer", LINES.phase.boss);
      else setTimeout(() => Buddy.say(LINES.phase[k]), 250);
    }
    window.scrollTo(0, 0);
    const h = root.querySelector(".step-title");
    if (h) {
      h.tabIndex = -1;
      h.focus({ preventScroll: true });
    }
  }

  // ---------- Potongan tampilan ----------
  function phaseTag(st) {
    const p = PHASES[st.phase];
    return `<p class="phase-tag">${icon(p.icon)}<span>Fase ${st.phase + 1} · ${p.long}</span><span class="step-count">${st.idx + 1}/${st.count}</span></p>`;
  }
  function topOf(st) {
    if (!inBoss(st)) return phaseTag(st);
    return (
      phaseTag(st) +
      `<div class="timer" style="--t:${cfg.fastMs}ms"><span class="timer-fill"></span><span class="timer-label">${icon("bolt")}<span class="timer-text">Bonus kilat</span></span></div>`
    );
  }
  const hintBox = (st) => (st.hint && !inBoss(st) ? `<div class="hint" hidden>${icon("bulb")}<p>${rich(st.hint)}</p></div>` : "");
  const checkFoot = (st) =>
    (st.hint && !inBoss(st) ? btn(`${icon("bulb")}<span>Petunjuk</span>`, "hint", "btn-ghost", 'aria-label="Petunjuk"') : "") +
    btn("Cek", "check", "btn-primary", "disabled");
  const optionsHTML = (st) =>
    `<div class="options" role="group" aria-label="Pilihan jawaban">${st.options
      .map(
        (o, i) =>
          `<button class="option" type="button" data-act="opt" data-i="${i}" aria-pressed="false"><span class="option-key">${"ABCD"[i]}</span><span class="option-body">${o.jp ? jp(o.jp) : o.text}</span></button>`
      )
      .join("")}</div>`;
  const formulaHTML = (f) =>
    `<div class="formula" role="group" aria-label="Pola kalimat">${f
      .map((c) => `<div class="f-chip f-chip--${c.kind}"><span class="f-main">${c.jp ? jp(c.jp) : c.text}</span><span class="f-note">${c.note}</span></div>`)
      .join(`<span class="f-plus" aria-hidden="true">+</span>`)}</div>`;
  const exampleHTML = (ex) =>
    `<div class="example">${speakBtn(ex.jp)}<div class="example-text">${jp(ex.jp, "jp--lg")}<p class="trans">${ex.id}</p></div></div>`;
  const rstat = (val, label) => `<div class="rstat"><strong>${val}</strong><span>${label}</span></div>`;

  const VIEWS = {
    intro(st) {
      const p = PHASES[st.phase];
      return {
        body: `<div class="intro"><div class="intro-icon">${icon(p.icon)}</div><p class="intro-kicker">Fase ${st.phase + 1} dari ${PHASES.length}</p><h2 class="step-title">${p.long}</h2><p class="intro-desc">${rich(p.intro)}</p><ul class="intro-list">${p.points
          .map((x) => `<li>${icon("check")}<span>${rich(x)}</span></li>`)
          .join("")}</ul></div>`,
        foot: inBoss(st) ? btn(`${icon("crown")}<span>Hadapi Boss</span>`, "next") : btn(`<span>Mulai</span>${icon("arrowR")}`, "next"),
      };
    },

    concept(st) {
      const pointsHTML =
        Array.isArray(st.points) && st.points.length
          ? `<ul class="concept-points">${st.points.map((x) => `<li>${icon("check")}<span>${rich(x)}</span></li>`).join("")}</ul>`
          : "";
      return {
        body: `${phaseTag(st)}<h2 class="step-title">${st.title}</h2><div class="card concept">${st.body ? `<p class="concept-text">${rich(st.body)}</p>` : ""}${pointsHTML}${
          st.formula ? formulaHTML(st.formula) : ""
        }${(st.examples || []).map(exampleHTML).join("")}${st.tip ? `<div class="tip">${icon("bulb")}<p>${rich(st.tip)}</p></div>` : ""}</div>`,
        foot: nextBtn(),
      };
    },

    vocab(st) {
      return {
        body: `${phaseTag(st)}<h2 class="step-title">${st.title}</h2><p class="step-prompt">${st.body}</p><div class="vocab-grid">${st.items
          .map(
            (v) =>
              `<button class="vocab-item" type="button" data-act="say" data-say="${enc(v.jp)}"><span class="vocab-word">${jp(v.jp)}</span><span class="vocab-mean">${v.id}</span>${icon("volume", "vocab-ico")}</button>`
          )
          .join("")}</div>`,
        foot: nextBtn(),
      };
    },

    fact(st) {
      return {
        body: `${phaseTag(st)}<article class="card fact"><p class="fact-kicker">${icon("sparkle")}<span>${st.kicker}</span></p><h2 class="step-title">${st.title}</h2>${
          st.art ? `<div class="fact-art">${rich(st.art)}</div>` : ""
        }<p class="fact-body">${rich(st.body)}</p></article>`,
        foot: nextBtn(),
      };
    },

    flip(st) {
      return {
        body: `${phaseTag(st)}<h2 class="step-title">${st.title}</h2><div class="flip"><div class="flip-card"><div class="flip-face flip-front card"><p class="flip-q">${rich(
          st.statement
        )}</p><div class="flip-actions">${btn("Benar", "flip", "btn-choice", 'data-v="1"')}${btn("Mitos", "flip", "btn-choice", 'data-v="0"')}</div></div><div class="flip-face flip-back card" aria-hidden="true"><p class="flip-verdict"></p><p>${rich(
          st.reveal
        )}</p></div></div></div>`,
        foot: nextBtn("disabled"),
      };
    },

    mc(st) {
      const prompt = st.jp
        ? `<div class="card prompt-card"><div>${jp(st.jp, "jp--lg")}${st.trans ? `<p class="trans">${st.trans}</p>` : ""}</div>${st.speak === false ? "" : speakBtn(st.jp)}</div>`
        : "";
      return { body: `${topOf(st)}<h2 class="step-title">${st.prompt}</h2>${prompt}${hintBox(st)}${optionsHTML(st)}`, foot: checkFoot(st) };
    },

    listen(st) {
      return {
        body: `${topOf(st)}<h2 class="step-title">${st.prompt}</h2><div class="card listen">${speakBtn(st.audio, "Putar audio", "speak big-speak")}<div class="listen-tools"><button class="chip-btn" type="button" data-act="slow" data-say="${enc(
          st.audio
        )}">Putar pelan</button><button class="chip-btn" type="button" data-act="reveal" aria-expanded="false">Tampilkan teks</button></div><div class="listen-text" hidden>${jp(
          st.audio,
          "jp--lg"
        )}</div></div>${optionsHTML(st)}`,
        foot: checkFoot(st),
        bind: () => setTimeout(() => say(st.audio), 400),
      };
    },

    wordbank(st) {
      return {
        body: `${topOf(st)}<h2 class="step-title">Susun kalimat ini</h2><p class="step-prompt wb-target">“${st.prompt}”</p>${hintBox(
          st
        )}<div class="answer-line" aria-label="Jawabanmu"></div><div class="bank" role="group" aria-label="Blok kata"></div>`,
        foot: checkFoot(st),
        bind() {
          const all = [...st.answer, ...st.extra];
          let bank = shuffle(all);
          for (let n = 0; n < 5 && bank.slice(0, st.answer.length).join() === st.answer.join(); n++) bank = shuffle(all);
          Object.assign(S.local, { bank, ans: [] });
          drawBank();
        },
      };
    },

    match(st) {
      const items = st.pairs.map((p, k) => ({ p, k }));
      return {
        body: `${topOf(st)}<h2 class="step-title">${st.prompt}</h2><p class="step-prompt">Ketuk satu kata Jepang, lalu ketuk artinya.</p><div class="match"><div class="match-col" role="group" aria-label="Bahasa Jepang">${shuffle(items)
          .map(({ p, k }) => `<button class="match-item match-item--jp" type="button" data-act="pick" data-side="L" data-k="${k}" aria-pressed="false">${jp(p[0])}</button>`)
          .join("")}</div><div class="match-col" role="group" aria-label="Arti">${shuffle(items)
          .map(({ p, k }) => `<button class="match-item match-item--id" type="button" data-act="pick" data-side="R" data-k="${k}" aria-pressed="false">${p[1]}</button>`)
          .join("")}</div></div>`,
        foot: `<p class="foot-note">Pasangan ditemukan: <strong class="match-count">0</strong>/${st.pairs.length}</p>`,
        bind: () => Object.assign(S.local, { sel: null, found: 0, miss: 0 }),
      };
    },

    swipe(st) {
      return {
        body: `${topOf(st)}<h2 class="step-title">${st.prompt}</h2><p class="step-prompt swipe-help">${icon("arrowL")}<span>Geser kiri = Salah</span><span class="sep" aria-hidden="true">·</span><span>Geser kanan = Benar</span>${icon(
          "arrowR"
        )}</p><div class="swipe-zone"><div class="swipe-card" tabindex="0" role="group" aria-roledescription="kartu geser" aria-label="Tekan panah kiri untuk Salah atau panah kanan untuk Benar"><span class="swipe-stamp swipe-stamp--no" aria-hidden="true">Salah</span><span class="swipe-stamp swipe-stamp--yes" aria-hidden="true">Benar</span>${jp(
          st.card.jp,
          "jp--lg"
        )}<p class="swipe-claim">artinya</p><p class="swipe-mean">“${st.card.claim}”</p></div></div>`,
        foot: btn(`${icon("close")}<span>Salah</span>`, "tf", "btn-no", 'data-v="0"') + btn(`${icon("check")}<span>Benar</span>`, "tf", "btn-yes", 'data-v="1"'),
        bind: bindSwipe,
      };
    },

    result() {
      const earnedNow = S.wasAlreadyDone ? 0 : Math.max(0, S.gain - S.bankedGain);
      if (!S.banked) {
        S.banked = true;
        if (earnedNow > 0) {
          S.bankedGain += earnedNow;
          S.xpTotal += earnedNow;
        }
      }
      if (S.hp <= 0) {
        if (!S.demoMode && earnedNow > 0) saveProgress();
        return {
          body: `<div class="result result--fail"><div class="result-badge">${icon("heart")}</div><p class="intro-kicker">HP habis</p><h2 class="step-title">Hampir! Coba sekali lagi?</h2><p class="intro-desc">Kamu menjawab benar ${S.correct} dari ${S.total} soal Boss. XP yang sudah kamu kumpulkan tetap aman.</p></div>`,
          foot: btn(`${icon("book")}<span>Ulang materi</span>`, "restart", "btn-ghost") + btn(`${icon("refresh")}<span>Ulang Boss</span>`, "retry"),
          bind: () => Buddy.react("comfort", LINES.fail),
        };
      }
      const stars = Math.max(1, 3 - S.mistakes);
      const curId = S.activeStageId || "s1";
      const currNode = S.nodes.find((n) => n.id === curId);
      const idx = S.nodes.findIndex((n) => n.id === curId);
      const nextNode = idx !== -1 && idx + 1 < S.nodes.length ? S.nodes[idx + 1] : null;
      const shownGain = S.wasAlreadyDone ? 0 : S.gain;

      unlockNext(stars);
      if (!S.demoMode) {
        recordStudyToday();
        saveProgress();
      }

      let unlockMsg = "";
      if (nextNode) {
        if (nextNode.id === "b6") {
          unlockMsg = `🎉 LUAR BIASA! Bab 5 Tamat! Gerbang Bab 6 <span lang="ja">${nextNode.title}</span> siap dijelajahi!`;
        } else if (nextNode.id.startsWith("s5")) {
          unlockMsg = `Pulau Bab 5 ${nextNode.label} <span lang="ja">${nextNode.title}</span> siap dibuka!`;
        } else if (nextNode.id.startsWith("s4")) {
          unlockMsg = `Pulau Bab 4 ${nextNode.label} <span lang="ja">${nextNode.title}</span> siap dibuka!`;
        } else if (nextNode.id.startsWith("s3")) {
          unlockMsg = `Pulau Bab 3 ${nextNode.label} <span lang="ja">${nextNode.title}</span> siap dibuka!`;
        } else if (nextNode.id.startsWith("s2")) {
          unlockMsg = `Pulau Bab 2 ${nextNode.label} <span lang="ja">${nextNode.title}</span> siap dibuka!`;
        } else {
          unlockMsg = `Pulau ${nextNode.label} <span lang="ja">${nextNode.sub}</span> siap dibuka!`;
        }
      } else {
        unlockMsg = `Semua pulau di Kepulauan Nihongo Quest telah diselesaikan!`;
      }

      return {
        body: `<div class="result result--pass"><div class="result-badge">${icon("trophy")}</div><p class="intro-kicker">${currNode ? currNode.label : "Stage"} selesai</p><h2 class="step-title">Boss dikalahkan!</h2><div class="stars" role="img" aria-label="${stars} dari 3 bintang">${[0, 1, 2]
          .map((i) => `<svg class="ico star${i < stars ? " is-on" : ""}" style="animation-delay:${0.35 + i * 0.38}s" viewBox="0 0 24 24" aria-hidden="true">${ICONS.star}</svg>`)
          .join("")}</div><p class="xp-gain" aria-label="${shownGain} XP didapat">+<span class="xp-num">0</span> XP</p><div class="result-stats">${rstat(
          `${S.correct}/${S.total}`,
          "Jawaban Boss benar"
        )}${rstat("×" + S.best, "Combo terbaik")}${rstat(S.fast, "Bonus kilat")}</div><p class="unlock-note">${icon("sparkle")}<span>${unlockMsg}</span></p></div>`,
        foot: btn(`${icon("map")}<span>${nextNode ? "Buka pulau baru" : "Kembali ke peta"}</span>`, "map"),
        bind: () => celebrate(stars, shownGain),
      };
    },
  };

  function celebrate(stars, xpGainToCount = S.gain) {
    Buddy.react("party", LINES.pass);
    FX.rain();
    SFX.unlock();
    root.querySelectorAll(".stars .is-on").forEach((s, i) =>
      setTimeout(() => {
        SFX.star(i);
        FX.at(s, { n: 16, power: 6 });
      }, 350 + i * 380)
    );
    setTimeout(() => countUp(root.querySelector(".xp-num"), xpGainToCount, 900), 350 + stars * 380);
  }

  function countUp(el, to, ms) {
    if (!el) return;
    let last = -1;
    tween(ms, (t) => {
      const v = Math.round(to * (1 - Math.pow(1 - t, 3)));
      if (v !== last && v % 4 === 0) SFX.count();
      last = v;
      el.textContent = v;
      if (t >= 1) {
        el.parentElement.classList.add("is-done");
        SFX.correct(6);
      }
    });
  }

  function unlockNext(stars) {
    const curId = S.activeStageId || "s1";
    S.starsBy[curId] = Math.max(S.starsBy[curId] || 0, stars);
    const curr = S.nodes.find((n) => n.id === curId);
    if (curr) curr.state = "done";

    const idx = S.nodes.findIndex((n) => n.id === curId);
    if (idx !== -1 && idx + 1 < S.nodes.length) {
      const next = S.nodes[idx + 1];
      if (next.state === "locked") {
        S.fresh = next.id;
        next.state = "current";
        if (next.stage) {
          S.activeStageId = next.id;
          S.selectedBabKey = null;
        }
      }
    }
  }

  // ---------- Interaksi kuis ----------
  function setCheck(on) {
    const b = root.querySelector('[data-act="check"]');
    if (b) b.disabled = !on;
  }

  function judge(ok, explain, origin) {
    if (S.answered) return;
    S.answered = true;
    const st = cur();
    const boss = inBoss(st);
    const timer = root.querySelector(".timer");
    if (timer) timer.classList.add("is-stopped");
    let bonus = false;
    let xp = 0;
    if (ok) {
      S.combo++;
      S.best = Math.max(S.best, S.combo);
      xp = boss ? 15 : 10;
    } else {
      S.combo = 0;
    }
    if (boss) {
      S.total++;
      if (ok) {
        S.correct++;
        if (performance.now() - S.start < cfg.fastMs) {
          S.fast++;
          bonus = true;
          xp += 5;
        }
      } else {
        S.mistakes++;
        S.hp = Math.max(0, S.hp - 1);
        hitHP();
      }
    }
    S.gain += xp;

    if (ok) {
      SFX.correct(S.combo);
      buzz(15);
      FX.at(origin, { n: 14 + Math.min(S.combo, 8) * 4, power: 6 + Math.min(S.combo, 6) * 0.6 });
      Buddy.react("happy", S.combo >= 3 ? pick(LINES.combo).replace("{n}", S.combo) : pick(LINES.correct));
    } else {
      SFX.wrong();
      buzz([30, 40, 30]);
      Buddy.react("sad", pick(boss && S.hp === 0 ? LINES.ko : LINES.wrong));
    }

    root.querySelector(".lfoot").innerHTML = "";
    const words = ok ? ["MANTAP!!", "KEREN!", "YESSS!", "SUGOI!"] : ["WADUH!", "HAMPIR!!"];
    const sheet = root.querySelector(".sheet");
    sheet.className = `sheet ${ok ? "sheet--ok" : "sheet--bad"}`;
    sheet.hidden = false;
    sheet.innerHTML = `<div class="sheet-inner"><div class="sheet-text"><p class="sheet-title"><span class="sheet-word">${pick(words)}</span>${
      S.combo >= 2 ? `<span class="combo">Combo ×${S.combo}</span>` : ""
    }${bonus ? `<span class="sheet-bonus">${icon("bolt")}Bonus kilat!</span>` : ""}</p><p>${rich(explain)}</p></div>${btn(
      boss && S.hp === 0 ? "Lihat hasil" : `<span>Lanjut</span>${icon("arrowR")}`,
      "next",
      ok ? "btn-ok" : "btn-bad"
    )}</div>`;
    sheet.querySelector("button").focus({ preventScroll: true });
    if (xp)
      setTimeout(() => {
        const w = sheet.querySelector(".sheet-word");
        if (!w) return;
        const r = w.getBoundingClientRect();
        FX.float(`+${xp} XP`, r.right + 30, r.top, "fx-xp");
      }, 330);
  }

  function checkMC(st) {
    if (S.local.pick == null) return;
    const ok = !!st.options[S.local.pick].correct;
    root.querySelector(".options").classList.add("is-locked");
    let origin = null;
    root.querySelectorAll(".option").forEach((o, i) => {
      o.disabled = true;
      if (st.options[i].correct) {
        o.classList.add("is-correct");
        origin = o;
      } else if (i === S.local.pick) o.classList.add("is-wrong");
    });
    judge(ok, st.explain, origin);
  }

  function drawBank() {
    const { bank, ans } = S.local;
    root.querySelector(".answer-line").innerHTML = ans.length
      ? ans.map((bi, pos) => `<button class="token" type="button" data-act="ans" data-pos="${pos}">${jp(bank[bi])}</button>`).join("")
      : `<span class="answer-placeholder">Ketuk blok kata di bawah</span>`;
    root.querySelector(".bank").innerHTML = bank
      .map((t, bi) => {
        const used = ans.includes(bi);
        return `<button class="token${used ? " is-used" : ""}" type="button" data-act="bank" data-i="${bi}"${used ? ' disabled aria-hidden="true" tabindex="-1"' : ""}>${jp(t)}</button>`;
      })
      .join("");
    setCheck(ans.length > 0);
  }

  // Blok kata "terbang" dari posisi lama ke posisi baru (teknik FLIP).
  function flyFrom(el, from) {
    if (!el || reduceMotion) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${from.left - r.left}px, ${from.top - r.top}px)`;
    void el.offsetWidth;
    el.classList.add("is-flying");
    el.style.transform = "";
    el.addEventListener("transitionend", () => el.classList.remove("is-flying"), { once: true });
  }

  function checkWB(st) {
    const ok = S.local.ans.map((bi) => S.local.bank[bi]).join("§") === st.answer.join("§");
    const line = root.querySelector(".answer-line");
    line.classList.add(ok ? "is-correct" : "is-wrong");
    root.querySelectorAll(".token").forEach((t) => (t.disabled = true));
    judge(ok, ok ? st.explain : `Susunan yang benar: ${jp(st.answer, "jp--inline")}<br>${st.explain}`, line);
  }

  function pick2(el) {
    if (S.answered) return;
    const st = cur();
    const L = S.local;
    if (el.dataset.side === "L") say(st.pairs[+el.dataset.k][0]);
    if (L.sel === el) {
      el.setAttribute("aria-pressed", "false");
      L.sel = null;
      return;
    }
    if (!L.sel || L.sel.dataset.side === el.dataset.side) {
      if (L.sel) L.sel.setAttribute("aria-pressed", "false");
      L.sel = el;
      el.setAttribute("aria-pressed", "true");
      SFX.select();
      return;
    }
    const a = L.sel;
    L.sel = null;
    a.setAttribute("aria-pressed", "false");
    if (a.dataset.k === el.dataset.k) {
      [a, el].forEach((b) => {
        b.classList.add("is-matched");
        b.disabled = true;
        FX.at(b, { n: 8, power: 4 });
      });
      L.found++;
      SFX.pair(L.found);
      buzz(10);
      root.querySelector(".match-count").textContent = L.found;
      if (L.found === st.pairs.length) {
        // Di latihan, salah pasang tidak dihukum; di Boss, ada salah = soal dianggap salah.
        const ok = L.miss === 0 || !inBoss(st);
        const note = L.miss ? `Semua pasangan ketemu, tapi sempat ketuker ${L.miss}×. ` : "";
        setTimeout(() => judge(ok, note + st.explain, root.querySelector(".match")), 350);
      }
    } else {
      L.miss++;
      SFX.wrong();
      buzz(30);
      [a, el].forEach((b) => {
        b.classList.remove("is-wrong");
        void b.offsetWidth;
        b.classList.add("is-wrong");
        setTimeout(() => b.classList.remove("is-wrong"), 600);
      });
    }
  }

  function bindSwipe() {
    const card = root.querySelector(".swipe-card");
    let x0 = null;
    let dx = 0;
    card.addEventListener("pointerdown", (e) => {
      if (S.answered || S.local.decided) return;
      x0 = e.clientX;
      dx = 0;
      card.setPointerCapture(e.pointerId);
      card.classList.add("is-drag");
    });
    card.addEventListener("pointermove", (e) => {
      if (x0 === null) return;
      dx = e.clientX - x0;
      card.style.transform = `translateX(${dx}px) rotate(${dx / 18}deg)`;
      card.classList.toggle("lean-right", dx > 40);
      card.classList.toggle("lean-left", dx < -40);
    });
    const end = () => {
      if (x0 === null) return;
      x0 = null;
      card.classList.remove("is-drag");
      if (Math.abs(dx) > 90) return decide(dx > 0);
      card.style.transform = "";
      card.classList.remove("lean-left", "lean-right");
    };
    card.addEventListener("pointerup", end);
    card.addEventListener("pointercancel", end);
    card.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") decide(true);
      if (e.key === "ArrowLeft") decide(false);
    });
  }

  // Kartu tidak menghilang: miring ke arah pilihan, cap menempel, lalu diberi warna benar/salah.
  function decide(v) {
    if (S.answered || S.local.decided) return;
    S.local.decided = true;
    const st = cur();
    const card = root.querySelector(".swipe-card");
    card.style.transform = "";
    card.classList.remove("lean-left", "lean-right");
    card.classList.add(v ? "is-chosen-right" : "is-chosen-left");
    root.querySelectorAll('[data-act="tf"]').forEach((b) => (b.disabled = true));
    SFX.select();
    const ok = v === st.answer;
    setTimeout(() => {
      card.classList.add(ok ? "is-correct" : "is-wrong");
      judge(ok, st.explain, card);
    }, reduceMotion ? 0 : 320);
  }

  // ---------- Event ----------
  const ACT = {
    stat: (el) => openStatCard(el.dataset.stat),
    "stat-close": () => closeStatCard(),
    "stat-tab": (el) => openStatCard(el.dataset.stat),
    "topic-modal"(el) {
      const babKey = el.dataset.bab;
      const topicIdx = parseInt(el.dataset.topic, 10);
      openTopicModal(babKey, topicIdx);
    },
    "topic-modal-close"() {
      closeTopicModal();
    },
    "modal-close"() {
      closeTopicModal();
      closeLoginModal();
    },
    "select-bab"(el) {
      if (S.fresh) return;
      const key = el.dataset.bab;
      if (key && BAB_MATERIALS[key]) {
        S.selectedBabKey = key;
        SFX.tap();
        renderMap();
      }
    },
    "continue-stage"(el) {
      if (S.fresh) return;
      const id = el.dataset.id;
      if (id) onNode(id);
    },
    "jump-bab"(el) {
      const anchorByBab = { b1: "s1", b2: "s2_1", b3: "s3_1", b4: "s4_1", b5: "s5_1", b6: "b6" };
      const targetId = anchorByBab[el.dataset.bab] || "s1";
      const isle = root.querySelector(`.isle[data-id="${targetId}"]`);
      if (isle) {
        SFX.tap();
        const r = isle.getBoundingClientRect();
        window.scrollTo({
          top: Math.max(0, window.scrollY + r.top - window.innerHeight * 0.42),
          behavior: reduceMotion ? "auto" : "smooth",
        });
        Buddy.say(`Ini pulau ${el.dataset.bab.toUpperCase().replace("B", "Bab ")}! Ketuk pulaunya untuk mulai! 🏝️`);
      }
    },
    "mascot-cheer"() {
      SFX.tap();
      const cheers = [
        "Semangat ya! Kamu pasti bisa taklukkan pulau ini! :3",
        "Setiap materi membawamu selangkah lebih dekat ke puncak kejayaan!",
        "Keren banget progres belajarmu hari ini! Ganbatte! ✨",
        "Tantang pulau dan kumpulkan bintang sebanyak-banyaknya! :3"
      ];
      Buddy.say(pick(cheers), 3200);
    },
    "dock-tab"(el) {
      const tab = el.dataset.tab;
      S.activeDockTab = tab;

      const dock = root.querySelector(".top-dock");
      if (dock) {
        dock.querySelectorAll(".dock-btn").forEach((btn) => {
          btn.classList.toggle("is-active", btn.dataset.tab === tab);
        });
        updateDockNotch(true);
      }

      if (tab === "avatar") {
        const loginModal = document.getElementById("login-modal-root");
        if (loginModal) {
          closeLoginModal();
          return;
        }
        if (S.user) {
          openAccountModal();
        } else {
          openLoginModal();
        }
      } else if (tab === "sound") {
        const on = SFX.toggle();
        el.setAttribute("aria-pressed", on);
        const iconStatus = el.querySelector(".sound-icon-status");
        if (iconStatus) {
          iconStatus.innerHTML = on ? `
            <path d="M4195 1675 C4220 1695 4220 1725 4195 1745" stroke="#1D1B3A" stroke-width="26" stroke-linecap="round"/>
            <path d="M4240 1650 C4280 1685 4280 1735 4240 1770" stroke="#1D1B3A" stroke-width="26" stroke-linecap="round"/>
          ` : `
            <path d="M4280.26 1748.93L4200.58 1669.25M4280.26 1669.25L4200.58 1748.93" stroke-width="26" stroke-linecap="round" stroke="#1D1B3A"/>
          `;
        }
        if (on) SFX.select();
        else hush();
        toast(on ? "Suara & efek nyala 🔊" : "Suara & efek dibisukan 🔇");
      } else if (tab === "romaji") {
        S.romaji = !S.romaji;
        store.set("nq-romaji", S.romaji ? "1" : "0");
        root.classList.toggle("romaji-off", !S.romaji);
        el.setAttribute("aria-pressed", S.romaji);
        root.querySelectorAll(".toggle").forEach((t) => t.setAttribute("aria-pressed", S.romaji));
        SFX.tap();
        toast(S.romaji ? "Bantuan Romaji aktif (ada cara baca alfabet)" : "Romaji dinonaktifkan (latihan huruf Jepang murni)");
      }
    },
    romaji() {
      S.romaji = !S.romaji;
      store.set("nq-romaji", S.romaji ? "1" : "0");
      root.classList.toggle("romaji-off", !S.romaji);
      root.querySelectorAll(".toggle").forEach((t) => t.setAttribute("aria-pressed", S.romaji));
      const dockRomaji = root.querySelector('.dock-btn[data-tab="romaji"]');
      if (dockRomaji) dockRomaji.setAttribute("aria-pressed", S.romaji);
      SFX.tap();
      toast(S.romaji ? "Bantuan Romaji aktif (ada cara baca alfabet)" : "Romaji dinonaktifkan (latihan huruf Jepang murni)");
    },
    sound(el) {
      const on = SFX.toggle();
      el.setAttribute("aria-pressed", on);
      el.innerHTML = icon(on ? "volume" : "volumeX");
      if (on) SFX.select();
      toast(on ? "Efek suara nyala" : "Efek suara mati");
    },
    node: (el) => onNode(el.dataset.id),
    "reader-node"(el) {
      const bab = el.dataset.bab || "1";
      const mode = el.dataset.mode || "materi";
      SFX.select();
      buzz(10);
      FX.at(el, { n: 12, power: 4 });
      Buddy.say(`Membuka Minna no Nihongo Bab ${bab} (${mode === "materi" ? "Materi Indo" : "Full Jepang"}) di tab baru! 📖`);
      window.open(`reader.html?bab=${bab}&mode=${mode}`, "_blank");
    },
    ship(el) {
      SFX.sail();
      buzz(12);
      FX.at(el, { n: 10, power: 4 });
      Buddy.react("happy", "Kapal pesiar lewat! Tuuuut~ 🚢");
    },
    map() {
      dismissToast();
      hush();
      renderMap();
      if (!S.fresh) window.scrollTo(0, 0);
    },
    next: () => next(),
    say(el) {
      say(dec(el.dataset.say));
      el.classList.remove("is-playing");
      void el.offsetWidth;
      el.classList.add("is-playing");
    },
    slow: (el) => say(dec(el.dataset.say), 0.6),
    reveal(el) {
      const t = root.querySelector(".listen-text");
      t.hidden = !t.hidden;
      el.setAttribute("aria-expanded", !t.hidden);
      el.textContent = t.hidden ? "Tampilkan teks" : "Sembunyikan teks";
    },
    hint(el) {
      root.querySelector(".hint").hidden = false;
      el.disabled = true;
      Buddy.say("Psst, ini petunjuknya!");
    },
    opt(el) {
      if (S.answered) return;
      root.querySelectorAll(".option").forEach((o) => o.setAttribute("aria-pressed", o === el));
      S.local.pick = +el.dataset.i;
      setCheck(true);
      SFX.select();
    },
    check() {
      const st = cur();
      (st.type === "wordbank" ? checkWB : checkMC)(st);
    },
    bank(el) {
      if (S.answered) return;
      const from = el.getBoundingClientRect();
      S.local.ans.push(+el.dataset.i);
      drawBank();
      flyFrom(root.querySelector(".answer-line .token:last-child"), from);
      SFX.place(S.local.ans.length);
    },
    ans(el) {
      if (S.answered) return;
      const from = el.getBoundingClientRect();
      const bi = S.local.ans[+el.dataset.pos];
      S.local.ans.splice(+el.dataset.pos, 1);
      drawBank();
      flyFrom(root.querySelector(`.bank .token[data-i="${bi}"]`), from);
      SFX.tap();
    },
    pick: pick2,
    tf: (el) => decide(el.dataset.v === "1"),
    flip(el) {
      const st = cur();
      const right = (el.dataset.v === "1") === st.answer;
      const card = root.querySelector(".flip-card");
      card.querySelector(".flip-verdict").innerHTML = `${icon(right ? "check" : "sparkle")}<span>${right ? "Tebakanmu tepat!" : "Ups, kena jebakan!"}</span>`;
      card.classList.add("is-flipped", right ? "is-right" : "is-miss");
      card.querySelector(".flip-front").setAttribute("aria-hidden", "true");
      card.querySelector(".flip-back").removeAttribute("aria-hidden");
      card.querySelectorAll(".flip-front button").forEach((b) => (b.disabled = true));
      root.querySelector('.lfoot [data-act="next"]').disabled = false;
      if (right) {
        SFX.correct(0);
        FX.at(card, { n: 18 });
        Buddy.react("happy", "Kamu jeli banget!");
      } else {
        SFX.wrong();
        Buddy.react("sad", "Hehe, kena jebakan! Sekarang kamu tahu.");
      }
    },
    restart() {
      Object.assign(S, { gain: 0, preBossGain: null, banked: false });
      go(0);
    },
    retry: () => go(S.steps.findIndex((s) => s.type === "intro" && inBoss(s))),
  };

  function onClick(e) {
    const el = e.target.closest("[data-act]");
    if (!el || el.disabled || !root.contains(el)) return;
    const fn = ACT[el.dataset.act];
    if (typeof fn === "function") fn(el);
  }
})();
