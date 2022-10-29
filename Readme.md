# Aplikasi Sewa Kamera

### Repositories
Service | Repositories
---|---
Transaction Service | [Check](https://github.com/beeerlian/cr-order-trans-be)
Auth Service | [Check](auth-service)
Order Service | [Check](order-service)
User and Item Service | [Check](https://github.com/aziznurulloh8910/api-sewa-kamera)



### Architecture
![alt text](https://github.com/beeerlian/rental-camera-grpc/blob/master/assets/architecture.png?raw=true)

### Members
1. Naufal Berlian Taufiqurrohman (1197050094)
2. Andre Aditya Yanwar (1197050016)
3. Cahya Edriansa (1197050025)
4. Aziz Nurulloh (1197050023)

### Tasks
1. User & Item Service (Aziz Nurulloh, Naufal Berlian T) (Laravel, MySQL)
2. Order Service (Naufal Berlian T, Cahya Edriansa) (Node JS, MySQL, GRPC)
3. Transaction Service (Naufal Berlian T) (Node JS, MySQL)
3. Authentication and Authorization Service (Naufal Berlian T, Andre Aditya yanwar) (Node JS, MySQL)

### Stack Technology
1. Node JS
2. MySQL
3. Laravel
4. GRPC

### Liraries
1. Google GRPC for Node JS
2. Eloquent ORM
3. Artisan
4. Google Protobuf
5. Sequelize ORM
6. JSON Webtoken

### Order
Method | Route | Parameter | Body | Response | Super Admin | Admin | Customer
---|---|---|---|---|---|---|---
GET | /order | - | - | All Order | o | o | x
POST | /order | - | user_id, item_id, teller_id | Order Created | o | o | o
GET | /order/:id | - | - | Order Object | o | o | o
PUT | /order/:id | id | user_id, item_id, teller_id | Updated Order | o | o | x
DELETE | /order/:id | id | - | Deleted Order | o | o | x


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
PUT | /transaction/:id | id | order_id, teller_id | Transaction | o | o | x
GET | /transaction/:id/price | id | - | Transaction Price | o | o | x


### Auth
Method | Route | Parameter | Body | Response | Super Admin | Admin | Customer
---|---|---|---|---|---|---|---
POST | /login | - | email, password | User Login Data, Access Token | o | o | o
POST | /register | - | email, password, name, address, phone, role, identity_type, identity_number | All User | o | o | o
