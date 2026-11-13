<?php
/**
 * Nihongo Quest — REST API Backend (PHP + MySQL PDO)
 * Cocok untuk XAMPP / Apache / phpMyAdmin di lingkungan sekolah/kampus.
 * 
 * Taruh file ini di folder htdocs XAMPP: C:\xampp\htdocs\nihongo_api\index.php
 */

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$db_host = 'localhost';
$db_name = 'nihongo_quest';
$db_user = 'root';
$db_pass = '';

try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Gagal konek MySQL: ' . $e->getMessage()]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true) ?? [];
$action = $_GET['action'] ?? ($input['action'] ?? '');

switch ($action) {
    case 'register':
        $username = trim($input['username'] ?? '');
        $email = strtolower(trim($input['email'] ?? ''));
        $password = $input['password'] ?? '';

        if (!$username || !$email || !$password) {
            http_response_code(400);
            echo json_encode(['ok' => false, 'message' => 'Semua kolom wajib diisi.']);
            exit;
        }

        $stmt = $pdo->prepare("SELECT id FROM users WHERE username = ? OR email = ? LIMIT 1");
        $stmt->execute([$username, $email]);
        if ($stmt->fetch()) {
            http_response_code(409);
            echo json_encode(['ok' => false, 'message' => 'Username atau email sudah digunakan.']);
            exit;
        }

        $stmt = $pdo->prepare("INSERT INTO users (username, email, password_hash, provider) VALUES (?, ?, ?, 'local')");
        $stmt->execute([$username, $email, $password]);
        $userId = $pdo->lastInsertId();

        $pdo->prepare("INSERT INTO user_progress (user_id, active_stage_id, xp_total, hp, stars_by_json) VALUES (?, 's1', 0, 3, '{}')")
            ->execute([$userId]);

        echo json_encode(['ok' => true, 'user' => ['id' => $userId, 'username' => $username, 'email' => $email], 'message' => 'Registrasi berhasil!']);
        break;

    case 'login':
        $identifier = trim($input['identifier'] ?? '');
        $password = $input['password'] ?? '';

        $stmt = $pdo->prepare("SELECT id, username, email, password_hash, avatar, role FROM users WHERE username = ? OR email = ? LIMIT 1");
        $stmt->execute([$identifier, strtolower($identifier)]);
        $user = $stmt->fetch();

        if (!$user || $user['password_hash'] !== $password) {
            http_response_code(401);
            echo json_encode(['ok' => false, 'message' => 'Username/email atau password salah.']);
            exit;
        }

        $stmtProg = $pdo->prepare("SELECT active_stage_id, xp_total, hp, combo_best, stars_by_json, nodes_json FROM user_progress WHERE user_id = ?");
        $stmtProg->execute([$user['id']]);
        $progress = $stmtProg->fetch();

        $stmtDates = $pdo->prepare("SELECT study_date FROM user_study_dates WHERE user_id = ? ORDER BY study_date ASC");
        $stmtDates->execute([$user['id']]);
        $dates = array_column($stmtDates->fetchAll(), 'study_date');

        $stmtBooks = $pdo->prepare("SELECT book_key FROM user_read_books WHERE user_id = ?");
        $stmtBooks->execute([$user['id']]);
        $books = array_column($stmtBooks->fetchAll(), 'book_key');

        unset($user['password_hash']);
        echo json_encode([
            'ok' => true,
            'user' => $user,
            'progress' => $progress ?: null,
            'studyDates' => $dates,
            'readBooks' => $books
        ]);
        break;

    case 'sync':
        $userId = $input['userId'] ?? 0;
        if (!$userId) {
            http_response_code(400);
            echo json_encode(['ok' => false, 'message' => 'UserId wajib ada.']);
            exit;
        }

        $activeStageId = $input['activeStageId'] ?? 's1';
        $xpTotal = (int)($input['xpTotal'] ?? 0);
        $hp = (int)($input['hp'] ?? 3);
        $starsBy = json_encode($input['starsBy'] ?? []);
        $nodes = json_encode($input['nodes'] ?? []);

        $stmt = $pdo->prepare("INSERT INTO user_progress (user_id, active_stage_id, xp_total, hp, stars_by_json, nodes_json)
            VALUES (?, ?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE
                active_stage_id = VALUES(active_stage_id),
                xp_total = GREATEST(xp_total, VALUES(xp_total)),
                hp = VALUES(hp),
                stars_by_json = VALUES(stars_by_json),
                nodes_json = VALUES(nodes_json)");
        $stmt->execute([$userId, $activeStageId, $xpTotal, $hp, $starsBy, $nodes]);

        if (!empty($input['studyDate'])) {
            $pdo->prepare("INSERT IGNORE INTO user_study_dates (user_id, study_date) VALUES (?, ?)")
                ->execute([$userId, $input['studyDate']]);
        }

        if (!empty($input['readBooks']) && is_array($input['readBooks'])) {
            $bookStmt = $pdo->prepare("INSERT IGNORE INTO user_read_books (user_id, book_key) VALUES (?, ?)");
            foreach ($input['readBooks'] as $bKey) {
                $bookStmt->execute([$userId, $bKey]);
            }
        }

        echo json_encode(['ok' => true, 'message' => 'Progres tersimpan di MySQL!']);
        break;

    default:
        echo json_encode(['ok' => true, 'message' => 'Nihongo Quest MySQL API siap menerima request.']);
        break;
}
