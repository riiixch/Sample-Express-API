# Sample Express API

ตัวอย่างการใช้งาน Node.js เป็น Backend ทำ API Server เพื่อเชื่อมต่อฐานข้อมูล MongoDB โดยใช้ Express, Mongoose, Cors สำหรับติดต่อกับ Flutter App

## Installation

การติดตั้ง และการตั้งค่าเพื่อใช้งานเบื้องต้น

1. โคลน repository

```bash
git clone https://github.com/riiixch/Sample-Express-API
cd Sample-Express-API
```

2. ติดตั้ง dependencies

```bash
npm install
```

3. ตั้งค่าไฟล์ .env

แก้ชื่อไฟล์ .env.sample ให้เป็น .env และทำการตั้งค่า

```bash
MONGO_URI = "ลิงค์ฐานข้อมูล MongoDB"
DATABASE_NAME = "ชื่อ Database"
API_PORT = 8080
```

4. เริ่มเซิร์ฟเวอร์

```bash
node .
```
## URL Path fetch & post data

URL สำหรับการส่งคำสั่งต่าง ๆ

| URL | DETIAL |
| ------ | ------ |
| http://localhost:8080/api/get/customer | ดึงข้อมูล Customer ทั้งหมด |
| http://localhost:8080/api/add/customer | เพิ่มข้อมูล Customer |
| http://localhost:8080/api/del/customer | ลบข้อมูล Customer |
| http://localhost:8080/api/edit/customer | แก้ไขข้อมูล Customer |