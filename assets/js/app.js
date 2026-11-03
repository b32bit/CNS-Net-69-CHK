(() => {
  "use strict";

  const API_URL = "https://script.google.com/macros/s/AKfycbxhRyXAUAFZY2_bWGHl90oV_KdeEDVLJWjJBTQkq_HsHUc3T8HXfikV5xn-XXjlRYoL/exec";
  const $ = (id) => document.getElementById(id);
  const tableBody = $("schoolTableBody");
  const errorBox = $("errorBox");
  const statusText = $("apiStatus");
  const summaryCount = $("summaryCount");
  const districtByCode = {"1090550181":"เทพา","1090550182":"เทพา","1090550183":"เทพา","1090550184":"เทพา","1090550185":"เทพา","1090550186":"เทพา","1090550187":"เทพา","1090550188":"เทพา","1090550189":"เทพา","1090550190":"เทพา","1090550191":"เทพา","1090550192":"เทพา","1090550193":"เทพา","1090550194":"เทพา","1090550195":"เทพา","1090550196":"เทพา","1090550197":"เทพา","1090550198":"เทพา","1090550199":"เทพา","1090550200":"เทพา","1090550201":"เทพา","1090550202":"เทพา","1090550203":"เทพา","1090550204":"เทพา","1090550205":"เทพา","1090550206":"เทพา","1090550207":"เทพา","1090550208":"เทพา","1090550209":"เทพา","1090550210":"เทพา","1090550211":"เทพา","1090550212":"เทพา","1090550213":"เทพา","1090550214":"เทพา","1090550215":"เทพา","1090550216":"เทพา","1090550217":"เทพา","1090550218":"เทพา","1090550219":"เทพา","1090550220":"เทพา","1090550221":"เทพา","1090550222":"เทพา","1090550223":"เทพา","1090550224":"เทพา","1090550225":"เทพา","1090550226":"เทพา","1090550227":"เทพา","1090550228":"จะนะ","1090550229":"จะนะ","1090550230":"จะนะ","1090550231":"จะนะ","1090550232":"จะนะ","1090550233":"จะนะ","1090550234":"จะนะ","1090550235":"จะนะ","1090550236":"จะนะ","1090550237":"จะนะ","1090550238":"จะนะ","1090550239":"จะนะ","1090550240":"จะนะ","1090550241":"จะนะ","1090550242":"จะนะ","1090550243":"จะนะ","1090550244":"จะนะ","1090550245":"จะนะ","1090550246":"จะนะ","1090550247":"จะนะ","1090550248":"จะนะ","1090550249":"จะนะ","1090550250":"จะนะ","1090550251":"จะนะ","1090550252":"จะนะ","1090550253":"จะนะ","1090550254":"จะนะ","1090550255":"จะนะ","1090550256":"จะนะ","1090550258":"จะนะ","1090550259":"จะนะ","1090550261":"จะนะ","1090550262":"จะนะ","1090550263":"จะนะ","1090550264":"จะนะ","1090550265":"จะนะ","1090550266":"จะนะ","1090550267":"จะนะ","1090550268":"จะนะ","1090550269":"จะนะ","1090550270":"จะนะ","1090550271":"จะนะ","1090550272":"จะนะ","1090550273":"จะนะ","1090550274":"จะนะ","1090550275":"จะนะ","1090550276":"จะนะ","1090550277":"จะนะ","1090550278":"จะนะ","1090550279":"จะนะ","1090550280":"นาทวี","1090550281":"นาทวี","1090550282":"นาทวี","1090550283":"นาทวี","1090550284":"นาทวี","1090550285":"นาทวี","1090550286":"นาทวี","1090550287":"นาทวี","1090550288":"นาทวี","1090550289":"นาทวี","1090550290":"นาทวี","1090550291":"นาทวี","1090550292":"นาทวี","1090550293":"นาทวี","1090550294":"นาทวี","1090550297":"นาทวี","1090550298":"นาทวี","1090550300":"นาทวี","1090550301":"นาทวี","1090550302":"นาทวี","1090550303":"นาทวี","1090550304":"นาทวี","1090550305":"นาทวี","1090550306":"นาทวี","1090550307":"นาทวี","1090550308":"นาทวี","1090550309":"นาทวี","1090550310":"นาทวี","1090550311":"นาทวี","1090550312":"นาทวี","1090550313":"สะบ้าย้อย","1090550314":"สะบ้าย้อย","1090550315":"สะบ้าย้อย","1090550316":"สะบ้าย้อย","1090550317":"สะบ้าย้อย","1090550318":"สะบ้าย้อย","1090550319":"สะบ้าย้อย","1090550320":"สะบ้าย้อย","1090550321":"สะบ้าย้อย","1090550322":"สะบ้าย้อย","1090550323":"สะบ้าย้อย","1090550324":"สะบ้าย้อย","1090550325":"สะบ้าย้อย","1090550326":"สะบ้าย้อย","1090550327":"สะบ้าย้อย","1090550328":"สะบ้าย้อย","1090550329":"สะบ้าย้อย","1090550330":"สะบ้าย้อย","1090550331":"สะบ้าย้อย","1090550332":"สะบ้าย้อย","1090550333":"สะบ้าย้อย","1090550334":"สะบ้าย้อย","1090550335":"สะบ้าย้อย","1090550336":"สะบ้าย้อย","1090550337":"สะบ้าย้อย","1090550338":"สะบ้าย้อย","1090550339":"สะบ้าย้อย","1090550340":"สะบ้าย้อย","1090550341":"สะบ้าย้อย","1090550342":"สะบ้าย้อย","1090550343":"สะบ้าย้อย","1090550344":"สะเดา","1090550345":"สะเดา","1090550346":"สะเดา","1090550347":"สะเดา","1090550348":"สะเดา","1090550349":"สะเดา","1090550350":"สะเดา","1090550351":"สะเดา","1090550352":"สะเดา","1090550354":"สะเดา","1090550355":"สะเดา","1090550356":"สะเดา","1090550357":"สะเดา","1090550358":"สะเดา","1090550359":"สะเดา","1090550360":"สะเดา","1090550361":"สะเดา","1090550362":"สะเดา","1090550363":"สะเดา","1090550364":"สะเดา","1090550365":"สะเดา","1090550366":"สะเดา","1090550367":"สะเดา","1090550368":"สะเดา","1090550369":"สะเดา","1090550370":"สะเดา","1090550371":"สะเดา","1090550372":"สะเดา","1090550373":"สะเดา","1090550374":"สะเดา","1090550375":"สะเดา","1090550376":"สะเดา","1090550377":"สะเดา","1090550378":"สะเดา","1090550379":"สะเดา"};

  let dataTable = null;
  let dataType = "net";
  let apiData = { net: [], com: [] };
  let callbackCounter = 0;
  const actionCounts = new Map();

  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[ch]);
  const clean = (value) => value === null || value === undefined || value === "" ? "-" : String(value);
  const schoolCode = (item) => String(item.schoolCode || "").trim();
  const districtFor = (item) => districtByCode[schoolCode(item)] || clean(item.district) !== "-" && clean(item.district) || "ไม่พบใน Main table";

  function statusBadge(label, date, kind) {
    const cls = kind === "ok" ? "status-ok" : kind === "pending" ? "status-pending" : "status-neutral";
    const detail = date ? "<br>" + escapeHtml(date) : "";
    return '<span class="status-badge ' + cls + '">' + escapeHtml(label || "-") + detail + "</span>";
  }

  function loadDashboard() {
    return new Promise((resolve, reject) => {
      const callbackName = "cnsDashboardCallback" + (++callbackCounter);
      const script = document.createElement("script");
      const timeout = window.setTimeout(() => finish(new Error("หมดเวลารอ API กรุณาลองโหลดใหม่")), 30000);
      let settled = false;

      function finish(error, result) {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeout);
        delete window[callbackName];
        script.remove();
        if (error) reject(error);
        else resolve(result);
      }

      window[callbackName] = (result) => {
        if (!result || result.success !== true) {
          finish(new Error(result && result.error ? result.error : "API ส่งข้อมูลไม่สำเร็จ"));
          return;
        }
        finish(null, result);
      };

      script.onerror = () => finish(new Error("ไม่สามารถเชื่อมต่อ Google Apps Script ได้"));
      script.src = API_URL + "?callback=" + callbackName + "&_=" + Date.now();
      document.head.appendChild(script);
    });
  }

  function setTableHead() {
    const net = dataType === "net";
    $("tableHead").innerHTML = net
      ? '<tr><th class="text-center">ลำดับ</th><th>รหัส</th><th>โรงเรียน / อำเภอ</th><th>สถานะการบันทึกของโรงเรียน</th><th>การอนุมัติของเขตพื้นที่</th><th class="text-center">#</th><th>วันที่ดำเนินการล่าสุด</th></tr>'
      : '<tr><th class="text-center">ลำดับ</th><th>รหัส</th><th>โรงเรียน / อำเภอ</th><th>รูปแบบคอมพิวเตอร์</th><th class="text-end">เพื่อการเรียนการสอน</th><th class="text-end">เพื่อการบริหาร</th><th class="text-end">รวม</th><th>สถานะโรงเรียน</th><th>สถานะเขตพื้นที่</th><th class="text-center">#</th><th>วันที่ดำเนินการล่าสุด</th></tr>';
    $("tableTitle").textContent = net
      ? "รายการการบันทึกข้อมูลด้านเครือข่ายอินเทอร์เน็ตในสังกัด สพฐ."
      : "รายการการบันทึกข้อมูลด้านคอมพิวเตอร์พร้อมอุปกรณ์ในสังกัด สพฐ.";
    $("tableDescription").textContent = net
      ? "ข้อมูลจาก CNS ผ่าน Dashboard API · ค้นหาด้วยรหัสหรือชื่อโรงเรียน"
      : "ข้อมูลจาก CNS ผ่าน Dashboard API · แสดงรูปแบบและจำนวนคอมพิวเตอร์";
  }

  function schoolCell(item) {
    const name = item.schoolName || "-";
    const district = districtFor(item);
    return '<span class="school-name">' + escapeHtml(name) +
      '</span> <span class="school-district">(' + escapeHtml(district) + ')</span>';
  }

  function makeNetActionUrl(item) {
    const params = new URLSearchParams({
      id: item.formId || "",
      roundId: item.roundId || "",
      month: item.month ?? 0,
      mstSchoolId: item.schoolId || ""
    });
    return "https://cns.obec.go.th/tracking/internet/create?" + params.toString();
  }

  function makeComActionUrl(item) {
    const params = new URLSearchParams({
      id: item.formId || "",
      roundId: item.roundId || "",
      month: item.month ?? 0,
      mstSchoolId: item.schoolId || "",
      page: 1
    });
    return "https://cns.obec.go.th/tracking/computer/create?" + params.toString();
  }

  function actionCell(item) {
    const code = schoolCode(item);
    const requiredIds = [item.schoolId, item.roundId];
    if (item.hasRecord !== true || !item.formId || requiredIds.some(value => value === null || value === undefined || String(value).trim() === "")) {
      return '<span class="text-secondary" title="ไม่มีข้อมูลรายการสำหรับดำเนินการ">-</span>';
    }

    const url = dataType === "net" ? makeNetActionUrl(item) : makeComActionUrl(item);
    const label = dataType === "net" ? "เครือข่ายอินเทอร์เน็ต" : "คอมพิวเตอร์";
    return '<span class="action-wrap"><a class="action-btn" href="' + escapeHtml(url) +
      '" target="_blank" rel="noopener noreferrer" data-school-key="' + escapeHtml(code) +
      '" aria-label="ดำเนินการ ' + escapeHtml(label) + '">ดำเนิน<br>การ</a><span class="action-count" aria-live="polite"></span></span>';
  }

  function toNetRow(item) {
    const schoolStatus = item.schoolStatus || (item.hasRecord ? "บันทึกข้อมูล" : "ยังไม่มีการบันทึกข้อมูล");
    const areaStatus = item.esaStatus || "รอการอนุมัติ";
        return [
      "", clean(schoolCode(item)), schoolCell(item),
      statusBadge(schoolStatus, item.lastUpdated, item.hasRecord === true ? "ok" : "pending"),
      statusBadge(areaStatus, "", item.isEsaApproved === true || areaStatus === "อนุมัติ" ? "ok" : "neutral"),
      actionCell(item), clean(item.lastActionAt)
    ];
  }

  function toComRow(item) {
    const learning = Number(item.qtyForLearning) || 0;
    const management = Number(item.qtyForMgmt) || 0;
    const hasRecord = item.hasRecord !== false;
    const schoolStatus = item.schoolStatus || (hasRecord ? "บันทึกข้อมูล" : "ยังไม่มีการบันทึกข้อมูล");
    const areaStatus = item.esaStatus || "รอการอนุมัติ";
    return [
      "", clean(schoolCode(item)), schoolCell(item), clean(item.computerFormat),
      hasRecord ? learning.toLocaleString("th-TH") : "-",
      hasRecord ? management.toLocaleString("th-TH") : "-",
      hasRecord ? (Number(item.totalComputers) || learning + management).toLocaleString("th-TH") : "-",
      statusBadge(schoolStatus, item.lastUpdated, schoolStatus === "บันทึกข้อมูล" ? "ok" : "pending"),
      statusBadge(areaStatus, "", areaStatus === "อนุมัติ" ? "ok" : "neutral"),
      actionCell(item), clean(item.lastActionAt || item.lastUpdated)
    ];
  }

  function getClickCount(key) {
    return actionCounts.get(String(key)) || 0;
  }

  function fillDistrictOptions() {
    const select = $("filterDistrict");
    const selected = select.value;
    const districts = [...new Set(Object.values(districtByCode))].sort((a,b) => a.localeCompare(b, "th"));
    select.innerHTML = '<option value="">ทุกอำเภอ</option>' +
      districts.map(d => '<option value="' + escapeHtml(d) + '">' + escapeHtml(d) + '</option>').join("") +
      '<option value="ไม่พบใน Main table">ไม่พบใน Main table</option>';
    select.value = selected;
  }

  function applyFilters() {
    if (!dataTable) return;
    const district = $("filterDistrict").value;
    const school = $("filterSchool").value;
    const area = $("filterArea").value;
    dataTable.column(2).search(district ? jQuery.fn.dataTable.util.escapeRegex(district) : "", false, true);
    const schoolColumn = dataType === "net" ? 3 : 7;
    const areaColumn = dataType === "net" ? 4 : 8;
    dataTable.column(schoolColumn).search(school ? "^" + jQuery.fn.dataTable.util.escapeRegex(school) : "", true, false);
    if (area === "__not_approved") dataTable.column(areaColumn).search("^(?!อนุมัติ)", true, false);
    else dataTable.column(areaColumn).search(area ? "^" + jQuery.fn.dataTable.util.escapeRegex(area) : "", true, false);
    dataTable.draw();
  }

  function render(items) {
    if (dataTable) {
      dataTable.destroy();
      dataTable = null;
    }
    tableBody.innerHTML = "";
    setTableHead();
    const columnCount = dataType === "net" ? 7 : 11;
    if (!items.length) {
      tableBody.innerHTML = '<tr><td colspan="' + columnCount + '" class="empty-state">ไม่พบข้อมูล</td></tr>';
      summaryCount.textContent = "0 รายการ";
      return;
    }

    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      const values = dataType === "net" ? toNetRow(item) : toComRow(item);
      const row = document.createElement("tr");
      values.forEach((value, index) => {
        const cell = document.createElement("td");
        const htmlColumns = dataType === "net" ? [2,3,4,5] : [2,7,8,9];
        if (htmlColumns.includes(index)) cell.innerHTML = value;
        else cell.textContent = value;
        row.appendChild(cell);
      });
      fragment.appendChild(row);
    });
    tableBody.appendChild(fragment);
    summaryCount.textContent = items.length.toLocaleString("th-TH") + " รายการ";

    if (window.jQuery && jQuery.fn.DataTable) {
      const noOrderColumns = dataType === "net" ? [0,5] : [0,9];
      dataTable = jQuery("#schoolTable").DataTable({
        pageLength: 10,
        lengthMenu: [[5,10,25,50,100,-1],[5,10,25,50,100,"ทั้งหมด"]],
        order: [[2,"asc"]],
        autoWidth: false,
        language: {
          search: "ค้นหา:", lengthMenu: "แสดง _MENU_ รายการ",
          info: "แสดง _START_ ถึง _END_ จาก _TOTAL_ รายการ",
          infoEmpty: "ไม่มีข้อมูล", infoFiltered: "(กรองจากทั้งหมด _MAX_ รายการ)",
          zeroRecords: "ไม่พบข้อมูลที่ค้นหา", emptyTable: "ไม่มีข้อมูล",
          paginate: {first:"แรก",last:"สุดท้าย",next:"ถัดไป",previous:"ก่อนหน้า"}
        },
        columnDefs: [{targets:noOrderColumns,orderable:false,searchable:false}],
        drawCallback: function() {
          const api = this.api();
          const pageInfo = api.page.info();
          api.column(0,{page:"current"}).nodes().each((cell,index) => {
            cell.textContent = pageInfo.start + index + 1;
          });
          api.rows({page:"current"}).nodes().each((row) => {
            const marker = row.querySelector(".action-count");
            if (!marker) return;
            const key = row.cells[1]?.textContent || "";
            const count = getClickCount(key);
            marker.textContent = count ? " " + "✅".repeat(Math.min(count,30)) : "";
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
    statusText.textContent = "โหลดข้อมูลไม่สำเร็จ";
    statusText.className = "small text-danger";
  }

  function showDashboard() {
    const items = dataType === "net" ? apiData.net : apiData.com;
    render(items);
    $("tableSection").classList.remove("d-none");
  }

  async function refreshDashboard() {
    errorBox.classList.add("d-none");
    statusText.textContent = "กำลังเชื่อมต่อ CNS Dashboard API...";
    statusText.className = "small text-secondary";
    $("refreshBtn").disabled = true;
    try {
      const result = await loadDashboard();
      if (!Array.isArray(result.net) || !Array.isArray(result.com)) {
        throw new Error("รูปแบบข้อมูล API ไม่ถูกต้อง (ต้องมี net และ com เป็น Array)");
      }
      apiData = {net: result.net, com: result.com};
      actionCounts.clear();
      fillDistrictOptions();
      showDashboard();
      const stamp = result.updatedAt ? new Date(result.updatedAt).toLocaleString("th-TH") : "ไม่ระบุ";
      statusText.textContent = "เชื่อมต่อสำเร็จ · NET " + apiData.net.length.toLocaleString("th-TH") +
        " รายการ · COM " + apiData.com.length.toLocaleString("th-TH") + " รายการ · อัปเดต " + stamp;
      statusText.className = "small text-success";
      $("guideSection").classList.remove("d-none");
      $("footerSection").classList.remove("d-none");
    } catch (error) {
      showError(error.message || "เกิดข้อผิดพลาดในการโหลดข้อมูล");
    } finally {
      $("refreshBtn").disabled = false;
    }
  }

  ["filterSchool","filterArea","filterDistrict"].forEach((id) => $(id).addEventListener("change", applyFilters));
  $("schoolNameSearch").addEventListener("input", (event) => {
    if (dataTable) dataTable.search(event.target.value).draw();
  });
  $("refreshBtn").addEventListener("click", refreshDashboard);

  document.querySelectorAll(".data-type-btn").forEach((button) => {
    button.addEventListener("click", () => {
      dataType = button.dataset.type;
      document.querySelectorAll(".data-type-btn").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      showDashboard();
    });
  });

  setTableHead();
  fillDistrictOptions();
  refreshDashboard();
})();