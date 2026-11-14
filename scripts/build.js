/**
 * Nihongo Quest - Production Build & Sync Script
 * Sinkronisasi otomatis dari mockups/memphis-v2/ ke dist/
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'mockups', 'memphis-v2');
const SHARED_SRC = path.join(ROOT, 'mockups', 'shared');
const DIST = path.join(ROOT, 'dist');
const SHARED_DIST = path.join(DIST, 'shared');

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('🚀 Menjalankan build & sinkronisasi dist/ ...');

// 1. Salin file aplikasi utama
const coreFiles = [
  'app.js',
  'style.css',
  'kana_chart.html',
  'card_template.png',
  'reader.html',
  'reader_manifest.js',
  'banner_template.js',
  'auth_assets.js'
];

coreFiles.forEach(file => {
  const s = path.join(SRC, file);
  const d = path.join(DIST, file);
  if (fs.existsSync(s)) {
    copyFile(s, d);
    console.log(`  ✓ ${file}`);
  }
});

// 2. Salin folder aset & audio
copyDir(path.join(SRC, 'assets'), path.join(DIST, 'assets'));
console.log('  ✓ assets/');
copyDir(path.join(SRC, 'audio'), path.join(DIST, 'audio'));
console.log('  ✓ audio/');

// 3. Salin shared data ke dist/shared
copyDir(SHARED_SRC, SHARED_DIST);
console.log('  ✓ shared/ (bab data & base css)');

// 4. Adaptasi index.html (sesuaikan path ../shared/ -> shared/)
const indexSrc = path.join(SRC, 'index.html');
if (fs.existsSync(indexSrc)) {
  let html = fs.readFileSync(indexSrc, 'utf8');
  html = html.replace(/\.\.\/shared\//g, 'shared/');
  fs.writeFileSync(path.join(DIST, 'index.html'), html, 'utf8');
  console.log('  ✓ index.html (path ../shared/ disesuaikan ke shared/)');
}

console.log('✅ Sinkronisasi dist/ selesai dengan sukses!');
