(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const jsonInput = $("jsonInput");
  const tableBody = $("schoolTableBody");
  const inputStatus = $("inputStatus");
  const errorBox = $("errorBox");
  const summaryCount = $("summaryCount");
  let dataTable = null;

  const clean = (value) => value === null || value === undefined || value === "" ? "-" : String(value);
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  })[ch]);

  function fullName(user) {
    if (!user || typeof user !== "object") return "-";
    return [user.firstName, user.lastName].filter(Boolean).join(" ") || "-";
  }

  function statusBadge(label, date, kind) {
    if (!label) return '<span class="status-badge status-pending">ยังไม่มีการบันทึกข้อมูล</span>';
    const cls = kind === "ok" ? "status-ok" : "status-neutral";
    const detail = date ? "<br>" + escapeHtml(date) : "";
    return '<span class="status-badge ' + cls + '">' + escapeHtml(label) + detail + "</span>";
  }

  function makeActionUrl(item) {
    const school = item.mstSchool || {};
    const form = item.formInternet || {};
    const round = item.round || {};
    const params = new URLSearchParams();
    params.set("id", form.id === null || form.id === undefined ? "" : String(form.id));
    params.set("roundId", round.id === null || round.id === undefined ? "" : String(round.id));
    params.set("month", item.month === null || item.month === undefined ? "" : String(item.month));
    params.set("mstSchoolId", school.id === null || school.id === undefined ? "" : String(school.id));
    return "https://cns.obec.go.th/tracking/internet/create?" + params.toString();
  }

  function toRow(item) {
    const school = item.mstSchool || {};
    const form = item.formInternet || {};
    const hasRecord = form.id !== undefined && form.id !== null;
    const user = form.createdByNavigation || {};
    const schoolStatus = item.stausTxtSch || form.stausTxtSch || "";
    const areaStatus = item.stausTxtEsa || form.stausTxtEsa || "";
    const schoolDate = item.lastUpdated || "";
    const areaDate = item.esaApprovedAt || item.esaFeedbackAt || "";
    return [
      clean(item.round?.title), clean(school.code), clean(school.name),
      hasRecord ? fullName(user) : "-",
      statusBadge(schoolStatus, schoolDate, hasRecord ? "ok" : "pending"),
      areaStatus ? statusBadge(areaStatus, areaDate, areaStatus === "อนุมัติ" ? "ok" : "neutral")
                 : '<span class="status-badge status-neutral">-</span>',
      '<a class="action-btn" href="' + makeActionUrl(item) + '" target="_blank" rel="noopener noreferrer" aria-label="ดำเนินการ ' + escapeHtml(school.name || school.code || "") + '">ดำเนิน<br>การ</a>',
      clean(item.lastActionAt)
    ];
  }

  function destroyTable() {
    if (dataTable) { dataTable.destroy(); dataTable = null; }
  }

  function render(items) {
    destroyTable();
    tableBody.innerHTML = "";
    if (!items.length) {
      tableBody.innerHTML = '<tr><td colspan="8" class="empty-state">ไม่พบรายการข้อมูลใน sourceData</td></tr>';
      summaryCount.textContent = "0 รายการ";
      return;
    }
    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      const row = document.createElement("tr");
      toRow(item).forEach((value, index) => {
        const cell = document.createElement("td");
        if ([4,5,6].includes(index)) cell.innerHTML = value;
        else cell.textContent = value;
        row.appendChild(cell);
      });
      fragment.appendChild(row);
    });
    tableBody.appendChild(fragment);
    summaryCount.textContent = items.length.toLocaleString("th-TH") + " รายการ";

    if (window.jQuery && jQuery.fn.DataTable) {
      dataTable = jQuery("#schoolTable").DataTable({
        pageLength:10, lengthMenu:[[10,25,50,100,-1],[10,25,50,100,"ทั้งหมด"]],
        order:[[2,"asc"]], autoWidth:false,
        language:{
          search:"ค้นหา:", lengthMenu:"แสดง _MENU_ รายการ",
          info:"แสดง _START_ ถึง _END_ จาก _TOTAL_ รายการ",
          infoEmpty:"ไม่มีข้อมูล", infoFiltered:"(กรองจากทั้งหมด _MAX_ รายการ)",
          zeroRecords:"ไม่พบข้อมูลที่ค้นหา", emptyTable:"ไม่มีข้อมูล",
          paginate:{first:"แรก",last:"สุดท้าย",next:"ถัดไป",previous:"ก่อนหน้า"}
        },
        columnDefs:[{targets:[6],orderable:false}]
      });
    }
  }

  function showError(message) {
    errorBox.textContent = message;
    errorBox.classList.remove("d-none");
    inputStatus.textContent = "เกิดข้อผิดพลาด";
    inputStatus.className = "small text-danger ms-lg-2";
  }

  function convert() {
    errorBox.classList.add("d-none");
    const raw = jsonInput.value.trim();
    if (!raw) { showError("กรุณาวางข้อมูล JSON ก่อนแปลงข้อมูล"); return; }
    try {
      const parsed = JSON.parse(raw);
      const items = Array.isArray(parsed) ? parsed : parsed.sourceData;
      if (!Array.isArray(items)) throw new Error('ไม่พบรายการ sourceData หรือข้อมูลไม่ใช่ Array');
      render(items);
      inputStatus.textContent = "แปลงข้อมูลสำเร็จ " + items.length.toLocaleString("th-TH") + " รายการ";
      inputStatus.className = "small text-success ms-lg-2";
    } catch (error) {
      showError("ไม่สามารถแปลง JSON ได้: " + error.message);
    }
  }

  $("convertBtn").addEventListener("click", convert);
  $("clearBtn").addEventListener("click", () => {
    jsonInput.value = "";
    destroyTable();
    tableBody.innerHTML = '<tr><td colspan="8" class="empty-state">วาง JSON แล้วกด “แปลงข้อมูล” เพื่อเริ่มตรวจสอบ</td></tr>';
    summaryCount.textContent = "ยังไม่มีข้อมูล";
    inputStatus.textContent = "รอรับข้อมูล";
    inputStatus.className = "small text-secondary ms-lg-2";
    errorBox.classList.add("d-none");
  });
  $("jsonFile").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      jsonInput.value = await file.text();
      inputStatus.textContent = "โหลดไฟล์ " + file.name + " แล้ว";
      inputStatus.className = "small text-success ms-lg-2";
      convert();
    } catch {
      showError("ไม่สามารถอ่านไฟล์ที่เลือกได้");
    }
    event.target.value = "";
  });
})();