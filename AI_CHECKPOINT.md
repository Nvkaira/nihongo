# AI_CHECKPOINT — Nihongo Edu App

_Terakhir diperbarui: 2026-10-28_

## Status Terakhir
- **Kepulauan Bab 1 s/d Bab 5 Selesai & Playable Penuh:**
  - **Bab 1 (Perkenalan Diri):**
    - `s1` (Stage 1-1: は・です・じゃありません)
    - `s2` (Stage 1-2: か・も)
    - `s3` (Stage 1-3: の・さん)
  - **Bab 2 (Benda di Sekitarku):**
    - `s2_1` (Stage 2-1: これ・それ・あれ)
    - `s2_2` (Stage 2-2: この・その・あの・どれ)
    - `s2_3` (Stage 2-3: Milik Siapa [の] & Sopan Santun [ほんの気持ち])
  - **Bab 3 (Tempat & Perbelanjaan):**
    - `s3_1` (Stage 3-1: ここ・そこ・あそこ / どこ / こちら)
    - `s3_2` (Stage 3-2: Lantai [階]・Harga [いくra]・Asal Negara / Perusahaan)
  - **Bab 4 (Waktu & Jadwal Harian):**
    - `s4_1` (Stage 4-1: Jam [〜時]・Menit [〜分]・Hari [〜曜日]・今 何時ですか)
    - `s4_2` (Stage 4-2: Rutinitas Kata Kerja [〜ます/〜ません/〜ました]・Dari~Sampai [〜から〜まで]・Partikel Waktu [に])
  - **Bab 5 (Perjalanan, Transportasi & Kalender):**
    - `s5_1` (Stage 5-1: Pergi/Datang/Pulang [行きます/来ます/帰ります]・Arah [へ]・Kendaraan [で]・Jalan Kaki [歩いて])
    - `s5_2` (Stage 5-2: Tanggal & Bulan [〜月〜日]・Kapan [いつ]・Bersama Teman [と]・Sendiri [一人で])
  - **Gerbang Bab 6:**
    - `b6` (Boss Gate Bab 6: Makanan & Kegiatan [〜を・〜で・〜ませんか]) — Terkunci hingga Bab 5 ditamatkan.
- **Tampilan Peta Dikembalikan Sesuai Permintaan (Pre-Expansion Original):**
  - **Lautan Kartu Bergaris Tebal (Memphis Style Asli):** Peta kembali ke bentuk rounded card (`rx="30"`, `stroke: var(--ink); stroke-width: 3;`) dengan kontainer standar yang rapi (`max-width: 760px; padding: 4px 16px 190px;`).
  - **Elemen Perluasan Dihapus Bersih:** Seluruh ornamen pantai, panorama Gunung Fuji, semak bunga, pantulan air, dan kapal pesiar mini telah dihilangkan secara tuntas sehingga tampilan kembali bersih dan fokus pada kepulauan.
  - **Posisi Pulau & Banner Bab:** Seluruh koordinat pulau (`ISLES`) dan banner bab 1–6 (`x: 200`, `y: 285, 1045, 1805, 2345, 2885, 3425`) berada pada posisi presisi tanpa teks bertumpuk.
- **Widget Statistik Interaktif & Tampilan Dalam (Streak, XP, Bintang):**
  - **Tombol Bulat Kustom (Figma Assets):** 3 tombol bulat dengan ikon vektor Figma asli (Api bergradasi untuk Streak, Petir 3D dual-layer untuk XP, dan Bintang kuning lucu untuk Stars).
  - **Tampilan Dalam (Expanded Capsule Card):** Saat tombol diklik, bertransformasi halus dengan animasi membal (*Memphis spring pop*) menjadi kartu kapsul horizontal lengkap dengan ornamen Figma asli:
    - *Streak:* Latar gradien oranye-putih + mahkota api melayang di atas + badge lingkaran api membara dengan gradasi warna api asli (`#FAAA2A` ke `#914343`) dan garis kartun tebal presisi di dalam batas lingkaran (`overflow: hidden;` & sizing terkunci) + tracker 7 hari streak aktif.
    - *XP:* Latar ungu kerajaan `#4C0C90` + ornamen awan bertumpuk + progress bar XP menuju level berikutnya.
    - *Stars:* Latar gradien merah-magenta + taburan bintang kerlap-kerlip kuning-putih + info capaian bintang kepulauan.
  - **Perbaikan Ikon Api (Streak):**
    - Mengatasi isu api meluap ke luar lingkaran dengan mengunci dimensi SVG (`max-width: 65%`, `max-height: 72%`, `width: 44px`, `height: 54px`) dan menambahkan `overflow: hidden;` pada `.card-badge` dan `.badge-glow`.
    - Mengatasi isu warna api hilang/putih dengan memisahkan ID linearGradient (`flameBadgeGrad` vs `flameBtnGrad`), menyertakan layer fallback fill `#FF8A3D`, serta path outline khusus `#1D1B3A` stroke 3.5px sesuai aset Figma asli (`Variant5.svg`).
- **Banner Unit Bab Baru (Presisi 100% Sesuai Figma & Komponen Untitled (6)):**
  - **Frame Kayu & Ornamen Lengkap:**
    - Frame kayu berornamen emas dengan wallpaper motif berlian dan meja kayu (`banner_bg.jpeg`).
    - Streamer pita melengkung di atas (`Vector.svg`) dan di sudut kiri bawah (`Vector 87.svg`).
    - Hiasan sudut bunga sakura pink (`Repeat group 13.svg`) dan bintang kuning berkilau (`Vector 32-36`).
    - Klaster 3 bintang kuning/putih di sudut kanan bawah (`Vector 36-38`).
  - **Papan Kiri (Left Board - Vector 64.svg):**
    - Header: Judul 3D `BAB 3` (`BAB 3.svg`) atau judul bab dinamis + chip navigasi interaktif `Bab 1` s/d `Bab 5`.
    - Area Materi: Judul kanji/hiragana ber-furigana/ruby, subtitle deskripsi bab, dan 4 chips poin tata bahasa/kosakata penting yang otomatis ter-update saat berpindah bab.
    - Pita Slogan: Pita cokelat miring bertuliskan *"Tantang Pulau Dan Dapatkan Bintang!"* (`Vector-1.svg`).
  - **Papan Kanan (Right Board - Vector 65.svg):**
    - Counter Progres Pulau 3D: Tampilan angka miring staggered `6 / 12` (`6.svg`, `Untitled.svg`, `12.svg`) yang merefleksikan jumlah pulau kepulauan yang telah diselesaikan.
    - Maskot Azu: Azu si anjing laut mengenakan topi penyihir toska dengan pita magenta dan bintang kuning (`Group 938.svg`).
    - 3 Miniatur Pulau di Meja Kayu: Model pulau mini ungu (`Pulau Mini Ungu Bergaya Kawaii 2.svg`), pulau gerbang torii (`Ikon Pulau Torii Berwarna-warni 2.svg`), dan pulau platform dokumen/pensil (`Ikon Pulau Platform dengan Dokumen dan Pensil 3.svg`).
  - **Responsif Desktop & Mobile:**
    - Desktop: Layout lebar proporsional dengan shadow halus dan tipografi tajam.
    - Mobile (hingga 360-400px): Chips navigasi bab tetap rapat satu baris, grammar chips disederhanakan tanpa tumpang tindih, dan semua elemen tetap proporsional.
  - **Widget 3 Statistik Tetap Aktif:** Tombol Streak, XP, dan Bintang beserta modal pop-up interaktifnya tetap terpasang aktif di bawah banner bab.

## File Aktif
```
AI_CHECKPOINT.md
kurikulum/bab-01-sumber.md s/d bab-10-sumber.md ← kurikulum acuan Bab 1 - Bab 10
mockups/
  shared/bab1-data.js             ← data stage Bab 1 (s1, s2, s3)
  shared/bab2-data.js             ← data stage Bab 2 (s2_1, s2_2, s2_3)
  shared/bab3-data.js             ← data stage Bab 3 (s3_1, s3_2)
  shared/bab4-data.js             ← data stage Bab 4 (s4_1, s4_2)
  shared/bab5-data.js             ← data stage Bab 5 (s5_1, s5_2)
  shared/engine.js                ← alur & logika kuis (vanilla JS)
  shared/base.css                 ← struktur dasar bersama
  memphis-v2/app.js               ← controller peta, rute Bab 1-5, maskot Azu, WebAudio
  memphis-v2/index.html           ← entry point prototipe aktif
  memphis-v2/style.css            ← visual Memphis Pop v2
```

## Mekanik & Desain yang Terkunci
- Kuis 100% interaktif berbasis tap (tanpa ketik manual keyboard).
- 4 Fase per Stage:
  1. **Fundamental** (Konsep visual + Kosakata ber-TTS)
  2. **Latihan Terpandu** (Pilihan ganda, Susun kata / Wordbank, Cocokkan pasangan kata, Swipe card)
  3. **Trivia & Budaya** (Kartu flip fakta mitos/realita Jepang, Wawasan sekolah/sosial)
  4. **Boss Challenge** (3 Nyawa/HP, Timer bonus kilat 15 detik, XP & combo)
- Romaji toggle on/off tersimpan di `localStorage`.
- Efek suara WebAudio terintegrasi tanpa file audio eksternal.
