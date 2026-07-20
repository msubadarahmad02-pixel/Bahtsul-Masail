const CACHE_NAME = 'kamus-bahtsu-v3'; // Versi diubah ke v3 karena datanya bertambah lengkap
const assets = [
  '/',
  '/index.html',
  '/manifest.json',
  '/styles.css',
  '/script.js',

  // --- HALAMAN & ASET UTAMA ---
  '/kategori.html',
  '/daftar_rumusan_by_kategori.html',
  '/detail_rumusan.html',
  '/pencarian.html',
  '/perubahan.html',

  // --- MEMORI KANZA ---
  '/memori_kanza.html',
  '/memori_kanza.css',
  '/memori_kanza.js',
  '/data_memori_kanza.json',

  // --- SHOLAWAT ---
  '/sholawat.html',
  '/sholawat.css',
  '/sholawat.js',
  '/data_sholawat.json',

  // --- LIHAT PDF ---
  '/daftar_pdf.html',
  '/lihat_pdf.html',
  '/lihat_pdf.css',
  '/lihat_pdf.js',

  // --- KITAB DIGITAL ---
  '/kitab_digital.html',
  '/kitab_digital.css',
  '/kitab_digital.js',

  // --- LAIN-LAIN ---
  '/lain_lain.html',
  '/lain_lain.css',
  '/lain_lain.js',
  '/warna.css',

  // --- INPUT DATA / ADMIN PANEL ---
  '/tambah_data.html',
  '/tambah_data.css',
  '/tambah_data.js',
  '/tambah_rumusan.html',
  '/tambah_rumusan.css',
  '/tambah_rumusan.js',
  '/tambah_sholawat.html',
  '/tambah_sholawat.css',
  '/tambah_sholawat.js',

  // --- DATABASE KITAB & RUMUSAN (JSON) ---
  '/rumusan_data.json',
  '/kitab_bajuri.json',
  '/kitab_bajuri1.json',
  '/kitab_sanqowi.json',
  '/kitab_sanqowi1.json'
];

// Install Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch Assets
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});
