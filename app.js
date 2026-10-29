const originalProducts = [{"id":1,"name":"آبدوغ خیار","category":"آبدوغ خیار","price":450,"image":""},{"id":2,"name":"نیمرو","category":"صبحانه","price":390,"image":""},{"id":3,"name":"املت گوجه","category":"صبحانه","price":520,"image":"photos/املت گوجه.webp"},{"id":4,"name":"املت سوجوک","category":"صبحانه","price":610,"image":"photos/املت سوجوک.webp"},{"id":5,"name":"املت اسفناج","category":"صبحانه","price":540,"image":"photos/املت اسفناج.webp"},{"id":6,"name":"تست رژیمی","category":"صبحانه","price":310,"image":""},{"id":7,"name":"آب پرتغال طبیعی","category":"آبمیوه طبیعی","price":375,"image":""},{"id":8,"name":"فراپه کارامل","category":"فراپه","price":550,"image":""},{"id":9,"name":"فراپه شکلات","category":"فراپه","price":550,"image":""},{"id":10,"name":"فراپه توت فرنگی","category":"فراپه","price":550,"image":""},{"id":11,"name":"چای و نبات","category":"چای و دمنوش","price":200,"image":"photos/چای و نبات.webp"},{"id":12,"name":"دمنوش ویکتوریا سان ست","category":"چای و دمنوش","price":200,"image":""},{"id":13,"name":"دمنوش پینک رز","category":"چای و دمنوش","price":190,"image":""},{"id":14,"name":"دمنوش لوندر دریم","category":"چای و دمنوش","price":205,"image":""},{"id":15,"name":"دمنوش گلدن وانیلا","category":"چای و دمنوش","price":190,"image":""},{"id":16,"name":"دمنوش لمون گرس جینجر","category":"چای و دمنوش","price":220,"image":""},{"id":17,"name":"دمنوش رویال جزمین","category":"چای و دمنوش","price":190,"image":""},{"id":18,"name":"دمنوش نعنا فلفلی","category":"چای و دمنوش","price":190,"image":""},{"id":19,"name":"دمنوش استرابری کیس","category":"چای و دمنوش","price":220,"image":""},{"id":20,"name":"دمنوش کویین بری","category":"چای و دمنوش","price":220,"image":"photos/دمنوش و کویین بری.webp"},{"id":21,"name":"دمنوش گل گاو زبان","category":"چای و دمنوش","price":185,"image":""},{"id":22,"name":"دمنوش نعنا دارچین","category":"چای و دمنوش","price":185,"image":""},{"id":23,"name":"اسپرسو","category":"نوشیدنی گرم بر پایه اسپرسو","price":275,"image":""},{"id":24,"name":"آمریکانو","category":"نوشیدنی گرم بر پایه اسپرسو","price":285,"image":""},{"id":25,"name":"اسپرسو ماکیاتو","category":"نوشیدنی گرم بر پایه اسپرسو","price":325,"image":""},{"id":26,"name":"کورتادو","category":"نوشیدنی گرم بر پایه اسپرسو","price":350,"image":""},{"id":27,"name":"کاپوچینو","category":"نوشیدنی گرم بر پایه اسپرسو","price":355,"image":""},{"id":28,"name":"لاته","category":"نوشیدنی گرم بر پایه اسپرسو","price":365,"image":"photos/لاته.webp"},{"id":29,"name":"کارامل ماکیاتو","category":"نوشیدنی گرم بر پایه اسپرسو","price":420,"image":"photos/کارامل ماکیاتو.webp"},{"id":30,"name":"موکا","category":"نوشیدنی گرم بر پایه اسپرسو","price":420,"image":""},{"id":31,"name":"لاته +سیروپ ","category":"نوشیدنی گرم بر پایه اسپرسو","price":420,"image":""},{"id":32,"name":"سینامون دولچه لاته\t","category":"نوشیدنی گرم بر پایه اسپرسو","price":400,"image":""},{"id":33,"name":"اسپرسو 100% عربیکا تک خواستگاه","category":"نوشیدنی گرم بر پایه اسپرسو","price":320,"image":""},{"id":34,"name":"آیس اسپرسو","category":"نوشیدنی سرد بر پایه اسپرسو","price":275,"image":""},{"id":35,"name":"آیس آمریکانو","category":"نوشیدنی سرد بر پایه اسپرسو","price":305,"image":""},{"id":36,"name":"آیس لاته","category":"نوشیدنی سرد بر پایه اسپرسو","price":380,"image":"photos/آیس لاته.webp"},{"id":37,"name":"آیس کارامل ماکیاتو","category":"نوشیدنی سرد بر پایه اسپرسو","price":440,"image":"photos/آیس کارامل ماکیاتو.webp"},{"id":38,"name":"آیس موکا","category":"نوشیدنی سرد بر پایه اسپرسو","price":440,"image":"photos/آیس موکا.webp"},{"id":39,"name":"آفوگاتو","category":"نوشیدنی سرد بر پایه اسپرسو","price":375,"image":""},{"id":40,"name":"آیس لاته+سیروپ","category":"نوشیدنی سرد بر پایه اسپرسو","price":440,"image":"photos/آیس لاته+سیروپ.webp"},{"id":41,"name":"بامبل کافی ","category":"نوشیدنی سرد بر پایه اسپرسو","price":475,"image":"photos/بامبل کافی.webp"},{"id":42,"name":"اتیوپی گوجی وامانا","category":"قهوه دمی","price":410,"image":"photos/اتیوپی گوجی وامانا.webp"},{"id":43,"name":"اندونزی پگاسینگ","category":"قهوه دمی","price":490,"image":"photos/اندونزی پگاسینگ.webp"},{"id":44,"name":"اتیوپی اوراگا","category":"قهوه دمی","price":460,"image":"photos/اتیوپی اوراگا.webp"},{"id":45,"name":"کلد برو 475cc","category":"قهوه دمی","price":540,"image":""},{"id":46,"name":"کلد برو 300cc","category":"قهوه دمی","price":350,"image":""},{"id":47,"name":"جزوه (ترک)","category":"قهوه دمی","price":250,"image":""},{"id":48,"name":"ماچا لاته","category":"ماچا / اسپرولینا / اوبه","price":350,"image":""},{"id":49,"name":"آیس ماچا لاته","category":"ماچا / اسپرولینا / اوبه","price":360,"image":"photos/آیس ماچا لاته.webp"},{"id":50,"name":"اسپرولینا","category":"ماچا / اسپرولینا / اوبه","price":375,"image":""},{"id":51,"name":"آیس اسپرولینا","category":"ماچا / اسپرولینا / اوبه","price":385,"image":"photos/آیس اسپرولینا.webp"},{"id":52,"name":"ماچا گاتو","category":"ماچا / اسپرولینا / اوبه","price":375,"image":""},{"id":53,"name":"اوبه لاته","category":"ماچا / اسپرولینا / اوبه","price":370,"image":""},{"id":54,"name":"آیس اوبه لاته","category":"ماچا / اسپرولینا / اوبه","price":380,"image":""},{"id":55,"name":"هات چاکلت","category":"گرم نوش ها","price":320,"image":"photos/هات چاکلت.webp"},{"id":56,"name":"پینک چاکلت","category":"گرم نوش ها","price":315,"image":""},{"id":57,"name":"وایت چاکلت","category":"گرم نوش ها","price":300,"image":""},{"id":58,"name":"ماسالا","category":"گرم نوش ها","price":315,"image":"photos/ماسالا.webp"},{"id":59,"name":"کرک","category":"گرم نوش ها","price":325,"image":""},{"id":60,"name":"ثعلب","category":"گرم نوش ها","price":300,"image":""},{"id":61,"name":"بیسکوهات","category":"گرم نوش ها","price":350,"image":""},{"id":62,"name":"هات چاکلت مینت","category":"گرم نوش ها","price":380,"image":""},{"id":63,"name":"گرم نوش پسته زعفران","category":"گرم نوش ها","price":295,"image":""},{"id":64,"name":"لیموناد","category":"ماکتیل","price":285,"image":""},{"id":65,"name":"موهیتو","category":"ماکتیل","price":295,"image":"photos/موهیتو.webp"},{"id":66,"name":"آیس تی","category":"ماکتیل","price":290,"image":"photos/آیس تی.webp"},{"id":67,"name":"اوشن","category":"ماکتیل","price":375,"image":""},{"id":68,"name":"روبی","category":"ماکتیل","price":375,"image":"photos/روبی.webp"},{"id":69,"name":"شیک نوتلا","category":"میلک شیک ها","price":500,"image":""},{"id":70,"name":"شیک شکلات مخملی","category":"میلک شیک ها","price":400,"image":""},{"id":71,"name":"شیک قهوه","category":"میلک شیک ها","price":550,"image":""},{"id":72,"name":"شیک شیراز","category":"میلک شیک ها","price":400,"image":"photos/شیک شیراز.webp"},{"id":73,"name":"شیک بادام زمینی","category":"میلک شیک ها","price":450,"image":""},{"id":74,"name":"شیک وانیل","category":"میلک شیک ها","price":375,"image":""},{"id":75,"name":"شیک توت فرنگی","category":"میلک شیک ها","price":450,"image":""},{"id":76,"name":"دنیش آلبالو","category":"کیک و دسر","price":400,"image":"photos/دنیش آلبالو.webp"},{"id":77,"name":"کروسان بادام","category":"کیک و دسر","price":400,"image":""},{"id":78,"name":"کروسان شکلات","category":"کیک و دسر","price":400,"image":""},{"id":79,"name":"رول گردو دارچین","category":"کیک و دسر","price":325,"image":""},{"id":80,"name":"رول هل پسته","category":"کیک و دسر","price":325,"image":""},{"id":81,"name":"چیز کیک سنسپاستین","category":"کیک و دسر","price":300,"image":""},{"id":82,"name":"پن خرما گردو","category":"کیک و دسر","price":230,"image":""},{"id":83,"name":"تارت توت فرنگی","category":"کیک و دسر","price":450,"image":"photos/تارت توت فرنگی.webp"},{"id":84,"name":"کیک دبل چاکلت","category":"کیک و دسر","price":290,"image":""},{"id":85,"name":"دنیش موز شکلات","category":"کیک و دسر","price":378,"image":""},{"id":86,"name":"رول نیویورکی پسته","category":"کیک و دسر","price":473,"image":"photos/رول نیویورکی پسته.webp"},{"id":87,"name":"دنیش بلوبری ","category":"کیک و دسر","price":473,"image":"photos/دنیش بلوبری.webp"},{"id":88,"name":"بروکی","category":"کیک و دسر","price":275,"image":""},{"id":89,"name":"دسر پان اسپنیش","category":"کیک و دسر","price":250,"image":""},{"id":90,"name":"بیبی کروسان","category":"کیک و دسر","price":174,"image":""},{"id":91,"name":"گلت میوه ای ","category":"کیک و دسر","price":378,"image":"photos/گلت میوه ای.webp"},{"id":92,"name":"پای آناناس","category":"کیک و دسر","price":265,"image":""},{"id":93,"name":"پای سیب","category":"کیک و دسر","price":135,"image":""},{"id":94,"name":"کیک رژیمی شکلاتی","category":"کیک و دسر","price":156,"image":""},{"id":95,"name":"چیزکیک لوتوس","category":"کیک و دسر","price":350,"image":"photos/چیز کیک لوتوس.webp"},{"id":96,"name":"کیک سیب دارچین","category":"کیک و دسر","price":270,"image":""},{"id":97,"name":"چیز کیک ژاپنی","category":"کیک و دسر","price":250,"image":""},{"id":98,"name":"کیک هویج گردو","category":"کیک و دسر","price":270,"image":""},{"id":99,"name":"کیک رژیمی بادام زمینی","category":"کیک و دسر","price":156,"image":""},{"id":100,"name":"موس شکلات","category":"کیک و دسر","price":425,"image":""},{"id":101,"name":"پن سیب و دارچین","category":"کیک و دسر","price":275,"image":""},{"id":102,"name":"کوکی رژیمی براونی","category":"کوکی","price":174,"image":""},{"id":103,"name":"کوکی رژیمی هویج گردو","category":"کوکی","price":186,"image":""},{"id":104,"name":"کوکی رژیمی نارگیلی","category":"کوکی","price":166,"image":""},{"id":105,"name":"کوکی رژیمی زنجبیلی","category":"کوکی","price":176,"image":""},{"id":106,"name":"کوکی رژیمی جوکشمش","category":"کوکی","price":170,"image":""},{"id":107,"name":"کوکی رژیمی بادام","category":"کوکی","price":196,"image":""},{"id":108,"name":"کوکی کلوچه مسقطی","category":"کوکی","price":250,"image":""},{"id":109,"name":"سیروپ","category":"تاپینگ و سرویس","price":70,"image":""},{"id":110,"name":"آب معدنی","category":"تاپینگ و سرویس","price":35,"image":""},{"id":111,"name":"سرویس کیک","category":"تاپینگ و سرویس","price":100,"image":""},{"id":112,"name":"100 گرم قهوه آسیاب شده","category":"تاپینگ و سرویس","price":700,"image":""},{"id":113,"name":"پک 4 عددی کوکی سکه ای","category":"تاپینگ و سرویس","price":100,"image":""},{"id":114,"name":"100 گرم قهوه ترک","category":"تاپینگ و سرویس","price":650,"image":""},{"id":115,"name":"لیوان شیر","category":"تاپینگ و سرویس","price":100,"image":""},{"id":116,"name":"شات اسپرسو","category":"تاپینگ و سرویس","price":210,"image":""},{"id":117,"name":"اسکوپ بستنی","category":"تاپینگ و سرویس","price":100,"image":""},{"id":118,"name":"آب معدنی 750cc","category":"تاپینگ و سرویس","price":50,"image":""},{"id":119,"name":"لیوان یخ","category":"تاپینگ و سرویس","price":75,"image":""},{"id":120,"name":"سودا","category":"تاپینگ و سرویس","price":40,"image":""},{"id":121,"name":"قهوه 100% عربیکا","category":"تاپینگ و سرویس","price":55,"image":""}];

let products = originalProducts.map(p => ({ ...p }));
let activeCategory = "همه";
let admin = false;
let saving = false;
let categories = ["همه", ...new Set(products.map(p => p.category))];

const $ = s => document.querySelector(s);

const symbols = {
  "نوشیدنی گرم بر پایه اسپرسو":"☕",
  "نوشیدنی سرد بر پایه اسپرسو":"❄",
  "چای و دمنوش":"♨",
  "قهوه دمی":"◉",
  "ماچا / اسپرولینا / اوبه":"✿",
  "گرم نوش ها":"♨",
  "ماکتیل":"✦",
  "میلک شیک ها":"🥛",
  "کیک و دسر":"✧",
  "کوکی":"❋",
  "صبحانه":"☼",
  "فراپه":"❄",
  "آبمیوه طبیعی":"◉",
  "آبدوغ خیار":"❋",
  "تاپینگ و سرویس":"✳"
};

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;",
    '"':"&quot;", "'":"&#39;"
  }[c]));
}

function money(v) {
  if (v === null || v === "" || v === undefined) return "—";
  return Number(v).toLocaleString("fa-IR") + " <small>تومان</small>";
}

function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

// پنجره ورود مدیر
const adminUI = document.createElement("div");
adminUI.id = "adminLoginBox";
adminUI.hidden = true;
adminUI.innerHTML = `
  <div class="admin-login-card" role="dialog" aria-modal="true"
       aria-labelledby="adminLoginTitle">
    <button type="button" id="closeAdminLogin" aria-label="بستن">✕</button>
    <h2 id="adminLoginTitle">ورود مدیریت کافه نعنا</h2>
    <form id="adminLoginForm">
      <label for="adminEmail">ایمیل مدیر</label>
      <input id="adminEmail" type="email" autocomplete="username"
             required placeholder="ایمیل حساب مدیر">
      <label for="adminPassword">رمز عبور</label>
      <input id="adminPassword" type="password"
             autocomplete="current-password" required
             placeholder="رمز عبور">
      <button id="adminLoginSubmit" type="submit">ورود</button>
      <p id="adminLoginMessage" role="status"></p>
    </form>
  </div>
`;

document.body.appendChild(adminUI);

const adminStyle = document.createElement("style");
adminStyle.textContent = `
  #adminLoginBox {
    position:fixed; inset:0; z-index:9999;
    background:rgba(0,0,0,.65);
    display:flex; align-items:center; justify-content:center;
    padding:18px;
  }
  #adminLoginBox[hidden] { display:none; }
  .admin-login-card {
    position:relative; width:min(100%,390px);
    padding:28px; border-radius:20px;
    background:#fff; color:#183f2d;
    font-family:inherit; box-shadow:0 20px 70px #0004;
  }
  .admin-login-card h2 { font-size:21px; margin:10px 0 22px; }
  .admin-login-card label { display:block; margin:14px 0 7px; }
  .admin-login-card input {
    box-sizing:border-box; width:100%; padding:12px;
    border:1px solid #cbd5ce; border-radius:10px;
    font:inherit; direction:ltr;
  }
  .admin-login-card button {
    cursor:pointer; font:inherit;
  }
  #adminLoginSubmit {
    width:100%; margin-top:20px; padding:12px;
    border:0; border-radius:10px;
    background:#183f2d; color:white;
  }
  #closeAdminLogin {
    position:absolute; left:14px; top:12px;
    border:0; background:transparent; font-size:20px;
  }
  #adminLoginMessage { font-size:13px; line-height:1.8; }
  .edit-price { display:none; }
  body.admin-mode .edit-price { display:inline-block; }
  body:not(.admin-mode) .admin-hint { display:none; }
  body.admin-mode .admin-hint { display:block; }
`;
document.head.appendChild(adminStyle);

function openLogin() {
  adminUI.hidden = false;
  $("#adminLoginMessage").textContent = "";
  $("#adminEmail").focus();
}

function closeLogin() {
  adminUI.hidden = true;
}

$("#closeAdminLogin").addEventListener("click", closeLogin);

adminUI.addEventListener("click", e => {
  if (e.target === adminUI) closeLogin();
});

// فقط وقتی سرور مدیر بودن را تأیید کند، حالت مدیریت فعال می‌شود.

async function verifyAdmin({ updateUI = true } = {}) {
  try {
    const { data: sessionData, error: sessionError } =
      await supabaseClient.auth.getSession();

    if (sessionError) throw sessionError;

    if (!sessionData.session) {
      if (updateUI) setAdminMode(false);
      else admin = false;
      return false;
    }

    const { data, error } = await supabaseClient.rpc("is_admin");

    if (error) throw error;

    if (data !== true) {
      if (updateUI) setAdminMode(false);
      else admin = false;
      return false;
    }

    admin = true;

    if (updateUI) {
      setAdminMode(true);
    }

    return true;
  } catch (error) {
    console.error("Admin verification failed:", error);

    if (updateUI) setAdminMode(false);
    else admin = false;

    return false;
  }
}

function setAdminMode(enabled) {
  admin = enabled;
  document.body.classList.toggle("admin-mode", enabled);

  $("#savePrices").style.display = enabled ? "inline-block" : "none";
  $("#adminToggle").textContent = enabled ? "خروج مدیر" : "ورود مدیر";

  const hint = document.querySelector(".admin-hint");
  if (hint) {
    hint.textContent = enabled
      ? "حالت مدیریت فعال است؛ قیمت‌ها را تغییر بده و ذخیره کن."
      : "";
  }

  renderProducts();
}

$("#adminLoginForm").addEventListener("submit", async e => {
  e.preventDefault();

  const button = $("#adminLoginSubmit");
  const message = $("#adminLoginMessage");

  button.disabled = true;
  message.textContent = "در حال بررسی حساب...";

  try {
    const email = $("#adminEmail").value.trim();
    const password = $("#adminPassword").value;

    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;

    const verified = await verifyAdmin();

    if (!verified) {
      await supabaseClient.auth.signOut();
      setAdminMode(false);
      throw new Error("این حساب مجوز مدیریت قیمت‌ها را ندارد.");
    }

    closeLogin();
    $("#adminPassword").value = "";
    showToast("ورود مدیر موفق بود ✅");
  } catch (error) {
    console.error("Login failed:", error);
    message.textContent = error.message ||
      "ورود ناموفق بود؛ ایمیل و رمز را بررسی کن.";
  } finally {
    button.disabled = false;
  }
});

$("#adminToggle").addEventListener("click", async () => {
  if (admin) {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;

      setAdminMode(false);
      showToast("از حساب مدیر خارج شدی.");
    } catch (error) {
      console.error(error);
      showToast("خروج ناموفق بود؛ دوباره تلاش کن.");
    }
  } else {
    openLogin();
  }
});

async function loadProductsFromSupabase() {
  try {
    const { data, error } = await supabaseClient
      .from("products")
      .select("id, name, category, price, image")
      .eq("available", true)
      .order("id");

    if (error) throw error;

    if (!data || data.length === 0) {
      showToast("محصولی در دیتابیس پیدا نشد.");
      return;
    }

    products = data.map(p => ({
      ...p,
      id: Number(p.id),
      price: p.price === null ? null : Number(p.price),
      image: p.image || ""
    }));

    categories = ["همه", ...new Set(products.map(p => p.category))];

    renderCategories();
    renderProducts();
    showToast(`${data.length} محصول از دیتابیس دریافت شد ✅`);
  } catch (error) {
    console.error("Supabase error:", error);
    showToast("دریافت محصولات ناموفق بود؛ Console را بررسی کن.");
  }
}

function renderCategories() {
  $("#categories").innerHTML = categories.map(c =>
    `<button class="cat-btn ${c === activeCategory ? "active" : ""}"
      data-cat="${esc(c)}">${c === "همه" ? "همه‌ی منو" : esc(c)}</button>`
  ).join("");

  $("#categories").querySelectorAll("button").forEach(b => {
    b.addEventListener("click", () => {
      activeCategory = b.dataset.cat;
      renderCategories();
      renderProducts();
    });
  });
}

function renderProducts() {
  const q = $("#search").value.trim().toLocaleLowerCase("fa");

  const filtered = products.filter(p =>
    (activeCategory === "همه" || p.category === activeCategory) &&
    p.name.toLocaleLowerCase("fa").includes(q)
  );

  $("#resultCount").textContent =
    `${filtered.length.toLocaleString("fa-IR")} محصول`;

  $("#empty").style.display = filtered.length ? "none" : "block";

  $("#products").innerHTML = filtered.map(p => `
    <article class="product">
      <div class="product-photo">
        ${p.image
          ? `<img loading="lazy" src="${esc(p.image)}"
               alt="${esc(p.name)}" onerror="this.remove()">`
          : ""}
        <span class="symbol">${symbols[p.category] || "✳"}</span>
        <span class="cat-label">${esc(p.category)}</span>
      </div>
      <div class="product-body">
        <div class="product-meta">انتخابی از منوی نعنا</div>
        <h3>${esc(p.name)}</h3>
        <div class="product-foot">
          <div class="price">
            <span class="price-readout">${money(p.price)}</span>
            ${admin ? `
              <input class="edit-price" type="number" min="0" step="1"
                aria-label="قیمت ${esc(p.name)}"
                value="${p.price ?? ""}" data-price="${p.id}"
                placeholder="قیمت">
            ` : ""}
          </div>
          <span style="font-size:18px;color:#9ab28c">↙</span>
        </div>
      </div>
    </article>
  `).join("");
    setupScrollEffects();
}

$("#search").addEventListener("input", renderProducts);


async function savePrices() {
  if (!admin || saving) {
    showToast("اول وارد حساب مدیر شو.");
    return;
  }

  // اول قیمت‌های واردشده را می‌خوانیم
  const inputs = [...document.querySelectorAll("#products [data-price]")];
  const changes = [];

  for (const input of inputs) {
    const id = Number(input.dataset.price);
    const product = products.find(p => Number(p.id) === id);

    if (!product) continue;

    const raw = input.value.trim();

    if (raw === "") {
      showToast(`قیمت «${product.name}» را وارد کن.`);
      input.focus();
      return;
    }

    const price = Number(raw);

    if (!Number.isFinite(price) || price < 0) {
      showToast(`قیمت «${product.name}» معتبر نیست.`);
      input.focus();
      return;
    }

    if (price !== Number(product.price)) {
      changes.push({
        id: product.id,
        name: product.name,
        price
      });
    }
  }

  console.log("تعداد قیمت‌های تغییرکرده:", changes.length, changes);

  if (changes.length === 0) {
    showToast("قیمت را تغییر بده و دوباره ذخیره کن.");
    return;
  }

  saving = true;
  $("#savePrices").disabled = true;

  try {
    // بعد از خواندن قیمت‌ها، دسترسی مدیر را بررسی می‌کنیم
    if (!(await verifyAdmin({ updateUI: false }))) {
      throw new Error("دسترسی مدیر تأیید نشد؛ دوباره وارد شو.");
    }

    for (const change of changes) {
      const { data, error } = await supabaseClient
        .from("products")
        .update({ price: change.price })
        .eq("id", change.id)
        .eq("available", true)
        .select("id");

      if (error) throw error;

      if (!data || data.length !== 1) {
        throw new Error(`قیمت «${change.name}» ذخیره نشد.`);
      }
    }

    await loadProductsFromSupabase();
    showToast("قیمت‌ها با موفقیت ذخیره شدند ✅");
  } catch (error) {
    console.error("Price save failed:", error);
    showToast(error.message || "خطا در ذخیره قیمت‌ها");
  } finally {
    saving = false;
    $("#savePrices").disabled = false;
  }
}

$("#savePrices").addEventListener("click", savePrices);

// همگام نگه داشتن رابط کاربری با وضعیت واقعی نشست Supabase
supabaseClient.auth.onAuthStateChange((event, session) => {
  if (!session || event === "SIGNED_OUT") {
    if (admin) setAdminMode(false);
    return;
  }

  if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED" || event === "INITIAL_SESSION") {
    setTimeout(() => verifyAdmin(), 0);
  }
});

/* ===== NANAA SCROLL OBSERVER ===== */

const scrollObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          scrollObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    })
  : null;

function setupScrollEffects() {
  const elements = document.querySelectorAll(
    "#products .product, #categories, #search, .section-title"
  );

  elements.forEach(element => {
    element.classList.add("reveal-on-scroll");

    if (!scrollObserver) {
      element.classList.add("is-visible");
      return;
    }

    scrollObserver.observe(element);
  });
}

/* ===== INITIALIZE MENU ===== */

async function init() {
  // نمایش فوری منو بدون نیاز به ورود مدیر
  renderCategories();
  renderProducts();
  setupScrollEffects();

  // دریافت قیمت‌ها و محصولات به‌روز از دیتابیس
  await loadProductsFromSupabase();

  // بررسی دسترسی مدیر بدون وابسته کردن نمایش منو به آن
  await verifyAdmin();
}

init();