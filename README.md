# 🇯🇵 Nihongo Quest (Nihonesia)

Aplikasi web interaktif gamifikasi untuk belajar bahasa Jepang berbasis kurikulum Minna no Nihongo dengan visual bergaya Memphis Pop, maskot Azu si anjing laut, bagan lengkap aksara Kana, dan modul petualangan kepulauan.

---

## 📁 Struktur Direktori

```text
Nihongo/
├── dist/                      # [PRODUKSI] Versi rilis siap deploy
│   ├── assets/                # Aset SVG & grafis bab
│   ├── audio/                 # Berkas audio MP3 pelafalan
│   ├── shared/                # Data kurikulum bab & base CSS
│   ├── app.js                 # Logika gameplay & state utama
│   ├── style.css              # Stylesheet Memphis Pop
│   ├── index.html             # Halaman peta utama
│   ├── kana_chart.html        # Modul Bagan Lengkap Kana (104 huruf)
│   ├── reader.html            # Modul Pembaca Buku Minna no Nihongo
│   └── card_template.png      # Template frame kartu jahitan asli
│
├── mockups/                   # [PENGEMBANGAN] Lingkungan pengembangan
│   ├── memphis-v2/            # Kode sumber aktif (app, css, html)
│   └── shared/                # Data bab (bab0 s/d bab6) & engine
│
├── kurikulum/                 # Referensi materi & silabus sumber (Bab 1–10)
│   └── bab-*-sumber.md
│
├── database/                  # Skrip & skema backend MySQL / API
│   ├── api.php
│   ├── schema.sql
│   └── server.js
│
├── scripts/                   # Utilitas otomatisasi
│   └── build.js               # Skrip sinkronisasi mockups/ -> dist/
│
├── index.html                 # Pengarah otomatis (redirector) root ke dist/
├── AI_CHECKPOINT.md           # Log catatan pengembangan
└── .gitignore                 # Filter berkas sementara & log
```

---

## 🚀 Cara Menjalankan

### 1. Membuka Langsung di Browser
Buka file `index.html` pada root folder atau langsung buka `dist/index.html`.

### 2. Menggunakan Server Lokal
Jalankan live server (misal dengan `npx serve` atau ekstensi Live Server):
```bash
# Melayani folder dist untuk produksi
npx serve dist -p 3000

# Atau melayani seluruh workspace
npx serve . -p 3000
```

### 3. Sinkronisasi Perubahan
Jika melakukan pengeditan di `mockups/memphis-v2/`, cukup jalankan:
```bash
node scripts/build.js
```
Skrip ini akan menyalin seluruh perubahan kode, gaya, dan data ke folder `dist/` secara otomatis.
