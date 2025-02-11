# ตัวอย่างการใช้งาน Express API

ตัวอย่างนี้จะแสดงการใช้งาน Node.js เป็น Backend เพื่อสร้าง API Server ที่เชื่อมต่อกับฐานข้อมูล MongoDB โดยใช้ Express, Mongoose, และ Cors เพื่อให้สามารถติดต่อกับ Flutter App ได้

## วิธีการติดตั้ง

ขั้นตอนการติดตั้งและการตั้งค่าเบื้องต้น:

1. **โคลน Repository**  
   ก่อนอื่นให้ทำการโคลนโปรเจกต์จาก GitHub มายังเครื่องของคุณ:

   ```bash
   git clone https://github.com/riiixch/Sample-Express-API
   cd Sample-Express-API
   ```

2. **ติดตั้ง Dependencies**  
   จากนั้นให้ติดตั้ง dependencies ที่จำเป็น:

   ```bash
   npm install
   ```

3. **ตั้งค่าไฟล์ .env**  
   เปลี่ยนชื่อไฟล์ `.env.sample` เป็น `.env` และทำการตั้งค่าตามนี้:

   ```bash
   MONGO_URI = "ลิงค์ฐานข้อมูล MongoDB"
   DATABASE_NAME = "ชื่อฐานข้อมูล"
   API_PORT = 8080
   ```

4. **เริ่มเซิร์ฟเวอร์**  
   หลังจากตั้งค่าเสร็จสิ้น, ให้เริ่มเซิร์ฟเวอร์ด้วยคำสั่ง:

   ```bash
   node .
   ```

## URL สำหรับ Fetch & Post ข้อมูล

ตารางนี้แสดง URL สำหรับการส่งคำสั่งต่างๆ ที่สามารถใช้งานได้:

| URL | รายละเอียด |
| --- | ---------- |
| `http://localhost:8080/api/get/customer` | ดึงข้อมูล Customer ทั้งหมด |
| `http://localhost:8080/api/add/customer` | เพิ่มข้อมูล Customer |
| `http://localhost:8080/api/del/customer` | ลบข้อมูล Customer |
| `http://localhost:8080/api/edit/customer` | แก้ไขข้อมูล Customer |