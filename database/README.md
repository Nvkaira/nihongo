# Panduan Integrasi MySQL — Nihongo Quest

Panduan ini disiapkan khusus untuk memenuhi instruksi guru: **"Databasenya pakai MySQL saja."**

---

## 1. Konsep Arsitektur (Untuk Dijelaskan ke Guru)

Aplikasi web **Nihongo Quest** berjalan di sisi client/browser (HTML5, JavaScript, SVG) dan di-deploy ke **GitHub Pages**.

> [!IMPORTANT]
> **Mengapa Browser Tidak Boleh & Tidak Bisa Konek Langsung ke MySQL?**
> 1. **Keamanan (Security)**: Jika username & password database ditaruh di JavaScript frontend, siapa pun dapat membuka `Inspect Element (F12)` dan melihat password MySQL, lalu merusak database.
> 2. **Protokol Jaringan**: Browser hanya dapat berkomunikasi via protokol HTTP/HTTPS (Web API), bukan soket TCP langsung ke port `3306` MySQL.

Oleh karena itu, arsitektur standar industri yang benar adalah **3-Tier Architecture**:
```
[Frontend Web / GitHub Pages]
        │
        ▼ (HTTP REST API / JSON via fetch)
[Backend API Server: Node.js Express / PHP]
        │
        ▼ (Koneksi SQL internal aman)
[Database MySQL: localhost / phpMyAdmin / Cloud]
```

---

## 2. Cara Setup Database MySQL di phpMyAdmin / XAMPP

1. Buka **XAMPP Control Panel**, nyalakan modul **Apache** dan **MySQL**.
2. Buka browser ke: `http://localhost/phpmyadmin/`
3. Klik tab **Import** (atau buat database baru bernama `nihongo_quest`).
4. Pilih file: [`database/schema.sql`](file:///c:/Users/kakha/OneDrive/Dokumen/Nihongo/database/schema.sql).
5. Klik **Go / Kirim**. 
   - 4 Tabel relasional otomatis terbentuk:
     - `users` (id, username, email, password, role)
     - `user_progress` (user_id, active_stage_id, xp_total, hp, stars_by_json, nodes_json)
     - `user_study_dates` (streak harian)
     - `user_read_books` (buku yang sudah dibaca)

---

## 3. Menjalankan Backend API

Pilih salah satu opsi yang paling sesuai dengan mata pelajaran di sekolah:

### Opsi A: Node.js Express (Modern & Direkomendasikan)
File: [`database/server.js`](file:///c:/Users/kakha/OneDrive/Dokumen/Nihongo/database/server.js)

1. Buka terminal di folder `database`:
   ```bash
   cd database
   npm init -y
   npm install express mysql2 cors
   ```
2. Jalankan server:
   ```bash
   node server.js
   ```
3. API aktif di `http://localhost:3000`.

---

### Opsi B: PHP XAMPP (Sangat Mudah untuk Tugas Sekolah)
File: [`database/api.php`](file:///c:/Users/kakha/OneDrive/Dokumen/Nihongo/database/api.php)

1. Salin file `database/api.php` ke folder `C:\xampp\htdocs\nihongo_api\index.php`.
2. API langsung aktif tanpa install apa pun di `http://localhost/nihongo_api/index.php`.

---

## 4. Cara Menghubungkan Frontend Web (`app.js`) ke Backend API

Di `app.js`, kita bisa menambahkan konfigurasi endpoint API:
```javascript
const API_URL = "http://localhost:3000/api"; // Atau http://localhost/nihongo_api/index.php?action=

// Contoh kirim progres ke MySQL saat pemain menyelesaikan stage:
async function syncProgressToMySQL(progressData) {
  try {
    const res = await fetch(`${API_URL}/progress/sync`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(progressData),
    });
    return await res.json();
  } catch (err) {
    console.warn("Offline: Data tetap tersimpan aman di localStorage browser.", err);
  }
}
```

Dengan sistem ini:
- **Offline / GitHub Pages publik**: Tetap dapat dimainkan dengan lancar menggunakan `localStorage`.
- **Online / Dinilai oleh Guru**: Data langsung tersimpan rapi dan persisten di database **MySQL**!
