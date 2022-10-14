# Judul Aplikasi
...

## Deskripsi Masalah
Sulitnya orang untuk mengetahui kondisi rute ke tempat yang akan dituju

## Deskripsi Solusi
Membuat suatu media dimana user dapat mengunggah kondisi di suatu wilayah dengan keterangan waktu, foto, deskripsi,  dan titik lokasi

## Use Case
- User 1 dapat mengunggah kondisi di suatu wilayah
- User 2 dapat mengetahui unggahan User 1 berdasarkan lokasi yang dicari, daftar unggahan disortir berdasarkan unggahan terbaru

## Struktur Data

### Order
Method | Route | Parameter | Body | Response | Super Admin | Admin | Customer
---|---|---|---|---|---|---|---
GET | /order | - | - | All Order | o | o | x


### posts
Nama Atribut | Tipe Data | Contoh
---|---|---
ID Post | String | w098jiowfjeu213hdzxn
Pengunggah | String | johndoe@example.com
Nama Tempat | String | Jalan Raya Pangalengan
Kategori | int | 4
Deskripsi | String | Pukul 10:20, kemacetan masih terjadi dari wilayah Kamasan hingga wilayah Cimaung
Waktu | DateTime | 2022-06-12 08:23:12
🌏 Koordinat | poin | [106.03794 -6.39284693]

### users
Nama Atribut | Tipe Data | Contoh
---|---|---
User ID | String | oiu214oi2hfmlnoi39
Email | String | johndoe@example.com
Nama User | String | John Doe


## Mockup UX