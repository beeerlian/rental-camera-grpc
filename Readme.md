# Judul Aplikasi
Aplikasi Sewa Kamera 

## Use Case
- Super Admin 1 dapat mengakses seluruh service yang ada pada aplikasi.
- Admin 1 hanya dapat mengakses service hampir semua service kecuali register admin.
- Customer 2 dapat melihat data item (kamera) yang tersedia. Dan melakukan transaksi.

### Order
Method | Route | Parameter | Body | Response | Super Admin | Admin | Customer
---|---|---|---|---|---|---|---
GET | /order | - | - | All Order | o | o | x
POST | /login | - | - | All User | o | o | o
POST | /register | - | - | All USer | o | o | o


### Items
Method | Route | Parameter | Body | Response | Super Admin | Admin | Customer
---|---|---|---|---|---|---|---
GET | /item | - | - | All Item | o | o | o
GET | /item/:id | id | - | Item | o | o | o
POST | /item | - | name, price, status | Item | o | o | x
PUT | /item/:id| id | name, price, status | Item | o | o | x
DELETE | /item/:id| id | - | Item | o | o | x


### users
Nama Atribut | Tipe Data | Contoh
---|---|---
User ID | String | oiu214oi2hfmlnoi39
Email | String | johndoe@example.com
Nama User | String | John Doe


## Mockup UX