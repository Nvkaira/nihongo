/* Materi mockup: Bab 1 Lengkap (Stage 1-1, 1-2, dan 1-3).
 * Acuan struktur: Minna no Nihongo I Bab 1 — diadaptasi ke konteks sekolah/remaja yang ramah & seru.
 *
 * Format teks Jepang: "kana|romaji". Kanji + furigana: "{日本|にほん}じん|nihonjin".
 * Satu kalimat = array segmen. Di teks penjelasan, [[わたし|watashi+は|wa]] dirender sebagai teks Jepang inline.
 */

const STAGE_1_1 = {
  id: "s1",
  label: "Stage 1-1",
  title: "Aku adalah…",
  sub: "は・です・じゃありません",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Fundamental & Tujuan",
      icon: "book",
      intro: "Kenalan dulu sama pola kalimat paling dasar di bahasa Jepang. Santai aja, di fase ini belum ada nilai.",
      points: ["Kenapa pola ini penting", "Rumus A [[は|wa]] B [[です|desu]]", "Versi “bukan”: [[じゃ ありません|ja arimasen]]"],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar ini?",
          body: "Bayangin kamu baru pindah ke sekolah di Jepang dan disuruh maju memperkenalkan diri. Kalimat pertama yang kamu butuhin: <b>siapa kamu</b>. Di akhir stage ini kamu bisa bilang dua kalimat ini dengan pede:",
          examples: [
            { jp: ["わたし|watashi", "は|wa", "がくせい|gakusei", "です。|desu."], id: "Aku pelajar." },
            { jp: ["わたし|watashi", "は|wa", "せんせい|sensei", "じゃ ありません。|ja arimasen."], id: "Aku bukan guru." },
          ],
        },
        {
          type: "concept",
          title: "Rumusnya: A は B です",
          body: "Pola ini kayak rumus matematika: tinggal ganti A dan B. Bedanya dengan bahasa Indonesia, [[です|desu]] selalu nongkrong di <b>akhir</b> kalimat.",
          formula: [
            { text: "A", note: "topik", kind: "topic" },
            { jp: "は|wa", note: "penanda topik", kind: "particle" },
            { text: "B", note: "keterangan", kind: "pred" },
            { jp: "です|desu", note: "adalah (sopan)", kind: "copula" },
          ],
          examples: [
            { jp: ["わたし|watashi", "は|wa", "インドネシアじん|indoneshiajin", "です。|desu."], id: "Aku orang Indonesia." },
          ],
          tip: "Jebakan klasik! Kalau jadi partikel, [[は|wa]] dibaca <b>wa</b>, bukan <i>ha</i>.",
        },
        {
          type: "concept",
          title: "Versi “bukan”",
          body: "Mau bilang “bukan”? Cukup ganti [[です|desu]] jadi [[じゃ ありません|ja arimasen]]. Bagian lainnya tetap sama.",
          formula: [
            { text: "A", note: "topik", kind: "topic" },
            { jp: "は|wa", note: "penanda topik", kind: "particle" },
            { text: "B", note: "keterangan", kind: "pred" },
            { jp: "じゃ ありません|ja arimasen", note: "bukan", kind: "neg" },
          ],
          examples: [
            { jp: ["わたし|watashi", "は|wa", "いしゃ|isha", "じゃ ありません。|ja arimasen."], id: "Aku bukan dokter." },
          ],
          tip: "Di tulisan resmi (surat, ujian), orang Jepang pakai [[では ありません|dewa arimasen]]. Artinya sama, cuma lebih formal.",
        },
        {
          type: "vocab",
          title: "Kosakata kunci",
          body: "Ketuk kartunya untuk mendengar cara bacanya.",
          items: [
            { jp: "わたし|watashi", id: "aku / saya" },
            { jp: "がくせい|gakusei", id: "pelajar" },
            { jp: "せんせい|sensei", id: "guru" },
            { jp: "いしゃ|isha", id: "dokter" },
            { jp: "インドネシアじん|indoneshiajin", id: "orang Indonesia" },
            { jp: "{日本|にほん}じん|nihonjin", id: "orang Jepang" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Sekarang coba sendiri, pelan-pelan. Kalau bingung, pakai tombol <b>Petunjuk</b>. Di sini nggak ada nyawa yang hilang.",
      points: ["Pilihan ganda", "Susun blok kata", "Cocokkan pasangan"],
      steps: [
        {
          type: "mc",
          prompt: "Partikel は di kalimat ini dibaca apa?",
          jp: ["わたし|watashi", "は|wa", "がくせい|gakusei", "です。|desu."],
          trans: "Aku pelajar.",
          options: [{ text: "ha" }, { text: "wa", correct: true }, { text: "ba" }],
          hint: "Ingat “jebakan klasik” di kartu Rumus tadi.",
          explain: "Sebagai partikel, は selalu dibaca <b>wa</b>. Tulisannya は, bacanya wa.",
        },
        {
          type: "wordbank",
          prompt: "Aku pelajar.",
          answer: ["わたし|watashi", "は|wa", "がくせい|gakusei", "です|desu"],
          extra: ["せんせい|sensei", "じゃ ありません|ja arimasen"],
          hint: "Pakai rumus: <b>A</b> → [[は|wa]] → <b>B</b> → [[です|desu]]. A = siapa yang dibicarakan.",
          explain: "Mulai dari topik ([[わたし|watashi]]), lalu [[は|wa]], keterangan ([[がくせい|gakusei]]), dan ditutup [[です|desu]].",
        },
        {
          type: "mc",
          prompt: "Lengkapi kalimatnya",
          jp: ["わたし|watashi", "は|wa", "いしゃ|isha", "＿＿＿|___"],
          trans: "Aku bukan dokter.",
          speak: false,
          options: [{ jp: "です|desu" }, { jp: "じゃ ありません|ja arimasen", correct: true }, { jp: "か|ka" }],
          hint: "Cari bentuk “bukan”.",
          explain: "[[じゃ ありません|ja arimasen]] adalah bentuk “bukan” dari [[です|desu]].",
        },
        {
          type: "match",
          prompt: "Cocokkan kata dan artinya",
          pairs: [
            ["わたし|watashi", "aku"],
            ["がくせい|gakusei", "pelajar"],
            ["せんせい|sensei", "guru"],
            ["いしゃ|isha", "dokter"],
          ],
          explain: "Kosakata Bab 1 mulai nempel!",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Rehat sebentar. Ini fakta seru seputar bahasa dan budaya Jepang yang nyambung sama materi tadi.",
      points: ["Benar atau mitos?", "Asal-usul bacaan [[は|wa]]", "Budaya membungkuk"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Guru di Jepang memperkenalkan dirinya dengan kalimat [[わたし|watashi+は|wa+せんせい|sensei+です。|desu.]]",
          answer: false,
          reveal: "<b>Mitos!</b> [[せんせい|sensei]] adalah panggilan hormat untuk <i>orang lain</i>. Untuk profesinya sendiri, guru bilang [[きょうし|kyōshi]]. Kalau menyebut diri sendiri せんせい, kesannya kayak memuji diri sendiri.",
        },
        {
          type: "fact",
          kicker: "Tahukah kamu?",
          title: "Kenapa は dibaca wa?",
          art: "[[は|ha]] → [[は|wa]]",
          body: "Ratusan tahun lalu, bunyi <i>ha</i> di tengah kalimat lama-lama berubah jadi <i>wa</i> saat diucapkan, tapi ejaan partikelnya tetap dipertahankan. Hasilnya: ditulis は, dibaca wa. Nanti kamu juga ketemu kasus serupa: partikel [[へ|e]] dibaca <i>e</i>.",
        },
        {
          type: "fact",
          kicker: "Budaya",
          title: "Kenalan sambil membungkuk",
          art: "[[おじぎ|ojigi]]",
          body: "Saat memperkenalkan diri, orang Jepang biasanya membungkuk (おじぎ). Makin dalam bungkuknya, makin hormat. Ke teman sebaya cukup anggukan kecil. Ke guru atau kepala sekolah, membungkuk sekitar 30 derajat.",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Challenge",
      icon: "crown",
      intro: "Saatnya ujian stage! Jawab 5 soal untuk membuka Stage 1-2.",
      points: [
        "Kamu punya 3 nyawa. Salah jawab = nyawa berkurang 1.",
        "Jawab dalam 15 detik untuk dapat <b>Bonus Kilat</b>. Lewat dari itu nggak dihukum.",
        "Lulus = Stage 1-2 terbuka.",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Pilih kalimat yang artinya “Aku bukan dokter.”",
          options: [
            { jp: ["わたし|watashi", "は|wa", "いしゃ|isha", "です。|desu."] },
            { jp: ["わたし|watashi", "は|wa", "いしゃ|isha", "じゃ ありません。|ja arimasen."], correct: true },
            { jp: ["わたし|watashi", "は|wa", "せんせい|sensei", "じゃ ありません。|ja arimasen."] },
          ],
          explain: "“Bukan” = [[じゃ ありません|ja arimasen]], dan dokter = [[いしゃ|isha]].",
        },
        {
          type: "wordbank",
          prompt: "Aku orang Indonesia.",
          answer: ["わたし|watashi", "は|wa", "インドネシアじん|indoneshiajin", "です|desu"],
          extra: ["{日本|にほん}じん|nihonjin", "じゃ ありません|ja arimasen"],
          explain: "A [[は|wa]] B [[です|desu]] → [[わたし|watashi+は|wa+インドネシアじん|indoneshiajin+です|desu]].",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["わたし|watashi", "は|wa", "せんせい|sensei", "です。|desu."], claim: "Aku pelajar." },
          answer: false,
          explain: "Salah. [[せんせい|sensei]] = guru, jadi artinya “Aku guru.” Pelajar itu [[がくせい|gakusei]].",
        },
        {
          type: "listen",
          prompt: "Dengarkan, lalu pilih artinya",
          audio: ["わたし|watashi", "は|wa", "がくせい|gakusei", "じゃ ありません。|ja arimasen."],
          options: [{ text: "Aku pelajar." }, { text: "Aku bukan pelajar.", correct: true }, { text: "Aku bukan guru." }],
          explain: "Ada [[じゃ ありません|ja arimasen]] di akhir, jadi kalimatnya negatif: “Aku bukan pelajar.”",
        },
        {
          type: "match",
          prompt: "Cocokkan secepat mungkin!",
          pairs: [
            ["は|wa", "penanda topik"],
            ["です|desu", "adalah (sopan)"],
            ["じゃ ありません|ja arimasen", "bukan"],
            ["{日本|にほん}じん|nihonjin", "orang Jepang"],
          ],
          explain: "Semua pasangan tepat. Kamu siap naik level!",
        },
      ],
    },
  ],
};

const STAGE_1_2 = {
  id: "s2",
  label: "Stage 1-2",
  title: "Bertanya & “juga”",
  sub: "か・も",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Fundamental & Tujuan",
      icon: "book",
      intro: "Setelah bisa menyatakan identitas diri, sekarang saatnya belajar bertanya ke orang lain dan menyatakan kesamaan (“aku juga!”).",
      points: [
        "Cara bertanya: tempel [[か|ka]] di akhir kalimat",
        "Menyatakan “juga”: partikel [[も|mo]] gantikan [[は|wa]]",
        "Kata tanya: [[だれ|dare]] (siapa) & [[何歳|nansai]] (berapa umur)",
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar ini?",
          body: "Saat berkenalan dengan teman baru di sekolah, kamu pasti ingin bertanya: <i>“Apakah kamu juga pelajar?”</i>. Di stage ini kamu akan menguasai cara bertanya dan menjawabnya dengan santai!",
          examples: [
            { jp: ["あなた|anata", "は|wa", "がくせい|gakusei", "ですか。|desu ka."], id: "Apakah kamu pelajar?" },
            { jp: ["わたし|watashi", "も|mo", "がくせい|gakusei", "です。|desu."], id: "Aku juga pelajar." },
          ],
        },
        {
          type: "concept",
          title: "Rumus Bertanya: Kalimat + か",
          body: "Membuat pertanyaan di bahasa Jepang itu super mudah! Susunan kalimat <b>tidak perlu dibalik</b>. Cukup tempelkan partikel **[[か|ka]]** di paling belakang dengan intonasi naik.",
          formula: [
            { text: "Kalimat Biasa", note: "A は B です", kind: "topic" },
            { jp: "か|ka", note: "tanda tanya (?)", kind: "particle" },
          ],
          examples: [
            { jp: ["サントスさん|santosu-san", "は|wa", "かいしゃいん|kaishain", "ですか。|desu ka."], id: "Apakah Tuan Santos karyawan?" },
          ],
          tip: "Cara jawab: Kalau 'ya', jawab [[はい|hai]] (はい、かいしゃいんです). Kalau 'bukan', jawab [[いいえ|iie]] (いいえ、かいしゃいんじゃ ありません).",
        },
        {
          type: "concept",
          title: "Menyatakan “Juga”: Partikel も",
          body: "Jika kamu ingin bilang bahwa hal yang sama juga berlaku untuk orang/hal lain, gantikan partikel [[は|wa]] dengan **[[も|mo]]** (artinya 'juga').",
          formula: [
            { text: "A", note: "topik baru", kind: "topic" },
            { jp: "も|mo", note: "juga (gantikan は)", kind: "particle" },
            { text: "B", note: "keterangan yang sama", kind: "pred" },
            { jp: "です|desu", note: "adalah (sopan)", kind: "copula" },
          ],
          examples: [
            { jp: ["ミラーさん|miraa-san", "は|wa", "がくせい|gakusei", "です。|desu."], id: "Tuan Miller adalah pelajar." },
            { jp: ["サントスさん|santosu-san", "も|mo", "がくせい|gakusei", "です。|desu."], id: "Tuan Santos juga pelajar." },
          ],
          tip: "Jangan pernah menggabungkan partikelnya jadi 'はも'. Cukup gunakan [[も|mo]] saja!",
        },
        {
          type: "concept",
          title: "Tanya Siapa & Berapa Umur",
          body: "Dua kata tanya penting saat kenalan: Siapa = [[だれ|dare]] (versi sopan: [[どなた|donata]]), dan Umur berapa = [[何歳|nansai]] (versi sopan: [[おいくつ|oikutsu]]).",
          examples: [
            { jp: ["あの|ano", "かた|kata", "は|wa", "どなた|donata", "ですか。|desu ka."], id: "Siapakah beliau itu?" },
            { jp: ["テレサちゃん|teresa-chan", "は|wa", "なんさい|nansai", "ですか。|desu ka."], id: "Berapa usia Dek Teresa?" },
          ],
          tip: "Menyebut umur memakai angka + [[〜さい|~sai]] (tahun). Contoh: 9さい (9 tahun).",
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 1-2",
          body: "Ketuk kartunya untuk mendengar pelafalan aslinya.",
          items: [
            { jp: "だれ|dare", id: "siapa" },
            { jp: "どなた|donata", id: "siapa (sopan / beliau)" },
            { jp: "なんさい|nansai", id: "umur berapa" },
            { jp: "はい|hai", id: "ya / betul" },
            { jp: "いいえ|iie", id: "bukan / tidak" },
            { jp: "かいしゃいん|kaishain", id: "karyawan perusahaan" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Yuk kita coba latih pola tanya dan partikel 'juga'. Gunakan petunjuk jika kamu ragu.",
      points: ["Partikel tanya", "Susun kata 'juga'", "Menjawab pertanyaan"],
      steps: [
        {
          type: "mc",
          prompt: "Partikel apa yang ditaruh di akhir kalimat untuk bertanya?",
          jp: ["サントスさん|santosu-san", "は|wa", "がくせい|gakusei", "です＿＿＿。|desu ___."],
          trans: "Apakah Tuan Santos seorang pelajar?",
          speak: false,
          options: [{ jp: "か|ka", correct: true }, { jp: "は|wa" }, { jp: "も|mo" }],
          hint: "Ingat penanda tanya di akhir kalimat.",
          explain: "Partikel [[か|ka]] di akhir kalimat berfungsi persis seperti tanda tanya (?) dalam bahasa Indonesia.",
        },
        {
          type: "wordbank",
          prompt: "Aku juga pelajar.",
          answer: ["わたし|watashi", "も|mo", "がくせい|gakusei", "です|desu"],
          extra: ["は|wa", "じゃ ありません|ja arimasen"],
          hint: "Gunakan [[も|mo]] untuk menggantikan [[は|wa]].",
          explain: "Pola 'aku juga': [[わたし|watashi+も|mo+がくせい|gakusei+です|desu]].",
        },
        {
          type: "mc",
          prompt: "Lengkapi jawaban sanggahan ini: 「あなたは 先生ですか。」",
          jp: ["いいえ、|iie,", "せんせい|sensei", "＿＿＿＿＿。|_____."],
          trans: "Bukan, saya bukan guru.",
          speak: false,
          options: [
            { jp: "じゃ ありません|ja arimasen", correct: true },
            { jp: "です|desu" },
            { jp: "でした|deshita" },
          ],
          hint: "Bentuk negatif dari です adalah...",
          explain: "Untuk menyangkal pernyataan, gunakan bentuk [[じゃ ありません|ja arimasen]] (bukan).",
        },
        {
          type: "match",
          prompt: "Cocokkan kata dan artinya",
          pairs: [
            ["だれ|dare", "siapa"],
            ["も|mo", "juga"],
            ["なんさい|nansai", "umur berapa"],
            ["いいえ|iie", "bukan / tidak"],
          ],
          explain: "Bagus sekali! Pemahaman dasarmu makin kokoh.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Fakta seru seputar percakapan sehari-hari dan etika di Jepang.",
      points: ["Mitos tanda tanya (?)", "Angka pantangan di Jepang", "Etika menanyakan usia"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Gedung dan rumah sakit di Jepang sering kali tidak memiliki kamar atau lantai bernomor 4 atau 9.",
          answer: true,
          reveal: "<b>Fakta!</b> Angka 4 bisa dibaca <i>shi</i> yang bunyinya sama dengan 'kematian' (死). Sedangkan angka 9 dibaca <i>ku</i> yang identik dengan 'penderitaan' (苦). Karena itu angka 4 dan 9 sering dihindari!",
        },
        {
          type: "fact",
          kicker: "Tata Krama",
          title: "Sopan vs Santai: だれ vs どなた",
          art: "[[だれ|dare]] vs [[どなた|donata]]",
          body: "Ke teman seumuran, kamu bisa tanya: [[あのひとは だれですか。|ano hito wa dare desu ka.]]. Tapi ke guru atau orang terhormat, gunakan versi sopan: [[あのかたは どなたですか。|ano kata wa donata desu ka.]].",
        },
        {
          type: "fact",
          kicker: "Etika Sosial",
          title: "Menanyakan Umur Orang Lain",
          art: "[[おいくつ|oikutsu]]",
          body: "Orang dewasa Jepang cukup sensitif soal umur. Jika bukan urusan resmi, menanyakan usia dianggap kurang sopan. Bila terpaksa bertanya dalam situasi resmi, gunakan kata sopan [[おいくつ|oikutsu]] daripada [[なんさい|nansai]].",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Challenge",
      icon: "crown",
      intro: "Saatnya ujian Stage 1-2! Kalahkan Boss untuk membuka Stage 1-3.",
      points: [
        "Kamu punya 3 nyawa. Salah jawab = nyawa berkurang 1.",
        "Jawab dalam 15 detik untuk dapat <b>Bonus Kilat</b>.",
        "Lulus = Jalur ke Stage 1-3 terbuka!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Pilih kalimat yang artinya “Tuan Santos juga seorang karyawan.”",
          options: [
            { jp: ["サントスさん|santosu-san", "も|mo", "かいしゃいん|kaishain", "です。|desu."], correct: true },
            { jp: ["サントスさん|santosu-san", "は|wa", "かいしゃいん|kaishain", "です。|desu."] },
            { jp: ["サントスさん|santosu-san", "も|mo", "かいしゃいん|kaishain", "じゃ ありません。|ja arimasen."] },
          ],
          explain: "“Juga” memakai partikel [[も|mo]], bukan [[は|wa]].",
        },
        {
          type: "wordbank",
          prompt: "Orang itu siapa?",
          answer: ["あの|ano", "ひと|hito", "は|wa", "だれ|dare", "ですか|desu ka"],
          extra: ["どなた|donata", "も|mo"],
          explain: "[[あの ひと|ano hito]] = orang itu, [[だれ|dare]] = siapa, ditutup [[ですか|desu ka]].",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["ミラーさん|miraa-san", "は|wa", "がくせい|gakusei", "ですか。|desu ka."], claim: "Apakah Tuan Miller seorang pelajar?" },
          answer: true,
          explain: "Benar! Partikel [[か|ka]] di akhir menjadikan kalimat sebagai pertanyaan.",
        },
        {
          type: "listen",
          prompt: "Dengarkan, lalu pilih terjemahan yang tepat:",
          audio: ["わたし|watashi", "も|mo", "かいしゃいん|kaishain", "です。|desu."],
          options: [
            { text: "Saya juga karyawan perusahaan.", correct: true },
            { text: "Saya bukan karyawan perusahaan." },
            { text: "Apakah Anda karyawan perusahaan?" },
          ],
          explain: "Terdengar [[わたしも|watashi mo]] yang artinya 'saya juga'.",
        },
        {
          type: "match",
          prompt: "Cocokkan secepat mungkin!",
          pairs: [
            ["か|ka", "partikel tanya (?)"],
            ["も|mo", "juga"],
            ["どなた|donata", "siapa (sopan)"],
            ["なんさい|nansai", "umur berapa"],
          ],
          explain: "Luar biasa! Boss Stage 1-2 takluk!",
        },
      ],
    },
  ],
};

const STAGE_1_3 = {
  id: "s3",
  label: "Stage 1-3",
  title: "Perkenalan diri & relasi",
  sub: "の・さん",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Fundamental & Tujuan",
      icon: "book",
      intro: "Ini dia stage pamungkas Bab 1! Kuasai seni perkenalan diri lengkap (Jikoshoukai), afiliasi sekolah/kelompok, dan etika panggilan nama.",
      points: [
        "Partikel [[の|no]]: penghubung sekolah & organisasi",
        "Menyatakan asal: [[〜から 来ました|~ kara kimashita]]",
        "Etika panggilan: [[〜さん|~san]], [[〜ちゃん|~chan]], [[〜くん|~kun]]",
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar ini?",
          body: "Di panggung perkenalan kelas atau komunitas baru di Jepang, kamu ingin menyebutkan: <b>asal sekolahmu</b>, <b>asal negaramu</b>, dan menyapa orang lain dengan sopan santun yang memikat!",
          examples: [
            { jp: ["わたし|watashi", "は|wa", "さくらだいがくの|sakuradaigaku no", "がくせい|gakusei", "です。|desu."], id: "Aku mahasiswa Universitas Sakura." },
            { jp: ["インドネシア|indoneshia", "から|kara", "来ました。|kimashita."], id: "Saya datang dari Indonesia." },
          ],
        },
        {
          type: "concept",
          title: "Partikel の: Menghubungkan Dua Kata Benda",
          body: "Partikel **[[の|no]]** menghubungkan dua nomina (A の B). Di Bab 1, A adalah organisasi, instansi, atau sekolah tempat B bernaung.",
          formula: [
            { text: "Organisasi / Sekolah", note: "A", kind: "topic" },
            { jp: "の|no", note: "penghubung afiliasi", kind: "particle" },
            { text: "Status / Pekerjaan", note: "B", kind: "pred" },
          ],
          examples: [
            { jp: ["ミラーさん|miraa-san", "は|wa", "IMCの|IMC no", "しゃいん|shain", "です。|desu."], id: "Tuan Miller adalah karyawan IMC." },
            { jp: ["ワットせんせい|watto-sensei", "は|wa", "さくらだいがくの|sakuradaigaku no", "せんせい|sensei", "です。|desu."], id: "Prof. Watt adalah dosen di Universitas Sakura." },
          ],
          tip: "Kata [[しゃいん|shain]] (karyawan) selalu dipasangkan dengan nama perusahaannya memakai partikel [[の|no]].",
        },
        {
          type: "concept",
          title: "Menyatakan Asal: 〜から 来ました",
          body: "Saat berkenalan dan ingin memberitahu negaramu atau kotamu, gunakan rumus: **[Negara/Kota] + [[から 来ました|kara kimashita]]** (artinya 'datang/berasal dari').",
          formula: [
            { text: "Negara / Tempat", note: "asal", kind: "topic" },
            { jp: "から|kara", note: "dari", kind: "particle" },
            { jp: "来ました|kimashita", note: "telah datang", kind: "pred" },
          ],
          examples: [
            { jp: ["インドネシア|indoneshia", "から|kara", "来ました。|kimashita."], id: "Saya berasal dari Indonesia." },
            { jp: ["アメリカ|amerika", "から|kara", "来ました。|kimashita."], id: "Saya berasal dari Amerika." },
          ],
        },
        {
          type: "concept",
          title: "Gelar Panggilan: 〜さん, 〜ちゃん, 〜くん",
          body: "Orang Jepang menggunakan akhiran panggilan kehormatan di belakang nama orang lain:",
          points: [
            "[[〜さん|~san]]: Panggilan umum sopan (Tuan/Nyonya/Mas/Mbak).",
            "[[〜ちゃん|~chan]]: Panggilan imut/sayang untuk anak kecil atau teman dekat perempuan.",
            "[[〜くん|~kun]]: Panggilan akrab untuk anak laki-laki atau junior sekolah.",
          ],
          tip: "<b>Pantangan mutlak:</b> JANGAN PERNAH menambahkan 〜さん di nama sendiri saat berkenalan! Menyebut nama sendiri + さん terkesan narsis.",
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 1-3",
          body: "Ketuk kartu untuk mendengar suara salam perkenalan.",
          items: [
            { jp: "はじめまして|hajimemashite", id: "salam kenal pertama kali" },
            { jp: "どうぞ よろしく|douzo yoroshiku", id: "mohon bimbingannya / senang berkenalan" },
            { jp: "こちらは|kochira wa", id: "ini adalah (orang ini)" },
            { jp: "〜から 来ました|~ kara kimashita", id: "datang/berasal dari ~" },
            { jp: "だいがく|daigaku", id: "universitas" },
            { jp: "みなさん|minasan", id: "hadirin sekalian / semuanya" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Latih cara menghubungkan kata benda dan ungkapan perkenalan diri.",
      points: ["Partikel の", "Memperkenalkan pihak ketiga", "Menyatakan asal negara"],
      steps: [
        {
          type: "mc",
          prompt: "Bagaimana cara menyambungkan 'Universitas Sakura' dan 'mahasiswa'?",
          options: [
            { jp: ["さくらだいがくの|sakuradaigaku no", "がくせい|gakusei"], correct: true },
            { jp: ["さくらだいがくは|sakuradaigaku wa", "がくせい|gakusei"] },
            { jp: ["さくらだいがくも|sakuradaigaku mo", "がくせい|gakusei"] },
          ],
          hint: "Gunakan partikel penghubung dua kata benda.",
          explain: "Partikel [[の|no]] menghubungkan institusi dengan status mahasiswa.",
        },
        {
          type: "wordbank",
          prompt: "Ini adalah Tuan Miller. (Memperkenalkan orang lain)",
          answer: ["こちらは|kochira wa", "ミラーさん|miraa-san", "です|desu"],
          extra: ["わたし|watashi", "じゃ ありません|ja arimasen"],
          hint: "Gunakan kata penunjuk sopan [[こちらは|kochira wa]].",
          explain: "[[こちらは 〜さんです|kochira wa ~san desu]] adalah cara baku memperkenalkan orang di samping kita.",
        },
        {
          type: "wordbank",
          prompt: "Saya datang dari Indonesia.",
          answer: ["インドネシア|indoneshia", "から|kara", "来ました|kimashita"],
          extra: ["です|desu", "へ|e"],
          hint: "Pakai rumus: [Negara] + から + 来ました.",
          explain: "[[から 来ました|kara kimashita]] menunjukkan tempat asal kedatangan.",
        },
        {
          type: "match",
          prompt: "Cocokkan frasa perkenalan",
          pairs: [
            ["はじめまして|hajimemashite", "salam kenal"],
            ["どうぞ よろしく|douzo yoroshiku", "mohon bimbingannya"],
            ["こちらは|kochira wa", "ini adalah (orang ini)"],
            ["だいがく|daigaku", "universitas"],
          ],
          explain: "Sempurna! Frasa perkenalan diri sudah menempel di ingatanmu.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Rahasia etika komunikasi orang Jepang yang perlu kamu ketahui.",
      points: ["Mitos menyebut nama diri sendiri", "Kenapa jarang memanggil 'kamu'?", "Jurus Jikoshoukai"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Saat perkenalan di kelas, boleh memperkenalkan diri: 「はじめまして、わたしは [Nama]さん です。」",
          answer: false,
          reveal: "<b>Mitos besar!</b> Akhiran [[〜さん|~san]] adalah bentuk kehormatan untuk <i>orang lain</i>. Memanggil nama sendiri dengan さん terdengar aneh dan tidak sopan. Cukup sebut nama saja: '[Nama] です'.",
        },
        {
          type: "fact",
          kicker: "Etika Bahasa",
          title: "Kenapa Jarang Memanggil 'Kamu' (あなた)?",
          art: "[[あなた|anata]] vs [[〜さん|~san]]",
          body: "Di anime mungkin sering mendengar kata *anata*. Namun di kehidupan nyata, menyebut *anata* ke orang yang sudah kita tahu namanya terasa berjarak, dingin, atau bahkan tidak sopan. Lebih baik panggil langsung nama belakangnya + さん: [[山田さん|yamada-san]], [[佐藤さん|sato-san]].",
        },
        {
          type: "fact",
          kicker: "Budaya Sekolah",
          title: "Jikoshoukai: Jurus Perkenalan Diri",
          art: "[[じこしょうかい|jikoshoukai]]",
          body: "Urutan perkenalan diri (*Jikoshoukai*) yang sempurna saat hari pertama sekolah:  \n1. [[初めまして。|hajimemashite.]] (Salam pembuka)  \n2. [Nama] です。 [Asal]から 来ました。  \n3. [[どうぞ よろしく お願いします。|douzo yoroshiku onegai shimasu.]] sambil membungkuk sekitar 30 derajat!",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Akhir Bab 1",
      icon: "crown",
      intro: "Ujian Pamungkas Bab 1! Kalahkan Boss ini untuk menuntaskan seluruh Bab 1 dan membuka gerbang Bab 2.",
      points: [
        "Kamu punya 3 nyawa. Ujian mencakup seluruh materi Bab 1.",
        "Kalahkan Boss untuk menamatkan Kepulauan Bab 1!",
        "Lulus = Gerbang Bab 2 terbuka penuh!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Pilih kalimat perkenalan diri yang paling tepat dan sopan:",
          options: [
            { jp: ["初めまして。|hajimemashite.", "マイク・ミラーです。|maiku miraa desu.", "アメリカから|amerika kara", "来ました。|kimashita."], correct: true },
            { jp: ["初めまして。|hajimemashite.", "マイク・ミラーさんです。|maiku miraa-san desu.", "アメリカから|amerika kara", "来ました。|kimashita."] },
            { jp: ["初めまして。|hajimemashite.", "マイク・ミラーは|maiku miraa wa", "がくせいじゃ ありません。|gakusei ja arimasen."] },
          ],
          explain: "Nama sendiri pantang memakai 〜さん. Pilihan pertama adalah perkenalan diri yang sempurna dan santun.",
        },
        {
          type: "wordbank",
          prompt: "Tuan Miller adalah karyawan IMC.",
          answer: ["ミラーさん|miraa-san", "は|wa", "IMCの|IMC no", "しゃいん|shain", "です|desu"],
          extra: ["がくせい|gakusei", "から 来ました|kara kimashita"],
          explain: "Menghubungkan institusi/perusahaan dengan status karyawan menggunakan partikel [[の|no]]: [[IMCの しゃいん|IMC no shain]].",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["こちらは|kochira wa", "佐藤さん|satou-san", "です。|desu."], claim: "Ini adalah Sdri. Sato." },
          answer: true,
          explain: "Benar! [[こちらは|kochira wa]] dipakai saat memperkenalkan seseorang yang berada di dekat kita.",
        },
        {
          type: "listen",
          prompt: "Dengarkan, dari negara manakah orang ini berasal?",
          audio: ["初めまして。|hajimemashite.", "インドネシア|indoneshia", "から|kara", "来ました。|kimashita."],
          options: [
            { text: "Indonesia", correct: true },
            { text: "India" },
            { text: "Jepang" },
          ],
          explain: "Terdengar jelas: [[インドネシアから 来ました|indoneshia kara kimashita]] (Datang dari Indonesia).",
        },
        {
          type: "match",
          prompt: "Tantangan Terakhir: Cocokkan semuanya!",
          pairs: [
            ["の|no", "partikel penghubung / asal"],
            ["〜さん|~san", "sapaan sopan (Tuan/Nona)"],
            ["〜ちゃん|~chan", "sapaan anak / sayang"],
            ["〜くん|~kun", "sapaan anak cowok / junior"],
          ],
          explain: "SEMPURNA! Kamu telah resmi menaklukkan dan menamatkan seluruh Bab 1!",
        },
      ],
    },
  ],
};

window.BAB1 = {
  unit: {
    label: "Bab 1",
    title: "はじめまして!|hajimemashite!",
    sub: "Kenalan & memperkenalkan diri",
  },
  stats: { streak: 3, xp: 120 },

  nodes: [
    { id: "b0", label: "Bab 0", title: "Kenalan Hiragana", sub: "あ・い・う・え・お", state: "done" },
    { id: "s1", label: "Stage 1-1", title: "Aku adalah…", sub: "は・です・じゃありません", state: "current", stage: true, playable: true },
    { id: "s2", label: "Stage 1-2", title: "Bertanya & “juga”", sub: "か・も", state: "locked", stage: true, playable: true },
    { id: "s3", label: "Stage 1-3", title: "Perkenalan diri", sub: "の・さん", state: "locked", stage: true, playable: true },
    { id: "b2", label: "Bab 2", title: "Ini, itu, dan itu", sub: "これ・それ・あれ", state: "locked" },
  ],

  // Backwards compatibility for legacy mockups (mockup-*.html via engine.js)
  stage: STAGE_1_1,

  // Full multi-stage data for Bab 1
  stages: {
    s1: STAGE_1_1,
    s2: STAGE_1_2,
    s3: STAGE_1_3,
  },
};
