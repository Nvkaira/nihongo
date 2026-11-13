/* Materi: Bab 6 Lengkap (Stage 6-1 dan Stage 6-2).
 * Acuan struktur: Minna no Nihongo I Bab 6 — Objek Kegiatan, Tempat Aksi & Ajakan.
 *
 * Format teks Jepang: "kana|romaji". Kanji + furigana: "{食|た}べます|tabemasu".
 * Satu kalimat = array segmen. Di teks penjelasan, [[ご飯|gohan+を|o]] dirender sebagai teks Jepang inline.
 */

const STAGE_6_1 = {
  id: "s6_1",
  label: "Stage 6-1",
  title: "Objek & Tempat Aksi",
  sub: "食べます・飲みます / を / で",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Objek Penderita & Tempat Aksi",
      icon: "book",
      intro: "Belajar menyatakan apa yang kamu makan, minum, lakukan, dan di mana tempat kamu melakukannya!",
      points: [
        "Partikel penanda objek penderita: Benda + [[を|o]] (ditulis を, dibaca 'o')",
        "Kata kerja kegiatan transitif: [[食べます|tabemasu]], [[飲みます|nomimasu]], [[見ます|mimasu]], [[聞きます|kikimasu]], [[読みます|yomimasu]]",
        "Partikel lokasi perbuatan: Tempat + [[で|de]] (berbeda dengan に yang menunjukkan keberadaan)",
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar Bab 6?",
          body: "Di Bab 6, kamu mulai bisa bercerita tentang aktivitas nyata sehari-hari: sarapan apa, baca apa di perpustakaan, hingga jajan di minimarket!",
          examples: [
            { jp: ["ご飯|gohan", "を|o", "食べます。|tabemasu."], id: "Saya makan nasi." },
            { jp: ["図書館|toshokan", "で|de", "本|hon", "を|o", "読みます。|yomimasu."], id: "Saya membaca buku di perpustakaan." },
          ],
        },
        {
          type: "concept",
          title: "Partikel Penanda Objek: Benda + を",
          body: "Ketika suatu benda menjadi sasaran atau objek dari kata kerja aksi, gunakan partikel **[[を|o]]**:",
          formula: [
            { text: "Objek / Sasaran", note: "N (benda)", kind: "topic" },
            { jp: "を|o", note: "penanda objek (dibaca 'o')", kind: "particle" },
            { jp: "食べます / 飲みます / 読みます", note: "kata kerja aksi", kind: "pred" },
          ],
          examples: [
            { jp: ["パン|pan", "を|o", "食べます。|tabemasu."], id: "Makan roti." },
            { jp: ["水|mizu", "を|o", "飲みます。|nomimasu."], id: "Minum air." },
            { jp: ["新聞|shinbun", "を|o", "読みます。|yomimasu."], id: "Membaca koran." },
          ],
          tip: "PENTING! Huruf を adalah hiragana khusus yang HANYA digunakan sebagai partikel kalimat dan dilafalkan murni sebagai bunyi <b>'o'</b> (sama seperti お).",
        },
        {
          type: "concept",
          title: "Partikel Tempat Perbuatan: Tempat + で",
          body: "Partikel **[[で|de]]** menandai tempat di mana suatu kegiatan atau aksi fisik dilakukan:",
          points: [
            "[[レストランで|resutoran de]]: Makan / minum di restoran",
            "[[うちで|uchi de]]: Menonton TV di rumah",
            "[[店で|mise de]]: Membeli barang di toko",
          ],
          examples: [
            { jp: ["どこ|doko", "で|de", "その|sono", "服|fuku", "を|o", "買いました|kaimashita", "か。|ka."], id: "Di mana kamu membeli baju itu?" },
            { jp: ["デパート|depaato", "で|de", "買いました。|kaimashita."], id: "Saya membelinya di department store." },
          ],
          tip: "Beda で vs に: Gunakan **で** jika ada kegiatan aktif (makan, baca, kerja). Gunakan **に** untuk keberadaan diam (ada orang/benda di suatu tempat).",
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 6-1",
          body: "Ketuk kartunya untuk mendengarkan nama makanan & kata kerja penting Bab 6.",
          items: [
            { jp: "ごはん|gohan", id: "nasi / makanan" },
            { jp: "パン|pan", id: "roti" },
            { jp: "みず|mizu", id: "air putih" },
            { jp: "おちゃ|ocha", id: "teh hijau" },
            { jp: "たべます|tabemasu", id: "makan" },
            { jp: "のみます|nomimasu", id: "minum" },
            { jp: "みます|mimasu", id: "melihat / menonton" },
            { jp: "ききます|kikimasu", id: "mendengar" },
            { jp: "よみます|yomimasu", id: "membaca" },
            { jp: "かいます|kaimasu", id: "membeli" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Yuk kita latih pemakaian partikel を dan で.",
      points: ["Objek dengan を", "Tempat kegiatan dengan で", "Menanyakan apa yang dimakan"],
      steps: [
        {
          type: "choice",
          prompt: "Lengkapi kalimat: 毎朝 パン ( ? ) 食べます。(Setiap pagi saya makan roti).",
          options: [
            { text: "を (o)", correct: true },
            { text: "で (de)" },
            { text: "へ (e)" },
          ],
          explain: "Roti (パン) adalah objek penderita yang dimakan, jadi wajib menggunakan partikel [[を|o]].",
        },
        {
          type: "wordbank",
          prompt: "Susun: 'Saya minum teh di kafe.'",
          answer: ["カフェ|kafe", "で|de", "お茶|ocha", "を|o", "飲みます|nomimasu"],
          extra: ["へ|e", "パン|pan"],
          explain: "Tempat aksi = [[カフェで|kafe de]], objek = [[お茶を|ocha o]], kata kerja = [[飲みます|nomimasu]].",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["部屋|heya", "で|de", "テレビ|terebi", "を|o", "見ます。|mimasu."], claim: "Menonton TV di kamar." },
          answer: true,
          explain: "Tepat sekali! Tempat kegiatan memakai で, dan TV sebagai objek memakai を.",
        },
        {
          type: "listen",
          prompt: "Dengarkan, apa yang dibeli oleh orang ini?",
          audio: ["スーパー|suupaa", "で|de", "りんご|ringo", "を|o", "買いました。|kaimashita."],
          options: [
            { text: "Apel (Ringo)", correct: true },
            { text: "Roti (Pan)" },
            { text: "Ikan (Sakana)" },
          ],
          explain: "Terdengar kata [[りんご|ringo]] yang berarti buah apel.",
        },
        {
          type: "match",
          prompt: "Cocokkan kata benda dengan kata kerjanya:",
          pairs: [
            ["ご飯を|gohan o", "食べます (makan)"],
            ["水を|mizu o", "飲みます (minum)"],
            ["音楽を|ongaku o", "聞きます (mendengar)"],
            ["本を|hon o", "読みます (membaca)"],
          ],
          explain: "Sempurna! Semua pasangan objek dan aksinya cocok.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Etiket makan dan budaya unik seputar kuliner Jepang.",
      points: ["Ucapan ajaib Itadakimasu", "Mesin penjual otomatis (Jihanki)", "Etiket sumpit terlarang"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Di Jepang, menyeruput mie ramen atau soba dengan suara keras ('slurp') dianggap tidak sopan.",
          answer: false,
          reveal: "<b>Mitos!</b> Menyeruput mie dengan bunyi di Jepang justru dianggap wajar karena mendinginkan mie panas dan menunjukkan bahwa kamu menikmati hidangannya!",
        },
        {
          type: "fact",
          kicker: "Etiket Makan",
          title: "Itadakimasu & Gochisousama",
          art: "[[いただきます|itadakimasu]]",
          body: "Sebelum makan, orang Jepang merapatkan kedua telapak tangan dan mengucapkan [[いただきます|itadakimasu]] (secara harfiah: 'saya menerima dengan rasa syukur atas nyawa makanan dan jerih payah koki'). Setelah selesai makan, ucapkan [[ごちそうさまでした|gochisousama deshita]].",
        },
        {
          type: "fact",
          kicker: "Budaya Unik",
          title: "Jidou Hanbaiki (Jihanki) di Setiap Sudut",
          art: "[[自動販売機|jidou hanbaiki]]",
          body: "Jepang memiliki lebih dari 4 juta vending machine! Kamu bisa membeli minuman dingin maupun panas (bahkan kopi hangat kaleng berlabel merah) di pelosok jalan mana pun selama 24 jam.",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Challenge",
      icon: "crown",
      intro: "Boss Stage 6-1! Uji penguasaan objek penderita dan lokasi perbuatan.",
      points: [
        "Kamu punya 3 nyawa.",
        "Ujian partikel を dan で dalam berbagai konteks kegiatan.",
        "Lulus = Buka Stage 6-2!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Pilih kalimat yang tepat untuk: “Kemarin malam saya belajar bahasa Jepang di perpustakaan.”",
          options: [
            { jp: ["きのうの晩|kinou no ban", "図書館|toshokan", "で|de", "日本語|nihongo", "を|o", "勉強しました。|benkyou shimashita."], correct: true },
            { jp: ["きのうの晩|kinou no ban", "図書館|toshokan", "へ|e", "日本語|nihongo", "で|de", "勉強しました。|benkyou shimashita."] },
            { jp: ["きのうの晩|kinou no ban", "図書館|toshokan", "に|ni", "日本語|nihongo", "を|o", "勉強しました。|benkyou shimashita."] },
          ],
          explain: "Tempat kegiatan aktif = [[図書館で|toshokan de]], objek belajar = [[日本語を|nihongo o]].",
        },
        {
          type: "wordbank",
          prompt: "Tadi pagi saya tidak makan apa pun.",
          answer: ["今朝|kesa", "何も|nani mo", "食べませんでした|tabemasen deshita"],
          extra: ["を|o", "ご飯|gohan"],
          explain: "Bentuk penolakan total untuk benda: [[何も 食べませんでした|nani mo tabemasen deshita]] (partikel を dilebur ke dalam も).",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["どこで|doko de", "写真|shashin", "を|o", "撮りましたか。|torimashita ka."], claim: "Di mana kamu mengambil foto?" },
          answer: true,
          explain: "Benar! Menanyakan tempat pengambilan foto memakai [[どこで|doko de]] dan objek foto memakai [[写真を|shashin o]].",
        },
        {
          type: "listen",
          prompt: "Dengarkan, di manakah orang ini membaca koran?",
          audio: ["駅|eki", "で|de", "新聞|shinbun", "を|o", "読みます。|yomimasu."],
          options: [
            { text: "Di stasiun", correct: true },
            { text: "Di rumah" },
            { text: "Di kantor" },
          ],
          explain: "Terdengar kata [[駅で|eki de]] yang berarti 'di stasiun'.",
        },
        {
          type: "match",
          prompt: "Tantangan Terakhir Stage 6-1: Pasangkan dengan tepat!",
          pairs: [
            ["を|o", "partikel penanda sasaran/objek"],
            ["で|de", "partikel lokasi kegiatan berlangsung"],
            ["何をしますか|nani o shimasu ka", "kamu sedang / akan melakukan apa?"],
            ["何も|nani mo", "tidak ada apa pun (negasi total)"],
          ],
          explain: "HEBAT! Kamu berhasil menguasai materi Stage 6-1!",
        },
      ],
    },
  ],
};

const STAGE_6_2 = {
  id: "s6_2",
  label: "Stage 6-2",
  title: "Ajakan & Waktu Bersama",
  sub: "ませんか・ましょう・いっしょに",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Bentuk Ajakan & Kebersamaan",
      icon: "book",
      intro: "Pelajari cara mengajak teman dengan sopan, menyetujui ajakan, dan berkegiatan bersama!",
      points: [
        "Bentuk ajakan sopan: Kata kerja bentuk negatif + [[〜ませんか|~masen ka]] (Maukah...?)",
        "Bentuk menyetujui / ajakan inisiatif: [[〜ましょう|~mashou]] (Mari... / Ayo!)",
        "Kata keterangan: [[いっしょに|isshoni]] (bersama-sama), [[いつも|itsumo]] (selalu), [[ときどき|tokidoki]] (kadang-kadang)",
      ],
      steps: [
        {
          type: "concept",
          title: "Seni Mengajak dalam Bahasa Jepang",
          body: "Di Jepang, mengajak seseorang secara langsung dengan <i>'Ayo kita makan!'</i> terkadang terasa terlalu memaksa. Oleh karena itu, gunakan bentuk negatif tanya **〜ませんか** agar terdengar santun dan memberi ruang lawan bicara untuk mempertimbangkannya.",
          examples: [
            { jp: ["いっしょに|isshoni", "ご飯|gohan", "を|o", "食べませんか。|tabemasen ka."], id: "Maukah makan bersama-sama?" },
            { jp: ["ええ、|ee,", "食べましょう。|tabemashou."], id: "Ya, mari kita makan!" },
          ],
        },
        {
          type: "concept",
          title: "Pola 1: 〜ませんか (Maukah...?)",
          body: "Ganti akhiran kata kerja **〜ます** menjadi **〜ませんか** untuk mengajak teman:",
          formula: [
            { text: "いっしょに", note: "bersama-sama", kind: "topic" },
            { jp: "お茶を|ocha o", note: "objek", kind: "particle" },
            { jp: "飲みませんか|nomimasen ka", note: "maukah minum?", kind: "pred" },
          ],
          examples: [
            { jp: ["土曜日|doyoubi", "テニス|tenisu", "を|o", "しませんか。|shimasen ka."], id: "Maukah bermain tenis hari Sabtu?" },
            { jp: ["京都|kyouto", "へ|e", "行きませんか。|ikimasen ka."], id: "Maukah pergi ke Kyoto bersama?" },
          ],
          tip: "Jika lawan bicara setuju, jawabannya adalah: <b>ええ、〜ましょう</b> (Ya, mari!).",
        },
        {
          type: "concept",
          title: "Pola 2: 〜ましょう (Mari kita... / Ayo)",
          body: "Gunakan akhiran **〜ましょう** saat kamu menyetujui ajakan, atau saat mengajak secara proaktif ketika suasananya sudah sepakat:",
          examples: [
            { jp: ["ちょっと|chotto", "休みましょう。|yasumimashou."], id: "Mari kita istirahat sebentar." },
            { jp: ["映画|eiga", "を|o", "見ましょう。|mimashou."], id: "Mari menonton film!" },
          ],
        },
        {
          type: "concept",
          title: "Pengecualian Penting: Bertemu Teman (友達に会います)",
          body: "Ketika bertemu seseorang, partikel yang digunakan adalah **[[に|ni]]**, BUKAN を! Karena 'teman' adalah mitra temu, bukan objek yang dikenai manipulasi fisik.",
          examples: [
            { jp: ["駅|eki", "で|de", "友達|tomodachi", "に|ni", "会います。|aimasu."], id: "Saya bertemu teman di stasiun." },
          ],
          tip: "Ingat baik-baik rumus ini: <b>Orang + に + 会います</b> (bertemu orang). Jangan sampai tertukar memakai を!",
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 6-2",
          body: "Hafalkan kata keterangan dan ungkapan interaksi ini:",
          items: [
            { jp: "いっしょに|isshoni", id: "bersama-sama" },
            { jp: "いつも|itsumo", id: "selalu" },
            { jp: "ときどき|tokidoki", id: "kadang-kadang" },
            { jp: "それから|sorekara", id: "setelah itu / kemudian" },
            { jp: "ちょっと|chotto", id: "sebentar / sedikit" },
            { jp: "あいます|aimasu", id: "bertemu" },
            { jp: "ええ|ee", id: "ya (santun)" },
            { jp: "いいですね|ii desu ne", id: "ide yang bagus!" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Latih kemampuan mengajak dan merespons ajakan.",
      points: ["Mengajak dengan ませんか", "Menyetujui dengan ましょう", "Pola 友達に会います"],
      steps: [
        {
          type: "choice",
          prompt: "Lengkapi kalimat: 明日 いっしょに サッカーを ( ? )。— ええ、しましょう。",
          options: [
            { text: "しませんか (shimasen ka)", correct: true },
            { text: "しました (shimashita)" },
            { text: "しません (shimasen)" },
          ],
          explain: "Karena responnya adalah 'ええ、しましょう' (Ya, mari), maka kalimat sebelumnya adalah ajakan ramah [[しませんか|shimasen ka]].",
        },
        {
          type: "wordbank",
          prompt: "Susun: 'Mari kita istirahat sebentar di sana.'",
          answer: ["あそこ|asoko", "で|de", "ちょっと|chotto", "休みましょう|yasumimashou"],
          extra: ["へ|e", "食べません|tabemasen"],
          explain: "[[あそこで ちょっと 休みましょう|asoko de chotto yasumimashou]].",
        },
        {
          type: "choice",
          prompt: "Pilihlah partikel yang tepat: 日曜日 友達 ( ? ) 会いました。",
          options: [
            { text: "に (ni)", correct: true },
            { text: "を (o)" },
            { text: "で (de)" },
          ],
          explain: "Bertemu seseorang selalu menggunakan partikel [[に|ni]] (友達に会います).",
        },
        {
          type: "listen",
          prompt: "Dengarkan respons teman ini:",
          audio: ["いいですね。|ii desu ne.", "行きましょう。|ikimashou."],
          options: [
            { text: "Setuju dan mengajak pergi", correct: true },
            { text: "Menolak karena sibuk" },
            { text: "Menanyakan jam berapa" },
          ],
          explain: "[[いいですね。行きましょう。|ii desu ne. ikimashou.]] artinya 'Bagus sekali! Ayo mari kita pergi.'",
        },
        {
          type: "match",
          prompt: "Pasangkan ekspresi ajakan dan maknanya:",
          pairs: [
            ["飲みませんか|nomimasen ka", "maukah minum bersama?"],
            ["飲みましょう|nomimashou", "mari kita minum!"],
            ["いっしょに|isshoni", "bersama-sama"],
            ["ちょっと|chotto", "sebentar / agak"],
          ],
          explain: "Luar biasa! Kamu sangat peka memahami pola ajakan bahasa Jepang.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Budaya ngumpul, Ohanami, dan cara menolak ajakan secara halus di Jepang.",
      points: ["Menolak halus dengan 'Chotto...'", "Tradisi Ohanami di musim semi", "Nomikai bersama rekan"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Orang Jepang hampir tidak pernah mengatakan 'Tidak' (Iie) secara langsung saat menolak ajakan teman.",
          answer: true,
          reveal: "<b>Fakta sosial nyata!</b> Menolak secara frontal dianggap melukai perasaan. Orang Jepang biasanya berujar: <i>'Nichiyoubi wa chotto...'</i> (Hari Minggu agak sedikit...) sambil menunjukkan ekspresi meminta maaf.",
        },
        {
          type: "fact",
          kicker: "Tradisi Musiman",
          title: "Ohanami: Piknik Massal di Bawah Sakura",
          art: "[[お花見|ohanami]]",
          body: "Di musim semi, orang Jepang menggelar terpal biru di taman untuk makan bento dan minum bersama teman maupun rekan kantor di bawah pohon sakura yang mekar (<i>Ohanami</i>).",
        },
        {
          type: "fact",
          kicker: "Interaksi Sosial",
          title: "Kekuatan Kata 'Ii desu ne'",
          art: "[[いいですね|ii desu ne]]",
          body: "Saat temanmu mengajak melakukan sesuatu, respon paling ramah dan penuh antusiasme adalah mengucapkan [[いいですね！|ii desu ne!]] (Wah, ide bagus tuh!). Ini langsung menghangatkan suasana percakapan.",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Challenge",
      icon: "crown",
      intro: "Boss Terakhir Bab 6! Tunjukkan kemampuanmu menguasai seluruh materi Bab 6.",
      points: [
        "Kamu punya 3 nyawa.",
        "Gabungan partikel を, で, に (会います), dan pola ajakan ませんか / ましょう.",
        "Kalahkan Boss untuk menuntaskan Bab 6!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "A: 今日の午後 いっしょに カフェへ 行きませんか。\nB: (Pilih jawaban setuju yang paling tepat)",
          options: [
            { jp: ["ええ、|ee,", "行きましょう。|ikimashou."], correct: true },
            { jp: ["いいえ、|iie,", "行きます。|ikimasu."] },
            { jp: ["ええ、|ee,", "行きました。|ikimashita."] },
          ],
          explain: "Ajakan [[行きませんか|ikimasen ka]] dijawab persetujuan dengan [[ええ、行きましょう|ee, ikimashou]] (Ya, mari kita pergi).",
        },
        {
          type: "wordbank",
          prompt: "Kemarin saya bertemu teman di bioskop dan menonton film bersama.",
          answer: ["映画館|eigakan", "で|de", "友達|tomodachi", "に|ni", "会いました|aimashita"],
          extra: ["を|o", "へ|e"],
          explain: "Di bioskop (tempat aksi) = [[映画館で|eigakan de]], bertemu teman = [[友達に会いました|tomodachi ni aimashita]].",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["いっしょに|isshoni", "ビール|biiru", "を|o", "飲みましょう。|nomimashou."], claim: "Mari kita minum bir bersama-sama." },
          answer: true,
          explain: "Benar sekali! Tata bahasa, partikel, dan terjemahannya tepat 100%.",
        },
        {
          type: "listen",
          prompt: "Dengarkan kalimat ini, apa yang mereka lakukan?",
          audio: ["ロビー|robii", "で|de", "写真|shashin", "を|o", "撮りましょう。|torimashou."],
          options: [
            { text: "Mengambil foto di lobi", correct: true },
            { text: "Makan di lobi" },
            { text: "Membeli kamera di lobi" },
          ],
          explain: "Terdengar frasa [[写真を撮りましょう|shashin o torimashou]] (mari kita mengambil foto).",
        },
        {
          type: "match",
          prompt: "Tantangan Puncak: Cocokkan rumus pamungkas Bab 6!",
          pairs: [
            ["パンを食べます|pan o tabemasu", "makan roti (objek を)"],
            ["店で買います|mise de kaimasu", "beli di toko (tempat で)"],
            ["友達に会います|tomodachi ni aimasu", "bertemu kawan (teman に)"],
            ["休みましょう|yasumimashou", "mari kita beristirahat"],
          ],
          explain: "SELESAI! Selamat, kamu telah berhasil menaklukkan seluruh materi Bab 6!",
        },
      ],
    },
  ],
};

window.BAB6 = {
  unit: {
    label: "Bab 6",
    title: "何を 食べますか|nani o tabemasu ka",
    sub: "Makanan, kegiatan & ajakan bersama",
  },
  stats: { streak: 8, xp: 1100 },

  nodes: [
    { id: "s6_1", label: "Stage 6-1", title: "Objek & Tempat Aksi", sub: "を・で・どこで", state: "locked", stage: true, playable: true },
    { id: "s6_2", label: "Stage 6-2", title: "Ajakan Bersama", sub: "ませんか・ましょう", state: "locked", stage: true, playable: true },
  ],

  stages: {
    b6: STAGE_6_1,
    s6_1: STAGE_6_1,
    s6_2: STAGE_6_2,
  },
};
