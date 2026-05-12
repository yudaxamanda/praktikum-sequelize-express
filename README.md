# Portal Web UMKM Desa Pematang Johar

Portal web interaktif untuk mempromosikan dan mendukung Usaha Mikro, Kecil, dan Menengah (UMKM) di Desa Pematang Johar. Sistem ini terintegrasi dengan algoritma _Machine Learning_ menggunakan metode **Item-Based Collaborative Filtering** untuk memberikan rekomendasi produk yang cerdas dan personal kepada pengunjung.

Selain direktori UMKM, portal ini dilengkapi dengan fitur "Berita Desa" real-time yang beroperasi layaknya _feed_ media sosial untuk memudahkan penyebaran informasi secara instan.

## 🚀 Fitur Utama

- **Sistem Rekomendasi Pintar:** Menggunakan _Item-Based Collaborative Filtering_ untuk merekomendasikan produk/layanan UMKM berdasarkan preferensi pengguna.
- **Feed Berita Desa (Real-Time):** Fitur berbagi informasi dan berita terkini di desa tanpa memerlukan persetujuan admin, berjalan dinamis seperti beranda Instagram.
- **Direktori UMKM Terpadu:** Etalase digital untuk menampilkan produk, deskripsi, dan kontak pelaku UMKM Desa Pematang Johar.
- **RESTful API:** Arsitektur backend yang kokoh untuk komunikasi data yang lancar antara klien dan server.

## 🛠️ Teknologi yang Digunakan

### Backend (API & Server)

- **Node.js**: _Runtime environment_ JavaScript.
- **Express.js**: Framework backend untuk membangun REST API.
- **Sequelize**: _Object-Relational Mapping_ (ORM) berbasis Promise untuk Node.js.
- **MySQL2**: Driver MySQL untuk Node.js yang mendukung Promise.
- **Cors**: Middleware untuk mengizinkan _Cross-Origin Resource Sharing_.
- **Dotenv**: Modul untuk memuat variabel environment dari file `.env`.

### Frontend (User Interface)

- **React.js**: Library JavaScript untuk membangun antarmuka pengguna.
- **React-Bootstrap**: Framework CSS untuk _styling_ dan komponen UI yang responsif.

### Database & Machine Learning

- **MySQL**: Sistem manajemen basis data relasional.
- **Algoritma ML**: Item-Based Collaborative Filtering.

---

## 📋 Prasyarat

Sebelum menjalankan proyek ini secara lokal, pastikan kamu telah menginstal perangkat lunak berikut:

1.  [Node.js](https://nodejs.org/en/download/) (Versi LTS direkomendasikan)
2.  [MySQL Server](https://dev.mysql.com/downloads/) (XAMPP/MAMP/Native)
3.  [Git](https://git-scm.com/)

---

## ⚙️ Langkah Instalasi & Konfigurasi

### 1. Clone Repositori

```bash
git clone [https://github.com/yudaxamanda/praktikum-sequelize-express.git](https://github.com/yudaxamanda/praktikum-sequelize-express.git)
cd nama-repo-kamu
```

## setup backend

npm install express sequelize mysql2 cors dotenv
npm install --save-dev nodemon

## setup frontend

npm i
npm run dev
