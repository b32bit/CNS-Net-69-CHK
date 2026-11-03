(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const jsonInput = $("jsonInput");
  const tableBody = $("schoolTableBody");
  const inputStatus = $("inputStatus");
  const errorBox = $("errorBox");
  const summaryCount = $("summaryCount");
  const districtByCode = {"1090550181":"เทพา","1090550182":"เทพา","1090550183":"เทพา","1090550184":"เทพา","1090550185":"เทพา","1090550186":"เทพา","1090550187":"เทพา","1090550188":"เทพา","1090550189":"เทพา","1090550190":"เทพา","1090550191":"เทพา","1090550192":"เทพา","1090550193":"เทพา","1090550194":"เทพา","1090550195":"เทพา","1090550196":"เทพา","1090550197":"เทพา","1090550198":"เทพา","1090550199":"เทพา","1090550200":"เทพา","1090550201":"เทพา","1090550202":"เทพา","1090550203":"เทพา","1090550204":"เทพา","1090550205":"เทพา","1090550206":"เทพา","1090550207":"เทพา","1090550208":"เทพา","1090550209":"เทพา","1090550210":"เทพา","1090550211":"เทพา","1090550212":"เทพา","1090550213":"เทพา","1090550214":"เทพา","1090550215":"เทพา","1090550216":"เทพา","1090550217":"เทพา","1090550218":"เทพา","1090550219":"เทพา","1090550220":"เทพา","1090550221":"เทพา","1090550222":"เทพา","1090550223":"เทพา","1090550224":"เทพา","1090550225":"เทพา","1090550226":"เทพา","1090550227":"เทพา","1090550228":"จะนะ","1090550229":"จะนะ","1090550230":"จะนะ","1090550231":"จะนะ","1090550232":"จะนะ","1090550233":"จะนะ","1090550234":"จะนะ","1090550235":"จะนะ","1090550236":"จะนะ","1090550237":"จะนะ","1090550238":"จะนะ","1090550239":"จะนะ","1090550240":"จะนะ","1090550241":"จะนะ","1090550242":"จะนะ","1090550243":"จะนะ","1090550244":"จะนะ","1090550245":"จะนะ","1090550246":"จะนะ","1090550247":"จะนะ","1090550248":"จะนะ","1090550249":"จะนะ","1090550250":"จะนะ","1090550251":"จะนะ","1090550252":"จะนะ","1090550253":"จะนะ","1090550254":"จะนะ","1090550255":"จะนะ","1090550256":"จะนะ","1090550258":"จะนะ","1090550259":"จะนะ","1090550261":"จะนะ","1090550262":"จะนะ","1090550263":"จะนะ","1090550264":"จะนะ","1090550265":"จะนะ","1090550266":"จะนะ","1090550267":"จะนะ","1090550268":"จะนะ","1090550269":"จะนะ","1090550270":"จะนะ","1090550271":"จะนะ","1090550272":"จะนะ","1090550273":"จะนะ","1090550274":"จะนะ","1090550275":"จะนะ","1090550276":"จะนะ","1090550277":"จะนะ","1090550278":"จะนะ","1090550279":"จะนะ","1090550280":"นาทวี","1090550281":"นาทวี","1090550282":"นาทวี","1090550283":"นาทวี","1090550284":"นาทวี","1090550285":"นาทวี","1090550286":"นาทวี","1090550287":"นาทวี","1090550288":"นาทวี","1090550289":"นาทวี","1090550290":"นาทวี","1090550291":"นาทวี","1090550292":"นาทวี","1090550293":"นาทวี","1090550294":"นาทวี","1090550297":"นาทวี","1090550298":"นาทวี","1090550300":"นาทวี","1090550301":"นาทวี","1090550302":"นาทวี","1090550303":"นาทวี","1090550304":"นาทวี","1090550305":"นาทวี","1090550306":"นาทวี","1090550307":"นาทวี","1090550308":"นาทวี","1090550309":"นาทวี","1090550310":"นาทวี","1090550311":"นาทวี","1090550312":"นาทวี","1090550313":"สะบ้าย้อย","1090550314":"สะบ้าย้อย","1090550315":"สะบ้าย้อย","1090550316":"สะบ้าย้อย","1090550317":"สะบ้าย้อย","1090550318":"สะบ้าย้อย","1090550319":"สะบ้าย้อย","1090550320":"สะบ้าย้อย","1090550321":"สะบ้าย้อย","1090550322":"สะบ้าย้อย","1090550323":"สะบ้าย้อย","1090550324":"สะบ้าย้อย","1090550325":"สะบ้าย้อย","1090550326":"สะบ้าย้อย","1090550327":"สะบ้าย้อย","1090550328":"สะบ้าย้อย","1090550329":"สะบ้าย้อย","1090550330":"สะบ้าย้อย","1090550331":"สะบ้าย้อย","1090550332":"สะบ้าย้อย","1090550333":"สะบ้าย้อย","1090550334":"สะบ้าย้อย","1090550335":"สะบ้าย้อย","1090550336":"สะบ้าย้อย","1090550337":"สะบ้าย้อย","1090550338":"สะบ้าย้อย","1090550339":"สะบ้าย้อย","1090550340":"สะบ้าย้อย","1090550341":"สะบ้าย้อย","1090550342":"สะบ้าย้อย","1090550343":"สะบ้าย้อย","1090550344":"สะเดา","1090550345":"สะเดา","1090550346":"สะเดา","1090550347":"สะเดา","1090550348":"สะเดา","1090550349":"สะเดา","1090550350":"สะเดา","1090550351":"สะเดา","1090550352":"สะเดา","1090550354":"สะเดา","1090550355":"สะเดา","1090550356":"สะเดา","1090550357":"สะเดา","1090550358":"สะเดา","1090550359":"สะเดา","1090550360":"สะเดา","1090550361":"สะเดา","1090550362":"สะเดา","1090550363":"สะเดา","1090550364":"สะเดา","1090550365":"สะเดา","1090550366":"สะเดา","1090550367":"สะเดา","1090550368":"สะเดา","1090550369":"สะเดา","1090550370":"สะเดา","1090550371":"สะเดา","1090550372":"สะเดา","1090550373":"สะเดา","1090550374":"สะเดา","1090550375":"สะเดา","1090550376":"สะเดา","1090550377":"สะเดา","1090550378":"สะเดา","1090550379":"สะเดา"};
  let dataTable = null;
  const actionCounts = new Map();

  const clean = (value) => value === null || value === undefined || value === "" ? "-" : String(value);
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ch]);

  function fullName(user) {
    if (!user || typeof user !== "object") return "-";
    return [user.firstName, user.lastName].filter(Boolean).join(" ") || "-";
  }
  function statusBadge(label, date, kind) {
    const cls = kind === "ok" ? "status-ok" : kind === "pending" ? "status-pending" : "status-neutral";
    const detail = date ? "<br>" + escapeHtml(date) : "";
    return '<span class="status-badge ' + cls + '">' + escapeHtml(label || "-") + detail + "</span>";
  }
  function makeActionUrl(item) {
    const school = item.mstSchool || {};
    const form = item.formInternet || {};
    const round = item.round || {};
    const params = new URLSearchParams({
      id: form.id ?? "",
      roundId: round.id ?? "",
      month: item.month ?? 0,
      mstSchoolId: school.id ?? ""
    });
    return "https://cns.obec.go.th/tracking/internet/create?" + params.toString();
  }
  function makeComActionUrl(item) {
    const school = item.mstSchool || {};
    const form = item.formComputer || {};
    const round = item.round || {};
    const params = new URLSearchParams({
      id: form.id ?? "",
      roundId: round.id ?? "",
      month: item.month ?? 0,
      mstSchoolId: school.id ?? "",
      page: 1
    });
    return "https://cns.obec.go.th/tracking/computer/create?" + params.toString();
  }
  let dataType = "net";
  function setTableHead() {
    const net = dataType === "net";
    $("tableHead").innerHTML = net
      ? '<tr><th class="text-center">ลำดับ</th><th>รหัส</th><th>โรงเรียน / อำเภอ</th><th>ผู้ให้ข้อมูล</th><th>สถานะโรงเรียน</th><th>สถานะเขต</th><th class="text-center">#</th><th>วันที่ดำเนินการล่าสุด</th></tr>'
      : '<tr><th class="text-center">ลำดับ</th><th>รหัส</th><th>โรงเรียน / อำเภอ</th><th>รูปแบบคอมพิวเตอร์</th><th class="text-end">เพื่อการเรียนการสอน</th><th class="text-end">เพื่อการบริหาร</th><th class="text-end">รวม</th><th>สถานะโรงเรียน</th><th>สถานะเขต</th><th class="text-center">#</th><th>วันที่ดำเนินการล่าสุด</th></tr>';
    $("tableTitle").textContent = net
      ? "รายการการบันทึกข้อมูลด้านเครือข่ายอินเทอร์เน็ตในสังกัด สพฐ."
      : "รายการการบันทึกข้อมูลด้านคอมพิวเตอร์พร้อมอุปกรณ์ในสังกัด สพฐ.";
    $("tableDescription").textContent = net
      ? "ค้นหาได้ทั้งรหัสโรงเรียนและชื่อโรงเรียน พร้อมแสดงอำเภอในคอลัมน์เดียวกัน"
      : "แสดงข้อมูลตาม formComputer ของรอบที่เลือก พร้อมจำนวนเครื่อง รูปแบบคอมพิวเตอร์ และลิงก์ดำเนินการ";
  }
  function schoolCell(school, code) {
    const district = districtByCode[code] || school.district || "ไม่พบใน Main table";
    return '<span class="school-name">' + escapeHtml(school.name || "-") +
      '</span> <span class="school-district">(' + escapeHtml(district) + ')</span>';
  }
  function actionCell(item, url, key, label) {
    return '<span class="action-wrap"><a class="action-btn" href="' + escapeHtml(url) +
      '" target="_blank" rel="noopener noreferrer" data-school-key="' + escapeHtml(key) +
      '" aria-label="ดำเนินการ ' + escapeHtml(label) + '">ดำเนิน<br>การ</a><span class="action-count" aria-live="polite"></span></span>';
  }
  function toNetRow(item) {
    const school = item.mstSchool || {};
    const form = item.formInternet || {};
    const code = String(school.code || "").trim();
    const hasRecord = form.id !== undefined && form.id !== null && String(form.id).trim() !== "";
    const user = form.createdByNavigation || {};
    const schoolStatus = hasRecord ? "บันทึกข้อมูล" : "ยังไม่มีการบันทึกข้อมูล";
    const areaStatus = item.stausTxtEsa || form.stausTxtEsa || "";
    return [
      "", clean(code), schoolCell(school, code),
      hasRecord ? fullName(user) : "-",
      statusBadge(schoolStatus, item.lastUpdated || "", hasRecord ? "ok" : "pending"),
      statusBadge(areaStatus || "รอการอนุมัติ", item.esaApprovedAt || item.esaFeedbackAt || "", areaStatus === "อนุมัติ" ? "ok" : "neutral"),
      hasRecord ? actionCell(item, makeActionUrl(item), school.id || code, school.name || code) : "",
      clean(item.lastActionAt)
    ];
  }
  function toComRow(item) {
    const school = item.mstSchool || {};
    const form = item.formComputer || {};
    const code = String(school.code || "").trim();
    const hasRecord = form.id !== undefined && form.id !== null && String(form.id).trim() !== "";
    const learning = Number(form.qtyForLearning) || 0;
    const management = Number(form.qtyForMgmt) || 0;
    const format = form.mstComputerFormat?.title ||
      form.mstComputerFormatForArea?.title ||
      form.legacyComputerFormat || (form.isAnyComputer ? "มีคอมพิวเตอร์ (ไม่ระบุรูปแบบ)" : "-");
    const schoolStatus = item.stausTxtSch || form.stausTxtSch || (hasRecord ? "บันทึกข้อมูล" : "ยังไม่มีการบันทึกข้อมูล");
    const areaStatus = item.stausTxtEsa || form.stausTxtEsa || "รอการอนุมัติ";
    return [
      "", clean(code), schoolCell(school, code), clean(format),
      hasRecord ? learning.toLocaleString("th-TH") : "-",
      hasRecord ? management.toLocaleString("th-TH") : "-",
      hasRecord ? (learning + management).toLocaleString("th-TH") : "-",
      statusBadge(schoolStatus, "", hasRecord ? "ok" : "pending"),
      statusBadge(areaStatus, item.esaApprovedAt || item.esaFeedbackAt || "", areaStatus === "อนุมัติ" ? "ok" : "neutral"),
      hasRecord ? actionCell(item, makeComActionUrl(item), school.id || code, school.name || code) : "",
      clean(item.lastUpdated || item.lastActionAt)
    ];
  }
  function toRow(item) { return dataType === "net" ? toNetRow(item) : toComRow(item); }
  function getClickCount(key) {
    return actionCounts.get(String(key)) || 0;
  }
  function setClickCount(key, count) {
    actionCounts.set(String(key), count);
  }
  function destroyTable() {
    if (dataTable) { dataTable.destroy(); dataTable = null; }
  }
  function fillDistrictOptions() {
    const select = $("filterDistrict");
    const selected = select.value;
    const districts = [...new Set(Object.values(districtByCode))].sort((a,b)=>a.localeCompare(b,"th"));
    select.innerHTML = '<option value="">ทุกอำเภอ</option>' + districts.map(d => '<option value="' + escapeHtml(d) + '">' + escapeHtml(d) + '</option>').join("") + '<option value="ไม่พบใน Main table">ไม่พบใน Main table</option>';
    select.value = selected;
  }
  function applyFilters() {
    if (!dataTable) return;
    const district = $("filterDistrict").value;
    const school = $("filterSchool").value;
    const area = $("filterArea").value;
    dataTable.column(2).search(district ? jQuery.fn.dataTable.util.escapeRegex(district) : "", false, true);
    const schoolStatusColumn = dataType === "net" ? 4 : 7;
    const areaStatusColumn = dataType === "net" ? 5 : 8;
    dataTable.column(schoolStatusColumn).search(school ? "^" + jQuery.fn.dataTable.util.escapeRegex(school) : "", true, false);
    if (area === "__not_approved") dataTable.column(areaStatusColumn).search("^(?!อนุมัติ)", true, false);
    else dataTable.column(areaStatusColumn).search(area ? "^" + jQuery.fn.dataTable.util.escapeRegex(area) : "", true, false);
    dataTable.draw();
  }
  function render(items) {
    destroyTable();
    tableBody.innerHTML = "";
    setTableHead();
    const columnCount = dataType === "net" ? 8 : 11;
    if (!items.length) {
      tableBody.innerHTML = '<tr><td colspan="' + columnCount + '" class="empty-state">ไม่พบรายการข้อมูลใน sourceData</td></tr>';
      summaryCount.textContent = "0 รายการ";
      return;
    }
    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      const row = document.createElement("tr");
      toRow(item).forEach((value, index) => {
        const cell = document.createElement("td");
        const htmlColumns = dataType === "net" ? [2,4,5,6] : [2,7,8,9];
        if (htmlColumns.includes(index)) cell.innerHTML = value;
        else cell.textContent = value;
        row.appendChild(cell);
      });
      fragment.appendChild(row);
    });
    tableBody.appendChild(fragment);
    summaryCount.textContent = items.length.toLocaleString("th-TH") + " รายการ";
    if (window.jQuery && jQuery.fn.DataTable) {
      const noOrderColumns = dataType === "net" ? [0,6] : [0,9];
      dataTable = jQuery("#schoolTable").DataTable({
        pageLength:5, lengthMenu:[[5,10,25,50,100,-1],[5,10,25,50,100,"ทั้งหมด"]],
        order:[[2,"asc"]], autoWidth:false,
        language:{
          search:"ค้นหา:", lengthMenu:"แสดง _MENU_ รายการ",
          info:"แสดง _START_ ถึง _END_ จาก _TOTAL_ รายการ",
          infoEmpty:"ไม่มีข้อมูล", infoFiltered:"(กรองจากทั้งหมด _MAX_ รายการ)",
          zeroRecords:"ไม่พบข้อมูลที่ค้นหา", emptyTable:"ไม่มีข้อมูล",
          paginate:{first:"แรก",last:"สุดท้าย",next:"ถัดไป",previous:"ก่อนหน้า"}
        },
        columnDefs:[{targets:noOrderColumns,orderable:false,searchable:false}],
        drawCallback:function(){
          const api = this.api();
          const pageInfo = api.page.info();
          api.column(0,{page:"current"}).nodes().each((cell,index)=>{ cell.textContent = pageInfo.start + index + 1; });
          api.rows({page:"current"}).nodes().each((row)=>{
            const link = row.querySelector(".action-btn");
            if (!link) return;
            const count = getClickCount(link.dataset.schoolKey);
            const marker = row.querySelector(".action-count");
            if (marker) marker.textContent = count ? " " + "✅".repeat(Math.min(count,30)) : "";
          });
        }
      });
      applyFilters();
      const searchValue = $("schoolNameSearch").value.trim();
      if (searchValue) dataTable.search(searchValue).draw();
    }
  }
  function showError(message) {
    errorBox.textContent = message;
    errorBox.classList.remove("d-none");
    inputStatus.textContent = "เกิดข้อผิดพลาด";
    inputStatus.className = "small text-danger ms-lg-2";
  }
  function convert() {
    actionCounts.clear();
    errorBox.classList.add("d-none");
    const raw = jsonInput.value.trim();
    if (!raw) { showError("กรุณาวางข้อมูล JSON ก่อนแปลงข้อมูล"); return; }
    try {
      const parsed = JSON.parse(raw);
      const items = Array.isArray(parsed) ? parsed : parsed.sourceData;
      if (!Array.isArray(items)) throw new Error('ไม่พบรายการ sourceData หรือข้อมูลไม่ใช่ Array');
      render(items);
      $("inputSection").classList.add("d-none");
      $("guideSection").classList.add("d-none");
      $("tableSection").classList.remove("d-none");
      const unmatched = items.filter(x => !districtByCode[String(x.mstSchool?.code || "").trim()]).length;
      inputStatus.textContent = "แปลงข้อมูล " + (dataType === "net" ? "NET" : "COM") + " สำเร็จ " + items.length.toLocaleString("th-TH") + " รายการ · จับคู่ Main table ไม่พบ " + unmatched + " รายการ";
      inputStatus.className = "small " + (unmatched ? "text-warning" : "text-success") + " ms-lg-2";
    } catch (error) {
      showError("ไม่สามารถแปลง JSON ได้: " + error.message);
    }
  }
  ["filterSchool","filterArea","filterDistrict"].forEach(id => $(id).addEventListener("change", applyFilters));
  $("schoolNameSearch").addEventListener("input", (event) => {
    if (dataTable) dataTable.search(event.target.value).draw();
  });
  tableBody.addEventListener("click", (event) => {
    const link = event.target.closest(".action-btn");
    if (!link) return;
    const key = link.dataset.schoolKey;
    const count = getClickCount(key) + 1;
    setClickCount(key, count);
    const marker = link.parentElement.querySelector(".action-count");
    if (marker) marker.textContent = " " + "✅".repeat(count);
    link.title = "กดดำเนินการแล้ว " + count + " ครั้ง";
  });
  document.querySelectorAll(".data-type-btn").forEach((button) => {
    button.addEventListener("click", () => {
      dataType = button.dataset.type;
      document.querySelectorAll(".data-type-btn").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      setTableHead();
      if (jsonInput.value.trim()) convert();
      else {
        tableBody.innerHTML = '<tr><td colspan="' + (dataType === "net" ? 8 : 11) + '" class="empty-state">วาง JSON แล้วกด “แปลงข้อมูล” เพื่อเริ่มตรวจสอบ</td></tr>';
        summaryCount.textContent = "ยังไม่มีข้อมูล";
      }
    });
  });
  setTableHead();
    $("convertBtn").addEventListener("click", convert);
  $("clearBtn").addEventListener("click", () => {
    jsonInput.value = "";
    actionCounts.clear();
    destroyTable();
    $("inputSection").classList.remove("d-none");
    $("guideSection").classList.remove("d-none");
    $("tableSection").classList.add("d-none");
    tableBody.innerHTML = '<tr><td colspan="' + (dataType === "net" ? 8 : 11) + '" class="empty-state">วาง JSON แล้วกด “แปลงข้อมูล” เพื่อเริ่มตรวจสอบ</td></tr>';
    summaryCount.textContent = "ยังไม่มีข้อมูล";
    inputStatus.textContent = "รอรับข้อมูล";
    inputStatus.className = "small text-secondary ms-lg-2";
    errorBox.classList.add("d-none");
    $("filterSchool").value = ""; $("filterArea").value = ""; $("filterDistrict").value = ""; $("schoolNameSearch").value = "";
  });
  $("jsonFile").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try { jsonInput.value = await file.text(); inputStatus.textContent = "โหลดไฟล์ " + file.name + " แล้ว"; convert(); }
    catch { showError("ไม่สามารถอ่านไฟล์ที่เลือกได้"); }
    event.target.value = "";
  });
  fillDistrictOptions();
})();