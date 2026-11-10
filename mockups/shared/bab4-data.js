/* Materi mockup: Bab 4 Lengkap (Stage 4-1 dan Stage 4-2).
 * Acuan struktur: Minna no Nihongo I Bab 4 — Waktu, Hari, Konjugasi Kata Kerja, Rutinitas.
 *
 * Format teks Jepang: "kana|romaji". Kanji + furigana: "{起|お}きます|okimasu".
 * Satu kalimat = array segmen. Di teks penjelasan, [[今|ima+何時|nanji]] dirender sebagai teks Jepang inline.
 */

const STAGE_4_1 = {
  id: "s4_1",
  label: "Stage 4-1",
  title: "Waktu & Hari",
  sub: "〜時〜分 / 何時 / 曜日",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Fundamental & Tujuan",
      icon: "book",
      intro: "Belajar membaca jam, menit, waktu pagi/malam, serta nama-nama hari dalam seminggu di bahasa Jepang!",
      points: [
        "Jam & menit: [[〜時|~ji]] (jam), [[〜分|~fun/pun]] (menit), [[半|han]] (lewat 30)",
        "Pagi & malam: [[午前|gozen]] (AM) vs [[午後|gogo]] (PM)",
        "Tujuh hari: [[月曜日|getsuyoubi]] s/d [[日曜日|nichiyoubi]]",
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar ini?",
          body: "Jadwal kereta, jam masuk sekolah, dan jam buka toko di Jepang sangat ketat dan tepat waktu. Kamu perlu bisa bertanya: <i>“Sekarang jam berapa?”</i> dan <i>“Liburnya hari apa?”</i>.",
          examples: [
            { jp: ["今|ima", "何時|nanji", "ですか。|desu ka."], id: "Sekarang jam berapa?" },
            { jp: ["4時半|yojihan", "です。|desu."], id: "Pukul 4 lewat 30 menit (setengah lima)." },
          ],
        },
        {
          type: "concept",
          title: "Menyebutkan Jam: 〜時 (ji)",
          body: "Tinggal sebut angka + **時 (ji)**. Namun ada 3 angka yang pelafalannya berubah (jebakan klasik!):",
          points: [
            "4時 = **よじ (yoji)**, bukan <i>yonji</i> atau <i>shiji</i>.",
            "7時 = **しちじ (shichiji)**, lebih lazim dari <i>nanaji</i>.",
            "9時 = **くじ (kuji)**, bukan <i>kyuuji</i>.",
            "Lewat 30 menit = tambahkan **半 (han)**: 2時半 (pukul 2.30).",
          ],
          examples: [
            { jp: ["今|ima", "7時|shichiji", "10分|juppun", "です。|desu."], id: "Sekarang pukul 7 lewat 10 menit." },
          ],
        },
        {
          type: "concept",
          title: "Pagi (午前) vs Siang/Malam (午後)",
          body: "Di Jepang, untuk membedakan waktu AM dan PM:",
          points: [
            "[[午前|gozen]]: Pagi (AM / 00:00 - 12:00 siang).",
            "[[午後|gogo]]: Siang / Malam (PM / 12:00 siang - 24:00 malam).",
            "Kata waktu ini diletakkan di DEPAN angka jam: **午前 7時** *(jam 7 pagi)*.",
          ],
          examples: [
            { jp: ["ニューヨーク|nyuuyooku", "は|wa", "今|ima", "午前|gozen", "4時|yoji", "です。|desu."], id: "Di New York sekarang jam 4 pagi." },
          ],
        },
        {
          type: "concept",
          title: "Tujuh Hari dalam Seminggu (曜日)",
          body: "Semua hari berakhiran **〜曜日 (youbi)**. Urutannya:",
          points: [
            "[[月曜日|getsuyoubi]] (Senin) · [[火曜日|kayoubi]] (Selasa) · [[水曜日|suiyoubi]] (Rabu)",
            "[[木曜日|mokuyoubi]] (Kamis) · [[金曜日|kin'youbi]] (Jumat) · [[土曜日|doyoubi]] (Sabtu) · [[日曜日|nichiyoubi]] (Minggu)",
            "Tanya hari: [[何曜日|nanyoubi]] (hari apa?).",
          ],
          examples: [
            { jp: ["休み|yasumi", "は|wa", "何曜日|nanyoubi", "ですか。|desu ka."], id: "Hari liburnya hari apa?" },
            { jp: ["土曜日|doyoubi", "と|to", "日曜日|nichiyoubi", "です。|desu."], id: "Hari Sabtu dan Minggu." },
          ],
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 4-1",
          body: "Ketuk kartunya untuk mendengarkan pelafalan waktu dan hari.",
          items: [
            { jp: "今|ima", id: "sekarang" },
            { jp: "何時|nanji", id: "jam berapa" },
            { jp: "半|han", id: "setengah (30 menit)" },
            { jp: "午前|gozen", id: "pagi (AM)" },
            { jp: "午後|gogo", id: "siang/malam (PM)" },
            { jp: "月曜日|getsuyoubi", id: "Senin" },
            { jp: "金曜日|kin'youbi", id: "Jumat" },
            { jp: "日曜日|nichiyoubi", id: "Minggu" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Yuk latihan membaca jam dan mengingat nama-nama hari.",
      points: ["Jam 4, 7, dan 9", "Menyusun waktu AM/PM", "Tanya hari libur"],
      steps: [
        {
          type: "mc",
          prompt: "Bagaimana pelafalan yang benar untuk 'Pukul 4' dalam bahasa Jepang?",
          options: [
            { text: "よじ (yoji)", correct: true },
            { text: "よんじ (yonji)" },
            { text: "しじ (shiji)" },
          ],
          hint: "Angka 4 untuk jam dibaca yo-.",
          explain: "Pukul 4 wajib dilafalkan [[よじ|yoji]].",
        },
        {
          type: "wordbank",
          prompt: "Sekarang pukul 2 lewat 30 menit (jam setengah 3).",
          answer: ["今|ima", "2時半|nijihan", "です|desu"],
          extra: ["何時|nanji", "午前|gozen"],
          hint: "Gunakan 半 (han) untuk lewat 30 menit.",
          explain: "[[今 2時半です|ima nijihan desu]] = Sekarang jam setengah 3.",
        },
        {
          type: "mc",
          prompt: "Lengkapi pertanyaan: 「休みは ＿＿＿＿＿ですか。」 (Hari apa)",
          options: [
            { jp: "何曜日|nanyoubi", correct: true },
            { jp: "何時|nanji" },
            { jp: "何分|nanpun" },
          ],
          hint: "Menanyakan nama hari memakai nanyoubi.",
          explain: "[[何曜日|nanyoubi]] berarti 'hari apa'.",
        },
        {
          type: "match",
          prompt: "Cocokkan nama hari Jepang",
          pairs: [
            ["月曜日|getsuyoubi", "Senin"],
            ["水曜日|suiyoubi", "Rabu"],
            ["金曜日|kin'youbi", "Jumat"],
            ["日曜日|nichiyoubi", "Minggu"],
          ],
          explain: "Bagus sekali! Nama-nama hari mulai lekat di ingatanmu.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Fakta unik seputar nama hari dan ketepatan waktu di Jepang.",
      points: ["Asal nama hari (Planet & Elemen)", "Ketepatan waktu ekstrem Jepang", "Format 24 jam"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Nama-nama hari dalam bahasa Jepang diambil dari nama elemen alam dan tata surya.",
          answer: true,
          reveal: "<b>Fakta menakjubkan!</b> 日 (Matahari/Minggu), 月 (Bulan/Senin), 火 (Api-Mars/Selasa), 水 (Air-Merkurius/Rabu), 木 (Kayu-Jupiter/Kamis), 金 (Emas-Venus/Jumat), 土 (Tanah-Saturnus/Sabtu). Sangat puitis dan keren!",
        },
        {
          type: "fact",
          kicker: "Budaya Disiplin",
          title: "Gofun-mae Koudou: Datang 5 Menit Lebih Awal",
          art: "[[時間|jikan]]",
          body: "Di Jepang ada konsep <i>5-fun mae koudou</i> (5分前行動). Jika janji bertemu jam 09.00, orang Jepang menganggap kamu sudah harus tiba di lokasi paling lambat jam 08.55. Tiba tepat jam 09.00 justru sudah dianggap mepet atau sedikit terlambat!",
        },
        {
          type: "fact",
          kicker: "Jadwal Kereta",
          title: "Surat Keterangan Terlambat (Chien-shou)",
          art: "[[遅延証明書|chien shoumeisho]]",
          body: "Jika kereta di Jepang terlambat bahkan hanya 5 menit karena kendala teknis, petugas stasiun akan membagikan lembar resmi <i>Chien Shoumeisho</i> agar siswa atau karyawan bisa menunjukkan bukti resmi ke sekolah/kantor bahwa mereka tidak sengaja telat.",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Challenge",
      icon: "crown",
      intro: "Boss Stage 4-1! Buktikan kecepatanmu membaca jam dan nama hari.",
      points: [
        "Kamu punya 3 nyawa.",
        "Soal membaca waktu AM/PM dan hari.",
        "Lulus = Buka jalur ke Stage 4-2!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Pilih kalimat yang artinya “Sekarang pukul 9 pagi.”",
          options: [
            { jp: ["今|ima", "午前|gozen", "9時|kuji", "です。|desu."], correct: true },
            { jp: ["今|ima", "午後|gogo", "9時|kuji", "です。|desu."] },
            { jp: ["今|ima", "午前|gozen", "9時半|kujihan", "です。|desu."] },
          ],
          explain: "Pagi (AM) = [[午前|gozen]], dan pukul 9 = [[9時|kuji]].",
        },
        {
          type: "wordbank",
          prompt: "Hari libur adalah hari Sabtu dan hari Minggu.",
          answer: ["休み|yasumi", "は|wa", "土曜日|doyoubi", "と|to", "日曜日|nichiyoubi", "です|desu"],
          extra: ["金曜日|kin'youbi", "月曜日|getsuyoubi"],
          explain: "Menghubungkan dua kata benda setara memakai partikel [[と|to]].",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["今|ima", "午後|gogo", "4時|yoji", "です。|desu."], claim: "Sekarang jam 4 pagi." },
          answer: false,
          explain: "Salah! [[午後|gogo]] berarti siang/sore/malam (PM), jadi jam 4 sore.",
        },
        {
          type: "listen",
          prompt: "Dengarkan, pukul berapa yang diucapkan?",
          audio: ["今|ima", "7時|shichiji", "半|han", "です。|desu."],
          options: [
            { text: "Pukul 07.30 (Setengah 8)", correct: true },
            { text: "Pukul 08.30" },
            { text: "Pukul 07.10" },
          ],
          explain: "Terdengar [[7時半|shichijihan]] yang berarti pukul 07.30.",
        },
        {
          type: "match",
          prompt: "Cocokkan secepat mungkin!",
          pairs: [
            ["午前|gozen", "pagi (AM)"],
            ["午後|gogo", "siang/malam (PM)"],
            ["何曜日|nanyoubi", "hari apa"],
            ["半|han", "setengah jam (30 mnt)"],
          ],
          explain: "Hebat! Boss Stage 4-1 berhasil ditaklukkan!",
        },
      ],
    },
  ],
};

const STAGE_4_2 = {
  id: "s4_2",
  label: "Stage 4-2",
  title: "Rutinitas & Jam Kerja",
  sub: "ます・ません・ました / から〜まで / に",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Fundamental & Tujuan",
      icon: "book",
      intro: "Kuasai kata kerja bahasa Jepang dalam 4 bentuk waktu, partikel waktu spesifik に, dan rentang waktu から〜まで!",
      points: [
        "4 Bentuk kata kerja: [[〜ます|~masu]], [[〜ません|~masen]], [[〜ました|~mashita]], [[〜ませんでした|~masen deshita]]",
        "Partikel waktu spesifik: Jam [[に|ni]] + Kata Kerja",
        "Rentang waktu: Jam [[から|kara]] Jam [[まで|made]]",
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar ini?",
          body: "Sekarang kamu bisa menceritakan kegiatan harianmu: <i>'Setiap pagi saya bangun jam 6'</i>, <i>'Kemarin saya belajar'</i>, atau <i>'Saya bekerja dari jam 9 sampai jam 5'</i>.",
          examples: [
            { jp: ["毎朝|maiasa", "6時|rokuji", "に|ni", "起きます。|okimasu."], id: "Setiap pagi saya bangun jam 6." },
            { jp: ["きのう|kinou", "勉強しました。|benkyoushimashita."], id: "Kemarin saya belajar." },
          ],
        },
        {
          type: "concept",
          title: "Tabel Konjugasi 4 Bentuk Kata Kerja",
          body: "Kata kerja bahasa Jepang tidak berubah karena subjek orang, melainkan berubah berdasarkan **waktu (lampau / non-lampau)** dan **sifat (positif / negatif)**:",
          points: [
            "**Non-lampau Positif:** [[起きます|okimasu]] *(bangun)*",
            "**Non-lampau Negatif:** [[起きません|okimasen]] *(tidak bangun)*",
            "**Lampau Positif:** [[起きました|okimashita]] *(tadi/kemarin sudah bangun)*",
            "**Lampau Negatif:** [[起きませんでした|okimasen deshita]] *(tadi/kemarin tidak bangun)*",
          ],
          examples: [
            { jp: ["きのう|kinou", "勉強しました|benkyoushimashita", "か。|ka."], id: "Apakah kemarin kamu belajar?" },
            { jp: ["いいえ、|iie,", "勉強しませんでした。|benkyoushimasen deshita."], id: "Tidak, kemarin saya tidak belajar." },
          ],
        },
        {
          type: "concept",
          title: "Partikel Waktu に: Wajib vs Dilarang!",
          body: "Partikel **[[に|ni]]** menandai waktu spesifik dilakukannya suatu tindakan:",
          points: [
            "**WAJIB pakai に:** Waktu yang menggunakan angka (contoh: [[6時に 起きます|rokuji ni okimasu]], [[7月2日に|shichigatsu futsuka ni]]).",
            "**BOLEH pakai / tidak:** Nama hari (contoh: 日曜日[に]).",
            "**DILARANG pakai に:** Waktu relatif tanpa angka! (salah: <i>kinou ni</i> ❌, benar: [[きのう 勉強しました|kinou benkyoushimashita]] ✔️. Juga: きょう, あした, 毎朝, 毎日, いつ).",
          ],
          examples: [
            { jp: ["朝|asa", "6時|rokuji", "に|ni", "起きます。|okimasu."], id: "Saya bangun jam 6 pagi." },
          ],
        },
        {
          type: "concept",
          title: "Dari 〜 Sampai 〜: から 〜 まで",
          body: "Menyatakan titik awal dan titik akhir waktu (atau tempat):",
          formula: [
            { text: "Waktu Awal", note: "N1", kind: "topic" },
            { jp: "から|kara", note: "dari", kind: "particle" },
            { text: "Waktu Akhir", note: "N2", kind: "pred" },
            { jp: "まで|made", note: "sampai", kind: "particle" },
          ],
          examples: [
            { jp: ["9時|kuji", "から|kara", "5時|goji", "まで|made", "働きます。|hatarakimasu."], id: "Saya bekerja dari jam 9 sampai jam 5." },
            { jp: ["銀行|ginkou", "は|wa", "9時|kuji", "から|kara", "3時|sanji", "まで|made", "です。|desu."], id: "Bank buka dari jam 9 sampai jam 3." },
          ],
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 4-2",
          body: "Ketuk kartunya untuk mendengarkan pelafalan kata kerja harian.",
          items: [
            { jp: "起きます|okimasu", id: "bangun tidur" },
            { jp: "寝ます|nemasu", id: "tidur / pergi tidur" },
            { jp: "働きます|hatarakimasu", id: "bekerja" },
            { jp: "勉強します|benkyoushimasu", id: "belajar" },
            { jp: "休みます|yasumimasu", id: "beristirahat / libur" },
            { jp: "終わります|owarimasu", id: "selesai / berakhir" },
            { jp: "毎朝|maiasa", id: "setiap pagi" },
            { jp: "大変ですね|taihen desu ne", id: "berat / capek ya (simpati)" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Yuk kita latih konjugasi kata kerja dan partikel waktu.",
      points: ["Bentuk lampau", "Susun jam kerja", "Partikel に yang tepat"],
      steps: [
        {
          type: "mc",
          prompt: "Manakah bentuk lampau negatif untuk 'tidak belajar kemarin'?",
          options: [
            { jp: "勉強しませんでした|benkyoushimasen deshita", correct: true },
            { jp: "勉強しました|benkyoushimashita" },
            { jp: "勉強しません|benkyoushimasen" },
          ],
          hint: "Bentuk negatif lampau berakhiran -masen deshita.",
          explain: "[[勉強しませんでした|benkyoushimasen deshita]] = (tadi/kemarin) tidak belajar.",
        },
        {
          type: "wordbank",
          prompt: "Saya bekerja dari jam 9 sampai jam 5.",
          answer: ["9時|kuji", "から|kara", "5時|goji", "まで|made", "働きます|hatarakimasu"],
          extra: ["起きます|okimasu", "に|ni"],
          hint: "Pola: Jam + から + Jam + まで + 働きます.",
          explain: "[[9時から 5時まで 働きます|kuji kara goji made hatarakimasu]].",
        },
        {
          type: "mc",
          prompt: "Manakah kalimat yang menggunakan partikel に secara BENAR?",
          options: [
            { jp: ["6時半|rokujihan", "に|ni", "起きます。|okimasu."], correct: true },
            { jp: ["きのう|kinou", "に|ni", "勉強しました。|benkyoushimashita."] },
            { jp: ["毎朝|maiasa", "に|ni", "新聞を 読みます。|shinbun o yomimasu."] },
          ],
          hint: "Hanya waktu berangka yang boleh memakai に.",
          explain: "Waktu berangka seperti 6時半 wajib memakai partikel [[に|ni]]. Kinou dan maiasa dilarang memakai に.",
        },
        {
          type: "match",
          prompt: "Cocokkan kata kerja yang berlawanan arti",
          pairs: [
            ["起きます|okimasu", "bangun"],
            ["寝ます|nemasu", "tidur"],
            ["働きます|hatarakimasu", "bekerja"],
            ["休みます|yasumimasu", "beristirahat / libur"],
          ],
          explain: "Bagus sekali! Konjugasi kata kerja sudah kamu kuasai.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Fakta kebiasaan pagi dan senam nasional di Jepang.",
      points: ["Senam Radio Taisou", "Jam tidur orang Jepang", "Kios stasiun"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Di musim panas, anak-anak sekolah dasar di Jepang berkumpul jam 6.30 pagi di taman untuk senam bersama.",
          answer: true,
          reveal: "<b>Fakta legendaris!</b> Ini tradisi <i>Radio Taisou</i> (ラジオ体操). Selama liburan musim panas, anak-anak bangun pagi dan senam diiringi siaran radio NHK, lalu mendapatkan cap stempel kehadiran untuk ditukar hadiah!",
        },
        {
          type: "fact",
          kicker: "Rutinitas Malam",
          title: "Kenapa Orang Jepang Sering Tidur di Kereta?",
          art: "[[居眠り|inemuri]]",
          body: "Di Jepang ada istilah <i>Inemuri</i> (居眠り), yaitu tidur sejenak di ruang publik atau kereta. Ini bukan tanda malas, melainkan dianggap sebagai bukti bahwa orang tersebut telah bekerja atau belajar sangat keras seharian penuh!",
        },
        {
          type: "fact",
          kicker: "Gaya Hidup",
          title: "Konbini 24 Jam: Penyelamat Karyawan",
          art: "[[コンビニ|konbini]]",
          body: "Berbeda dari kantor pos dan bank yang tutup sore hari (jam 15.00-17.00), ribuan <i>Konbini</i> (convenience store) di Jepang buka nonstop 24 jam sehari, 365 hari setahun untuk menyediakan makanan hangat dan pembayaran tagihan.",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Akhir Bab 4",
      icon: "crown",
      intro: "Ujian Pamungkas Bab 4! Taklukkan Boss ini untuk membuka gerbang petualangan ke Bab 5.",
      points: [
        "Kamu punya 3 nyawa.",
        "Ujian mencakup jam, konjugasi kata kerja, dan partikel に/から/まで.",
        "Lulus = Gerbang Bab 5 terbuka!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Seseorang bertanya: 「きのう 勉強しましたか。」 Jika kamu belajar kemarin, apa jawaban yang benar?",
          options: [
            { jp: ["はい、|hai,", "勉強しました。|benkyoushimashita."], correct: true },
            { jp: ["はい、|hai,", "そうです。|sou desu."] },
            { jp: ["いいえ、|iie,", "勉強しました。|benkyoushimashita."] },
          ],
          explain: "Pertanyaan kata kerja dijawab dengan mengulang kata kerjanya, bukan dengan そうです.",
        },
        {
          type: "wordbank",
          prompt: "Setiap pagi saya bangun pada jam 6.",
          answer: ["毎朝|maiasa", "6時|rokuji", "に|ni", "起きます|okimasu"],
          extra: ["から|kara", "寝ます|nemasu"],
          explain: "[[毎朝 6時に 起きます|maiasa rokuji ni okimasu]].",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["きのう|kinou", "に|ni", "働きました。|hatarakimashita."], claim: "Kemarin saya bekerja." },
          answer: false,
          explain: "Salah secara tata bahasa! Kata keterangan waktu [[きのう|kinou]] tidak boleh diikuti partikel に.",
        },
        {
          type: "listen",
          prompt: "Dengarkan, sampai jam berapa pembicara belajar?",
          audio: ["毎晩|maiban", "11時|juuichiji", "まで|made", "勉強します。|benkyoushimasu."],
          options: [
            { text: "Sampai jam 11 malam", correct: true },
            { text: "Sampai jam 10 malam" },
            { text: "Mulai jam 11 malam" },
          ],
          explain: "Terdengar [[11時まで|juuichiji made]] yang artinya sampai jam 11.",
        },
        {
          type: "match",
          prompt: "Tantangan Terakhir Bab 4: Cocokkan semuanya!",
          pairs: [
            ["〜から|~kara", "dari (waktu awal)"],
            ["〜まで|~made", "sampai (waktu akhir)"],
            ["起きます|okimasu", "bangun"],
            ["勉強しました|benkyoushimashita", "sudah belajar (lampau)"],
          ],
          explain: "SEMPURNA! Seluruh materi Bab 4 resmi kamu tuntaskan!",
        },
      ],
    },
  ],
};

window.BAB4 = {
  unit: {
    label: "Bab 4",
    title: "今 何時ですか|ima nanji desu ka",
    sub: "Waktu, hari, rutinitas & kata kerja",
  },
  stats: { streak: 6, xp: 620 },

  nodes: [
    { id: "s4_1", label: "Stage 4-1", title: "Waktu & Hari", sub: "〜時〜分 / 曜日", state: "locked", stage: true, playable: true },
    { id: "s4_2", label: "Stage 4-2", title: "Rutinitas & Jam Kerja", sub: "ます・から〜まで", state: "locked", stage: true, playable: true },
  ],

  stages: {
    s4_1: STAGE_4_1,
    s4_2: STAGE_4_2,
  },
};

