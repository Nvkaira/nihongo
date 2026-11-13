/* Materi Bab 0: Perkenalan Kana (Hiragana & Katakana).
 * Format teks Jepang: "kana|romaji". Kanji + furigana: "{日本|にほん}じん|nihonjin".
 */

const STAGE_0 = {
  id: "b0",
  label: "Bab 0",
  title: "Perkenalan Kana",
  sub: "Hiragana & Katakana",
  phases: [
    {
      key: "fundamental",
      name: "Sistem Huruf",
      long: "Mengenal 3 Huruf Bahasa Jepang",
      icon: "book",
      intro: "Sebelum mulai merangkai kalimat, kenalan dulu dengan sistem penulisan bahasa Jepang. Santai saja dan ikuti langkahnya!",
      points: [
        "Jepang memiliki 3 jenis huruf: Hiragana, Katakana, dan Kanji",
        "Hiragana untuk kata asli & tata bahasa, Katakana untuk kata serapan asing",
        "Semua bunyi bahasa Jepang berpusat pada 5 vokal dasar: A, I, U, E, O"
      ],
      steps: [
        {
          type: "concept",
          title: "Kenapa Jepang Punya 3 Jenis Huruf?",
          body: "Bahasa Jepang memadukan 3 sistem tulisan secara harmonis dalam satu kalimat:\n\n1. <b>Hiragana (ひらがな)</b>: Bentuknya melengkung lembut. Dipakai untuk kata asli Jepang dan partikel tata bahasa.\n2. <b>Katakana (カタカナ)</b>: Bentuknya kaku bersudut. Dipakai untuk kata serapan asing (seperti nama negara, nama orang asing, TV, kopi).\n3. <b>Kanji (漢字)</b>: Karakter simbol bermakna yang berasal dari Tiongkok.",
          points: [
            "Contoh Hiragana: [[わたし|watashi]] (Saya)",
            "Contoh Katakana: [[テレビ|terebi]] (Televisi)",
            "Contoh Kanji: [[日本|にほん]] (Jepang)"
          ],
          tip: "Sebagai pemula, fokuslah menguasai Hiragana dan Katakana terlebih dahulu!"
        },
        {
          type: "flip",
          title: "Mitos vs Fakta",
          statement: "Apakah kita harus menghafal ribuan huruf Kanji dulu sebelum bisa membaca bahasa Jepang?",
          reveal: "<b>MITOS BESAR!</b> Cukup kuasai Hiragana dan Katakana (masing-masing 46 huruf dasar), kamu sudah bisa membaca teks dasar bahasa Jepang, komik/manga ber-furigana, dan menu makanan!"
        },
        {
          type: "mc",
          prompt: "Kapan huruf Katakana (カタカナ) biasanya digunakan?",
          options: [
            { text: "Untuk menulis kata serapan dari bahasa asing & nama orang luar negeri", correct: true },
            { text: "Untuk menulis partikel tata bahasa seperti wa dan desu" },
            { text: "Hanya untuk menulis angka dan kalender" },
            { text: "Hanya untuk puisi kuno kerajaan Jepang" }
          ],
          explain: "Tepat sekali! Katakana khusus digunakan untuk kata serapan asing (seperti [[コーヒー|koohii]] = kopi, [[インドネシア|indoneshia]] = Indonesia) dan nama non-Jepang."
        }
      ]
    },
    {
      key: "hiragana",
      name: "Hiragana Vokal",
      long: "5 Huruf Vokal Hiragana (あ・い・う・え・お)",
      icon: "sparkle",
      intro: "Inilah fondasi dari seluruh aksara Jepang: lima huruf vokal utama. Perhatikan bentuk goresannya yang melengkung indah!",
      points: [
        "Urutan vokal standar Jepang: A - I - U - E - O",
        "Goresan Hiragana cenderung melengkung dan mengalir halus",
        "Ketuk kartu kosakata untuk mendengarkan lafal aslinya!"
      ],
      steps: [
        {
          type: "concept",
          title: "Urutan Vokal: A - I - U - E - O",
          body: "Urutan vokal standar bahasa Jepang adalah <b>A, I, U, E, O</b>.\n\nSemua baris konsonan berikutnya (Ka-Ki-Ku-Ke-Ko, Sa-Shi-Su-Se-So, Ta-Chi-Tsu-Te-To, dst) selalu mengikuti urutan 5 vokal dasar ini!",
          points: [
            "[[あ|a]] = A",
            "[[い|i]] = I",
            "[[う|u]] = U",
            "[[え|e]] = E",
            "[[お|o]] = O"
          ],
          tip: "Lafalkan dengan vokal yang tegas dan bulat, tidak mendesah."
        },
        {
          type: "vocab",
          title: "Kosakata Vokal Hiragana",
          body: "Dengarkan dan kenali kata-kata nyata yang diawali vokal Hiragana:",
          items: [
            { jp: "あさ|asa", id: "Pagi hari" },
            { jp: "いぬ|inu", id: "Anjing" },
            { jp: "うみ|umi", id: "Laut / Pantai" },
            { jp: "えき|eki", id: "Stasiun kereta" },
            { jp: "おちゃ|ocha", id: "Teh hijau" }
          ]
        },
        {
          type: "match",
          prompt: "Cocokkan huruf Hiragana dengan cara bacanya!",
          pairs: [
            ["あ|a", "Bunyi A"],
            ["い|i", "Bunyi I"],
            ["う|u", "Bunyi U"],
            ["え|e", "Bunyi E"],
            ["お|o", "Bunyi O"]
          ]
        },
        {
          type: "mc",
          prompt: "Manakah huruf Hiragana untuk bunyi 'U'?",
          options: [
            { jp: "う|u", correct: true },
            { jp: "あ|a" },
            { jp: "え|e" },
            { jp: "お|o" }
          ],
          explain: "Benar! Huruf [[う|u]] berbunyi U (seperti pada kata [[うみ|umi]] = laut)."
        }
      ]
    },
    {
      key: "katakana",
      name: "Katakana Vokal",
      long: "5 Huruf Vokal Katakana (ア・イ・ウ・エ・オ)",
      icon: "fire",
      intro: "Sekarang kita kenalan dengan Katakana! Bunyinya persis sama dengan Hiragana, tetapi bentuknya lebih kaku dan bersudut tajam.",
      points: [
        "Bunyi Katakana vokal sama: A, I, U, E, O",
        "Goresan Katakana lurus, tegas, dan bersudut",
        "Sering dijumpai di plang toko, kafe, nama barang impor, dan anime!"
      ],
      steps: [
        {
          type: "concept",
          title: "Kembaran Kaku: Katakana Vokal",
          body: "Bandingkan bentuk Hiragana vs Katakana:\n\n• [[あ|a]] (Hiragana) vs [[ア|a]] (Katakana)\n• [[い|i]] (Hiragana) vs [[イ|i]] (Katakana)\n• [[う|u]] (Hiragana) vs [[ウ|u]] (Katakana)\n• [[え|e]] (Hiragana) vs [[エ|e]] (Katakana)\n• [[お|o]] (Hiragana) vs [[オ|o]] (Katakana)\n\nKeduanya dilafalkan sama persis: <b>A - I - U - E - O</b>!",
          tip: "Lihat bagaimana huruf Katakana seperti digambar memakai penggaris dengan sudut-sudut tegas."
        },
        {
          type: "vocab",
          title: "Kosakata Populer Katakana",
          body: "Dengarkan kosakata serapan yang sering kamu jumpai di Jepang:",
          items: [
            { jp: "アイス|aisu", id: "Es krim (Ice cream)" },
            { jp: "アニメ|anime", id: "Anime / Animasi" },
            { jp: "オレンジ|orenji", id: "Jeruk / Warna oranye" }
          ]
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: "ア|a", claim: "Katakana ini berbunyi 'A'." },
          answer: true,
          explain: "Benar! [[ア|a]] adalah huruf Katakana untuk bunyi 'a'."
        },
        {
          type: "swipe",
          prompt: "Benar atau salah?",
          card: { jp: "イ|i", claim: "Katakana ini berbunyi 'O'." },
          answer: false,
          explain: "Salah! [[イ|i]] adalah Katakana untuk bunyi 'i', bukan 'o'. Bunyi 'o' adalah [[オ|o]]."
        },
        {
          type: "match",
          prompt: "Cocokkan pasangan Hiragana dan Katakana yang sama bunyinya!",
          pairs: [
            ["あ|a", "ア (A)"],
            ["い|i", "イ (I)"],
            ["う|u", "ウ (U)"],
            ["え|e", "エ (E)"],
            ["お|o", "オ (O)"]
          ]
        }
      ]
    },
    {
      key: "boss",
      name: "Boss Challenge",
      long: "Ujian Penjaga Gerbang Kana",
      icon: "crown",
      intro: "Penjaga Gerbang Kana menantangmu membuktikan pemahaman Hiragana & Katakana sebelum kamu menjelajahi pulau berikutnya!",
      points: [
        "HP 3 kesempatan — hati-hati jangan sampai salah 3 kali!",
        "Kombinasi soal Hiragana, Katakana, dan penerapannya",
        "Raih 3 bintang untuk menuntaskan Bab 0!"
      ],
      steps: [
        {
          type: "mc",
          prompt: "Manakah huruf Hiragana untuk bunyi 'A'?",
          options: [
            { jp: "あ|a", correct: true },
            { jp: "お|o" },
            { jp: "い|i" },
            { jp: "え|e" }
          ],
          explain: "Keren! [[あ|a]] adalah huruf Hiragana pertama."
        },
        {
          type: "mc",
          prompt: "Huruf Katakana [[イ|i]] memiliki bunyi yang sama dengan Hiragana...",
          options: [
            { jp: "い|i", correct: true },
            { jp: "う|u" },
            { jp: "ア|a" },
            { jp: "エ|e" }
          ],
          explain: "Tepat! [[イ|i]] (Katakana) dan [[い|i]] (Hiragana) sama-sama dibaca 'i'."
        },
        {
          type: "mc",
          prompt: "Kata 'Es Krim' (Aisu) ditulis dalam Katakana menjadi...",
          options: [
            { jp: "アイス|aisu", correct: true },
            { jp: "あさ|asa" },
            { jp: "いぬ|inu" },
            { jp: "えき|eki" }
          ],
          explain: "Hebat! [[アイス|aisu]] adalah kata serapan (Ice Cream) yang ditulis dengan Katakana."
        },
        {
          type: "mc",
          prompt: "Ada berapa huruf vokal dasar dalam bahasa Jepang?",
          options: [
            { text: "5 huruf (A, I, U, E, O)", correct: true },
            { text: "7 huruf (A, I, U, E, O, Ya, Yu)" },
            { text: "3 huruf (A, I, U)" },
            { text: "10 huruf" }
          ],
          explain: "Mantap! 5 vokal dasar bahasa Jepang adalah A, I, U, E, O."
        },
        {
          type: "mc",
          prompt: "Huruf manakah di bawah ini yang merupakan Katakana?",
          options: [
            { jp: "エ|e", correct: true },
            { jp: "あ|a" },
            { jp: "う|u" },
            { jp: "お|o" }
          ],
          explain: "Luar biasa! [[エ|e]] bersudut tegas dan merupakan Katakana (bunyi 'e')."
        }
      ]
    }
  ]
};

window.BAB0 = {
  unit: {
    label: "Bab 0",
    title: "かな|kana",
    sub: "Perkenalan Huruf Hiragana & Katakana"
  },
  stage: STAGE_0,
  stages: {
    b0: STAGE_0
  }
};
