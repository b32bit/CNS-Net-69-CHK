(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const jsonInput = $("jsonInput");
  const tableBody = $("schoolTableBody");
  const inputStatus = $("inputStatus");
  const errorBox = $("errorBox");
  const summaryCount = $("summaryCount");
  const districtByCode = {"1090550181":"เทพา","1090550182":"เทพา","1090550183":"เทพา","1090550184":"เทพา","1090550185":"เทพา","1090550186":"เทพา","1090550187":"เทพา","1090550188":"เทพา","1090550189":"เทพา","1090550190":"เทพา","1090550191":"เทพา","1090550192":"เทพา","1090550193":"เทพา","1090550194":"เทพา","1090550195":"เทพา","1090550196":"เทพา","1090550197":"เทพา","1090550198":"เทพา","1090550199":"เทพา","1090550200":"เทพา","1090550201":"เทพา","1090550202":"เทพา","1090550203":"เทพา","1090550204":"เทพา","1090550205":"เทพา","1090550206":"เทพา","1090550207":"เทพา","1090550208":"เทพา","1090550209":"เทพา","1090550210":"เทพา","1090550211":"เทพา","1090550212":"เทพา","1090550213":"เทพา","1090550214":"เทพา","1090550215":"เทพา","1090550216":"เทพา","1090550217":"เทพา","1090550218":"เทพา","1090550219":"เทพา","1090550220":"เทพา","1090550221":"เทพา","1090550222":"เทพา","1090550223":"เทพา","1090550224":"เทพา","1090550225":"เทพา","1090550226":"เทพา","1090550227":"เทพา","1090550228":"จะนะ","1090550229":"จะนะ","1090550230":"จะนะ","1090550231":"จะนะ","1090550232":"จะนะ","1090550233":"จะนะ","1090550234":"จะนะ","1090550235":"จะนะ","1090550236":"จะนะ","1090550237":"จะนะ","1090550238":"จะนะ","1090550239":"จะนะ","1090550240":"จะนะ","1090550241":"จะนะ","1090550242":"จะนะ","1090550243":"จะนะ","1090550244":"จะนะ","1090550245":"จะนะ","1090550246":"จะนะ","1090550247":"จะนะ","1090550248":"จะนะ","1090550249":"จะนะ","1090550250":"จะนะ","1090550251":"จะนะ","1090550252":"จะนะ","1090550253":"จะนะ","1090550254":"จะนะ","1090550255":"จะนะ","1090550256":"จะนะ","1090550258":"จะนะ","1090550259":"จะนะ","1090550261":"จะนะ","1090550262":"จะนะ","1090550263":"จะนะ","1090550264":"จะนะ","1090550265":"จะนะ","1090550266":"จะนะ","1090550267":"จะนะ","1090550268":"จะนะ","1090550269":"จะนะ","1090550270":"จะนะ","1090550271":"จะนะ","1090550272":"จะนะ","1090550273":"จะนะ","1090550274":"จะนะ","1090550275":"จะนะ","1090550276":"จะนะ","1090550277":"จะนะ","1090550278":"จะนะ","1090550279":"จะนะ","1090550280":"นาทวี","1090550281":"นาทวี","1090550282":"นาทวี","1090550283":"นาทวี","1090550284":"นาทวี","1090550285":"นาทวี","1090550286":"นาทวี","1090550287":"นาทวี","1090550288":"นาทวี","1090550289":"นาทวี","1090550290":"นาทวี","1090550291":"นาทวี","1090550292":"นาทวี","1090550293":"นาทวี","1090550294":"นาทวี","1090550297":"นาทวี","1090550298":"นาทวี","1090550300":"นาทวี","1090550301":"นาทวี","1090550302":"นาทวี","1090550303":"นาทวี","1090550304":"นาทวี","1090550305":"นาทวี","1090550306":"นาทวี","1090550307":"นาทวี","1090550308":"นาทวี","1090550309":"นาทวี","1090550310":"นาทวี","1090550311":"นาทวี","1090550312":"นาทวี","1090550313":"สะบ้าย้อย","1090550314":"สะบ้าย้อย","1090550315":"สะบ้าย้อย","1090550316":"สะบ้าย้อย","1090550317":"สะบ้าย้อย","1090550318":"สะบ้าย้อย","1090550319":"สะบ้าย้อย","1090550320":"สะบ้าย้อย","1090550321":"สะบ้าย้อย","1090550322":"สะบ้าย้อย","1090550323":"สะบ้าย้อย","1090550324":"สะบ้าย้อย","1090550325":"สะบ้าย้อย","1090550326":"สะบ้าย้อย","1090550327":"สะบ้าย้อย","1090550328":"สะบ้าย้อย","1090550329":"สะบ้าย้อย","1090550330":"สะบ้าย้อย","1090550331":"สะบ้าย้อย","1090550332":"สะบ้าย้อย","1090550333":"สะบ้าย้อย","1090550334":"สะบ้าย้อย","1090550335":"สะบ้าย้อย","1090550336":"สะบ้าย้อย","1090550337":"สะบ้าย้อย","1090550338":"สะบ้าย้อย","1090550339":"สะบ้าย้อย","1090550340":"สะบ้าย้อย","1090550341":"สะบ้าย้อย","1090550342":"สะบ้าย้อย","1090550343":"สะบ้าย้อย","1090550344":"สะเดา","1090550345":"สะเดา","1090550346":"สะเดา","1090550347":"สะเดา","1090550348":"สะเดา","1090550349":"สะเดา","1090550350":"สะเดา","1090550351":"สะเดา","1090550352":"สะเดา","1090550354":"สะเดา","1090550355":"สะเดา","1090550356":"สะเดา","1090550357":"สะเดา","1090550358":"สะเดา","1090550359":"สะเดา","1090550360":"สะเดา","1090550361":"สะเดา","1090550362":"สะเดา","1090550363":"สะเดา","1090550364":"สะเดา","1090550365":"สะเดา","1090550366":"สะเดา","1090550367":"สะเดา","1090550368":"สะเดา","1090550369":"สะเดา","1090550370":"สะเดา","1090550371":"สะเดา","1090550372":"สะเดา","1090550373":"สะเดา","1090550374":"สะเดา","1090550375":"สะเดา","1090550376":"สะเดา","1090550377":"สะเดา","1090550378":"สะเดา","1090550379":"สะเดา"};
  // Master data จากไฟล์ Excel ที่ผู้ใช้แนบ: ปี 2568 (เพื่อการเรียนการสอน) และเครื่องที่ได้รับบริจาค
  const computers2568 = {"1090550297":0,"1090550298":0,"1090550333":1,"1090550213":0,"1090550322":0,"1090550365":0,"1090550373":0,"1090550310":0,"1090550370":0,"1090550323":0,"1090550282":0,"1090550266":2,"1090550294":2,"1090550377":3,"1090550376":3,"1090550264":7,"1090550336":4,"1090550186":3,"1090550201":3,"1090550304":5,"1090550301":4,"1090550344":5,"1090550193":5,"1090550268":5,"1090550331":10,"1090550314":6,"1090550342":6,"1090550241":12,"1090550321":9,"1090550236":7,"1090550362":9,"1090550267":7,"1090550200":9,"1090550204":6,"1090550315":10,"1090550229":10,"1090550254":12,"1090550187":12,"1090550372":9,"1090550326":9,"1090550233":15,"1090550364":10,"1090550265":15,"1090550199":12,"1090550366":16,"1090550378":15,"1090550221":20,"1090550240":50,"1090550181":15,"1090550228":35,"1090550337":30,"1090550363":42,"1090550320":36,"1090550348":60,"1090550194":0,"1090550251":1,"1090550222":0,"1090550338":0,"1090550246":0,"1090550225":0,"1090550286":0,"1090550317":0,"1090550216":0,"1090550203":0,"1090550210":0,"1090550253":0,"1090550232":0,"1090550291":2,"1090550192":2,"1090550205":3,"1090550272":2,"1090550281":5,"1090550184":5,"1090550209":3,"1090550355":4,"1090550234":5,"1090550352":4,"1090550185":6,"1090550276":4,"1090550302":5,"1090550270":5,"1090550346":5,"1090550274":6,"1090550218":6,"1090550220":7,"1090550202":8,"1090550368":9,"1090550256":11,"1090550334":10,"1090550327":10,"1090550330":8,"1090550214":10,"1090550350":10,"1090550277":14,"1090550374":15,"1090550339":3,"1090550324":6,"1090550356":10,"1090550319":12,"1090550226":6,"1090550305":7,"1090550335":8,"1090550215":11,"1090550250":22,"1090550243":12,"1090550359":2,"1090550208":7,"1090550189":7,"1090550308":5,"1090550307":5,"1090550311":8,"1090550235":8,"1090550238":16,"1090550290":15,"1090550197":16,"1090550190":0,"1090550375":0,"1090550354":0,"1090550275":2,"1090550357":2,"1090550347":2,"1090550223":2,"1090550219":2,"1090550255":2,"1090550288":3,"1090550263":4,"1090550358":4,"1090550312":5,"1090550245":8,"1090550191":6,"1090550182":8,"1090550239":6,"1090550269":3,"1090550285":0,"1090550279":1,"1090550349":3,"1090550244":3,"1090550252":4,"1090550360":5,"1090550217":6,"1090550284":4,"1090550259":7,"1090550278":3,"1090550262":14,"1090550212":0,"1090550224":4,"1090550289":5,"1090550258":6};
  const donatedComputers = {"1090550235":5,"1090550245":5,"1090550274":5,"1090550255":5,"1090550291":5,"1090550232":5,"1090550222":5,"1090550241":10,"1090550181":20};
  let dataTable = null;
  let reporterDataTable = null;
  const actionCounts = new Map();
  const JSON_HISTORY_KEY = "cnsNet69JsonHistory";
  const JSON_HISTORY_LIMIT = 10;
  let isLoadingHistory = false;

  function readJsonHistory() {
    try {
      const value = JSON.parse(localStorage.getItem(JSON_HISTORY_KEY) || "[]");
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  }
  function renderJsonHistory() {
    const select = $("jsonHistorySelect");
    const loadButton = $("loadHistoryBtn");
    if (!select || !loadButton) return;
    const history = readJsonHistory();
    select.innerHTML = "";
    if (!history.length) {
      select.add(new Option("ไม่มีประวัติ JSON", ""));
      loadButton.disabled = true;
      return;
    }
    select.add(new Option("เลือกประวัติ JSON", ""));
    history.forEach(record => {
      const date = new Date(record.createdAt);
      const dateText = Number.isNaN(date.getTime()) ? record.createdAt : date.toLocaleString("th-TH");
      const typeText = record.type === "net" ? "NET" : "COM";
      select.add(new Option(typeText + " · " + Number(record.count || 0).toLocaleString("th-TH") +
        " รายการ · " + dateText, record.id));
    });
    loadButton.disabled = !select.value;
  }
  function saveJsonHistory(raw, count) {
    if (isLoadingHistory) return;
    try {
      const history = readJsonHistory();
      history.unshift({
        id: String(Date.now()) + "-" + Math.random().toString(36).slice(2, 7),
        type: dataType,
        createdAt: new Date().toISOString(),
        count,
        raw
      });
      localStorage.setItem(JSON_HISTORY_KEY, JSON.stringify(history.slice(0, JSON_HISTORY_LIMIT)));
      renderJsonHistory();
    } catch (error) {
      inputStatus.textContent = "แปลงข้อมูลสำเร็จ แต่บันทึกประวัติไม่ได้ (พื้นที่ Local Storage อาจเต็ม)";
      inputStatus.className = "small text-warning ms-lg-2";
    }
  }

  const clean = (value) => value === null || value === undefined || value === "" ? "-" : String(value);
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ch]);

  function fullName(user) {
    if (!user || typeof user !== "object") return "-";
    return [user.firstName, user.lastName].filter(Boolean).join(" ") || "-";
  }
  function formatDateTime(value) {
    if (value === null || value === undefined || String(value).trim() === "") return "-";
    const input = String(value).trim();
    let date = new Date(input);
    if (Number.isNaN(date.getTime())) {
      const thaiMonths = {
        "ม.ค.":"01","ก.พ.":"02","มี.ค.":"03","เม.ย.":"04",
        "พ.ค.":"05","มิ.ย.":"06","ก.ค.":"07","ส.ค.":"08",
        "ก.ย.":"09","ต.ค.":"10","พ.ย.":"11","ธ.ค.":"12"
      };
      const match = input.match(/^(\d{1,2})\s+(ม\.ค\.|ก\.พ\.|มี\.ค\.|เม\.ย\.|พ\.ค\.|มิ\.ย\.|ก\.ค\.|ส\.ค\.|ก\.ย\.|ต\.ค\.|พ\.ย\.|ธ\.ค\.)\s+(\d{4})\s+(\d{1,2}):(\d{2})$/);
      if (match) {
        let year = Number(match[3]);
        if (year > 2400) year -= 543;
        date = new Date(Number(year), Number(thaiMonths[match[2]]) - 1, Number(match[1]), Number(match[4]), Number(match[5]));
      }
    }
    if (Number.isNaN(date.getTime())) return input;
    const pad = number => String(number).padStart(2, "0");
    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) +
      " " + pad(date.getHours()) + ":" + pad(date.getMinutes());
  }
  function statusBadge(label, date, kind) {
    const cls = kind === "ok" ? "status-ok" : kind === "pending" ? "status-pending" : "status-neutral";
    const detail = date ? "<br>" + escapeHtml(formatDateTime(date)) : "";
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
  let dataType = "com";
  function setTableHead() {
    const net = dataType === "net";
    $("tableHead").innerHTML = net
      ? '<tr><th class="text-center">ลำดับ</th><th>รหัส</th><th>โรงเรียน / อำเภอ</th><th>ผู้ให้ข้อมูล</th><th>สถานะโรงเรียน</th><th>สถานะเขต</th><th class="text-center">#</th><th>วันที่ดำเนินการล่าสุด</th></tr>'
      : '<tr><th class="text-center">ลำดับ</th><th>รหัส</th><th>โรงเรียน / อำเภอ</th><th>รูปแบบคอมพิวเตอร์</th><th class="text-end">บริจาค 68</th><th class="text-end">เรียน 68</th><th class="text-end">เรียน 69</th><th class="text-end">บริหาร 69</th><th>สถานะโรงเรียน</th><th>สถานะเขต</th><th class="text-center">#</th><th>วันที่ดำเนินการล่าสุด</th></tr>';
    $("tableTitle").textContent = net
      ? "รายการการบันทึกข้อมูลด้านเครือข่ายอินเทอร์เน็ตในสังกัด สพฐ."
      : "รายการการบันทึกข้อมูลด้านคอมพิวเตอร์พร้อมอุปกรณ์ในสังกัด สพฐ.";
    $("tableDescription").textContent = net
      ? "ค้นหาได้ทั้งรหัสโรงเรียนและชื่อโรงเรียน พร้อมแสดงอำเภอในคอลัมน์เดียวกัน"
      : "เปรียบเทียบจำนวนคอมพิวเตอร์ปี 2568 กับข้อมูลปัจจุบันจาก JSON และแสดงยอดได้รับบริจาคแยกต่างหาก";
  }
  function schoolCell(school, code) {
    const district = districtByCode[code] || school.district || "ไม่พบใน Main table";
    const schoolUrl = "https://c7.sk3.go.th/mis7sk3/school.php?school_id=" + encodeURIComponent(code);
    return '<a class="school-name" href="' + escapeHtml(schoolUrl) +
      '" target="_blank" rel="noopener noreferrer">' + escapeHtml(school.name || "-") +
      '</a> <span class="school-district">(' + escapeHtml(district) + ')</span>';
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
      formatDateTime(item.lastActionAt)
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
      Object.prototype.hasOwnProperty.call(donatedComputers, code) ? donatedComputers[code].toLocaleString("th-TH") : "-",
      Object.prototype.hasOwnProperty.call(computers2568, code) ? computers2568[code].toLocaleString("th-TH") : "-",
      hasRecord ? learning.toLocaleString("th-TH") : "-",
      hasRecord ? management.toLocaleString("th-TH") : "-",
      statusBadge(schoolStatus, "", hasRecord ? "ok" : "pending"),
      statusBadge(areaStatus, item.esaApprovedAt || item.esaFeedbackAt || "", areaStatus === "อนุมัติ" ? "ok" : "neutral"),
      hasRecord ? actionCell(item, makeComActionUrl(item), school.id || code, school.name || code) : "",
      formatDateTime(item.lastUpdated || item.lastActionAt)
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
    if (reporterDataTable) { reporterDataTable.destroy(); reporterDataTable = null; }
  }
  function firstValue(object, keys) {
    for (const key of keys) {
      const value = key.split(".").reduce((current, part) => current && current[part], object);
      if (value !== undefined && value !== null && String(value).trim() !== "") return value;
    }
    return "";
  }
  function formatPhone(value) {
    const original = String(value ?? "").trim();
    if (!original) return "-";
    let digits = original.replace(/\\D/g, "");
    if (digits.length === 11 && digits.startsWith("66")) digits = "0" + digits.slice(2);
    if (digits.length === 10 && digits.startsWith("0")) {
      return digits.slice(0, 3) + "-" + digits.slice(3, 6) + "-" + digits.slice(6);
    }
    return original;
  }
  function reporterFor(item) {
    const form = dataType === "net" ? (item.formInternet || {}) : (item.formComputer || {});
    const user = form.createdByNavigation || item.createdByNavigation || {};
    const school = item.mstSchool || {};
    const code = String(school.code || "").trim();
    const district = districtByCode[code] || school.district || "ไม่พบใน Main table";
    const position = firstValue(user, ["position","positionName","position.title","position.name","mstPosition.title","mstPosition.name","jobPosition.title","jobPosition.name"]);
    return {
      fullName: fullName(user),
      nickname: firstValue(user, ["nickname","nickName","nick_name","alias"]) || "-",
      phone: formatPhone(firstValue(user, ["phoneNumber","phone","telephone","mobile","mobilePhone","tel"])),
      position: [position, school.name, district].filter(value => value !== undefined && value !== null && String(value).trim() !== "").join(" ") || "-"
    };
  }
  function renderReporters(items) {
    const body = $("reporterTableBody");
    const rows = items.map(reporterFor).filter(row => row.fullName !== "-" || row.phone !== "-" || row.nickname !== "-");
    const unique = new Map();
    rows.forEach(row => {
      const key = [row.fullName,row.nickname,row.phone,row.position].join("|");
      if (!unique.has(key)) unique.set(key,row);
    });
    const reporters = [...unique.values()].sort((a,b)=>a.fullName.localeCompare(b.fullName,"th"));
    body.innerHTML = reporters.length ? reporters.map(row =>
      "<tr><td>" + escapeHtml(row.fullName) + "</td><td>" + escapeHtml(row.nickname) +
      "</td><td class=\"text-center\">" + escapeHtml(row.phone) + "</td><td>" +
      escapeHtml(row.position) + "</td></tr>"
    ).join("") : '<tr><td colspan="4" class="empty-state">ไม่พบข้อมูลผู้รายงานใน JSON ชุดนี้</td></tr>';
    $("reporterCount").textContent = reporters.length.toLocaleString("th-TH") + " รายชื่อ";
    if (reporters.length && window.jQuery && jQuery.fn.DataTable) {
      reporterDataTable = jQuery("#reporterTable").DataTable({
        pageLength:10, lengthMenu:[[5,10,25,50,-1],[5,10,25,50,"ทั้งหมด"]],
        order:[[0,"asc"]], autoWidth:false,
        language:{
          search:"ค้นหา:", lengthMenu:"แสดง _MENU_ รายการ",
          info:"แสดง _START_ ถึง _END_ จาก _TOTAL_ รายการ",
          infoEmpty:"ไม่มีข้อมูล", infoFiltered:"(กรองจากทั้งหมด _MAX_ รายการ)",
          zeroRecords:"ไม่พบข้อมูลที่ค้นหา", emptyTable:"ไม่มีข้อมูล",
          paginate:{first:"แรก",last:"สุดท้าย",next:"ถัดไป",previous:"ก่อนหน้า"}
        }
      });
    }
  }
  function showResultTab(tab) {
    const reporters = tab === "reporters";
    $("recordsTabPane").classList.toggle("d-none", reporters);
    $("reportersTabPane").classList.toggle("d-none", !reporters);
    $("recordsTab").classList.toggle("active", !reporters);
    $("reportersTab").classList.toggle("active", reporters);
    $("recordsTab").setAttribute("aria-selected", String(!reporters));
    $("reportersTab").setAttribute("aria-selected", String(reporters));
    if (reporters && reporterDataTable) reporterDataTable.columns.adjust();
  }
  async function updatePagesVersionStatus() {
    const versionLink = $("pagesVersionLink");
    const statusNode = $("pagesVersionStatus");
    const buildNode = $("pagesBuildDate");
    if (!versionLink || !statusNode || !buildNode) return;

    const apiBase = "https://api.github.com/repos/b32bit/CNS-Net-69-CHK";
    const headers = { Accept: "application/vnd.github+json" };
    const fetchJson = async (url) => {
      const response = await fetch(url, { headers, cache: "no-store" });
      if (!response.ok) throw new Error("GitHub API HTTP " + response.status);
      return response.json();
    };
    try {
      const [branch, runs] = await Promise.all([
        fetchJson(apiBase + "/commits/main"),
        fetchJson(apiBase + "/actions/workflows/pages.yml/runs?branch=main&per_page=1")
      ]);
      const latestCommit = branch.sha;
      const latestRun = runs.workflow_runs?.[0];
      if (!latestRun) throw new Error("ไม่พบข้อมูล GitHub Pages deployment");

      const deployedCommit = latestRun.head_sha || "";
      const shortSha = deployedCommit ? deployedCommit.slice(0, 7) : "-";
      versionLink.textContent = shortSha;
      versionLink.href = deployedCommit
        ? "https://github.com/b32bit/CNS-Net-69-CHK/commit/" + encodeURIComponent(deployedCommit)
        : "https://github.com/b32bit/CNS-Net-69-CHK/actions/workflows/pages.yml";
      const buildTime = latestRun.updated_at || latestRun.created_at;
      buildNode.textContent = "Build: " + (buildTime
        ? new Date(buildTime).toLocaleString("th-TH", { dateStyle: "short", timeStyle: "short" })
        : "-");

      statusNode.className = "pages-version-status";
      if (latestRun.status !== "completed") {
        statusNode.textContent = "กำลัง Deploy";
        statusNode.classList.add("is-pending");
      } else if (latestRun.conclusion !== "success") {
        statusNode.textContent = "Deploy ไม่สำเร็จ";
        statusNode.classList.add("is-error");
      } else if (deployedCommit && deployedCommit === latestCommit) {
        statusNode.textContent = "Latest";
        statusNode.classList.add("is-current");
      } else {
        statusNode.textContent = "Outdated · รออัปเดต";
        statusNode.classList.add("is-pending");
      }
    } catch (error) {
      versionLink.textContent = "ไม่ทราบเวอร์ชัน";
      versionLink.href = "https://github.com/b32bit/CNS-Net-69-CHK/actions/workflows/pages.yml";
      statusNode.textContent = "ตรวจสอบไม่ได้";
      statusNode.className = "pages-version-status is-error";
      buildNode.textContent = "Build: -";
    }
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
    const schoolStatusColumn = dataType === "net" ? 4 : 8;
    const areaStatusColumn = dataType === "net" ? 5 : 9;
    dataTable.column(schoolStatusColumn).search(school ? "^" + jQuery.fn.dataTable.util.escapeRegex(school) : "", true, false);
    if (area === "__not_approved") dataTable.column(areaStatusColumn).search("^(?!อนุมัติ)", true, false);
    else dataTable.column(areaStatusColumn).search(area ? "^" + jQuery.fn.dataTable.util.escapeRegex(area) : "", true, false);
    dataTable.draw();
  }
  function render(items) {
    destroyTable();
    renderReporters(items);
    showResultTab("records");
    tableBody.innerHTML = "";
    setTableHead();
    const columnCount = dataType === "net" ? 8 : 12;
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
        const htmlColumns = dataType === "net" ? [2,4,5,6] : [2,8,9,10];
        if (htmlColumns.includes(index)) cell.innerHTML = value;
        else cell.textContent = value;
        row.appendChild(cell);
      });
      fragment.appendChild(row);
    });
    tableBody.appendChild(fragment);
    summaryCount.textContent = items.length.toLocaleString("th-TH") + " รายการ";
    if (window.jQuery && jQuery.fn.DataTable) {
      const noOrderColumns = dataType === "net" ? [0,6] : [0,10];
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
      saveJsonHistory(raw, items.length);
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
        tableBody.innerHTML = '<tr><td colspan="' + (dataType === "net" ? 8 : 12) + '" class="empty-state">วาง JSON แล้วกด “แปลงข้อมูล” เพื่อเริ่มตรวจสอบ</td></tr>';
        summaryCount.textContent = "ยังไม่มีข้อมูล";
      }
    });
  });
  setTableHead();
  $("jsonHistorySelect").addEventListener("change", () => {
    $("loadHistoryBtn").disabled = !$("jsonHistorySelect").value;
  });
  $("loadHistoryBtn").addEventListener("click", () => {
    const selectedId = $("jsonHistorySelect").value;
    const record = readJsonHistory().find(item => item.id === selectedId);
    if (!record) {
      inputStatus.textContent = "ไม่พบประวัติ JSON ที่เลือก";
      inputStatus.className = "small text-danger ms-lg-2";
      return;
    }
    dataType = record.type === "net" ? "net" : "com";
    document.querySelectorAll(".data-type-btn").forEach(button => {
      const active = button.dataset.type === dataType;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    jsonInput.value = record.raw;
    isLoadingHistory = true;
    convert();
    isLoadingHistory = false;
    if (!$("tableSection").classList.contains("d-none")) {
      inputStatus.textContent = "เรียกคืนประวัติ " + (dataType === "net" ? "NET" : "COM") + " สำเร็จ";
      inputStatus.className = "small text-success ms-lg-2";
    }
  });
  $("recordsTab").addEventListener("click", () => showResultTab("records"));
  $("reportersTab").addEventListener("click", () => showResultTab("reporters"));
    $("convertBtn").addEventListener("click", convert);
  $("clearBtn").addEventListener("click", () => {
    jsonInput.value = "";
    actionCounts.clear();
    destroyTable();
    $("reporterTableBody").innerHTML = '<tr><td colspan="4" class="empty-state">แปลงข้อมูลเพื่อแสดงรายชื่อผู้รายงาน</td></tr>';
    $("reporterCount").textContent = "0 รายชื่อ";
    showResultTab("records");
    $("inputSection").classList.remove("d-none");
    $("guideSection").classList.remove("d-none");
    $("tableSection").classList.add("d-none");
    tableBody.innerHTML = '<tr><td colspan="' + (dataType === "net" ? 8 : 13) + '" class="empty-state">วาง JSON แล้วกด “แปลงข้อมูล” เพื่อเริ่มตรวจสอบ</td></tr>';
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
  renderJsonHistory();
  updatePagesVersionStatus();
})();