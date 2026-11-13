/**
 * Nihongo Quest — REST API Backend (Node.js + Express + MySQL)
 * Menghubungkan antarmuka Frontend (GitHub Pages / Web) dengan Database MySQL.
 *
 * Jalankan dengan:
 * 1. npm install express mysql2 cors dotenv
 * 2. node server.js
 */

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Konfigurasi koneksi MySQL (sesuaikan dengan XAMPP atau MySQL server milikmu)
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nihongo_quest',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

let pool;
try {
  pool = mysql.createPool(dbConfig);
  console.log('✅ Pool koneksi MySQL berhasil diinisialisasi.');
} catch (err) {
  console.error('❌ Gagal membuat koneksi database:', err.message);
}

// 1. Endpoint Registrasi Pengguna Baru
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ ok: false, message: 'Semua field wajib diisi.' });
    }

    // Periksa apakah user/email sudah terdaftar
    const [existing] = await pool.query(
      'SELECT id FROM users WHERE username = ? OR email = ? LIMIT 1',
      [username.trim(), email.trim()]
    );
    if (existing.length > 0) {
      return res.status(409).json({ ok: false, message: 'Username atau email sudah digunakan.' });
    }

    // Simpan user (di produksi, gunakan bcrypt untuk hash password)
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password_hash, provider) VALUES (?, ?, ?, ?)',
      [username.trim(), email.trim().toLowerCase(), password, 'local']
    );
    const userId = result.insertId;

    // Buat row progress default
    await pool.query(
      'INSERT INTO user_progress (user_id, active_stage_id, xp_total, hp, stars_by_json) VALUES (?, ?, ?, ?, ?)',
      [userId, 's1', 0, 3, '{}']
    );

    res.json({
      ok: true,
      user: { id: userId, username, email: email.toLowerCase() },
      message: 'Registrasi berhasil!',
    });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// 2. Endpoint Login
app.post('/api/login', async (req, res) => {
  try {
    const { identifier, password } = req.body; // identifier bisa berupa username atau email
    if (!identifier || !password) {
      return res.status(400).json({ ok: false, message: 'Identitas & password wajib diisi.' });
    }

    const [users] = await pool.query(
      'SELECT id, username, email, password_hash, avatar, role FROM users WHERE username = ? OR email = ? LIMIT 1',
      [identifier.trim(), identifier.trim().toLowerCase()]
    );

    if (users.length === 0) {
      return res.status(401).json({ ok: false, message: 'Akun tidak ditemukan.' });
    }

    const user = users[0];
    if (user.password_hash !== password) {
      return res.status(401).json({ ok: false, message: 'Password salah.' });
    }

    // Ambil progres pengguna
    const [progress] = await pool.query(
      'SELECT active_stage_id, xp_total, hp, combo_best, stars_by_json, nodes_json FROM user_progress WHERE user_id = ?',
      [user.id]
    );

    // Ambil tanggal belajar (streak)
    const [dates] = await pool.query(
      'SELECT study_date FROM user_study_dates WHERE user_id = ? ORDER BY study_date ASC',
      [user.id]
    );

    // Ambil riwayat buku yang sudah dibaca
    const [books] = await pool.query(
      'SELECT book_key FROM user_read_books WHERE user_id = ?',
      [user.id]
    );

    res.json({
      ok: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
      progress: progress[0] || null,
      studyDates: dates.map((d) => d.study_date.toISOString().split('T')[0]),
      readBooks: books.map((b) => b.book_key),
    });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// 3. Endpoint Sinkronisasi Progres Belajar (Save Progress)
app.post('/api/progress/sync', async (req, res) => {
  try {
    const { userId, activeStageId, xpTotal, hp, starsBy, nodes, studyDate, readBooks } = req.body;
    if (!userId) {
      return res.status(400).json({ ok: false, message: 'UserId wajib disertakan.' });
    }

    // Update / Insert user_progress
    await pool.query(
      `INSERT INTO user_progress (user_id, active_stage_id, xp_total, hp, stars_by_json, nodes_json)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         active_stage_id = VALUES(active_stage_id),
         xp_total = GREATEST(xp_total, VALUES(xp_total)),
         hp = VALUES(hp),
         stars_by_json = VALUES(stars_by_json),
         nodes_json = VALUES(nodes_json)`,
      [
        userId,
        activeStageId || 's1',
        xpTotal || 0,
        hp || 3,
        JSON.stringify(starsBy || {}),
        JSON.stringify(nodes || []),
      ]
    );

    // Catat streak hari ini jika ada
    if (studyDate) {
      await pool.query(
        'INSERT IGNORE INTO user_study_dates (user_id, study_date) VALUES (?, ?)',
        [userId, studyDate]
      );
    }

    // Catat buku jika ada
    if (Array.isArray(readBooks)) {
      for (const bookKey of readBooks) {
        await pool.query(
          'INSERT IGNORE INTO user_read_books (user_id, book_key) VALUES (?, ?)',
          [userId, bookKey]
        );
      }
    }

    res.json({ ok: true, message: 'Progres berhasil disimpan ke MySQL!' });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server Backend Nihongo Quest berjalan di http://localhost:${PORT}`);
});
