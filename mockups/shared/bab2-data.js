/* Materi mockup: Bab 2 Lengkap (Stage 2-1, 2-2, dan 2-3).
 * Acuan struktur: Minna no Nihongo I Bab 2 — diadaptasi ke konteks sekolah & kehidupan sehari-hari anak muda.
 *
 * Format teks Jepang: "kana|romaji". Kanji + furigana: "{本|ほん}|hon".
 * Satu kalimat = array segmen. Di teks penjelasan, [[これ|kore+は|wa]] dirender sebagai teks Jepang inline.
 */

const STAGE_2_1 = {
  id: "s2_1",
  label: "Stage 2-1",
  title: "Ini dan Itu",
  sub: "これ・それ・あれ",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Fundamental & Tujuan",
      icon: "book",
      intro: "Belajar menunjuk benda di sekitarmu! Kata tunjuk dalam bahasa Jepang sangat praktis dan terbagi rapi berdasarkan jarak.",
      points: [
        "Jarak benda: [[これ|kore]] (ini), [[それ|sore]] (itu), [[あれ|are]] (itu jauh)",
        "Tanya benda: [[これは 何ですか|kore wa nan desu ka]]",
        "Konfirmasi: [[そうです|sou desu]] (ya betul) & [[違います|chigaimasu]] (bukan)",
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar ini?",
          body: "Di ruang kelas atau perpustakaan, kamu sering menunjuk barang dan bertanya: <i>“Ini apa?”, “Apakah itu kamus bahasa Jepang?”</i>. Di stage ini kamu akan bisa menunjuk benda apa pun dengan tepat!",
          examples: [
            { jp: ["これ|kore", "は|wa", "じしょ|jisho", "です。|desu."], id: "Ini adalah kamus." },
            { jp: ["あれ|are", "は|wa", "何ですか。|nan desu ka."], id: "Apakah itu yang di sebelah sana?" },
          ],
        },
        {
          type: "concept",
          title: "Rumus Jarak Benda: これ・それ・あれ",
          body: "Bahasa Jepang membagi kata tunjuk benda berdasarkan posisinya terhadap pembicara dan lawan bicara:",
          points: [
            "[[これ|kore]]: Benda dekat dengan <b>pembicara</b> (Ini).",
            "[[それ|sore]]: Benda dekat dengan <b>lawan bicara</b> (Itu).",
            "[[あれ|are]]: Benda jauh dari <b>keduanya</b> (Itu di sebelah sana).",
          ],
          examples: [
            { jp: ["それ|sore", "は|wa", "ノート|nooto", "です。|desu."], id: "Itu adalah buku catatan." },
            { jp: ["あれ|are", "は|wa", "とけい|tokei", "です。|desu."], id: "Itu (di sana) adalah jam dinding." },
          ],
          tip: "Kata [[これ|kore]], [[それ|sore]], [[あれ|are]] berdiri sendiri sebagai kata benda (bisa langsung ditempel [[は|wa]]).",
        },
        {
          type: "concept",
          title: "Menanyakan Benda: 〜は 何ですか",
          body: "Untuk menanyakan nama suatu benda, gunakan kata tanya **[[何|nan]]** (apa):",
          formula: [
            { jp: "これ / それ / あれ", note: "kata tunjuk", kind: "topic" },
            { jp: "は|wa", note: "penanda topik", kind: "particle" },
            { jp: "何|nan", note: "apa", kind: "pred" },
            { jp: "ですか|desu ka", note: "tanda tanya", kind: "copula" },
          ],
          examples: [
            { jp: ["これ|kore", "は|wa", "何ですか。|nan desu ka."], id: "Ini benda apa?" },
            { jp: ["めいし|meishi", "です。|desu."], id: "(Ini) kartu nama." },
          ],
        },
        {
          type: "concept",
          title: "Menjawab Konfirmasi: そうです & 違います",
          body: "Saat ditanya apakah suatu benda adalah X (misal: <i>'Apakah itu kamus?'</i>):",
          points: [
            "Jika BENAR: [[はい、そうです。|hai, sou desu.]] <i>(Ya, betul begitu.)</i>",
            "Jika BUKAN: [[いいえ、違います。|iie, chigaimasu.]] <i>(Bukan, keliru.)</i> atau [[いいえ、そうじゃ ありません。|iie, sou ja arimasen.]]",
          ],
          examples: [
            { jp: ["それ|sore", "は|wa", "テレホンカード|terehonkaado", "ですか。|desu ka."], id: "Apakah itu kartu telepon?" },
            { jp: ["はい、|hai,", "そう|sou", "です。|desu."], id: "Ya, betul begitu." },
          ],
          tip: "Kata kerja [[違います|chigaimasu]] artinya 'berbeda/keliru' dan sangat lazim dipakai sehari-hari untuk menyangkal tebakan orang.",
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 2-1",
          body: "Ketuk kartunya untuk mendengarkan pelafalan bahasa Jepang.",
          items: [
            { jp: "これ|kore", id: "ini (dekat saya)" },
            { jp: "それ|sore", id: "itu (dekat kamu)" },
            { jp: "あれ|are", id: "itu (jauh dari kita)" },
            { jp: "ほん|hon", id: "buku" },
            { jp: "じしょ|jisho", id: "kamus" },
            { jp: "えんぴつ|enpitsu", id: "pensil" },
            { jp: "かさ|kasa", id: "payung" },
            { jp: "とけい|tokei", id: "jam / arloji" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Ayo latih penggunaan kata tunjuk dan benda di sekitarmu.",
      points: ["Menentukan jarak benda", "Susun kalimat penunjuk", "Menjawab betul/keliru"],
      steps: [
        {
          type: "mc",
          prompt: "Benda berada di dekat teman bicaramu. Kata tunjuk mana yang dipakai?",
          options: [
            { jp: "それ|sore", correct: true },
            { jp: "これ|kore" },
            { jp: "あれ|are" },
          ],
          hint: "Dekat pembicara = kore, dekat lawan bicara = sore, jauh = are.",
          explain: "[[それ|sore]] digunakan khusus untuk benda yang dekat dengan lawan bicara.",
        },
        {
          type: "wordbank",
          prompt: "Ini adalah kamus.",
          answer: ["これ|kore", "は|wa", "じしょ|jisho", "です|desu"],
          extra: ["それ|sore", "ほん|hon"],
          hint: "Mulai dari [[これ|kore]] lalu partikel [[は|wa]].",
          explain: "[[これ|kore+は|wa+じしょ|jisho+です|desu]] = Ini adalah kamus.",
        },
        {
          type: "mc",
          prompt: "Lengkapi jawaban sanggahan: 「それは ノートですか。」 (Bukan, keliru)",
          jp: ["いいえ、|iie,", "＿＿＿＿＿。|_____."],
          trans: "Bukan, keliru.",
          speak: false,
          options: [
            { jp: "違います|chigaimasu", correct: true },
            { jp: "そうです|sou desu" },
            { jp: "でした|deshita" },
          ],
          hint: "Kata yang berarti 'keliru/bukan'.",
          explain: "[[違います|chigaimasu]] artinya 'keliru/bukan begitu'.",
        },
        {
          type: "match",
          prompt: "Cocokkan kata benda dan artinya",
          pairs: [
            ["ほん|hon", "buku"],
            ["じしょ|jisho", "kamus"],
            ["かさ|kasa", "payung"],
            ["とけい|tokei", "jam / arloji"],
          ],
          explain: "Mantap! Kosakata benda sehari-hari sudah kamu kuasai.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Fakta etika penting seputar menunjuk benda dan kartu nama di Jepang.",
      points: ["Pantangan menunjuk orang", "Budaya tukar kartu nama", "Kamus saku di Jepang"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Boleh menunjuk seseorang yang berada di dekat kita dengan kata 「これ」 atau 「あれ」.",
          answer: false,
          reveal: "<b>Mitos besar & pantangan!</b> Kata [[これ|kore]], [[それ|sore]], [[あれ|are]] HANYA boleh dipakai untuk benda mati atau binatang. Menunjuk orang dengan kata itu dianggap sangat kasar! Untuk orang, gunakan kata sopan: [[こちら|kochira]] atau [[あの方|ano kata]].",
        },
        {
          type: "fact",
          kicker: "Etika Bisnis & Sosial",
          title: "Meishi Koukan: Ritual Kartu Nama",
          art: "[[名刺|meishi]]",
          body: "Di Jepang, kartu nama ([[名刺|meishi]]) dianggap sebagai representasi diri seseorang. Selalu serahkan dan terima kartu nama dengan <b>kedua tangan</b> sambil membungkuk sopan, dan jangan langsung dimasukkan ke saku celana!",
        },
        {
          type: "fact",
          kicker: "Dunia Sekolah",
          title: "Denshi Jisho: Senjata Pelajar Jepang",
          art: "[[電子辞書|denshi jisho]]",
          body: "Hampir semua pelajar SMP-SMA di Jepang memiliki kamus elektronik saku (電子辞書). Di dalamnya terdapat puluhan kamus kanji, bahasa Inggris, dan sains dalam satu alat mini tanpa koneksi internet.",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Challenge",
      icon: "crown",
      intro: "Ujian Stage 2-1! Tunjukkan keahlianmu menunjuk benda dan menjawab konfirmasi.",
      points: [
        "Kamu punya 3 nyawa. Salah jawab = HP berkurang.",
        "Jawab dalam 15 detik untuk meraih Bonus Kilat.",
        "Lulus = Buka jalur ke Stage 2-2!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Pilih kalimat yang artinya “Apakah itu (di sana) payung?”",
          options: [
            { jp: ["あれ|are", "は|wa", "かさ|kasa", "ですか。|desu ka."], correct: true },
            { jp: ["これ|kore", "は|wa", "かさ|kasa", "ですか。|desu ka."] },
            { jp: ["それ|sore", "は|wa", "かぎ|kagi", "ですか。|desu ka."] },
          ],
          explain: "Jauh di sana = [[あれ|are]], dan payung = [[かさ|kasa]].",
        },
        {
          type: "wordbank",
          prompt: "Apakah ini kartu nama?",
          answer: ["これ|kore", "は|wa", "めいし|meishi", "ですか|desu ka"],
          extra: ["あれ|are", "手帳|techou"],
          explain: "[[これ|kore+は|wa+めいし|meishi+ですか|desu ka]].",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["これ|kore", "は|wa", "ほん|hon", "です。|desu."], claim: "Ini adalah kamus." },
          answer: false,
          explain: "Salah! [[ほん|hon]] artinya buku. Kamus dalam bahasa Jepang adalah [[じしょ|jisho]].",
        },
        {
          type: "listen",
          prompt: "Dengarkan, benda apakah yang dimaksud?",
          audio: ["あれ|are", "は|wa", "とけい|tokei", "です。|desu."],
          options: [
            { text: "Jam / Arloji", correct: true },
            { text: "Kunci" },
            { text: "Buku catatan" },
          ],
          explain: "Terdengar kata [[とけい|tokei]] yang berarti jam/arloji.",
        },
        {
          type: "match",
          prompt: "Cocokkan secepat mungkin!",
          pairs: [
            ["これ|kore", "ini (dekat saya)"],
            ["それ|sore", "itu (dekat kamu)"],
            ["あれ|are", "itu (jauh di sana)"],
            ["何|nan", "apa"],
          ],
          explain: "Keren! Boss Stage 2-1 berhasil kamu tumbangkan!",
        },
      ],
    },
  ],
};

const STAGE_2_2 = {
  id: "s2_2",
  label: "Stage 2-2",
  title: "Benda Ini & Pilihan",
  sub: "この・その・あの / S1かS2か",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Fundamental & Tujuan",
      icon: "book",
      intro: "Bedakan antara 'ini buku' dengan 'buku ini', dan pelajari cara bertanya pilihan (Apakah A atau B?).",
      points: [
        "Pola kata sifat tunjuk: [[この N|kono N]], [[その N|sono N]], [[あの N|ano N]]",
        "Pertanyaan pilihan: S1 [[ですか|desu ka]]、S2 [[ですか|desu ka]]",
        "Menjawab pertanyaan pilihan tanpa [[はい|hai]] / [[いいえ|iie]]",
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar ini?",
          body: "Kalau sebelumnya kamu bilang <i>'Ini adalah buku'</i> (これ), sekarang kamu bisa lebih spesifik menunjuk barang: <i>'Buku ini milik siapa?'</i> atau <i>'Apakah ini angka 7 atau 9?'</i>.",
          examples: [
            { jp: ["この|kono", "ほん|hon", "は|wa", "わたし|watashi", "の|no", "です。|desu."], id: "Buku ini adalah milik saya." },
            { jp: ["これ|kore", "は|wa", "「９」|'9'", "ですか、|desu ka,", "「７」|'7'", "ですか。|desu ka."], id: "Ini angka 9 atau 7?" },
          ],
        },
        {
          type: "concept",
          title: "Perbedaan これ vs この N",
          body: "Hati-hati, ini sering bikin bingung pemula:",
          points: [
            "**[[これ|kore]] / [[それ|sore]] / [[あれ|are]]:** Berdiri sendiri sebagai kata benda. Tidak boleh langsung ditempel kata benda lain (salah: <i>kore hon</i> ❌).",
            "**[[この|kono]] / [[その|sono]] / [[あの|ano]]:** Kata penunjuk yang **WAJIB** langsung menempel di depan kata benda (contoh: [[この 本|kono hon]] = buku ini ✔️).",
          ],
          formula: [
            { jp: "この / その / あの", note: "penunjuk", kind: "topic" },
            { text: "Kata Benda (N)", note: "benda", kind: "pred" },
            { jp: "は|wa", note: "topik", kind: "particle" },
          ],
          examples: [
            { jp: ["この|kono", "かばん|kaban", "は|wa", "あなた|anata", "の|no", "ですか。|desu ka."], id: "Apakah tas ini milik Anda?" },
            { jp: ["あの|ano", "かた|kata", "は|wa", "どなた|donata", "ですか。|desu ka."], id: "Siapakah orang di sebelah sana itu?" },
          ],
        },
        {
          type: "concept",
          title: "Pertanyaan Pilihan: S1 か、S2 か",
          body: "Ketika kamu ingin memberi pilihan antara dua hal kepada lawan bicara:",
          formula: [
            { text: "Pilihan 1", note: "S1", kind: "topic" },
            { jp: "ですか|desu ka", note: "apakah...", kind: "particle" },
            { text: "Pilihan 2", note: "S2", kind: "pred" },
            { jp: "ですか|desu ka", note: "...atau?", kind: "copula" },
          ],
          examples: [
            { jp: ["これ|kore", "は|wa", "シャープペンシル|shaapupenshiru", "ですか、|desu ka,", "ボールペン|boorupen", "ですか。|desu ka."], id: "Ini pensil mekanik atau bolpoin?" },
            { jp: ["ボールペン|boorupen", "です。|desu."], id: "(Itu) bolpoin." },
          ],
          tip: "<b>Aturan Emas:</b> Pertanyaan pilihan langsung dijawab dengan menyebutkan benda pilihannya. <b>JANGAN</b> dijawab dengan はい atau いいえ!",
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 2-2",
          body: "Ketuk kartunya untuk mendengarkan pelafalan kosakata teknologi & peralatan.",
          items: [
            { jp: "この|kono", id: "~ ini (menempel di benda)" },
            { jp: "その|sono", id: "~ itu (menempel di benda)" },
            { jp: "あの|ano", id: "~ itu jauh (menempel di benda)" },
            { jp: "かばん|kaban", id: "tas" },
            { jp: "つくえ|tsukue", id: "meja" },
            { jp: "カメラ|kamera", id: "kamera" },
            { jp: "コンピューター|konpyuutaa", id: "komputer" },
            { jp: "じどうしゃ|jidousha", id: "mobil / otomotif" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Yuk kita latih penggunaan 'kono/sono/ano' dan pertanyaan pilihan ganda.",
      points: ["Memilih kono vs kore", "Susun kata benda spesifik", "Menjawab pertanyaan alternatif"],
      steps: [
        {
          type: "mc",
          prompt: "Lengkapi kalimat: 「＿＿＿ 傘は わたしのです。」 (Payung ini)",
          options: [
            { jp: "この|kono", correct: true },
            { jp: "これ|kore" },
            { jp: "ここ|koko" },
          ],
          hint: "Sebelum kata benda (傘) gunakan kono, bukan kore.",
          explain: "Karena ada kata benda [[傘|kasa]] setelahnya, wajib memakai [[この|kono]].",
        },
        {
          type: "wordbank",
          prompt: "Mobil itu (dekat kamu) adalah mobil buatan Jepang.",
          answer: ["その|sono", "車|kuruma", "は|wa", "日本|nihon", "の|no", "車|kuruma", "です|desu"],
          extra: ["それ|sore", "この|kono"],
          hint: "Mulai dari [[その 車|sono kuruma]].",
          explain: "[[その 車は 日本の 車です|sono kuruma wa nihon no kuruma desu]].",
        },
        {
          type: "mc",
          prompt: "Bagaimana cara menjawab yang tepat untuk pertanyaan: 「これは 『９』ですか、『７』ですか。」",
          options: [
            { text: "「９」です。", correct: true },
            { text: "はい、そうです。" },
            { text: "いいえ、違います。" },
          ],
          hint: "Pertanyaan pilihan tidak dijawab dengan 'ya' atau 'tidak'.",
          explain: "Pertanyaan alternatif (S1か、S2か) dijawab langsung dengan menyebutkan pilihannya.",
        },
        {
          type: "match",
          prompt: "Cocokkan kata benda teknologi dan artinya",
          pairs: [
            ["カメラ|kamera", "kamera"],
            ["コンピューター|konpyuutaa", "komputer"],
            ["じどうしゃ|jidousha", "mobil"],
            ["つくえ|tsukue", "meja"],
          ],
          explain: "Hebat! Kamu bisa membedakan kore dan kono dengan sangat baik.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Fakta unik seputar angka dan bahasa isyarat di Jepang.",
      points: ["Angka 7 di Jepang", "Kenapa pensil mekanik disebut sharp pencil?", "Tanda 'O' dan 'X' Jepang"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Di Jepang, jawaban pertanyaan pilihan boleh diawali dengan kata 「はい」.",
          answer: false,
          reveal: "<b>Mitos!</b> Menjawab pertanyaan pilihan dengan 'Hai' akan membuat lawan bicara bingung ('Ya yang mana?!'). Selalu sebutkan langsung pilihan yang dimaksud.",
        },
        {
          type: "fact",
          kicker: "Asal-Usul Kata",
          title: "Kenapa Pensil Mekanik Disebut Sharp Pencil?",
          art: "[[シャープペンシル|shaapu penshiru]]",
          body: "Di Jepang, pensil mekanik disebut <i>shaapu penshiru</i> (sering disingkat <i>shaapen</i>). Nama ini berasal dari merek dagang 'Ever-Ready Sharp Pencil' yang diciptakan oleh Tokuji Hayakawa pada tahun 1915, pendiri perusahaan elektronik raksasa Sharp Corporation!",
        },
        {
          type: "fact",
          kicker: "Simbol Jepang",
          title: "Lingkaran Maru (○) dan Silang Batsu (×)",
          art: "○ vs ×",
          body: "Di sekolah Jepang, guru menandai jawaban BENAR dengan lingkaran bulat (<b>丸 - maru</b>), bukan tanda centang (✓). Tanda centang di Jepang justru sering dipakai untuk menandai kesalahan atau hal yang perlu diperiksa ulang!",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Challenge",
      icon: "crown",
      intro: "Boss Stage 2-2 menunggumu! Uji kemampuanmu membedakan kata tunjuk benda.",
      points: [
        "Kamu punya 3 nyawa.",
        "Pertanyaan pilihan & penunjuk benda presisi.",
        "Taklukkan Boss untuk membuka Stage 2-3!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Pilih kalimat yang benar untuk “Buku ini adalah buku catatan.”",
          options: [
            { jp: ["この|kono", "本|hon", "は|wa", "ノート|nooto", "です。|desu."], correct: true },
            { jp: ["これ|kore", "本|hon", "は|wa", "ノート|nooto", "です。|desu."] },
            { jp: ["この|kono", "は|wa", "ノート|nooto", "です。|desu."] },
          ],
          explain: "Sebelum kata benda wajib memakai [[この|kono]], bukan [[これ|kore]].",
        },
        {
          type: "wordbank",
          prompt: "Ini adalah komputer atau televisi?",
          answer: ["これ|kore", "は|wa", "コンピューター|konpyuutaa", "ですか、|desu ka,", "テレビ|terebi", "ですか|desu ka"],
          extra: ["この|kono", "じゃ ありません|ja arimasen"],
          explain: "Pola S1 か、S2 か: [[これ は コンピューター ですか、テレビ ですか|kore wa konpyuutaa desu ka, terebi desu ka]].",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["あの|ano", "方|kata", "は|wa", "どなた|donata", "ですか。|desu ka."], claim: "Siapakah orang di sebelah sana itu?" },
          answer: true,
          explain: "Benar! [[あの 方|ano kata]] digunakan untuk menunjuk orang yang posisinya jauh secara sopan.",
        },
        {
          type: "listen",
          prompt: "Dengarkan, benda apakah yang sedang ditunjuk?",
          audio: ["その|sono", "カメラ|kamera", "は|wa", "わたし|watashi", "の|no", "です。|desu."],
          options: [
            { text: "Kamera", correct: true },
            { text: "Komputer" },
            { text: "Televisi" },
          ],
          explain: "Terdengar frasa [[その カメラ|sono kamera]] (kamera itu).",
        },
        {
          type: "match",
          prompt: "Cocokkan pasangan berikut!",
          pairs: [
            ["この|kono", "~ ini (di depan benda)"],
            ["その|sono", "~ itu (di depan benda)"],
            ["あの|ano", "~ itu jauh (di depan benda)"],
            ["かばん|kaban", "tas"],
          ],
          explain: "Luar biasa! Stage 2-2 selesai dengan sempurna!",
        },
      ],
    },
  ],
};

const STAGE_2_3 = {
  id: "s2_3",
  label: "Stage 2-3",
  title: "Milik Siapa & Hadiah",
  sub: "の [kepemilikan] / ほんの気持ち",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Fundamental & Tujuan",
      icon: "book",
      intro: "Kuasai kepemilikan benda ('milik siapa?'), cara menyingkat kalimat, dan etika memberi bingkisan bertetangga.",
      points: [
        "Partikel [[の|no]]: menjelaskan isi buku/majalah & kepemilikan",
        "Menyingkat: [[わたしのです|watashi no desu]] (milik saya)",
        "Salam bingkisan: [[ほんの 気持ちです|hon no kimochi desu]]",
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar ini?",
          body: "Saat ada barang tertinggal di kelas, kamu ingin tanya: <i>'Kunci ini milik siapa?'</i>. Dan saat bertamu atau pindah rumah baru, ada salam budaya sakti untuk memberikan bingkisan kue atau kopi!",
          examples: [
            { jp: ["これ|kore", "は|wa", "だれ|dare", "の|no", "かさ|kasa", "ですか。|desu ka."], id: "Ini payung milik siapa?" },
            { jp: ["わたし|watashi", "の|no", "です。|desu."], id: "Milik saya." },
          ],
        },
        {
          type: "concept",
          title: "Partikel の: Isi dan Kepemilikan",
          body: "Di Bab 2, partikel **[[の|no]]** memiliki 2 fungsi utama:",
          points: [
            "**1. Menjelaskan isi / topik benda:** [[自動車の 本|jidousha no hon]] <i>(Buku tentang otomotif/mobil)</i>.",
            "**2. Menjelaskan pemilik benda (Kepemilikan):** [[わたしの 傘|watashi no kasa]] <i>(Payung milik saya)</i>.",
          ],
          formula: [
            { text: "Pemilik / Topik", note: "N1", kind: "topic" },
            { jp: "の|no", note: "kepemilikan / topik", kind: "particle" },
            { text: "Benda", note: "N2", kind: "pred" },
          ],
          examples: [
            { jp: ["これ|kore", "は|wa", "コンピューター|konpyuutaa", "の|no", "本|hon", "です。|desu."], id: "Ini adalah buku tentang komputer." },
            { jp: ["あれ|are", "は|wa", "佐藤さん|satou-san", "の|no", "かばん|kaban", "です。|desu."], id: "Itu adalah tas milik Sdri. Sato." },
          ],
        },
        {
          type: "concept",
          title: "Menyingkat: N2 Boleh Dihapus!",
          body: "Jika bendanya sudah jelas sedang ditunjuk atau dibicarakan, kata benda kedua **boleh dihilangkan** agar kalimat lebih ringkas:",
          points: [
            "Pertanyaan: [[この 傘は あなたのですか。|kono kasa wa anata no desu ka.]] <i>(Apakah payung ini milik Anda?)</i>",
            "Jawaban: [[いいえ、わたしのでは ありません。|iie, watashi no dewa arimasen.]] <i>(Bukan, bukan milik saya.)</i>",
          ],
          tip: "<b>Pengecualian:</b> Jika N2 merujuk pada <b>manusia / profesi</b>, kata tersebut TIDAK BOLEH dihapus! (Contoh: tetap sebut <i>IMC no shain</i>, bukan <i>IMC no</i> saja).",
        },
        {
          type: "concept",
          title: "Etika Hadiah: ほんの 気持ちです",
          body: "Saat pindah rumah atau bertamu membawa buah tangan (teh/kopi/handuk), orang Jepang mengulurkan bingkisan sambil berkata:",
          points: [
            "[[あのう、これ、ほんの 気持ちです。|anou, kore, hon no kimochi desu.]] <i>(Anu, ini sekadar tanda terima kasih saya.)</i>",
            "[[どうぞ。|douzo.]] <i>(Silakan.)</i>",
            "Penerima menjawab: [[どうも ありがとうございます。|doumo arigatou gozaimasu.]]",
          ],
          examples: [
            { jp: ["これ|kore", "から|kara", "お世話|osewa", "に|ni", "なります。|narimasu."], id: "Mulai sekarang saya mengharapkan bantuan Anda." },
            { jp: ["こちら|kochira", "こそ|koso", "よろしく。|yoroshiku."], id: "Sama-sama, mohon bantuannya juga." },
          ],
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 2-3",
          body: "Ketuk kartunya untuk mendengarkan pelafalan frasa hadiah dan percakapan.",
          items: [
            { jp: "だれの|dare no", id: "milik siapa" },
            { jp: "コーヒー|koohii", id: "kopi" },
            { jp: "チョコレート|chokoreeto", id: "cokelat" },
            { jp: "ほんの 気持ちです|hon no kimochi desu", id: "sekadar tanda terima kasih" },
            { jp: "どうぞ|douzo", id: "silakan" },
            { jp: "お世話になります|osewa ni narimasu", id: "mengharapkan bantuan/bimbingan" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Yuk kita latih cara menyatakan kepemilikan dan tata krama saat bertamu.",
      points: ["Tanya milik siapa", "Menyingkat kalimat kepemilikan", "Ungkapan sopan tetangga"],
      steps: [
        {
          type: "mc",
          prompt: "Bagaimana cara menanyakan “Kunci ini milik siapa?”",
          options: [
            { jp: ["この|kono", "かぎ|kagi", "は|wa", "だれの|dare no", "ですか。|desu ka."], correct: true },
            { jp: ["この|kono", "かぎ|kagi", "は|wa", "だれ|dare", "ですか。|desu ka."] },
            { jp: ["これ|kore", "かぎ|kagi", "は|wa", "何の|nan no", "ですか。|desu ka."] },
          ],
          hint: "Gunakan だれの (milik siapa).",
          explain: "[[だれの|dare no]] berarti 'milik siapa'.",
        },
        {
          type: "wordbank",
          prompt: "Payung ini adalah milik saya.",
          answer: ["この|kono", "かさ|kasa", "は|wa", "わたし|watashi", "の|no", "です|desu"],
          extra: ["これ|kore", "じゃ ありません|ja arimasen"],
          hint: "Kata benda kedua bisa dihilangkan: わたしの です.",
          explain: "[[この かさは わたしのです|kono kasa wa watashi no desu]].",
        },
        {
          type: "wordbank",
          prompt: "Ini sekadar tanda terima kasih saya.",
          answer: ["ほんの|hon no", "きもち|kimochi", "です|desu"],
          extra: ["どうも|doumo", "お世話|osewa"],
          hint: "Ungkapan khas saat memberikan bingkisan sederhana.",
          explain: "[[ほんの 気持ちです|hon no kimochi desu]] adalah frasa sopan yang sangat terkenal di Jepang.",
        },
        {
          type: "match",
          prompt: "Cocokkan ungkapan percakapan dan artinya",
          pairs: [
            ["だれの|dare no", "milik siapa"],
            ["ほんの 気持ちです|hon no kimochi desu", "sekadar tanda terima kasih"],
            ["どうぞ|douzo", "silakan"],
            ["こちらこそ|kochira koso", "saya juga (sama-sama)"],
          ],
          explain: "Hebat! Kamu sudah siap bertamu ke rumah orang Jepang dengan sopan.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Filosofi memberi hadiah dan seni kerendahan hati orang Jepang.",
      points: ["Filosofi 'Hon no kimochi'", "Omiyage vs Temiyage", "Etika membuka kado"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Di Jepang, saat menerima kado dari seseorang, sebaiknya kado langsung dibuka dan dirobek bungkusnya di depan si pemberi saat itu juga.",
          answer: false,
          reveal: "<b>Mitos!</b> Berbeda dengan budaya Barat, di Jepang kado biasanya TIDAK langsung dibuka di depan si pemberi, kecuali jika diminta. Tujuannya agar si pemberi tidak merasa malu jika kadonya sederhana, dan menjaga perasaan semua orang.",
        },
        {
          type: "fact",
          kicker: "Filosofi Budaya",
          title: "Makna Mendalam 'Hon no Kimochi'",
          art: "[[ほんの気持ち|hon no kimochi]]",
          body: "Kata <i>hon no kimochi</i> secara harfiah berarti 'hanya secuil perasaan saya'. Orang Jepang sangat menjunjung kerendahan hati (Kenjougo). Semewah apa pun hadiahnya, mereka akan tetap menyebutnya sebagai bingkisan kecil agar pihak yang menerima tidak merasa terbebani.",
        },
        {
          type: "fact",
          kicker: "Tradisi Pindah Rumah",
          title: "Hikkoshi Soba & Handuk Tetangga",
          art: "[[引越し|hikkoshi]]",
          body: "Saat pindah rumah ke lingkungan baru, orang Jepang biasanya membagikan bingkisan sederhana ke tetangga kanan-kiri dan depan rumah (seperti handuk kecil atau mie soba) sambil menyapa: [[これから お世話になります|kore kara osewa ni narimasu]].",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Akhir Bab 2",
      icon: "crown",
      intro: "Ujian Pamungkas Bab 2! Tunjukkan bahwa kamu telah menguasai seluruh materi Bab 2 untuk membuka gerbang Bab 3.",
      points: [
        "Kamu punya 3 nyawa. Ujian mencakup seluruh Bab 2.",
        "Taklukkan Boss untuk menamatkan Bab 2!",
        "Lulus = Gerbang Bab 3 terbuka!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Seseorang bertanya: 「この 傘は あなたのですか。」 Jika payung itu bukan milikmu, apa jawabannya?",
          options: [
            { jp: ["いいえ、|iie,", "わたし|watashi", "の|no", "じゃ ありません。|ja arimasen."], correct: true },
            { jp: ["はい、|hai,", "わたし|watashi", "の|no", "じゃ ありません。|ja arimasen."] },
            { jp: ["いいえ、|iie,", "わたし|watashi", "の|no", "です。|desu."] },
          ],
          explain: "Jawaban menyangkal: [[いいえ、わたしのでは ありません|iie, watashi no dewa arimasen]].",
        },
        {
          type: "wordbank",
          prompt: "Ini adalah majalah tentang mobil.",
          answer: ["これ|kore", "は|wa", "自動車|jidousha", "の|no", "雑誌|zasshi", "です|desu"],
          extra: ["この|kono", "ほんの|hon no"],
          explain: "Pola N1 の N2 untuk isi/topik: [[自動車の 雑誌|jidousha no zasshi]].",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["あれ|are", "は|wa", "だれ|dare", "の|no", "かばん|kaban", "ですか。|desu ka."], claim: "Itu (di sana) tas milik siapa?" },
          answer: true,
          explain: "Benar! [[あれ|are]] = itu di sana, dan [[だれの|dare no]] = milik siapa.",
        },
        {
          type: "listen",
          prompt: "Dengarkan, ungkapan apakah ini?",
          audio: ["ほんの|hon no", "気持ち|kimochi", "です。|desu.", "どうぞ。|douzo."],
          options: [
            { text: "Sekadar tanda terima kasih saya. Silakan.", correct: true },
            { text: "Berapa harga barang ini? Tolong perlihatkan." },
            { text: "Terima kasih banyak atas bantuannya kemarin." },
          ],
          explain: "Terdengar jelas ungkapan khas memberi hadiah: [[ほんの 気持ちです。どうぞ。|hon no kimochi desu. douzo.]].",
        },
        {
          type: "match",
          prompt: "Tantangan Terakhir Bab 2: Cocokkan semuanya!",
          pairs: [
            ["だれの|dare no", "milik siapa"],
            ["自動車|jidousha", "mobil / otomotif"],
            ["ほんの 気持ち|hon no kimochi", "sekadar tanda terima kasih"],
            ["どうぞ|douzo", "silakan"],
          ],
          explain: "LUAR BIASA! Seluruh materi Bab 2 telah resmi kamu tamatkan!",
        },
      ],
    },
  ],
};

window.BAB2 = {
  unit: {
    label: "Bab 2",
    title: "これ・それ・あれ|kore, sore, are",
    sub: "Benda di sekitarku & kepemilikan",
  },
  stats: { streak: 4, xp: 250 },

  nodes: [
    { id: "s2_1", label: "Stage 2-1", title: "Ini dan Itu", sub: "これ・それ・あれ", state: "locked", stage: true, playable: true },
    { id: "s2_2", label: "Stage 2-2", title: "Benda Ini & Pilihan", sub: "この・その・あの", state: "locked", stage: true, playable: true },
    { id: "s2_3", label: "Stage 2-3", title: "Milik Siapa & Hadiah", sub: "の・ほんの気持ち", state: "locked", stage: true, playable: true },
    { id: "b3", label: "Bab 3", title: "Di Sini & Di Sana", sub: "ここ・そこ・あそこ", state: "locked" },
  ],

  stages: {
    s2_1: STAGE_2_1,
    s2_2: STAGE_2_2,
    s2_3: STAGE_2_3,
  },
};

