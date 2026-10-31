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
    const code = String(school.code || "").trim();
    const hasRecord = form.id !== undefined && form.id !== null && String(form.id).trim() !== "";
    const user = form.createdByNavigation || {};
    const schoolStatus = hasRecord ? "บันทึกข้อมูล" : "ยังไม่มีการบันทึกข้อมูล";
    const areaStatus = item.stausTxtEsa || form.stausTxtEsa || "";
    const schoolDate = item.lastUpdated || "";
    const areaDate = item.esaApprovedAt || item.esaFeedbackAt || "";
    const district = districtByCode[code] || "ไม่พบใน Main table";
    return [
      "" , clean(code), clean(school.name), district,
      hasRecord ? fullName(user) : "-",
      statusBadge(schoolStatus, schoolDate, hasRecord ? "ok" : "pending"),
      statusBadge(areaStatus || "รอการอนุมัติ", areaDate, areaStatus === "อนุมัติ" ? "ok" : "neutral"),
      hasRecord ? '<span class="action-wrap"><a class="action-btn" href="' + makeActionUrl(item) + '" target="_blank" rel="noopener noreferrer" data-school-key="' + escapeHtml(school.id || code) + '" aria-label="ดำเนินการ ' + escapeHtml(school.name || code) + '">ดำเนิน<br>การ</a><span class="action-count" data-count-key="' + escapeHtml(school.id || code) + '" aria-live="polite"></span></span>' : "",
      clean(item.lastActionAt)
    ];
  }
  function getClickCount(key) {
    try { return Math.max(0, Number(localStorage.getItem("cns69chk-click-" + key)) || 0); }
    catch { return 0; }
  }
  function setClickCount(key, count) {
    try { localStorage.setItem("cns69chk-click-" + key, String(count)); }
    catch { /* Browser storage may be unavailable; current page still updates. */ }
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
    const school = $("filterSchool").value;
    const area = $("filterArea").value;
    const district = $("filterDistrict").value;
    dataTable.column(3).search(district ? "^" + jQuery.fn.dataTable.util.escapeRegex(district) + "$" : "", true, false);
    dataTable.column(5).search(school ? "^" + jQuery.fn.dataTable.util.escapeRegex(school) : "", true, false);
    if (area === "__not_approved") dataTable.column(6).search("^(?!อนุมัติ)", true, false);
    else dataTable.column(6).search(area ? "^" + jQuery.fn.dataTable.util.escapeRegex(area) : "", true, false);
    dataTable.draw();
  }
  function render(items) {
    destroyTable();
    tableBody.innerHTML = "";
    if (!items.length) {
      tableBody.innerHTML = '<tr><td colspan="9" class="empty-state">ไม่พบรายการข้อมูลใน sourceData</td></tr>';
      summaryCount.textContent = "0 รายการ";
      return;
    }
    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      const row = document.createElement("tr");
      toRow(item).forEach((value, index) => {
        const cell = document.createElement("td");
        if ([5,6,7].includes(index)) cell.innerHTML = value;
        else cell.textContent = value;
        row.appendChild(cell);
      });
      fragment.appendChild(row);
    });
    tableBody.appendChild(fragment);
    summaryCount.textContent = items.length.toLocaleString("th-TH") + " รายการ";
    if (window.jQuery && jQuery.fn.DataTable) {
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
        columnDefs:[{targets:[0,7],orderable:false,searchable:false}],
        drawCallback:function(){
          const api = this.api();
          const pageInfo = api.page.info();
          api.column(0,{page:"current"}).nodes().each((cell,index)=>{ cell.textContent = pageInfo.start + index + 1; });
          api.rows({page:"current"}).nodes().each((row)=>{
            const link = row.querySelector(".action-btn");
            if (!link) return;
            const key = link.dataset.schoolKey;
            const count = getClickCount(key);
            const marker = row.querySelector(".action-count");
            if (marker) marker.textContent = count ? " " + "✅".repeat(count) : "";
          });
        }
      });
      applyFilters();
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
      const unmatched = items.filter(x => !districtByCode[String(x.mstSchool?.code || "").trim()]).length;
      inputStatus.textContent = "แปลงข้อมูลสำเร็จ " + items.length.toLocaleString("th-TH") + " รายการ · จับคู่ Main table ไม่พบ " + unmatched + " รายการ";
      inputStatus.className = "small " + (unmatched ? "text-warning" : "text-success") + " ms-lg-2";
    } catch (error) {
      showError("ไม่สามารถแปลง JSON ได้: " + error.message);
    }
  }
  ["filterSchool","filterArea","filterDistrict"].forEach(id => $(id).addEventListener("change", applyFilters));
  $("schoolNameSearch").addEventListener("input", (event) => {
    if (dataTable) dataTable.column(2).search(event.target.value).draw();
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
  $("convertBtn").addEventListener("click", convert);
  $("clearBtn").addEventListener("click", () => {
    jsonInput.value = "";
    destroyTable();
    tableBody.innerHTML = '<tr><td colspan="9" class="empty-state">วาง JSON แล้วกด “แปลงข้อมูล” เพื่อเริ่มตรวจสอบ</td></tr>';
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