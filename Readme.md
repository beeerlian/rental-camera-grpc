# Aplikasi Sewa Kamera 

### Architecture


### Order
Method | Route | Parameter | Body | Response | Super Admin | Admin | Customer
---|---|---|---|---|---|---|---
GET | /order | - | - | All Order | o | o | x



### Items
Method | Route | Parameter | Body | Response | Super Admin | Admin | Customer
---|---|---|---|---|---|---|---
GET | /item | - | - | All Item | o | o | o
GET | /item/:id | id | - | Item | o | o | o
POST | /item | - | name, price, status | Item | o | o | x
PUT | /item/:id| id | name, price, status | Item | o | o | x
DELETE | /item/:id| id | - | Item | o | o | x


### Transaction
Method | Route | Parameter | Body | Response | Super Admin | Admin | Customer
---|---|---|---|---|---|---|---
GET | /transaction | - | - | All Transaction | o | o | x
POST | /transaction | - | order_id, teller_id | Transaction | o | o | x
GET | /transaction/:id | id | - | Transaction | o | o | x


### Auth
Method | Route | Parameter | Body | Response | Super Admin | Admin | Customer
---|---|---|---|---|---|---|---
POST | /login | - | - | User Login Data, Access Token | o | o | o
POST | /register | - | email, password, name, address, phone, role, identity_type, identity_number | All User | o | o | o
