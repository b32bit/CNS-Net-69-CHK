# CNS 69 NET COM Dashboard

Dashboard สำหรับติดตามสถานะการบันทึกข้อมูล NET และ COM ของสถานศึกษา โดยอ่านข้อมูลจาก Google Apps Script Web App API

## Features

- โหลดข้อมูล NET และ COM จาก Apps Script อัตโนมัติผ่าน JSONP
- สลับดูข้อมูล NET และ COM
- ค้นหาด้วยรหัสโรงเรียนหรือชื่อโรงเรียน
- กรองตามอำเภอ สถานะโรงเรียน และสถานะเขตพื้นที่
- Sort และ Pagination ด้วย DataTables
- เติมชื่ออำเภอจากรหัสโรงเรียนด้วย district mapping ภายใน Frontend
- แสดงเฉพาะข้อมูลที่ API คัดกรองแล้ว ไม่อ่านหรือเผยแพร่ JSON ดิบจาก CNS
- Dashboard เป็น Read-only

## Architecture

- GitHub Pages: Frontend
- Google Apps Script: Read-only API
- Google Sheets: เก็บ URL หรือ File ID ของ JSON NET และ COM
- Google Drive: เก็บไฟล์ JSON ต้นฉบับ โดยไม่ต้องเปิดเผยไฟล์เป็นสาธารณะ

## Data source

API endpoint ถูกกำหนดไว้ใน `assets/js/app.js` ผ่านตัวแปร `API_URL`

การเปลี่ยน URL ของ Apps Script ให้แก้ค่าตัวแปรดังกล่าว และ Deploy GitHub Pages ใหม่

## Security

- ห้าม commit ไฟล์ JSON จริงจาก CNS ลง Repository
- API ต้องส่งเฉพาะข้อมูลที่ผ่าน Allowlist
- ไม่ส่ง username, password, sealedPassword, อีเมล, เบอร์โทรศัพท์ หรือชื่อผู้บันทึกออก API
- Google Drive JSON ต้นฉบับควรจำกัดสิทธิ์ไว้เฉพาะผู้ดูแลและบัญชี Apps Script
- Apps Script endpoint เป็น Public Read-only จึงต้องถือว่าทุกฟิลด์ที่ API ส่งออกเป็นข้อมูลสาธารณะ

## Known limitations

- API รุ่นปัจจุบันยังไม่ส่ง form ID, round ID และ school ID จึงยังไม่สามารถสร้าง deep link ไปยังหน้าดำเนินการ CNS รายโรงเรียนได้
- การจับคู่ชื่ออำเภอใช้ mapping ที่ฝังอยู่ใน Frontend
- Mapping ของฟิลด์ COM ต้องตรวจสอบกับ JSON ต้นฉบับเมื่อมีการเปลี่ยนโครงสร้างจาก CNS

## GitHub Pages

Repository Settings → Pages → Build and deployment → Source เลือก GitHub Actions

เว็บไซต์: https://b32bit.github.io/CNS-Net-69-CHK/
