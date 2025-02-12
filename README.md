# ตัวอย่างการใช้งาน Express API สำหรับ Flutter App

ในตัวอย่างนี้จะแสดงการใช้งาน **Node.js** เป็น Backend เพื่อสร้าง API Server ที่เชื่อมต่อกับฐานข้อมูล MongoDB โดยใช้ **Express**, **Mongoose**, และ **Cors** เพื่อให้บริการ API สำหรับ Flutter App ของคุณ

## วิธีการติดตั้ง

1. **โคลนโปรเจกต์จาก GitHub**  
   ทำการโคลนโปรเจกต์จาก GitHub มายังเครื่องของคุณ:

   ```bash
   git clone https://github.com/riiixch/Sample-Express-API
   cd Sample-Express-API
   ```

2. **ติดตั้ง Dependencies**  
   ติดตั้ง dependencies ที่จำเป็นสำหรับโปรเจกต์:

   ```bash
   npm install
   ```

3. **ตั้งค่าไฟล์ `.env`**  
   เปลี่ยนชื่อไฟล์ `.env.sample` เป็น `.env` และตั้งค่าต่อไปนี้:

   ```bash
   MONGO_URI = "ลิงค์ฐานข้อมูล MongoDB"
   DATABASE_NAME = "ชื่อฐานข้อมูล"
   API_PORT = 8080
   ```

4. **เริ่มเซิร์ฟเวอร์**  
   เริ่มเซิร์ฟเวอร์โดยใช้คำสั่ง:

   ```bash
   node .
   ```

## URL สำหรับการ Fetch & Post ข้อมูล

ตารางนี้แสดง URL สำหรับการส่งคำสั่งต่าง ๆ ที่สามารถใช้งานได้:

| URL | รายละเอียด |
| --- | ---------- |
| `http://localhost:8080/api/get/customer` | ดึงข้อมูลทั้งหมดของ Customer |
| `http://localhost:8080/api/add/customer` | เพิ่มข้อมูล Customer ใหม่ |
| `http://localhost:8080/api/del/customer` | ลบข้อมูล Customer |
| `http://localhost:8080/api/edit/customer` | แก้ไขข้อมูล Customer |

## ตัวอย่างการ Fetch & Post ข้อมูล

1. **`http://localhost:8080/api/get/customer`**  
   API นี้จะส่งข้อมูลทั้งหมดจาก MongoDB ในรูปแบบ JSON ซึ่งจะอยู่ใน Array:

   ```json
   {
     "data": [
       {
         "_id": "67ab4f5734068143c04baebd",
         "c_id": "JxRWWcfE",
         "c_fname": "Philetus",
         "c_lname": "Atif",
         "c_status": true,
         "createdAt": "2025-02-11T13:23:35.211Z",
         "updatedAt": "2025-02-11T13:23:35.211Z",
         "__v": 0
       }
     ]
   }
   ```

2. **`http://localhost:8080/api/add/customer`**  
   API นี้จะรับข้อมูลในรูปแบบ Body และใช้ตัวแปร `c_fname` และ `c_lname` (ประเภท String) สำหรับเพิ่มข้อมูล Customer ใหม่:

   ```dart
   http.post(
     "http://localhost:8080/api/add/customer",
     headers: {"Content-Type": "application/json"},
     body: json.encode({
       "c_fname": "RICH",
       "c_lname": "RIIIXCH"
     }),
   );
   ```

   การส่งคืนข้อมูล:

   - **200** = สำเร็จ
   - **500** = ไม่สำเร็จ

3. **`http://localhost:8080/api/del/customer`**  
   API นี้จะรับข้อมูลในรูปแบบ Body และใช้ตัวแปร `c_id` (ประเภท String) สำหรับลบข้อมูล Customer:

   ```dart
   http.post(
     "http://localhost:8080/api/del/customer",
     headers: {"Content-Type": "application/json"},
     body: json.encode({
       "c_id": "iydAomot"
     }),
   );
   ```

   การส่งคืนข้อมูล:

   - **200** = สำเร็จ
   - **500** = ไม่สำเร็จ

4. **`http://localhost:8080/api/edit/customer`**  
   API นี้จะรับข้อมูลในรูปแบบ Body และใช้ตัวแปร `c_id`, `c_fname`, และ `c_lname` (ประเภท String) สำหรับแก้ไขข้อมูล Customer:

   ```dart
   http.post(
     "http://localhost:8080/api/edit/customer",
     headers: {"Content-Type": "application/json"},
     body: json.encode({
       "c_id": "iydAomot",
       "c_fname": "Sompop",
       "c_lname": "Iemsombat"
     }),
   );
   ```

   การส่งคืนข้อมูล:

   - **200** = สำเร็จ
   - **500** = ไม่สำเร็จ

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Created with ❤️ by **RIIIXCH**