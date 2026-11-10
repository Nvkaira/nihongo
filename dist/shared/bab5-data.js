/* Materi mockup: Bab 5 Lengkap (Stage 5-1 dan Stage 5-2).
 * Acuan struktur: Minna no Nihongo I Bab 5 — Perjalanan, Kendaraan, Kalender & Teman.
 *
 * Format teks Jepang: "kana|romaji". Kanji + furigana: "{行|い}きます|ikimasu".
 * Satu kalimat = array segmen. Di teks penjelasan, [[京都|kyouto+へ|e]] dirender sebagai teks Jepang inline.
 */

const STAGE_5_1 = {
  id: "s5_1",
  label: "Stage 5-1",
  title: "Perjalanan & Transportasi",
  sub: "行きます・来ます・帰ります / へ / で",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Fundamental & Tujuan",
      icon: "book",
      intro: "Belajar menyatakan ke mana kamu pergi, naik apa perginya, dan cara pulang ke rumah!",
      points: [
        "3 Kata kerja pergerakan: [[行きます|ikimasu]] (pergi), [[来ます|kimasu]] (datang), [[帰ります|kaerimasu]] (pulang)",
        "Partikel arah tujuan: Tempat + [[へ|e]] (dibaca 'e')",
        "Partikel sarana transportasi: Kendaraan + [[で|de]] (Pengecualian: [[歩いて|aruite]])",
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar ini?",
          body: "Di Jepang, naik kereta, subway, atau Shinkansen adalah bagian dari kehidupan sehari-hari. Di stage ini kamu akan bisa bilang: <i>'Saya pergi ke Tokyo naik Shinkansen'</i> atau <i>'Saya pulang jalan kaki'</i>.",
          examples: [
            { jp: ["京都|kyouto", "へ|e", "行きます。|ikimasu."], id: "Saya pergi ke Kyoto." },
            { jp: ["タクシー|takushii", "で|de", "帰ります。|kaerimasu."], id: "Saya pulang naik taksi." },
          ],
        },
        {
          type: "concept",
          title: "Partikel Arah Tujuan: Tempat + へ",
          body: "Ketika kamu bergerak ke suatu arah atau tujuan, gunakan partikel **[[へ|e]]**:",
          formula: [
            { text: "Tempat Tujuan", note: "N (tempat)", kind: "topic" },
            { jp: "へ|e", note: "arah tujuan (dibaca 'e')", kind: "particle" },
            { jp: "行きます / 来ます / 帰ります", note: "kata kerja gerak", kind: "pred" },
          ],
          examples: [
            { jp: ["日本|nihon", "へ|e", "来ました。|kimashita."], id: "Saya datang ke Jepang." },
            { jp: ["うち|uchi", "へ|e", "帰ります。|kaerimasu."], id: "Saya pulang ke rumah." },
          ],
          tip: "Jebakan lafal! Huruf hiragana へ bila berfungsi sebagai partikel dilafalkan **'e'**, bukan 'he'.",
        },
        {
          type: "concept",
          title: "Partikel Transportasi: Kendaraan + で",
          body: "Partikel **[[で|de]]** menandai alat atau sarana yang kamu kendarai untuk bepergian:",
          points: [
            "[[電車で|densha de]]: Naik kereta listrik",
            "[[新幹線で|shinkansen de]]: Naik kereta cepat Shinkansen",
            "[[飛行機で|hikouki de]]: Naik pesawat terbang",
            "[[自転車で|jitensha de]]: Naik sepeda",
          ],
          examples: [
            { jp: ["何|nan", "で|de", "東京|toukyou", "へ|e", "行きます|ikimasu", "か。|ka."], id: "Naik apa kamu pergi ke Tokyo?" },
            { jp: ["新幹線|shinkansen", "で|de", "行きます。|ikimasu."], id: "Pergi naik Shinkansen." },
          ],
        },
        {
          type: "concept",
          title: "Pengecualian Emas: Jalan Kaki (歩いて)",
          body: "Jika kamu pergi dengan berjalan kaki, gunakan bentuk **[[歩いて|aruite]]** dan **DILARANG** menambahkan partikel で!",
          examples: [
            { jp: ["駅|eki", "から|kara", "歩いて|aruite", "帰りました。|kaerimashita."], id: "Saya pulang dari stasiun dengan berjalan kaki." },
          ],
          tip: "Salah: <i>aruite de</i> ❌. Benar: [[歩いて|aruite]] sendirian tanpa で ✔️.",
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 5-1",
          body: "Ketuk kartunya untuk mendengarkan nama sarana transportasi.",
          items: [
            { jp: "行きます|ikimasu", id: "pergi" },
            { jp: "来ます|kimasu", id: "datang" },
            { jp: "帰ります|kaerimasu", id: "pulang / kembali" },
            { jp: "でんしゃ|densha", id: "kereta listrik" },
            { jp: "ちかてつ|chikatetsu", id: "kereta bawah tanah (subway)" },
            { jp: "しんかんせん|shinkansen", id: "kereta cepat Shinkansen" },
            { jp: "じてんしゃ|jitensha", id: "sepeda" },
            { jp: "あるいて|aruite", id: "jalan kaki" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Yuk kita latih pemakaian partikel tujuan dan alat transportasi.",
      points: ["Partikel arah へ", "Susun sarana kendaraan", "Jalan kaki tanpa で"],
      steps: [
        {
          type: "mc",
          prompt: "Partikel apa yang ditaruh setelah nama tempat untuk menunjukkan arah tujuan?",
          jp: ["わたし|watashi", "は|wa", "学校|gakkou", "＿＿＿|___", "行きます。|ikimasu."],
          trans: "Saya pergi ke sekolah.",
          options: [
            { jp: "へ|e", correct: true },
            { jp: "で|de" },
            { jp: "を|o" },
          ],
          hint: "Ditulis 'he', dilafalkan 'e'.",
          explain: "Partikel [[へ|e]] menunjukkan arah tujuan ke mana kita pergi.",
        },
        {
          type: "wordbank",
          prompt: "Saya pergi ke Tokyo naik Shinkansen.",
          answer: ["新幹線|shinkansen", "で|de", "東京|toukyou", "へ|e", "行きます|ikimasu"],
          extra: ["歩いて|aruite", "から|kara"],
          hint: "Kendaraan + で, Tujuan + へ.",
          explain: "[[新幹線で 東京へ 行きます|shinkansen de toukyou e ikimasu]].",
        },
        {
          type: "mc",
          prompt: "Manakah kalimat jalan kaki yang BENAR secara tata bahasa?",
          options: [
            { jp: ["歩いて|aruite", "帰りました。|kaerimashita."], correct: true },
            { jp: ["歩いて|aruite", "で|de", "帰りました。|kaerimashita."] },
            { jp: ["歩く|aruku", "で|de", "帰りました。|kaerimashita."] },
          ],
          hint: "Aruite tidak boleh ditempel partikel de.",
          explain: "[[歩いて|aruite]] berdiri sendiri tanpa partikel で.",
        },
        {
          type: "match",
          prompt: "Cocokkan sarana transportasi",
          pairs: [
            ["でんしゃ|densha", "kereta listrik"],
            ["ちかてつ|chikatetsu", "subway (bawah tanah)"],
            ["しんかんせん|shinkansen", "kereta super cepat"],
            ["じてんしゃ|jitensha", "sepeda"],
          ],
          explain: "Bagus sekali! Sarana transportasi Jepang sudah kamu kuasai.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Fakta spektakuler seputar kereta dan stasiun di Jepang.",
      points: ["Rekor ketepatan waktu Shinkansen", "Kenapa partikel へ dibaca 'e'?", "Melodi keberangkatan kereta (Hassha Melody)"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Shinkansen Tokaido (Tokyo-Osaka) memiliki rata-rata keterlambatan kurang dari 1 menit sepanjang tahun.",
          answer: true,
          reveal: "<b>Fakta luar biasa!</b> Rata-rata keterlambatan Shinkansen per perjalanan hanya sekitar 20-30 detik saja, sudah termasuk keterlambatan akibat gempa bumi dan angin topan taifun!",
        },
        {
          type: "fact",
          kicker: "Sejarah Bahasa",
          title: "Kenapa Partikel へ Dilafalkan 'e'?",
          art: "[[へ|he]] → [[へ|e]]",
          body: "Sama seperti partikel [[は|wa]] (yang ditulis 'ha' tapi dibaca 'wa'), partikel [[へ|e]] juga mengalami evolusi fonetik bunyi pada zaman Edo, namun ejaan aslinya tetap dipertahankan dalam sistem tulisan resmi.",
        },
        {
          type: "fact",
          kicker: "Dunia Stasiun",
          title: "Hassha Melody: Lagu Penenang di Peron",
          art: "[[発車メロディ|hassha merodi]]",
          body: "Di peron kereta Jepang, alih-alih bel bising, kamu akan mendengar melodi musik merdu berdurasi 7 detik sesaat sebelum pintu menutup (<i>Hassha Melody</i>). Musik ini dirancang khusus oleh komposer untuk menenangkan stres para penumpang!",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Challenge",
      icon: "crown",
      intro: "Boss Stage 5-1! Uji kemampuan navigasi dan transportasi perjalananmu.",
      points: [
        "Kamu punya 3 nyawa.",
        "Ujian partikel arah へ dan alat transportasi で.",
        "Lulus = Buka jalur ke Stage 5-2!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Pilih kalimat yang artinya “Saya pulang ke rumah naik taksi.”",
          options: [
            { jp: ["タクシー|takushii", "で|de", "うち|uchi", "へ|e", "帰ります。|kaerimasu."], correct: true },
            { jp: ["タクシー|takushii", "へ|e", "うち|uchi", "で|de", "帰ります。|kaerimasu."] },
            { jp: ["タクシー|takushii", "で|de", "うち|uchi", "へ|e", "行きます。|ikimasu."] },
          ],
          explain: "Naik taksi = [[タクシーで|takushii de]], ke rumah = [[うちへ|uchi e]], pulang = [[帰ります|kaerimasu]].",
        },
        {
          type: "wordbank",
          prompt: "Kemarin saya pulang dari sekolah dengan berjalan kaki.",
          answer: ["学校|gakkou", "から|kara", "歩いて|aruite", "帰りました|kaerimashita"],
          extra: ["で|de", "新幹線|shinkansen"],
          explain: "[[学校から 歩いて 帰りました|gakkou kara aruite kaerimashita]].",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["京都|kyouto", "へ|e", "新幹線|shinkansen", "で|de", "行きます。|ikimasu."], claim: "Pergi ke Kyoto naik Shinkansen." },
          answer: true,
          explain: "Benar! Kalimat ini tepat secara makna dan kaidah partikel.",
        },
        {
          type: "listen",
          prompt: "Dengarkan, naik apakah orang ini pergi?",
          audio: ["毎日|mainichi", "自転車|jitensha", "で|de", "学校|gakkou", "へ|e", "行きます。|ikimasu."],
          options: [
            { text: "Sepeda", correct: true },
            { text: "Kereta api" },
            { text: "Bus" },
          ],
          explain: "Terdengar kata [[自転車で|jitensha de]] (naik sepeda).",
        },
        {
          type: "match",
          prompt: "Cocokkan secepat mungkin!",
          pairs: [
            ["へ|e", "partikel arah tujuan (ke)"],
            ["で|de", "partikel naik kendaraan"],
            ["歩いて|aruite", "jalan kaki (tanpa で)"],
            ["帰ります|kaerimasu", "pulang / kembali"],
          ],
          explain: "Hebat! Boss Stage 5-1 berhasil kamu lewati!",
        },
      ],
    },
  ],
};

const STAGE_5_2 = {
  id: "s5_2",
  label: "Stage 5-2",
  title: "Kalender, Tanggal & Rekan",
  sub: "日付・月・いつ / と / どこ[へ]も",
  phases: [
    {
      key: "fundamental",
      name: "Fundamental",
      long: "Fundamental & Tujuan",
      icon: "book",
      intro: "Kuasai tanggal kalender Jepang yang unik, tanya kapan (いつ), teman perjalanan (と), dan negasi mutlak!",
      points: [
        "Tanggal khusus: [[ついたち|tsuitachi]] (1), [[ふつか|futsuka]] (2), [[みっか|mikka]] (3)... [[はつか|hatsuka]] (20)",
        "Tanya waktu: [[いつ|itsu]] (kapan - Dilarang pakai に!)",
        "Rekan bersama: Orang + [[と|to]] (bersama) vs [[一人で|hitori de]] (sendirian)",
        "Negasi total: [[どこ[へ]も 行きません|doko [e] mo ikimasen]] (tidak pergi ke mana pun)",
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa belajar ini?",
          body: "Di stage penutup Bab 5 ini, kamu akan bisa merencanakan liburan: <i>'Kapan ulang tahunmu?'</i>, <i>'Saya pergi ke Jepang bersama keluarga tanggal 25 Maret'</i>, atau <i>'Hari Minggu kemarin saya tidak pergi ke mana-mana'</i>.",
          examples: [
            { jp: ["誕生日は|tanjoubi wa", "いつ|itsu", "ですか。|desu ka."], id: "Ulang tahunmu kapan?" },
            { jp: ["家族|kazoku", "と|to", "日本|nihon", "へ|e", "来ました。|kimashita."], id: "Saya datang ke Jepang bersama keluarga." },
          ],
        },
        {
          type: "concept",
          title: "Tanggal Unik dalam Bahasa Jepang (1日〜10日 & 20日)",
          body: "Tanggal 1 sampai 10 dan tanggal 20 memiliki bacaan warisan kuno yang wajib dihafal:",
          points: [
            "1日: **ついたち (tsuitachi)** · 2日: **ふつか (futsuka)** · 3日: **みっか (mikka)**",
            "4日: **よっか (yokka)** · 5日: **いつか (itsuka)** · 6日: **むいか (muika)**",
            "7日: **なのか (nanoka)** · 8日: **ようか (youka)** · 9日: **ここのか (kokonoka)**",
            "10日: **とおか (tooka)** · 14日: **じゅうよっか** · 20日: **はつか (hatsuka)** · 24日: **にじゅうよっか**",
          ],
          examples: [
            { jp: ["3月|sangatsu", "25日|nijuugonichi", "に|ni", "来ました。|kimashita."], id: "Saya datang pada tanggal 25 Maret." },
          ],
          tip: "Tanggal lainnya cukup angka biasa + [[〜日|~nichi]]. Contoh: 15日 (じゅうごにち).",
        },
        {
          type: "concept",
          title: "Tanya Kapan: いつ (Tanpa Partikel に!)",
          body: "Kata tanya **[[いつ|itsu]]** berarti 'kapan'. **Ingat pantangan ini:** kata tanya いつ **TIDAK PERNAH** diikuti partikel に:",
          examples: [
            { jp: ["いつ|itsu", "日本|nihon", "へ|e", "来ました|kimashita", "か。|ka."], id: "Kapan kamu datang ke Jepang?" },
            { jp: ["来週|raishuu", "行きます。|ikimasu."], id: "Saya akan pergi minggu depan." },
          ],
        },
        {
          type: "concept",
          title: "Rekan Perjalanan (と) vs Sendirian (一人で)",
          body: "Jika pergi bersama orang lain, tandai orang tersebut dengan partikel **[[と|to]]** (bersama/dengan). Jika sendirian, gunakan **[[一人で|hitori de]]** (tanpa partikel と!):",
          examples: [
            { jp: ["友達|tomodachi", "と|to", "奈良|nara", "へ|e", "行きました。|ikimashita."], id: "Saya pergi ke Nara bersama teman." },
            { jp: ["一人で|hitori de", "東京|toukyou", "へ|e", "行きます。|ikimasu."], id: "Saya pergi ke Tokyo sendirian." },
          ],
        },
        {
          type: "concept",
          title: "Penyangkalan Total: どこ [へ] も 行きません",
          body: "Kata tanya + partikel **[[も|mo]]** + **Bentuk Negatif** = Penyangkalan mutlak 100%:",
          points: [
            "[[どこ[へ]も 行きませんでした|doko [e] mo ikimasen deshita]]: Tidak pergi ke mana pun.",
            "[[何も 食べませんでした|nani mo tabemasen deshita]]: Tidak makan apa pun.",
            "[[だれも いません|dare mo imasen]]: Tidak ada siapa pun.",
          ],
          examples: [
            { jp: ["日曜日|nichiyoubi", "どこへ|doko e", "行きました|ikimashita", "か。|ka."], id: "Hari Minggu kemarin pergi ke mana?" },
            { jp: ["どこへも|doko e mo", "行きませんでした。|ikimasen deshita."], id: "Saya tidak pergi ke mana-mana." },
          ],
        },
        {
          type: "vocab",
          title: "Kosakata kunci Stage 5-2",
          body: "Ketuk kartunya untuk mendengarkan tanggal dan waktu kalender.",
          items: [
            { jp: "ついたち|tsuitachi", id: "tanggal 1" },
            { jp: "ふつか|futsuka", id: "tanggal 2" },
            { jp: "みっか|mikka", id: "tanggal 3" },
            { jp: "はつか|hatsuka", id: "tanggal 20" },
            { jp: "いつ|itsu", id: "kapan" },
            { jp: "たんじょうび|tanjoubi", id: "ulang tahun" },
            { jp: "ともだち|tomodachi", id: "teman / sahabat" },
            { jp: "ひとりで|hitori de", id: "sendirian" },
          ],
        },
      ],
    },

    {
      key: "practice",
      name: "Latihan",
      long: "Latihan Terpandu",
      icon: "target",
      intro: "Yuk latihan tanggal kalender, tanya kapan, dan bepergian bersama.",
      points: ["Hafalan tanggal 1-3", "Pergi bersama teman", "Menjawab tidak ke mana-mana"],
      steps: [
        {
          type: "mc",
          prompt: "Bagaimana cara membaca 'Tanggal 1' dalam bahasa Jepang?",
          options: [
            { text: "ついたち (tsuitachi)", correct: true },
            { text: "いちにち (ichinichi)" },
            { text: "ひとつ (hitotsu)" },
          ],
          hint: "Tanggal 1 memiliki sebutan kuno khusus.",
          explain: "Tanggal 1 disebut [[ついたち|tsuitachi]].",
        },
        {
          type: "wordbank",
          prompt: "Saya datang ke Jepang bersama keluarga.",
          answer: ["家族|kazoku", "と|to", "日本|nihon", "へ|e", "来ました|kimashita"],
          extra: ["一人で|hitori de", "で|de"],
          hint: "Orang + と = bersama orang.",
          explain: "[[家族と 日本へ 来ました|kazoku to nihon e kimashita]].",
        },
        {
          type: "mc",
          prompt: "Pilih kalimat yang artinya “Saya tidak pergi ke mana-mana.”",
          options: [
            { jp: ["どこ[へ]も|doko [e] mo", "行きませんでした。|ikimasen deshita."], correct: true },
            { jp: ["どこ[へ]も|doko [e] mo", "行きました。|ikimashita."] },
            { jp: ["どこか|dokoka", "行きました。|ikimashita."] },
          ],
          hint: "Kata tanya + も + negatif = penyangkalan mutlak.",
          explain: "[[どこへも 行きませんでした|doko e mo ikimasen deshita]] = tidak pergi ke mana pun.",
        },
        {
          type: "match",
          prompt: "Cocokkan tanggal kalender Jepang",
          pairs: [
            ["ついたち|tsuitachi", "tanggal 1"],
            ["ふつか|futsuka", "tanggal 2"],
            ["みっか|mikka", "tanggal 3"],
            ["はつか|hatsuka", "tanggal 20"],
          ],
          explain: "Hebat! Tanggal-tanggal khusus kalender Jepang sudah melekat kuat.",
        },
      ],
    },

    {
      key: "trivia",
      name: "Trivia",
      long: "Trivia & Budaya",
      icon: "bulb",
      intro: "Fakta unik seputar Golden Week dan usia dewasa di Jepang.",
      points: ["Makna tanggal 20 (Hatsuka)", "Golden Week Jepang", "Partikel penegas よ"],
      steps: [
        {
          type: "flip",
          title: "Benar atau mitos?",
          statement: "Tanggal 20 dalam bahasa Jepang dibaca 'nijyuu-nichi'.",
          answer: false,
          reveal: "<b>Mitos!</b> Tanggal 20 memiliki sebutan khusus yaitu **はつか (hatsuka)**. Kata ini juga berakar sama dengan penyebutan usia 20 tahun (二十歳 - hatachi), usia kedewasaan resmi di Jepang!",
        },
        {
          type: "fact",
          kicker: "Musim Liburan",
          title: "Golden Week: Liburan Terpanjang Jepang",
          art: "[[連休|renkyuu]]",
          body: "Dari tanggal 29 April sampai 5 Mei setiap tahun, ada 4 hari libur nasional berturut-turut yang disebut <i>Golden Week</i>. Seluruh sekolah dan perkantoran libur panjang, dan jutaan orang Jepang bepergian wisata atau pulang kampung.",
        },
        {
          type: "fact",
          kicker: "Percakapan Alami",
          title: "Partikel Penegas: 〜よ (yo)",
          art: "[[〜よ|~yo]]",
          body: "Di akhir kalimat percakapan, partikel **よ** berfungsi memberi tahu informasi baru yang belum diketahui temanmu, mirip akhiran 'lho' di bahasa Indonesia: [[次の 電車ですよ。|tsugi no densha desu yo.]] *(Kereta berikutnya lho!)*.",
        },
      ],
    },

    {
      key: "boss",
      name: "Boss",
      long: "Boss Akhir Bab 5",
      icon: "crown",
      intro: "Ujian Pamungkas Bab 5! Buktikan penguasaan tanggal, teman perjalanan, dan negasi mutlak untuk menamatkan Bab 5.",
      points: [
        "Kamu punya 3 nyawa. Ujian pamungkas seluruh Bab 5.",
        "Taklukkan Boss untuk menyelesaikan Bab 5!",
        "Lulus = Gerbang Bab 6 terbuka!",
      ],
      steps: [
        {
          type: "mc",
          prompt: "Seseorang bertanya: 「誕生日は いつですか。」 Pilihlah kalimat jawaban yang tepat:",
          options: [
            { jp: ["6月|rokugatsu", "13日|juusannichi", "です。|desu."], correct: true },
            { jp: ["6月|rokugatsu", "13日|juusannichi", "に|ni", "です。|desu."] },
            { jp: ["6月|rokugatsu", "13日|juusannichi", "へ|e", "行きます。|ikimasu."] },
          ],
          explain: "Menjawab tanggal ulang tahun cukup tanggal + です (tanpa partikel に).",
        },
        {
          type: "wordbank",
          prompt: "Saya pergi ke Tokyo sendirian.",
          answer: ["一人で|hitori de", "東京|toukyou", "へ|e", "行きます|ikimasu"],
          extra: ["と|to", "家族|kazoku"],
          explain: "Sendirian = [[一人で|hitori de]] (tanpa partikel と).",
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: ["日曜日|nichiyoubi", "どこへも|doko e mo", "行きませんでした。|ikimasen deshita."], claim: "Hari Minggu saya pergi ke mana-mana." },
          answer: false,
          explain: "Salah! Kalimat ini berarti 'Hari Minggu saya TIDAK pergi ke mana-mana' (negasi total).",
        },
        {
          type: "listen",
          prompt: "Dengarkan, kapan orang ini akan pergi?",
          audio: ["来週|raishuu", "広島|hiroshima", "へ|e", "行きます。|ikimasu."],
          options: [
            { text: "Minggu depan", correct: true },
            { text: "Bulan depan" },
            { text: "Tahun depan" },
          ],
          explain: "Terdengar kata [[来週|raishuu]] yang berarti minggu depan.",
        },
        {
          type: "match",
          prompt: "Tantangan Terakhir Bab 5: Cocokkan semuanya!",
          pairs: [
            ["いつ|itsu", "kapan (tanpa に)"],
            ["と|to", "bersama (rekan)"],
            ["一人で|hitori de", "sendirian"],
            ["どこへも|doko e mo", "tidak ke mana pun"],
          ],
          explain: "SELESAI! Selamat, kamu telah berhasil menamatkan materi Bab 5 secara penuh!",
        },
      ],
    },
  ],
};

window.BAB5 = {
  unit: {
    label: "Bab 5",
    title: "どこへ 行きますか|doko e ikimasu ka",
    sub: "Perjalanan, transportasi & kalender",
  },
  stats: { streak: 7, xp: 850 },

  nodes: [
    { id: "s5_1", label: "Stage 5-1", title: "Transportasi", sub: "行きます・へ・で", state: "locked", stage: true, playable: true },
    { id: "s5_2", label: "Stage 5-2", title: "Kalender & Rekan", sub: "日付・いつ・と", state: "locked", stage: true, playable: true },
  ],

  stages: {
    s5_1: STAGE_5_1,
    s5_2: STAGE_5_2,
  },
};

