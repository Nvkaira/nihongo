/* Materi mockup: Bab 3 Lengkap (Stage 3-1 dan Stage 3-2).
 * Acuan struktur: Minna no Nihongo I Bab 3 — Tempat, Arah, Lantai, dan Belanja.
 *
 * Format teks Jepang: "kana|romaji". Kanji + furigana: "{教室|きょうしつ}|kyoushitsu".
 * Satu kalimat = array segmen. Di teks penjelasan, [[ここ|koko+は|wa]] dirender sebagai teks Jepang inline.
 */

const STAGE_3_1 = {
  id: "s3_1",
  label: "Stage 3-1",
  title: "Tempat di Sini & di Sana",
  sub: "ここ・そこ・あそこ / どこ",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Fundamental & Tujuan",
      icon: "book",
      intro: "Belajar menunjukkan lokasi ruangan di sekolah, kantor, atau gedung! Menggunakan sistem jarak yang mirip dengan Bab 2.",
      points: [
        "Jarak tempat: [[ここ|koko]] (sini), [[そこ|soko]] (situ), [[あそこ|asoko]] (sana)",
        "Rumus letak: N1 [[は|wa]] N2 (tempat) [[です|desu]]",
        "Menanyakan tempat: [[どこですか|doko desu ka]]",
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar ini?",
          body: "Saat berada di sekolah atau gedung baru, kamu pasti perlu bertanya: <i>“Toilet ada di mana?”</i> atau memberi tahu teman: <i>“Kantin ada di sebelah sana.”</i> Di stage ini kamu akan menguasai cara menunjukkan lokasi!",
          examples: [
            { jp: ["お手洗い|o-tearai", "は|wa", "あそこ|asoko", "です。|desu."], id: "Toilet ada di sebelah sana." },
            { jp: ["しょくどう|shokudou", "は|wa", "どこ|doko", "ですか。|desu ka."], id: "Kantin ada di mana?" },
          ],
        },
        {
          type: "concept",
          title: "Sistem Jarak Tempat: ここ・そこ・あそこ",
          body: "Sama seperti penunjuk benda di Bab 2, penunjuk tempat juga dibagi 3 jarak:",
          points: [
            "[[ここ|koko]]: Di sini (dekat dengan pembicara).",
            "[[そこ|soko]]: Di situ (dekat dengan lawan bicara).",
            "[[あそこ|asoko]]: Di sana (jauh dari pembicara dan lawan bicara).",
          ],
          examples: [
            { jp: ["ここ|koko", "は|wa", "きょうしつ|kyoushitsu", "です。|desu."], id: "Di sini adalah ruang kelas." },
            { jp: ["電話|denwa", "は|wa", "あそこ|asoko", "です。|desu."], id: "Telepon ada di sebelah sana." },
          ],
        },
        {
          type: "concept",
          title: "Menyatakan Keberadaan Orang atau Tempat",
          body: "Gunakan pola: **Subjek + [[は|wa]] + Tempat + [[です|desu]]**:",
          formula: [
            { text: "Benda / Orang", note: "N1", kind: "topic" },
            { jp: "は|wa", note: "penanda topik", kind: "particle" },
            { text: "Tempat / Ruangan", note: "N2", kind: "pred" },
            { jp: "です|desu", note: "ada di (sopan)", kind: "copula" },
          ],
          examples: [
            { jp: ["山田さん|yamada-san", "は|wa", "じむしょ|jimusho", "です。|desu."], id: "Tuan Yamada ada di kantor." },
            { jp: ["かいぎしつ|kaigishitsu", "は|wa", "あそこ|asoko", "です。|desu."], id: "Ruang rapat ada di sebelah sana." },
          ],
        },
        {
          type: "concept",
          title: "Tanya Tempat: どこですか",
          body: "Gunakan kata tanya **[[どこ|doko]]** (di mana):",
          examples: [
            { jp: ["お手洗い|o-tearai", "は|wa", "どこ|doko", "ですか。|desu ka."], id: "Kamar kecil ada di mana?" },
            { jp: ["あそこ|asoko", "です。|desu."], id: "Di sebelah sana." },
          ],
          tip: "Kata [[お手洗い|o-tearai]] lebih sopan dan halus digunakan daripada [[トイレ|toire]].",
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 3-1",
          body: "Ketuk kartunya untuk mendengarkan pelafalan ruangan sekolah & kantor.",
          items: [
            { jp: "ここ|koko", id: "di sini" },
            { jp: "そこ|soko", id: "di situ" },
            { jp: "あそこ|asoko", id: "di sana" },
            { jp: "どこ|doko", id: "di mana" },
            { jp: "きょうしつ|kyoushitsu", id: "ruang kelas" },
            { jp: "しょくどう|shokudou", id: "kantin / ruang makan" },
            { jp: "じむしょ|jimusho", id: "kantor" },
            { jp: "おてあらい|o-tearai", id: "toilet / kamar kecil" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Yuk kita latih penggunaan kata tunjuk tempat dan bertanya letak ruangan.",
      points: ["Menentukan posisi tempat", "Susun letak ruangan", "Tanya lokasi toilet"],
      steps: [
        {
          type: "mc",
          prompt: "Lawan bicaramu berdiri di dekat kantin. Kata tunjuk tempat apa yang kamu pakai?",
          options: [
            { jp: "そこ|soko", correct: true },
            { jp: "ここ|koko" },
            { jp: "あそこ|asoko" },
          ],
          hint: "Dekat lawan bicara = soko.",
          explain: "[[そこ|soko]] digunakan untuk menunjukkan tempat yang berada di dekat lawan bicara.",
        },
        {
          type: "wordbank",
          prompt: "Kantin ada di sebelah sana.",
          answer: ["食堂|shokudou", "は|wa", "あそこ|asoko", "です|desu"],
          extra: ["どこ|doko", "ここ|koko"],
          hint: "Mulai dari [[食堂|shokudou]] lalu penunjuk jarak jauh [[あそこ|asoko]].",
          explain: "[[食堂は あそこです|shokudou wa asoko desu]] = Kantin ada di sebelah sana.",
        },
        {
          type: "mc",
          prompt: "Bagaimana cara sopan menanyakan: “Kamar kecil ada di mana?”",
          options: [
            { jp: ["お手洗い|o-tearai", "は|wa", "どこ|doko", "ですか。|desu ka."], correct: true },
            { jp: ["お手洗い|o-tearai", "は|wa", "だれ|dare", "ですか。|desu ka."] },
            { jp: ["ここ|koko", "は|wa", "お手洗い|o-tearai", "ですか。|desu ka."] },
          ],
          hint: "Di mana = doko.",
          explain: "[[お手洗いは どこですか|o-tearai wa doko desu ka]] adalah pertanyaan standar yang sangat sopan.",
        },
        {
          type: "match",
          prompt: "Cocokkan nama ruangan dan artinya",
          pairs: [
            ["きょうしつ|kyoushitsu", "ruang kelas"],
            ["しょくどう|shokudou", "kantin"],
            ["じむしょ|jimusho", "kantor"],
            ["おてあらい|o-tearai", "toilet"],
          ],
          explain: "Sangat bagus! Semua lokasi ruangan sudah kamu kuasai.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Fakta unik seputar kebiasaan di sekolah dan gedung di Jepang.",
      points: ["Arti harfiah O-tearai", "Tradisi Souji di sekolah Jepang", "Sandal toilet"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Kata 「お手洗い」 (O-tearai) secara harfiah berarti 'tempat mencuci tangan'.",
          answer: true,
          reveal: "<b>Fakta!</b> 手 (tangan) + 洗い (mencuci). Orang Jepang menggunakan kata kiasan halus 'tempat cuci tangan' untuk menyebut toilet agar terdengar lebih sopan dalam percakapan.",
        },
        {
          type: "fact",
          kicker: "Budaya Sekolah",
          title: "Souji: Tradisi Bersih-Bersih Mandiri",
          art: "[[そうじ|souji]]",
          body: "Di sekolah-sekolah Jepang, tidak ada petugas kebersihan khusus untuk ruang kelas. Setiap sore setelah pelajaran usai, para siswa bersama-sama membersihkan kelas, lorong, bahkan toilet selama 15 menit. Tradisi ini menanamkan rasa tanggung jawab dan disiplin tinggi!",
        },
        {
          type: "fact",
          kicker: "Rumah & Tempat Umum",
          title: "Sandal Khusus Toilet (Toilet Slippers)",
          art: "[[スリッパ|surippa]]",
          body: "Di rumah atau restoran tradisional Jepang, ada sandal khusus yang diletakkan di pintu toilet. Sandal rumah harus dilepas dan kamu wajib berganti ke sandal toilet saat masuk, lalu menukarnya kembali saat keluar agar kebersihan rumah tetap terjaga.",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Challenge",
      icon: "crown",
      intro: "Ujian Stage 3-1! Buktikan pemahamanmu tentang lokasi ruangan dan kata tunjuk.",
      points: [
        "Kamu punya 3 nyawa.",
        "Soal posisi tempat dan ruangan.",
        "Lulus = Buka jalur ke Stage 3-2!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Pilih kalimat yang artinya “Tuan Yamada ada di kantor.”",
          options: [
            { jp: ["山田さん|yamada-san", "は|wa", "じむしょ|jimusho", "です。|desu."], correct: true },
            { jp: ["山田さん|yamada-san", "は|wa", "きょうしつ|kyoushitsu", "です。|desu."] },
            { jp: ["山田さん|yamada-san", "は|wa", "しょくどう|shokudou", "じゃ ありません。|ja arimasen."] },
          ],
          explain: "Kantor = [[じむしょ|jimusho]].",
        },
        {
          type: "wordbank",
          prompt: "Di sini adalah ruang kelas.",
          answer: ["ここ|koko", "は|wa", "きょうしつ|kyoushitsu", "です|desu"],
          extra: ["そこ|soko", "どこ|doko"],
          explain: "[[ここは 教室です|koko wa kyoushitsu desu]].",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["しょくどう|shokudou", "は|wa", "あそこ|asoko", "です。|desu."], claim: "Kantin ada di sebelah sana." },
          answer: true,
          explain: "Benar! [[しょくどう|shokudou]] = kantin, dan [[あそこ|asoko]] = di sebelah sana.",
        },
        {
          type: "listen",
          prompt: "Dengarkan, di manakah posisi orang yang dibicarakan?",
          audio: ["佐藤さん|satou-san", "は|wa", "かいぎしつ|kaigishitsu", "です。|desu."],
          options: [
            { text: "Di ruang rapat", correct: true },
            { text: "Di ruang kelas" },
            { text: "Di kantor" },
          ],
          explain: "Terdengar kata [[かいぎしつ|kaigishitsu]] (ruang rapat).",
        },
        {
          type: "match",
          prompt: "Cocokkan secepat mungkin!",
          pairs: [
            ["ここ|koko", "di sini"],
            ["そこ|soko", "di situ"],
            ["あそこ|asoko", "di sana"],
            ["どこ|doko", "di mana"],
          ],
          explain: "Luar biasa! Stage 3-1 berhasil kamu lewati!",
        },
      ],
    },
  ],
};

const STAGE_3_2 = {
  id: "s3_2",
  label: "Stage 3-2",
  title: "Arah, Lantai & Belanja",
  sub: "こちら・そちら / 〜階 / いくら",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Fundamental & Tujuan",
      icon: "book",
      intro: "Belajar menunjuk arah secara sopan, membaca lantai gedung toserba, menghitung angka ribuan, dan bertransaksi belanja!",
      points: [
        "Arah & sopan: [[こちら|kochira]], [[そちら|sochira]], [[あちら|achira]], [[どちら|dochira]]",
        "Tingkat lantai: [[〜階|~kai/gai]] & bawah tanah [[地下|chika]]",
        "Harga & uang: [[百|hyaku]] (100), [[千|sen]] (1.000), [[万|man]] (10.000), [[いくら|ikura]]",
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar ini?",
          body: "Di pusat perbelanjaan (デパート) Jepang, kamu akan naik lift ke lantai tertentu, bertanya harga barang, dan membelinya dengan sopan: <i>'Tolong perlihatkan sepatu itu'</i>, <i>'Berapa harganya?'</i>.",
          examples: [
            { jp: ["この|kono", "とけい|tokei", "は|wa", "いくら|ikura", "ですか。|desu ka."], id: "Berapa harga jam ini?" },
            { jp: ["2,500円|nisen gohyaku-en", "です。|desu."], id: "Harganya 2.500 yen." },
          ],
        },
        {
          type: "concept",
          title: "Sistem Arah & Sopan: こちら・そちら・あちら・どちら",
          body: "Selain berarti 'sebelah sini/situ/sana/mana', seri **Ko-So-A-Do** berakhiran **〜ちら** adalah versi **jauh lebih sopan** dari *koko/soko/asoko/doko*:",
          points: [
            "[[どちら|dochira]]: Kata tanya sopan untuk 'di mana', 'sebelah mana', dan menanyakan asal negara/sekolah/perusahaan.",
          ],
          examples: [
            { jp: ["エレベーター|erebeetaa", "は|wa", "どちら|dochira", "ですか。|desu ka."], id: "Lift ada di sebelah mana?" },
            { jp: ["あちら|achira", "で|de", "ございます。|gozaimasu."], id: "Ada di sebelah sana, Tuan/Nona." },
          ],
        },
        {
          type: "concept",
          title: "Lantai Gedung & Bawah Tanah",
          body: "Untuk menyatakan tingkat lantai, gunakan sufiks **〜階 (kai / gai)**. Lantai bawah tanah disebut **地下 (chika)**:",
          points: [
            "1階 (いっかい), 2階 (にかい), 3階 (さんがい - *gai*), 4階 (よんかい)...",
            "B1 / Lantai bawah tanah 1 = [[地下1階|chika ikkai]].",
            "Tanya lantai: [[何階|nangai]] (lantai berapa?).",
          ],
          examples: [
            { jp: ["ワイン|wain", "売り場|uriba", "は|wa", "何階|nangai", "ですか。|desu ka."], id: "Konter anggur ada di lantai berapa?" },
            { jp: ["地下1階|chika ikkai", "です。|desu."], id: "Lantai B1." },
          ],
        },
        {
          type: "concept",
          title: "Angka Besar & Jurus Belanja",
          body: "Penyebutan uang yen: [[百|hyaku]] (100), [[千|sen]] (1.000), [[万|man]] (10.000). Bertanya harga pakai **[[いくら|ikura]]**:",
          points: [
            "1. Meminta melihat barang: **[[〜を 見せてください|~ o misete kudasai]]** *(Tolong perlihatkan ~)*.",
            "2. Memutuskan membeli: **[[じゃ、これを ください|ja, kore o kudasai]]** *(Kalau begitu, saya ambil yang ini)*.",
          ],
          examples: [
            { jp: ["この|kono", "靴|kutsu", "を|o", "見せて|misete", "ください。|kudasai."], id: "Tolong perlihatkan sepatu ini." },
            { jp: ["じゃ、|ja,", "これ|kore", "を|o", "ください。|kudasai."], id: "Kalau begitu, saya beli yang ini." },
          ],
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 3-2",
          body: "Ketuk kartunya untuk mendengarkan pelafalan kosakata toserba dan uang.",
          items: [
            { jp: "どちら|dochira", id: "sebelah mana / di mana (sopan)" },
            { jp: "エレベーター|erebeetaa", id: "lift / elevator" },
            { jp: "かいだん|kaidan", id: "tangga" },
            { jp: "ちか|chika", id: "bawah tanah (basement)" },
            { jp: "いくら|ikura", id: "berapa harganya" },
            { jp: "ひゃく|hyaku", id: "seratus (100)" },
            { jp: "せん|sen", id: "seribu (1.000)" },
            { jp: "まん|man", id: "sepuluh ribu (10.000)" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Yuk latihan menanyakan arah fasilitas toserba dan transaksi harga.",
      points: ["Tanya arah lift", "Menyusun permintaan melihat barang", "Menyatakan harga"],
      steps: [
        {
          type: "mc",
          prompt: "Bentuk sopan dari どこ untuk menanyakan “Lift ada di sebelah mana?” adalah...",
          options: [
            { jp: "どちら|dochira", correct: true },
            { jp: "どれ|dore" },
            { jp: "どう|dou" },
          ],
          hint: "Seri arah sopan berakhiran -chira.",
          explain: "[[どちら|dochira]] adalah bentuk sopan dari [[どこ|doko]].",
        },
        {
          type: "wordbank",
          prompt: "Tolong perlihatkan sepatu itu.",
          answer: ["その|sono", "靴|kutsu", "を|o", "見せて|misete", "ください|kudasai"],
          extra: ["これ|kore", "じゃ ありません|ja arimasen"],
          hint: "Pola: Benda + を + 見せてください.",
          explain: "[[その 靴を 見せてください|sono kutsu o misete kudasai]].",
        },
        {
          type: "wordbank",
          prompt: "Jam ini harganya 18.000 yen.",
          answer: ["この|kono", "時計|tokei", "は|wa", "18,000円|ichiman hassen-en", "です|desu"],
          extra: ["いくら|ikura", "千|sen"],
          hint: "18.000 = 1万8千 (ichiman hassen).",
          explain: "[[この 時計は 18,000円です|kono tokei wa ichiman hassen-en desu]].",
        },
        {
          type: "match",
          prompt: "Cocokkan satuan angka Jepang",
          pairs: [
            ["百|hyaku", "seratus (100)"],
            ["千|sen", "seribu (1.000)"],
            ["万|man", "sepuluh ribu (10.000)"],
            ["いくら|ikura", "berapa harganya"],
          ],
          explain: "Luar biasa! Konsep angka dan transaksi Jepang sudah kamu kuasai.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Fakta unik toserba dan kebiasaan belanja di Jepang.",
      points: ["Budaya berdiri di eskalator", "Lantai B1 Toserba (Depachika)", "Sapaan De gozaimasu"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Di seluruh Jepang, orang berdiri di sisi kiri eskalator jika ingin diam dan tidak berjalan.",
          answer: false,
          reveal: "<b>Mitos!</b> Di Tokyo dan wilayah Kanto, orang memang berdiri di sisi KIRI eskalator. Tapi di Osaka dan wilayah Kansai, orang justru berdiri di sisi KANAN! Perbedaan ini sudah menjadi ciri khas budaya antar-daerah di Jepang.",
        },
        {
          type: "fact",
          kicker: "Surga Kuliner",
          title: "Depachika: Surga Bawah Tanah Toserba",
          art: "[[デパ地下|depachika]]",
          body: "Lantai bawah tanah (B1) toserba Jepang sangat terkenal dengan sebutan <i>Depachika</i> (デパ地下). Di lantai ini berjejer ratusan gerai makanan premium, kue tradisional, bento mewah, dan pastry kelas dunia dengan tester gratis!",
        },
        {
          type: "fact",
          kicker: "Bahasa Pelayan",
          title: "Sapaan Khusus: 〜で ございます",
          art: "[[ございます|gozaimasu]]",
          body: "Di toko atau toserba mewah, pelayan tidak menggunakan <i>desu</i> biasa, melainkan [[〜で ございます|~ de gozaimasu]]. Frasa ini adalah bentuk bahasa ultra-sopan (Keigo) untuk memuliakan pelanggan.",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Akhir Bab 3",
      icon: "crown",
      intro: "Ujian Pamungkas Bab 3! Kalahkan Boss untuk membuka gerbang ke Bab 4.",
      points: [
        "Kamu punya 3 nyawa.",
        "Ujian mencakup arah, lantai gedung, dan belanja.",
        "Lulus = Gerbang Bab 4 terbuka penuh!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Pelayan toserba menjawab: 「ワイン売り場は 地下1階で ございます。」 Di manakah konter wine?",
          options: [
            { text: "Lantai Bawah Tanah 1 (Basement 1)", correct: true },
            { text: "Lantai 1 Atas" },
            { text: "Lantai 2" },
          ],
          explain: "[[地下1階|chika ikkai]] berarti lantai basement 1 (B1).",
        },
        {
          type: "wordbank",
          prompt: "Kalau begitu, tolong berikan saya yang ini. (Saya beli yang ini)",
          answer: ["じゃ、|ja,", "これ|kore", "を|o", "ください|kudasai"],
          extra: ["見せて|misete", "です|desu"],
          explain: "[[じゃ、これを ください|ja, kore o kudasai]] adalah cara baku menyatakan keputusan membeli barang.",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["この|kono", "時計|tokei", "は|wa", "いくら|ikura", "ですか。|desu ka."], claim: "Berapa harga jam ini?" },
          answer: true,
          explain: "Benar! [[いくら|ikura]] digunakan khusus untuk menanyakan harga.",
        },
        {
          type: "listen",
          prompt: "Dengarkan, berapa harga barang yang disebutkan?",
          audio: ["この|kono", "靴|kutsu", "は|wa", "2,500円|nisen gohyaku-en", "です。|desu."],
          options: [
            { text: "2.500 yen", correct: true },
            { text: "1.500 yen" },
            { text: "25.000 yen" },
          ],
          explain: "Terdengar [[2,500円|nisen gohyaku-en]] (2.500 yen).",
        },
        {
          type: "match",
          prompt: "Tantangan Terakhir Bab 3: Cocokkan semuanya!",
          pairs: [
            ["どちら|dochira", "sebelah mana (sopan)"],
            ["地下|chika", "bawah tanah"],
            ["いくら|ikura", "berapa harga"],
            ["ください|kudasai", "tolong berikan"],
          ],
          explain: "SEMPURNA! Seluruh materi Bab 3 resmi kamu kuasai!",
        },
      ],
    },
  ],
};

window.BAB3 = {
  unit: {
    label: "Bab 3",
    title: "ここ・そこ・あそこ|koko, soko, asoko",
    sub: "Tempat, arah, lantai & belanja",
  },
  stats: { streak: 5, xp: 420 },

  nodes: [
    { id: "s3_1", label: "Stage 3-1", title: "Di Sini & di Sana", sub: "ここ・そこ・あそこ", state: "locked", stage: true, playable: true },
    { id: "s3_2", label: "Stage 3-2", title: "Arah & Belanja", sub: "こちら・階・いくら", state: "locked", stage: true, playable: true },
  ],

  stages: {
    s3_1: STAGE_3_1,
    s3_2: STAGE_3_2,
  },
};

