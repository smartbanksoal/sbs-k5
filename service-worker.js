const CACHE_NAME = 'kuis-kelas-5-v2';
const urlsToCache = [
 './index.html',
  './icon-512.png',
  './baner-sbs.png',
  
  // Daftar 11 file soal:
  './soal/IND-K5-S2-B5-HOTS.html',
  './soal/IND-K5-S2-B6-HOTS.html',
  './soal/IND-K5-S2-B7-HOTS.html',
  './soal/IND-K5-S2-B8-HOTS.html',
  './soal/IPAS-K5-S2-B5-HOTS.html',
  './soal/IPAS-K5-S2-B6-HOTS.html',
  './soal/IPAS-K5-S2-B7-HOTS.html',
  './soal/IPAS-K5-S2-B8-HOTS.html',
  './soal/MTK-K5-S2-B6-HOTS.html',
  './soal/MTK-K5-S2-B7-HOTS.html',
  './soal/MTK-K5-S2-B8-HOTS.html',
 './soal/gambar/email-format.jpg',
  './soal/gambar/infografis-fakta.jpg',
  './soal/gambar/poster-akronim.jpg',
  './soal/gambar/siklus-hujan.jpg',
  './soal/gambar/berita-opini.jpg',
  './soal/gambar/soal5_plang_jalan.jpg',
  './soal/gambar/soal10_kihajar.jpg',
  './soal/gambar/soal15_struk.jpg',
  './soal/gambar/soal20_rambu.jpg',
  './soal/gambar/soal25_pengumuman.jpg',
  './soal/gambar/gambar_soal3_sampah.jpg',
  './soal/gambar/gambar_soal8_asappabrik.jpg',
  './soal/gambar/gambar_soal12_bersihpantai.jpg',
  './soal/gambar/gambar_soal17_panel_surya.jpg',
  './soal/gambar/gambar_soal23_siklus_air.jpg',
  './soal/gambar/gambar_buang_sampah_sungai.jpg',
  './soal/gambar/gambar_gotong_royong.jpg',
  './soal/gambar/gambar_hemat_air.jpg',
  './soal/gambar/gambar_hutan_gundul.jpg',
  './soal/gambar/gambar_pelari_tercepat.jpg',
  './soal/gambar/gambar_sistem_pencernaan.jpg',
  './soal/gambar/gambar_orang_berlari.jpg',
  './soal/gambar/gambar_paru_paru.jpg',
  './soal/gambar/gambar_piramida_makanan.jpg',
  './soal/gambar/gambar_siklus_pertumbuhan.jpg',
  './soal/gambar/garis_wallace.jpg',
  './soal/gambar/hutan_bakau.jpg',
  './soal/gambar/panel_surya.jpg',
  './soal/gambar/peta_angin.jpg',
  './soal/gambar/reboisasi.jpg',
  './soal/gambar/soal_16.jpg',
  './soal/gambar/soal_17.jpg',
  './soal/gambar/soal_18.jpg',
  './soal/gambar/soal_19.jpg',
  './soal/gambar/soal_20.jpg',
  './soal/gambar/hutan_gundul.jpg',
  './soal/gambar/asap_kendaraan.jpg',
  './soal/gambar/tanah_longsor.jpg',
  './soal/gambar/es_kutub.jpg',
  './soal/gambar/sungai_tercemar.jpg',
  './soal/gambar/jam_0400.jpg',
  './soal/gambar/busur_derajat.jpg',
  './soal/gambar/atap_rumah.jpg',
  './soal/gambar/gunting_terbuka.jpg',
  './soal/gambar/sudut_meja.jpg',
  './soal/gambar/soal_5.jpg',
  './soal/gambar/soal_1.jpg',
  './soal/gambar/soal_2.jpg',
  './soal/gambar/soal_3.jpg',
  './soal/gambar/soal_4.jpg',
  './soal/gambar/gambar_piktogram_panen.jpg',
  './soal/gambar/gambar_diagram_batang_ganda.jpg',
  './soal/gambar/gambar_diagram_horizontal.jpg',
  './soal/gambar/gambar_analisis_piktogram.jpg',
  './soal/gambar/gambar_tabel_frekuensi.jpg'
];

// Menyimpan file ke cache saat aplikasi pertama kali dibuka
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Mengambil file dari cache saat aplikasi berjalan offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Gunakan file dari cache
        }
        return fetch(event.request); // Ambil dari internet jika tidak ada di cache
      })
  );

});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          // Jika nama cache di browser tidak sama dengan cacheName baru, hapus!
          if (cache !== cacheName) {
            console.log('Menghapus cache lama yang foldernya salah...');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
