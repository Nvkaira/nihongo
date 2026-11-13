-- ====================================================================
-- NIHONGO QUEST — DATABASE SCHEMA (MySQL 5.7+ / MySQL 8.0+)
-- Sistem Database Pengguna, Progres Belajar, Streak, dan Riwayat Baca
-- ====================================================================

CREATE DATABASE IF NOT EXISTS `nihongo_quest` 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE `nihongo_quest`;

-- 1. TABEL PENGGUNA (users)
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password_hash` VARCHAR(255) NOT NULL,
    `provider` ENUM('local', 'google') DEFAULT 'local',
    `avatar` VARCHAR(255) DEFAULT 'default_avatar.png',
    `role` ENUM('student', 'teacher', 'admin') DEFAULT 'student',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_users_username` (`username`),
    INDEX `idx_users_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. TABEL PROGRES BELAJAR (user_progress)
CREATE TABLE IF NOT EXISTS `user_progress` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL UNIQUE,
    `active_stage_id` VARCHAR(20) DEFAULT 's1',
    `xp_total` INT UNSIGNED DEFAULT 0,
    `hp` TINYINT UNSIGNED DEFAULT 3,
    `combo_best` INT UNSIGNED DEFAULT 0,
    `stars_by_json` JSON NULL COMMENT 'Data bintang per stage dalam format JSON {"s1":3, "s2":2}',
    `nodes_json` JSON NULL COMMENT 'Status status pulau {"s1":"done", "s2":"current"}',
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. TABEL STREAK BELAJAR HARIAN (user_study_dates)
CREATE TABLE IF NOT EXISTS `user_study_dates` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `study_date` DATE NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `uk_user_date` (`user_id`, `study_date`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. TABEL BUKU READER TERBACA (user_read_books)
CREATE TABLE IF NOT EXISTS `user_read_books` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `book_key` VARCHAR(50) NOT NULL COMMENT 'Format: b1_materi, b1_jep, dst.',
    `read_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `uk_user_book` (`user_id`, `book_key`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. DATA SAMPLE / AWAL UNTUK PENGUJIAN
INSERT IGNORE INTO `users` (`id`, `username`, `email`, `password_hash`, `provider`, `role`) VALUES
(1, 'kakha', 'kakha@nihongoquest.id', '$2b$10$abcdefghijklmnopqrstuvwxSampleHashKakha123456789', 'local', 'student'),
(2, 'sensei', 'guru@nihongoquest.id', '$2b$10$abcdefghijklmnopqrstuvwxSampleHashSensei12345678', 'local', 'teacher');

INSERT IGNORE INTO `user_progress` (`user_id`, `active_stage_id`, `xp_total`, `hp`, `combo_best`, `stars_by_json`) VALUES
(1, 's3_1', 850, 3, 12, '{"s1": 3, "s2": 3, "s3": 3, "s2_1": 3, "s2_2": 3, "s2_3": 3}');

INSERT IGNORE INTO `user_study_dates` (`user_id`, `study_date`) VALUES
(1, CURRENT_DATE());
