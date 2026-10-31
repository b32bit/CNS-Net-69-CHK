# CNS Net 69 CHK

JSON Data Converter and School Internet Recording Checker สำหรับแสดงรายการการบันทึกข้อมูลด้านเครือข่ายอินเทอร์เน็ตในสังกัด สพฐ.

## Features

- รับ JSON ผ่าน textarea หรือเลือกไฟล์ .json
- อ่านข้อมูลจาก sourceData และแสดงเฉพาะรายการที่ได้รับจริง
- แปลง Nested JSON เป็นตาราง
- Search, Sort และ Pagination ด้วย DataTables
- สร้างลิงก์ดำเนินการ CNS Net จาก formInternet.id, round.id, month และ mstSchool.id
- กรณีไม่มี formInternet.id จะส่ง id= เป็นค่าว่าง
- ประมวลผลใน Browser โดยไม่ส่ง JSON ไปยัง Backend

## GitHub Pages

Repository Settings → Pages → Build and deployment → Source เลือก GitHub Actions

Workflow .github/workflows/pages.yml จะ deploy เมื่อ push ไปยัง main

เว็บไซต์: https://b32bit.github.io/CNS-Net-69-CHK/

## Data mapping

| Table column | JSON field |
|---|---|
| รอบบันทึกข้อมูล | round.title |
| รหัส | mstSchool.code |
| โรงเรียน | mstSchool.name |
| ผู้ให้ข้อมูล | formInternet.createdByNavigation.firstName / lastName |
| สถานะโรงเรียน | stausTxtSch, lastUpdated |
| สถานะเขต | stausTxtEsa, esaApprovedAt / esaFeedbackAt |
| วันที่ดำเนินการล่าสุด | lastActionAt |

## Security

- ห้าม commit JSON จริงจาก CNS Net ลง repository เพราะอาจมีข้อมูลส่วนบุคคลและข้อมูลบัญชีผู้ใช้
- แอปแสดงเฉพาะข้อมูลที่จำเป็น ไม่แสดง email, phone, password หรือ sealedPassword
- JSON ถูกประมวลผลใน Browser เท่านั้น
- ลิงก์ CNS Net เป็นการเปิดหน้าเว็บต้นทาง ไม่แก้ไขข้อมูลโดยอัตโนมัติ

## Dependencies

Bootstrap 5, jQuery และ DataTables โหลดจาก CDN จึงต้องเชื่อมต่ออินเทอร์เน็ตเพื่อใช้งานตาราง interactive.
