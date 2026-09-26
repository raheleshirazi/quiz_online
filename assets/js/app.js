/* ============================================================
   Quiz Pro v5 — دسته‌بندی داینامیک + تصاویر محلی
   ============================================================ */

/* ============================================================
   ۱) ثابت‌ها و اعتبارنامه ادمین
   ============================================================ */
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin1234',
};

/* ---------- دسته‌بندی‌های پیش‌فرض (با تصاویر محلی) ---------- */
const DEFAULT_CATEGORIES = [
    {
        id: 'programming',
        title: 'برنامه‌نویسی',
        icon: 'bx-code-alt',
        color: 'purple',
        image: 'assets/img/programmer.png',
        subcats: [
            { id: 'python', title: 'Python', icon: 'bxl-python', color: '#3776ab' },
            { id: 'htmlcss', title: 'HTML/CSS', icon: 'bxl-html5', color: '#e34c26' },
            { id: 'js', title: 'JavaScript', icon: 'bxl-javascript', color: '#f7df1e' },
        ],
    },
    {
        id: 'sqlite',
        title: 'پایگاه داده SQLite',
        icon: 'bx-data',
        color: 'blue',
        image: 'assets/img/sqllite3.png',
    },
    {
        id: 'icdl',
        title: 'ICDL',
        icon: 'bx-desktop',
        color: 'green',
        image: 'assets/img/icdl.png',
    },
    {
        id: 'photoshop',
        title: 'Photoshop',
        icon: 'bxl-adobe',
        color: 'pink',
        image: 'assets/img/photoshop.png',
    },
];

const DEFAULT_QUESTIONS = [
    {
        id: 'py1', cat: 'python', diff: 'easy', type: 'single',
        q: 'در پایتون برای چاپ متن از چه دستوری استفاده می‌شود؟',
        options: ['print()', 'echo', 'console.log()', 'write()'], answer: 0
    },
    {
        id: 'py2', cat: 'python', diff: 'easy', type: 'single',
        q: 'برای تعریف یک لیست در پایتون از چه علامتی استفاده می‌شود؟',
        options: ['()', '[]', '{}', '<>'], answer: 1
    },
    {
        id: 'py3', cat: 'python', diff: 'easy', type: 'single',
        q: 'کدام کلمه کلیدی برای تعریف تابع در پایتون استفاده می‌شود؟',
        options: ['function', 'def', 'func', 'fn'], answer: 1
    },
    {
        id: 'py4', cat: 'python', diff: 'medium', type: 'single',
        q: 'خروجی len("Hello") در پایتون چیست؟',
        options: ['4', '5', '6', 'خطا'], answer: 1
    },
    {
        id: 'py5', cat: 'python', diff: 'medium', type: 'single',
        q: 'کدام ساختار داده در پایتون تغییرناپذیر است؟',
        options: ['list', 'dict', 'set', 'tuple'], answer: 3
    },
    {
        id: 'py6', cat: 'python', diff: 'hard', type: 'single',
        q: 'خروجی type(1/2) در پایتون 3 چیست؟',
        options: ['<class int>', '<class float>', '<class double>', 'خطا'], answer: 1
    },
    {
        id: 'h1', cat: 'htmlcss', diff: 'easy', type: 'single',
        q: 'کدام تگ برای ساخت لینک در HTML استفاده می‌شود؟',
        options: ['<a>', '<link>', '<href>', '<url>'], answer: 0
    },
    {
        id: 'h2', cat: 'htmlcss', diff: 'easy', type: 'single',
        q: 'کدام ویژگی CSS فاصله‌ی داخلی عنصر را تنظیم می‌کند؟',
        options: ['margin', 'padding', 'border', 'gap'], answer: 1
    },
    {
        id: 'h3', cat: 'htmlcss', diff: 'easy', type: 'single',
        q: 'برای ساخت لیست مرتب کدام تگ استفاده می‌شود؟',
        options: ['<ul>', '<ol>', '<li>', '<dl>'], answer: 1
    },
    {
        id: 'h4', cat: 'htmlcss', diff: 'medium', type: 'single',
        q: 'کدام ویژگی برای اعمال Flexbox استفاده می‌شود؟',
        options: ['display: block', 'display: flex', 'display: inline', 'display: grid'], answer: 1
    },
    {
        id: 'h5', cat: 'htmlcss', diff: 'medium', type: 'single',
        q: 'کدام انتخابگر CSS فقط اولین فرزند را انتخاب می‌کند؟',
        options: [':first-child', ':first', ':nth-1', ':one'], answer: 0
    },
    {
        id: 'h6', cat: 'htmlcss', diff: 'hard', type: 'single',
        q: 'کدام مقدار position نسبت به پنجره ثابت می‌ماند؟',
        options: ['relative', 'absolute', 'fixed', 'sticky'], answer: 2
    },
    {
        id: 'j1', cat: 'js', diff: 'easy', type: 'single',
        q: 'کدام کلمه کلیدی متغیر غیرقابل‌تغییر می‌سازد؟',
        options: ['var', 'let', 'const', 'static'], answer: 2
    },
    {
        id: 'j2', cat: 'js', diff: 'easy', type: 'single',
        q: 'خروجی typeof [] در JS چیست؟',
        options: ['array', 'object', 'list', 'undefined'], answer: 1
    },
    {
        id: 'j3', cat: 'js', diff: 'easy', type: 'single',
        q: 'کدام متد یک رشته را به آرایه تبدیل می‌کند؟',
        options: ['join', 'split', 'slice', 'trim'], answer: 1
    },
    {
        id: 'j4', cat: 'js', diff: 'medium', type: 'single',
        q: 'کدام متد آرایه‌ی جدیدی می‌سازد؟',
        options: ['forEach', 'map', 'filter', 'find'], answer: 1
    },
    {
        id: 'j5', cat: 'js', diff: 'medium', type: 'single',
        q: 'خروجی 0.1 + 0.2 === 0.3 چیست؟',
        options: ['true', 'false', 'undefined', 'خطا'], answer: 1
    },
    {
        id: 'j6', cat: 'js', diff: 'hard', type: 'single',
        q: 'closure در JS چیست؟',
        options: ['دسترسی تابع به دامنه‌ی بیرونی', 'بستن مرورگر', 'یک نوع حلقه', 'نوعی آرایه'], answer: 0
    },
    {
        id: 'sq1', cat: 'sqlite', diff: 'easy', type: 'single',
        q: 'کدام دستور برای بازیابی داده استفاده می‌شود؟',
        options: ['GET', 'SELECT', 'FETCH', 'READ'], answer: 1
    },
    {
        id: 'sq2', cat: 'sqlite', diff: 'easy', type: 'single',
        q: 'کدام دستور رکورد جدید اضافه می‌کند؟',
        options: ['ADD', 'INSERT', 'CREATE', 'APPEND'], answer: 1
    },
    {
        id: 'sq3', cat: 'sqlite', diff: 'easy', type: 'single',
        q: 'SQLite یک پایگاه داده‌ی ... است.',
        options: ['شبکه‌ای', 'فایل‌محور', 'توزیع‌شده', 'ابری'], answer: 1
    },
    {
        id: 'sq4', cat: 'sqlite', diff: 'medium', type: 'single',
        q: 'کدام عبارت رکوردها را حذف می‌کند؟',
        options: ['REMOVE', 'DELETE', 'DROP', 'CLEAR'], answer: 1
    },
    {
        id: 'sq5', cat: 'sqlite', diff: 'medium', type: 'single',
        q: 'برای فیلتر کردن نتایج از کدام کلمه استفاده می‌شود؟',
        options: ['FILTER', 'HAVING', 'WHERE', 'IF'], answer: 2
    },
    {
        id: 'sq6', cat: 'sqlite', diff: 'hard', type: 'single',
        q: 'کدام دستور جدول را کاملاً حذف می‌کند؟',
        options: ['DELETE', 'DROP TABLE', 'TRUNCATE', 'REMOVE TABLE'], answer: 1
    },
    {
        id: 'ic1', cat: 'icdl', diff: 'easy', type: 'single',
        q: 'ICDL مخفف چیست؟',
        options: ['International Computer Driving License', 'Iran Computer Data License', 'International Code Driving License', 'Internet Computer Data Link'], answer: 0
    },
    {
        id: 'ic2', cat: 'icdl', diff: 'easy', type: 'single',
        q: 'کدام نرم‌افزار برای صفحه‌گسترده استفاده می‌شود؟',
        options: ['Word', 'Excel', 'PowerPoint', 'Access'], answer: 1
    },
    {
        id: 'ic3', cat: 'icdl', diff: 'easy', type: 'single',
        q: 'کدام فرمت فایل تصویری است؟',
        options: ['.docx', '.mp3', '.png', '.txt'], answer: 2
    },
    {
        id: 'ic4', cat: 'icdl', diff: 'medium', type: 'single',
        q: 'کلید میانبر Copy در ویندوز چیست؟',
        options: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + Z'], answer: 1
    },
    {
        id: 'ic5', cat: 'icdl', diff: 'medium', type: 'single',
        q: 'واحد اصلی اندازه‌گیری اطلاعات چیست؟',
        options: ['بایت', 'کیلوبایت', 'مگابایت', 'گیگابایت'], answer: 0
    },
    {
        id: 'ic6', cat: 'icdl', diff: 'hard', type: 'single',
        q: 'کدام فرمت برای ارائه استفاده می‌شود؟',
        options: ['.docx', '.xlsx', '.pptx', '.accdb'], answer: 2
    },
    {
        id: 'ps1', cat: 'photoshop', diff: 'easy', type: 'single',
        q: 'Photoshop چه نوع نرم‌افزاری است؟',
        options: ['ویرایش ویدیو', 'ویرایش تصویر', 'ویرایش صدا', 'ویرایش متن'], answer: 1
    },
    {
        id: 'ps2', cat: 'photoshop', diff: 'easy', type: 'single',
        q: 'پسوند فایل پیش‌فرض فتوشاپ چیست؟',
        options: ['.psd', '.png', '.jpg', '.ai'], answer: 0
    },
    {
        id: 'ps3', cat: 'photoshop', diff: 'easy', type: 'single',
        q: 'کلید میانبر Undo در فتوشاپ چیست؟',
        options: ['Ctrl + Z', 'Ctrl + Y', 'Ctrl + U', 'Ctrl + X'], answer: 0
    },
    {
        id: 'ps4', cat: 'photoshop', diff: 'medium', type: 'single',
        q: 'کدام ابزار برای انتخاب نواحی استفاده می‌شود؟',
        options: ['Brush', 'Marquee', 'Eraser', 'Type'], answer: 1
    },
    {
        id: 'ps5', cat: 'photoshop', diff: 'medium', type: 'single',
        q: 'لایه‌ها (Layers) چه کاربردی دارند؟',
        options: ['تقسیم کار به بخش‌های مستقل', 'کاهش حجم', 'افزایش رزولوشن', 'تبدیل فرمت'], answer: 0
    },
    {
        id: 'ps6', cat: 'photoshop', diff: 'hard', type: 'single',
        q: 'ماسک لایه چه می‌کند؟',
        options: ['بخش‌هایی از لایه را مخفی/نمایان می‌کند', 'لایه را حذف می‌کند', 'لایه را فشرده می‌کند', 'رنگ را معکوس می‌کند'], answer: 0
    },
];

const ACHIEVEMENTS = [
    { id: 'first', icon: '🎯', name: 'شروع', desc: 'اولین آزمون' },
    { id: 'perfect', icon: '💯', name: 'بی‌نقص', desc: 'نمره ۱۰۰٪' },
    { id: 'streak3', icon: '🔥', name: 'استریک ۳', desc: '۳ روز پیوسته' },
    { id: 'streak7', icon: '⚡', name: 'استریک ۷', desc: '۷ روز پیوسته' },
    { id: 'ten', icon: '🧠', name: 'دانشمند', desc: '۱۰ آزمون' },
    { id: 'fifty', icon: '👑', name: 'استاد', desc: '۵۰ آزمون' },
    { id: 'variety', icon: '🎲', name: 'همه‌چیزدان', desc: 'همه دسته‌ها' },
    { id: 'hard', icon: '💎', name: 'جسور', desc: '۱۰۰٪ در حالت سخت' },
];

const KEY = {
    users: 'quizpro.users.v5',
    session: 'quizpro.session.v5',
    questions: 'quizpro.questions.v5',
    categories: 'quizpro.categories.v5',  // ✅ کلید جدید
    theme: 'quizpro.theme.v5',
    globalStats: 'quizpro.globalstats.v5',
    results: (u) => `quizpro.results.${u}`,
    stats: (u) => `quizpro.stats.${u}`,
    profile: (u) => `quizpro.profile.${u}`,
    achievements: (u) => `quizpro.achievements.${u}`,
    seenGuide: (u) => `quizpro.guide.${u}`,
};

const QUESTIONS_PER_QUIZ = 6;
const SECONDS_PER_QUESTION = 25;

/* ============================================================
   ۲) ابزارها
   ============================================================ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function toFa(n) { return String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]); }

function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return toFa(`${m}:${String(s).padStart(2, '0')}`);
}

function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function showScreen(id) {
    $$('.screen').forEach(s => s.classList.toggle('active', s.id === `screen-${id}`));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hashPassword(pw) {
    let h = 0;
    for (let i = 0; i < pw.length; i++) {
        h = ((h << 5) - h) + pw.charCodeAt(i);
        h |= 0;
    }
    return String(h);
}

function toast(msg, type = 'info', duration = 2600) {
    const c = $('#toastContainer');
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    const icons = { success: 'bx-check-circle', error: 'bx-error-circle', info: 'bx-info-circle' };
    el.innerHTML = `<i class='bx ${icons[type]}'></i> ${escapeHtml(msg)}`;
    c.appendChild(el);
    setTimeout(() => {
        el.style.transition = 'opacity .3s, transform .3s';
        el.style.opacity = '0';
        el.style.transform = 'translateY(-10px)';
        setTimeout(() => el.remove(), 300);
    }, duration);
}

/* ============================================================
   ۳) ✅ مدیریت دسته‌بندی‌ها (داینامیک)
   ============================================================ */
function getCategories() {
    try {
        const raw = localStorage.getItem(KEY.categories);
        if (raw) {
            const p = JSON.parse(raw);
            if (Array.isArray(p) && p.length) return p;
        }
    } catch (e) { }
    // اولین بار: کپی از پیش‌فرض
    const copy = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
    localStorage.setItem(KEY.categories, JSON.stringify(copy));
    return copy;
}

function saveCategories(list) {
    localStorage.setItem(KEY.categories, JSON.stringify(list));
}

function resetCategories() {
    localStorage.removeItem(KEY.categories);
}

/** ساخت نگاشت شناسه → اطلاعات (برای سوالات، نمودارها و ...) */
function buildLeafCats() {
    const cats = getCategories();
    const leafs = {};
    cats.forEach(c => {
        if (c.subcats && c.subcats.length) {
            c.subcats.forEach(sc => {
                leafs[sc.id] = { title: sc.title, icon: sc.icon };
            });
        } else {
            leafs[c.id] = { title: c.title, icon: c.icon };
        }
    });
    return leafs;
}

/** پیدا کردن والد یک زیرشاخه */
function findParent(catId) {
    const cats = getCategories();
    for (const c of cats) {
        if (c.subcats && c.subcats.some(sc => sc.id === catId)) return c;
    }
    return null;
}

/* ============================================================
   ۴) کاربران و ادمین
   ============================================================ */
function getUsers() {
    try { return JSON.parse(localStorage.getItem(KEY.users)) || []; } catch (e) { return []; }
}
function saveUsers(list) { localStorage.setItem(KEY.users, JSON.stringify(list)); }

function getAdminUser() {
    return {
        username: ADMIN_CREDENTIALS.username,
        email: 'admin@quizpro.local',
        role: 'admin',
        createdAt: 0,
    };
}

function currentUser() {
    const uname = localStorage.getItem(KEY.session);
    if (!uname) return null;
    if (uname === ADMIN_CREDENTIALS.username) return getAdminUser();
    return getUsers().find(x => x.username === uname) || null;
}

function setSession(username) { localStorage.setItem(KEY.session, username); }
function clearSession() { localStorage.removeItem(KEY.session); }

function isAdmin() {
    const u = currentUser();
    return u && u.role === 'admin' && u.username === ADMIN_CREDENTIALS.username;
}

/* ---------- کپچا ---------- */
const captchaCodes = { reg: '', log: '' };

function generateCaptchaCode(len = 5) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < len; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
}

function drawCaptcha(canvas, code) {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = 140, h = 52;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, '#1a1a2e');
    bg.addColorStop(1, '#2a1a4e');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = `hsla(${Math.random() * 360}, 70%, 65%, .5)`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(Math.random() * w, Math.random() * h);
        ctx.lineTo(Math.random() * w, Math.random() * h);
        ctx.stroke();
    }
    for (let i = 0; i < 40; i++) {
        ctx.fillStyle = `hsla(${Math.random() * 360}, 80%, 70%, .6)`;
        ctx.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5);
    }

    const startX = 16;
    const step = (w - 26) / code.length;
    code.split('').forEach((ch, i) => {
        ctx.save();
        const x = startX + i * step + step / 2;
        const y = h / 2 + 8;
        ctx.translate(x, y);
        ctx.rotate((Math.random() - 0.5) * 0.6);
        ctx.font = 'bold 26px monospace';
        ctx.fillStyle = `hsl(${Math.random() * 360}, 85%, 72%)`;
        ctx.textAlign = 'center';
        ctx.fillText(ch, 0, 0);
        ctx.restore();
    });
}

function refreshCaptcha(which) {
    const code = generateCaptchaCode();
    captchaCodes[which] = code;
    const canvas = which === 'reg' ? $('#captchaReg') : $('#captchaLog');
    drawCaptcha(canvas, code);
}

function registerUser(username, email, password, confirm, captchaInput) {
    username = username.trim();
    email = email.trim().toLowerCase();

    if (username.toLowerCase() === ADMIN_CREDENTIALS.username) {
        return { ok: false, msg: 'این نام کاربری رزرو شده است' };
    }
    if (username.length < 3) return { ok: false, msg: 'نام کاربری حداقل ۳ کاراکتر' };
    if (!/^[a-zA-Z0-9_]+$/.test(username)) return { ok: false, msg: 'نام کاربری فقط حروف، عدد و _' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, msg: 'ایمیل نامعتبر' };
    if (password.length < 6) return { ok: false, msg: 'رمز حداقل ۶ کاراکتر' };
    if (password !== confirm) return { ok: false, msg: 'رمزها یکسان نیستند' };
    if (captchaInput.toUpperCase() !== captchaCodes.reg) return { ok: false, msg: 'کد امنیتی اشتباه است' };

    const users = getUsers();
    if (users.find(u => u.username.toLowerCase() === username.toLowerCase()))
        return { ok: false, msg: 'این نام کاربری قبلاً ثبت شده' };
    if (users.find(u => u.email === email))
        return { ok: false, msg: 'این ایمیل قبلاً ثبت شده' };

    const user = {
        username, email,
        password: hashPassword(password),
        role: 'user',
        createdAt: Date.now(),
    };
    users.push(user);
    saveUsers(users);

    localStorage.setItem(KEY.profile(username), JSON.stringify({
        nickname: username,
        avatar: '🧑',
    }));

    return { ok: true, user };
}

function loginUser(username, password, captchaInput) {
    username = username.trim();
    if (captchaInput.toUpperCase() !== captchaCodes.log) return { ok: false, msg: 'کد امنیتی اشتباه است' };

    if (username === ADMIN_CREDENTIALS.username) {
        if (password === ADMIN_CREDENTIALS.password) {
            if (!localStorage.getItem(KEY.profile(username))) {
                localStorage.setItem(KEY.profile(username), JSON.stringify({
                    nickname: 'مدیر',
                    avatar: '👑',
                }));
            }
            return { ok: true, user: getAdminUser() };
        }
        return { ok: false, msg: 'رمز ادمین اشتباه است' };
    }

    const user = getUsers().find(u => u.username.toLowerCase() === username.toLowerCase());
    if (!user) return { ok: false, msg: 'کاربری با این نام یافت نشد' };
    if (user.password !== hashPassword(password)) return { ok: false, msg: 'رمز عبور اشتباه است' };
    return { ok: true, user };
}

/* ============================================================
   ۵) ذخیره‌سازی
   ============================================================ */
function userName() { const u = currentUser(); return u ? u.username : 'guest'; }

function getQuestions() {
    try {
        const raw = localStorage.getItem(KEY.questions);
        if (raw) { const p = JSON.parse(raw); if (Array.isArray(p) && p.length) return p; }
    } catch (e) { }
    return [...DEFAULT_QUESTIONS];
}
function saveQuestions(list) { localStorage.setItem(KEY.questions, JSON.stringify(list)); }

function getResults() {
    try { return JSON.parse(localStorage.getItem(KEY.results(userName()))) || []; } catch (e) { return []; }
}
function saveResult(r) {
    const all = getResults();
    all.push(r);
    localStorage.setItem(KEY.results(userName()), JSON.stringify(all.slice(-100)));
}

function getProfile() {
    try {
        return JSON.parse(localStorage.getItem(KEY.profile(userName())))
            || { nickname: userName(), avatar: '🧑' };
    } catch (e) { return { nickname: userName(), avatar: '🧑' }; }
}
function saveProfile(p) { localStorage.setItem(KEY.profile(userName()), JSON.stringify(p)); }

function getStats() {
    const def = { streak: 0, lastPlayed: null, totalQuizzes: 0, totalCorrect: 0, totalTime: 0 };
    try { return JSON.parse(localStorage.getItem(KEY.stats(userName()))) || def; } catch (e) { return def; }
}
function saveStats(s) { localStorage.setItem(KEY.stats(userName()), JSON.stringify(s)); }

function getAchievements() {
    try { return JSON.parse(localStorage.getItem(KEY.achievements(userName()))) || []; } catch (e) { return []; }
}
function saveAchievements(a) { localStorage.setItem(KEY.achievements(userName()), JSON.stringify(a)); }

function hasSeenGuide() { return localStorage.getItem(KEY.seenGuide(userName())) === '1'; }
function markGuideSeen() { localStorage.setItem(KEY.seenGuide(userName()), '1'); }

function getGlobalStats() {
    try {
        return JSON.parse(localStorage.getItem(KEY.globalStats)) || {
            totalQuizzes: 0, totalCorrect: 0,
            byCategory: {}, byUser: {}, byDate: {},
        };
    } catch (e) {
        return { totalQuizzes: 0, totalCorrect: 0, byCategory: {}, byUser: {}, byDate: {} };
    }
}
function saveGlobalStats(s) { localStorage.setItem(KEY.globalStats, JSON.stringify(s)); }

function updateGlobalStats(catId, correct) {
    const s = getGlobalStats();
    const uname = userName();

    s.totalQuizzes = (s.totalQuizzes || 0) + 1;
    s.totalCorrect = (s.totalCorrect || 0) + correct;
    s.byCategory[catId] = (s.byCategory[catId] || 0) + 1;

    if (!s.byUser[uname]) s.byUser[uname] = { quizzes: 0, categories: {} };
    s.byUser[uname].quizzes++;
    s.byUser[uname].categories[catId] = (s.byUser[uname].categories[catId] || 0) + 1;

    const today = new Date().toISOString().slice(0, 10);
    s.byDate[today] = (s.byDate[today] || 0) + 1;

    saveGlobalStats(s);
}

/* ============================================================
   ۶) صدا
   ============================================================ */
const Sound = {
    ctx: null,
    init() { if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)(); },
    play(freq, dur = 0.1, type = 'sine', vol = 0.12) {
        try {
            this.init();
            const o = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            o.type = type; o.frequency.value = freq;
            g.gain.setValueAtTime(vol, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
            o.connect(g); g.connect(this.ctx.destination);
            o.start(); o.stop(this.ctx.currentTime + dur);
        } catch (e) { }
    },
    click() { this.play(600, 0.05, 'sine', 0.06); },
    finish() { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => this.play(f, 0.2), i * 110)); },
    achievement() { [784, 988, 1175].forEach((f, i) => setTimeout(() => this.play(f, 0.25, 'triangle'), i * 100)); },
};

/* ============================================================
   ۷) State
   ============================================================ */
const state = {
    category: null,
    questions: [],
    index: 0,
    answers: [],
    timeLeft: 0,
    timerId: null,
    totalTime: 0,
    mode: 'timed',
    difficulty: 'all',
    reviewFilter: 'all',
    editingId: null,
    lastResult: null,
};

/* ============================================================
   ۸) خانه
   ============================================================ */
function renderHome() {
    const profile = getProfile();
    const stats = getStats();
    const results = getResults();
    const user = currentUser();

    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'صبح بخیر' : hour < 18 ? 'وقت بخیر' : 'شب بخیر';
    

    $('#heroGreeting').textContent = profile.nickname
        ? `${greeting}، ${profile.nickname}! 👋`
        : `${greeting}! 👋`;
    $('#heroAvatar').textContent = profile.avatar;
    $('#profileAvatar').textContent = profile.avatar;

    const adminBadge = $('#heroAdminBadge');
    if (user && user.role === 'admin') {
        adminBadge.style.display = 'inline-flex';
        document.body.classList.add('is-admin');
        $('#btnAdmin').style.display = '';
    } else {
        adminBadge.style.display = 'none';
        document.body.classList.remove('is-admin');
        $('#btnAdmin').style.display = 'none';
    }

    const avg = results.length
        ? Math.round(results.reduce((s, r) => s + r.percent, 0) / results.length)
        : 0;

    $('#heroStreak').textContent = toFa(stats.streak || 0);
    $('#heroQuizzes').textContent = toFa(results.length);
    $('#heroQuizzesInline').textContent = toFa(results.length);
    $('#heroAvg').textContent = toFa(avg) + '٪';

    renderCategories();
}

/* ✅ رندر دسته‌بندی‌ها به صورت داینامیک از localStorage */
function renderCategories() {
    const qs = getQuestions();
    const cats = getCategories();
    const container = $('#categoryList');
    container.innerHTML = '';

    cats.forEach(cat => {
        const isParent = cat.subcats && cat.subcats.length > 0;
        const total = isParent
            ? qs.filter(q => cat.subcats.some(s => s.id === q.cat)).length
            : qs.filter(q => q.cat === cat.id).length;

        if (total === 0 && !isAdmin()) return; // مخفی برای کاربر عادی

        const tile = document.createElement('button');
        tile.className = `cat-tile ${cat.color || 'purple'}`;
        if (total === 0) tile.disabled = true;

        const bgImage = cat.image
            ? `<img src="${escapeHtml(cat.image)}" alt="" onerror="this.style.display='none'">`
            : '';

        tile.innerHTML = `
      <div class="cat-tile-bg">
        ${bgImage}
      </div>
      <div class="cat-tile-content">
        <div class="cat-tile-top">
          <div class="cat-tile-icon">
            <i class='bx ${escapeHtml(cat.icon || 'bx-book')}'></i>
          </div>
          <div class="cat-tile-arrow">
            <i class='bx bx-left-arrow-alt'></i>
          </div>
        </div>
        <div class="cat-tile-bottom">
          <div class="cat-tile-title">${escapeHtml(cat.title)}</div>
          <div class="cat-tile-meta">
            <i class='bx bx-list-ul'></i>
            ${toFa(total)} سوال
          </div>
          ${isParent ? `
            <span class="cat-tile-badge">
              <i class='bx bx-git-branch'></i>
              ${toFa(cat.subcats.length)} زیرشاخه
            </span>
          ` : ''}
        </div>
      </div>
    `;

        tile.addEventListener('click', () => {
            if (tile.disabled) return;
            if (isParent) openSubCategoryModal(cat);
            else startQuiz(cat.id);
        });

        container.appendChild(tile);
    });

    if (!container.children.length) {
        container.innerHTML = '<p class="muted" style="text-align:center;padding:20px;grid-column:1/-1;">هنوز دسته‌بندی یا سوالی اضافه نشده.</p>';
    }
}

/* ============================================================
   ۹) مودال زیرشاخه
   ============================================================ */
function openSubCategoryModal(parentCat) {
    const existing = $('#subSelectModal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'subSelectModal';

    const qs = getQuestions();
    const buttons = parentCat.subcats.map(sc => {
        const count = qs.filter(q => q.cat === sc.id).length;
        return `
      <button class="sub-select-btn" data-cat="${sc.id}" ${count === 0 ? 'disabled' : ''}>
        <i class='bx ${sc.icon}' style="color:${sc.color || '#8b5cf6'}"></i>
        <strong>${escapeHtml(sc.title)}</strong>
        <small>${toFa(count)} سوال</small>
      </button>
    `;
    }).join('');

    modal.innerHTML = `
    <div class="modal-box">
      <h3>
        <i class='bx ${parentCat.icon}'></i>
        زیرشاخه‌ی ${escapeHtml(parentCat.title)} را انتخاب کن
      </h3>
      <div class="sub-select">${buttons}</div>
      <div class="nav-row center">
        <button class="btn ghost" id="btnCloseSubSelect">بستن</button>
      </div>
    </div>
  `;

    document.body.appendChild(modal);

    modal.querySelector('#btnCloseSubSelect').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
    modal.querySelectorAll('.sub-select-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const catId = btn.dataset.cat;
            modal.remove();
            startQuiz(catId);
        });
    });
}

/* ============================================================
   ۱۰) شروع آزمون
   ============================================================ */
function startQuiz(catId) {
    const leafCats = buildLeafCats();
    const all = getQuestions().filter(q => q.cat === catId);
    const pool = state.difficulty === 'all' ? all : all.filter(q => q.diff === state.difficulty);

    if (!pool.length) {
        toast('برای این ترکیب سوالی وجود ندارد. سختی دیگری امتحان کن.', 'error');
        return;
    }

    const picked = shuffle(pool).slice(0, QUESTIONS_PER_QUIZ).map(q => {
        const indexed = q.options.map((text, i) => ({ text, isCorrect: i === q.answer }));
        const shuffled = q.type === 'boolean' ? indexed : shuffle(indexed);
        return {
            ...q,
            options: shuffled.map(o => o.text),
            answer: shuffled.findIndex(o => o.isCorrect),
        };
    });

    state.category = { id: catId, ...(leafCats[catId] || { title: catId, icon: 'bx-book' }) };
    state.questions = picked;
    state.index = 0;
    state.answers = new Array(picked.length).fill(null);
    state.totalTime = picked.length * SECONDS_PER_QUESTION;
    state.timeLeft = state.totalTime;

    $('#quizCat').innerHTML = `<i class='bx ${state.category.icon}'></i> ${state.category.title}`;

    const timerEl = $('#quizTimer');
    if (state.mode === 'practice') {
        timerEl.style.display = 'none';
        $('#btnSkip').style.display = 'none';
    } else {
        timerEl.style.display = '';
        $('#btnSkip').style.display = '';
        startTimer();
    }

    showScreen('quiz');
    renderQuestion();
}

function startTimer() {
    clearInterval(state.timerId);
    updateTimerUI();
    state.timerId = setInterval(() => {
        state.timeLeft--;
        updateTimerUI();
        if (state.timeLeft <= 0) {
            clearInterval(state.timerId);
            finishQuiz(true);
        }
    }, 1000);
}

function updateTimerUI() {
    const el = $('#quizTimer');
    el.textContent = formatTime(Math.max(state.timeLeft, 0));
    el.classList.toggle('danger', state.timeLeft <= 20);
}

function renderQuestion() {
    const q = state.questions[state.index];
    const total = state.questions.length;

    $('#qCounter').textContent = `سوال ${toFa(state.index + 1)} از ${toFa(total)}`;
    $('#progressBar').style.width = `${((state.index + 1) / total) * 100}%`;

    const diffLabels = { easy: '🟢 آسان', medium: '🟠 متوسط', hard: '🔴 سخت' };
    $('#qDifficulty').textContent = diffLabels[q.diff] || '';

    $('#questionText').textContent = q.q;

    const list = $('#optionsList');
    list.innerHTML = '';
    q.options.forEach((text, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option' + (state.answers[state.index] === i ? ' selected' : '');
        btn.innerHTML = `<span class="badge">${toFa(i + 1)}</span><span>${escapeHtml(text)}</span>`;
        btn.addEventListener('click', () => selectOption(i));
        list.appendChild(btn);
    });

    $('#btnPrev').disabled = state.index === 0;
    const isLast = state.index === total - 1;
    $('#btnNext').innerHTML = isLast
        ? 'پایان آزمون <i class="bx bx-flag"></i>'
        : 'بعدی <i class="bx bx-left-arrow-alt"></i>';
    $('#btnNext').disabled = state.answers[state.index] === null;
}

function selectOption(i) {
    if (state.answers[state.index] === i) return;
    state.answers[state.index] = i;
    Sound.click();
    $$('#optionsList .option').forEach((b, idx) => b.classList.toggle('selected', idx === i));
    $('#btnNext').disabled = false;
}

function goNext() {
    if (state.answers[state.index] === null) return;
    if (state.index === state.questions.length - 1) finishQuiz(false);
    else { state.index++; renderQuestion(); }
}
function goPrev() { if (state.index > 0) { state.index--; renderQuestion(); } }
function goSkip() {
    if (state.index === state.questions.length - 1) finishQuiz(false);
    else { state.index++; renderQuestion(); }
}

/* ============================================================
   ۱۱) پایان آزمون
   ============================================================ */
function finishQuiz(timeUp) {
    clearInterval(state.timerId);

    const total = state.questions.length;
    let correct = 0;
    state.questions.forEach((q, i) => {
        if (state.answers[i] === q.answer) correct++;
    });

    const wrong = state.questions.filter((q, i) =>
        state.answers[i] !== null && state.answers[i] !== q.answer
    ).length;
    const percent = Math.round((correct / total) * 100);
    const spent = state.mode === 'practice' ? 0 : state.totalTime - Math.max(state.timeLeft, 0);

    const result = {
        cat: state.category.id,
        catTitle: state.category.title,
        catIcon: state.category.icon,
        difficulty: state.difficulty,
        mode: state.mode,
        total, correct, wrong, percent,
        timeSpent: spent,
        date: Date.now(),
    };
    saveResult(result);
    state.lastResult = result;

    updateStatsAndStreak(correct, spent);
    updateGlobalStats(state.category.id, correct);
    const newAch = checkAchievements(result);

    renderResult({ total, correct, wrong, percent, spent, timeUp }, newAch);
    showScreen('result');
    Sound.finish();
    if (percent >= 75) triggerConfetti();
    if (newAch.length) setTimeout(() => Sound.achievement(), 600);
}

function updateStatsAndStreak(correct, spent) {
    const stats = getStats();
    const today = new Date().toDateString();

    stats.totalQuizzes = (stats.totalQuizzes || 0) + 1;
    stats.totalCorrect = (stats.totalCorrect || 0) + correct;
    stats.totalTime = (stats.totalTime || 0) + spent;

    if (stats.lastPlayed !== today) {
        const y = new Date();
        y.setDate(y.getDate() - 1);
        stats.streak = stats.lastPlayed === y.toDateString() ? (stats.streak || 0) + 1 : 1;
        stats.lastPlayed = today;
    }
    saveStats(stats);
}

function checkAchievements(result) {
    const unlocked = getAchievements();
    const results = getResults();
    const stats = getStats();
    const newOnes = [];

    const unlock = (id) => {
        if (!unlocked.includes(id)) {
            unlocked.push(id);
            const a = ACHIEVEMENTS.find(x => x.id === id);
            if (a) newOnes.push(a);
        }
    };

    if (results.length >= 1) unlock('first');
    if (result.percent === 100) unlock('perfect');
    if (stats.streak >= 3) unlock('streak3');
    if (stats.streak >= 7) unlock('streak7');
    if (results.length >= 10) unlock('ten');
    if (results.length >= 50) unlock('fifty');
    if (new Set(results.map(r => r.cat)).size >= 6) unlock('variety');
    if (result.percent === 100 && result.difficulty === 'hard') unlock('hard');

    saveAchievements(unlocked);
    return newOnes;
}

function renderResult({ total, correct, wrong, percent, spent, timeUp }, newAch) {
    $('#scoreRing').style.setProperty('--p', percent);
    $('#scorePercent').textContent = `${toFa(percent)}٪`;
    $('#statCorrect').textContent = toFa(correct);
    $('#statWrong').textContent = toFa(wrong);
    $('#statTime').textContent = state.mode === 'practice' ? '—' : formatTime(spent);

    let title = 'نتیجه آزمون';
    let sub = `${toFa(correct)} پاسخ درست از ${toFa(total)} سوال`;
    if (timeUp) sub += ' • ⏰ زمان تمام شد';

    if (percent === 100) title = '🏆 عالی! کامل و بی‌نقص';
    else if (percent >= 75) title = '🎉 خیلی خوب بود!';
    else if (percent >= 50) title = '👍 قابل قبول';
    else title = '💪 نیاز به تمرین بیشتر';

    $('#resultTitle').textContent = title;
    $('#resultSub').textContent = sub;

    const wrap = $('#newAchievements');
    wrap.innerHTML = '';
    newAch.forEach(a => {
        const el = document.createElement('div');
        el.className = 'new-ach-item';
        el.innerHTML = `${a.icon} <span>دستاورد: ${a.name}</span>`;
        wrap.appendChild(el);
    });
}

/* ============================================================
   ۱۲) مرور
   ============================================================ */
function renderReview() {
    const list = $('#reviewList');
    list.innerHTML = '';

    state.questions.forEach((q, i) => {
        const chosen = state.answers[i];
        const isRight = chosen === q.answer;

        if (state.reviewFilter === 'correct' && !isRight) return;
        if (state.reviewFilter === 'wrong' && (isRight || chosen === null)) return;
        if (state.reviewFilter === 'skipped' && chosen !== null) return;

        const item = document.createElement('div');
        item.className = `review-item ${isRight ? 'correct' : 'wrong'}`;

        const optionsHtml = q.options.map((opt, oi) => {
            let cls = '', tag = '';
            if (oi === q.answer) { cls = 'is-correct'; tag = '<span class="review-tag">✅ درست</span>'; }
            else if (oi === chosen) { cls = 'is-chosen-wrong'; tag = '<span class="review-tag">❌ انتخاب شما</span>'; }
            return `<div class="review-opt ${cls}">
                <span>${toFa(oi + 1)}. ${escapeHtml(opt)}</span>${tag}
              </div>`;
        }).join('');

        const noAns = chosen === null
            ? '<div class="review-tag" style="color:var(--warning);margin-bottom:6px;">⚠️ بدون پاسخ</div>'
            : '';

        item.innerHTML = `
      <div class="review-q"><span class="num">${toFa(i + 1)}</span><span>${escapeHtml(q.q)}</span></div>
      ${noAns}${optionsHtml}
    `;
        list.appendChild(item);
    });

    if (!list.children.length) {
        list.innerHTML = '<p class="muted" style="text-align:center;padding:20px;">موردی برای نمایش نیست.</p>';
    }
}

/* ============================================================
   ۱۳) آمار کاربر
   ============================================================ */
function renderStats() {
    const stats = getStats();
    const results = getResults();

    $('#sTotalQuizzes').textContent = toFa(results.length);
    $('#sTotalCorrect').textContent = toFa(stats.totalCorrect || 0);
    $('#sStreak').textContent = toFa(stats.streak || 0);
    $('#sTotalTime').textContent = toFa(Math.round((stats.totalTime || 0) / 60));

    renderLineChart(results);
    renderBarsChart(results);
    renderPieChart(results);
    renderAchievements();
    renderHistory(results);
}

function renderLineChart(results) {
    const canvas = $('#chartLine');
    const empty = $('#lineEmpty');
    const data = results.slice(-15);
    if (!data.length) { canvas.style.display = 'none'; empty.style.display = 'block'; return; }
    canvas.style.display = 'block'; empty.style.display = 'none';

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.clientWidth, H = 200;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const css = getComputedStyle(document.documentElement);
    const colText = css.getPropertyValue('--muted').trim();
    const colGrid = css.getPropertyValue('--border').trim();
    const colPrim = css.getPropertyValue('--primary').trim();

    const pad = { top: 24, right: 16, bottom: 30, left: 40 };
    const cw = W - pad.left - pad.right;
    const ch = H - pad.top - pad.bottom;

    ctx.strokeStyle = colGrid; ctx.fillStyle = colText;
    ctx.font = '11px Vazirmatn, sans-serif'; ctx.textAlign = 'left';
    [0, 25, 50, 75, 100].forEach(v => {
        const y = pad.top + ch - (v / 100) * ch;
        ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cw, y); ctx.stroke();
        ctx.fillText(toFa(v), 6, y + 4);
    });

    if (data.length === 1) {
        const x = pad.left + cw / 2;
        const y = pad.top + ch - (data[0].percent / 100) * ch;
        ctx.fillStyle = colPrim;
        ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill();
        return;
    }

    const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + ch);
    grad.addColorStop(0, colPrim + '55');
    grad.addColorStop(1, colPrim + '00');

    const points = data.map((r, i) => ({
        x: pad.left + (i / (data.length - 1)) * cw,
        y: pad.top + ch - (r.percent / 100) * ch,
    }));

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(points[0].x, pad.top + ch);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, pad.top + ch);
    ctx.closePath(); ctx.fill();

    ctx.strokeStyle = colPrim; ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round'; ctx.beginPath();
    points.forEach((p, i) => { if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y); });
    ctx.stroke();

    points.forEach(p => {
        ctx.fillStyle = colPrim;
        ctx.beginPath(); ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = css.getPropertyValue('--card').trim();
        ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2); ctx.fill();
    });
}

function renderBarsChart(results) {
    const canvas = $('#chartBars');
    const empty = $('#barsEmpty');
    if (!results.length) { canvas.style.display = 'none'; empty.style.display = 'block'; return; }
    canvas.style.display = 'block'; empty.style.display = 'none';

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.clientWidth, H = 220;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const css = getComputedStyle(document.documentElement);
    const colText = css.getPropertyValue('--muted').trim();
    const colGrid = css.getPropertyValue('--border').trim();

    const pad = { top: 24, right: 12, bottom: 44, left: 40 };
    const cw = W - pad.left - pad.right;
    const ch = H - pad.top - pad.bottom;

    const leafCats = buildLeafCats();
    const byCat = {};
    Object.keys(leafCats).forEach(k => byCat[k] = []);
    results.forEach(r => { if (byCat[r.cat]) byCat[r.cat].push(r.percent); });

    const data = Object.keys(leafCats).map(k => ({
        title: leafCats[k].title,
        avg: byCat[k].length ? Math.round(byCat[k].reduce((s, v) => s + v, 0) / byCat[k].length) : 0,
    })).filter(d => d.avg > 0 || byCat[Object.keys(leafCats).find(k => leafCats[k].title === d.title)]?.length);

    if (!data.length) { canvas.style.display = 'none'; empty.style.display = 'block'; return; }

    ctx.strokeStyle = colGrid; ctx.fillStyle = colText;
    ctx.font = '11px Vazirmatn, sans-serif'; ctx.textAlign = 'left';
    [0, 25, 50, 75, 100].forEach(v => {
        const y = pad.top + ch - (v / 100) * ch;
        ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cw, y); ctx.stroke();
        ctx.fillText(toFa(v), 6, y + 4);
    });

    const slotW = cw / data.length;
    const barW = Math.min(slotW * 0.5, 42);
    const colors = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#06b6d4'];

    data.forEach((d, i) => {
        const x = pad.left + i * slotW + (slotW - barW) / 2;
        const h = (d.avg / 100) * ch;
        const y = pad.top + ch - h;

        const grad = ctx.createLinearGradient(0, y, 0, y + h);
        grad.addColorStop(0, colors[i % colors.length]);
        grad.addColorStop(1, colors[i % colors.length] + '55');

        ctx.fillStyle = grad;
        roundRect(ctx, x, y, barW, Math.max(h, 2), 7);
        ctx.fill();

        ctx.fillStyle = colText;
        ctx.textAlign = 'center';
        ctx.font = 'bold 11px Vazirmatn, sans-serif';
        ctx.fillText(toFa(d.avg) + '٪', x + barW / 2, y - 6);
        ctx.font = '11px Vazirmatn, sans-serif';
        ctx.fillText(d.title.slice(0, 7), x + barW / 2, pad.top + ch + 22);
    });
}

function renderPieChart(results) {
    const canvas = $('#chartPie');
    const empty = $('#pieEmpty');
    if (!results.length) { canvas.style.display = 'none'; empty.style.display = 'block'; return; }
    canvas.style.display = 'block'; empty.style.display = 'none';

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.clientWidth, H = 220;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const css = getComputedStyle(document.documentElement);
    const colText = css.getPropertyValue('--muted').trim();

    const counts = { easy: 0, medium: 0, hard: 0, all: 0 };
    results.forEach(r => counts[r.difficulty] = (counts[r.difficulty] || 0) + 1);

    const segments = [
        { label: 'آسان', value: counts.easy, color: '#10b981' },
        { label: 'متوسط', value: counts.medium, color: '#f59e0b' },
        { label: 'سخت', value: counts.hard, color: '#ef4444' },
        { label: 'همه', value: counts.all, color: '#8b5cf6' },
    ].filter(s => s.value > 0);

    const total = segments.reduce((s, x) => s + x.value, 0);
    if (!total) return;

    const cx = W / 2 - 50, cy = H / 2, r = Math.min(W, H) / 2 - 20;

    let start = -Math.PI / 2;
    segments.forEach(seg => {
        const angle = (seg.value / total) * Math.PI * 2;
        ctx.fillStyle = seg.color;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, start, start + angle);
        ctx.closePath();
        ctx.fill();
        start += angle;
    });

    ctx.fillStyle = css.getPropertyValue('--card').trim();
    ctx.beginPath(); ctx.arc(cx, cy, r * 0.55, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = css.getPropertyValue('--text').trim();
    ctx.font = 'bold 16px Vazirmatn, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(toFa(total), cx, cy);
    ctx.textBaseline = 'alphabetic';

    ctx.textAlign = 'right'; ctx.font = '12px Vazirmatn, sans-serif';
    let ly = cy - (segments.length * 24) / 2 + 12;
    segments.forEach(seg => {
        const lx = W - 20;
        ctx.fillStyle = seg.color;
        roundRect(ctx, lx - 14, ly - 11, 14, 14, 4);
        ctx.fill();
        ctx.fillStyle = colText;
        ctx.fillText(`${seg.label} (${toFa(seg.value)})`, lx - 22, ly);
        ly += 24;
    });
}

function roundRect(ctx, x, y, w, h, r) {
    r = Math.max(0, Math.min(r, w / 2, h / 2 || 0));
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h);
    ctx.lineTo(x, y + h);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

function renderAchievements() {
    const unlocked = getAchievements();
    const grid = $('#achievementGrid');
    grid.innerHTML = '';
    ACHIEVEMENTS.forEach(a => {
        const isU = unlocked.includes(a.id);
        const el = document.createElement('div');
        el.className = 'ach-item' + (isU ? ' unlocked' : '');
        el.innerHTML = `
      <span class="ach-icon">${isU ? a.icon : '🔒'}</span>
      <span class="ach-name">${a.name}</span>
      <span class="ach-desc">${a.desc}</span>
    `;
        grid.appendChild(el);
    });
}

function renderHistory(results) {
    const list = $('#historyList');
    list.innerHTML = '';
    if (!results.length) {
        list.innerHTML = '<p class="muted" style="text-align:center;padding:16px;">هنوز آزمونی نداده‌ای.</p>';
        return;
    }
    [...results].reverse().slice(0, 20).forEach(r => {
        const cls = r.percent >= 75 ? 'high' : r.percent >= 50 ? 'mid' : 'low';
        const d = new Date(r.date);
        const dateStr = toFa(`${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`);

        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
      <div class="history-pct ${cls}">${toFa(r.percent)}٪</div>
      <div class="history-info">
        <div class="history-title">${r.catIcon ? `<i class='bx ${r.catIcon}'></i>` : ''} ${escapeHtml(r.catTitle)}</div>
        <div class="history-meta">${toFa(r.correct)}/${toFa(r.total)} • ${dateStr} • ${r.mode === 'practice' ? 'تمرینی' : 'زمان‌دار'}</div>
      </div>
    `;
        list.appendChild(item);
    });
}

/* ============================================================
   ۱۴) پنل ادمین - سوالات
   ============================================================ */
function fillAdminSelects() {
    const leafCats = buildLeafCats();
    const opts = Object.entries(leafCats)
        .map(([id, c]) => `<option value="${id}">${escapeHtml(c.title)}</option>`).join('');
    $('#fCat').innerHTML = opts;
    $('#adminFilterCat').innerHTML = '<option value="">همه دسته‌ها</option>' + opts;
}

function renderAdminList() {
    if (!isAdmin()) {
        $('#adminList').innerHTML = '<p class="muted" style="text-align:center;padding:16px;">دسترسی ندارید.</p>';
        return;
    }

    const list = $('#adminList');
    const search = $('#adminSearch').value.trim().toLowerCase();
    const fCat = $('#adminFilterCat').value;
    const fDiff = $('#adminFilterDiff').value;

    let items = getQuestions();
    if (fCat) items = items.filter(q => q.cat === fCat);
    if (fDiff) items = items.filter(q => q.diff === fDiff);
    if (search) items = items.filter(q => q.q.toLowerCase().includes(search));

    $('#adminCount').textContent = toFa(items.length);

    if (!items.length) {
        list.innerHTML = '<p class="muted" style="text-align:center;padding:16px;">سوالی یافت نشد.</p>';
        return;
    }

    const leafCats = buildLeafCats();
    list.innerHTML = '';
    items.forEach(q => {
        const diffLabel = { easy: '🟢', medium: '🟠', hard: '🔴' }[q.diff] || '';
        const cat = leafCats[q.cat];
        const item = document.createElement('div');
        item.className = 'admin-item';
        item.innerHTML = `
      <div>
        <div>${escapeHtml(q.q)}</div>
        <div class="meta">
          <span>${diffLabel} ${cat ? cat.title : q.cat}</span>
          <span>پاسخ: ${escapeHtml(q.options[q.answer] || '—')}</span>
        </div>
      </div>
      <div class="actions">
        <button class="edit" data-id="${q.id}">ویرایش</button>
        <button class="del" data-id="${q.id}">حذف</button>
      </div>
    `;
        list.appendChild(item);
    });

    $$('#adminList .edit').forEach(b => b.addEventListener('click', () => editQuestion(b.dataset.id)));
    $$('#adminList .del').forEach(b => b.addEventListener('click', () => deleteQuestion(b.dataset.id)));
}

function handleAddQuestion(e) {
    e.preventDefault();
    if (!isAdmin()) return toast('دسترسی ندارید.', 'error');

    const editingId = $('#editingId').value;
    const cat = $('#fCat').value;
    const diff = $('#fDiff').value;
    const type = $('#fType').value;
    const text = $('#fQuestion').value.trim();
    const options = [0, 1, 2, 3].map(i => $(`#fOpt${i}`).value.trim()).filter(Boolean);
    const answer = Number($('input[name="correct"]:checked').value);

    if (!text || options.length < 2) return toast('متن سوال و حداقل دو گزینه لازم است.', 'error');
    if (answer >= options.length) return toast('پاسخ درست معتبر نیست.', 'error');

    const list = getQuestions();
    if (editingId) {
        const idx = list.findIndex(q => q.id === editingId);
        if (idx !== -1) list[idx] = { ...list[idx], cat, diff, type, q: text, options, answer };
        toast('سوال ویرایش شد.', 'success');
    } else {
        list.push({ id: 'u' + Date.now(), cat, diff, type, q: text, options, answer });
        toast('سوال اضافه شد.', 'success');
    }
    saveQuestions(list);
    resetForm();
    renderAdminList();
    renderCategories();
}

function editQuestion(id) {
    if (!isAdmin()) return;
    const q = getQuestions().find(x => x.id === id);
    if (!q) return;
    state.editingId = id;
    $('#editingId').value = id;
    $('#formTitle').innerHTML = "<i class='bx bx-edit'></i> ویرایش سوال";
    $('#btnSubmitQuestion').innerHTML = "<i class='bx bx-save'></i> ذخیره تغییرات";
    $('#btnCancelEdit').style.display = 'inline-flex';
    $('#fCat').value = q.cat;
    $('#fDiff').value = q.diff || 'easy';
    $('#fType').value = q.type || 'single';
    $('#fQuestion').value = q.q;
    [0, 1, 2, 3].forEach(i => $(`#fOpt${i}`).value = q.options[i] || '');
    const radio = $(`input[name="correct"][value="${q.answer}"]`);
    if (radio) radio.checked = true;
    updateFormByType();
    $('#questionForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetForm() {
    state.editingId = null;
    $('#editingId').value = '';
    $('#formTitle').innerHTML = "<i class='bx bx-plus-circle'></i> افزودن سوال جدید";
    $('#btnSubmitQuestion').innerHTML = "<i class='bx bx-plus'></i> افزودن سوال";
    $('#btnCancelEdit').style.display = 'none';
    $('#questionForm').reset();
    $('input[name="correct"][value="0"]').checked = true;
    updateFormByType();
}

function updateFormByType() {
    const type = $('#fType').value;
    const picker = $('#answerPicker');

    if (type === 'boolean') {
        $('#fOpt2').closest('.field').style.display = 'none';
        $('#fOpt3').closest('.field').style.display = 'none';
        $('#fOpt0').value = $('#fOpt0').value || 'درست';
        $('#fOpt1').value = $('#fOpt1').value || 'غلط';
        $('#fOpt0').readOnly = true;
        $('#fOpt1').readOnly = true;
        picker.innerHTML = `
      <label><input type="radio" name="correct" value="0" checked> درست</label>
      <label><input type="radio" name="correct" value="1"> غلط</label>
    `;
    } else {
        $('#fOpt2').closest('.field').style.display = '';
        $('#fOpt3').closest('.field').style.display = '';
        $('#fOpt0').readOnly = false;
        $('#fOpt1').readOnly = false;
        picker.innerHTML = `
      <label><input type="radio" name="correct" value="0" checked> گزینه ۱</label>
      <label><input type="radio" name="correct" value="1"> گزینه ۲</label>
      <label><input type="radio" name="correct" value="2"> گزینه ۳</label>
      <label><input type="radio" name="correct" value="3"> گزینه ۴</label>
    `;
    }
}

function deleteQuestion(id) {
    if (!isAdmin()) return;
    if (!confirm('این سوال حذف شود؟')) return;
    saveQuestions(getQuestions().filter(q => q.id !== id));
    renderAdminList();
    renderCategories();
    toast('سوال حذف شد.', 'success');
}

function resetDefaults() {
    if (!isAdmin()) return;
    if (!confirm('همه‌ی سوالات به حالت پیش‌فرض برمی‌گردند. مطمئنی؟')) return;
    localStorage.removeItem(KEY.questions);
    renderAdminList();
    renderCategories();
    toast('سوالات بازنشانی شد.', 'success');
}

function exportQuestions() {
    if (!isAdmin()) return;
    const data = JSON.stringify(getQuestions(), null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-questions-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importQuestions(file) {
    if (!isAdmin()) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!Array.isArray(data)) throw new Error('فرمت نامعتبر');
            const valid = data.filter(q => q.q && Array.isArray(q.options) && typeof q.answer === 'number');
            if (!valid.length) throw new Error('سوال معتبری یافت نشد');
            if (!confirm(`${valid.length} سوال پیدا شد. جایگزین شود؟`)) return;
            saveQuestions(valid);
            renderAdminList();
            renderCategories();
            toast('سوالات بارگذاری شد.', 'success');
        } catch (err) { toast('فایل نامعتبر: ' + err.message, 'error'); }
    };
    reader.readAsText(file);
}

/* ============================================================
   ۱۵) ✅ پنل ادمین - دسته‌بندی‌ها (جدید)
   ============================================================ */
function renderCategoryAdmin() {
    if (!isAdmin()) return;

    const cats = getCategories();
    const qs = getQuestions();
    const list = $('#categoryAdminList');

    $('#catCount').textContent = toFa(cats.length);

    if (!cats.length) {
        list.innerHTML = '<p class="muted" style="text-align:center;padding:16px;">هنوز دسته‌بندی‌ای وجود ندارد.</p>';
        return;
    }

    list.innerHTML = '';
    cats.forEach(cat => {
        const isParent = cat.subcats && cat.subcats.length > 0;
        const totalQ = isParent
            ? qs.filter(q => cat.subcats.some(s => s.id === q.cat)).length
            : qs.filter(q => q.cat === cat.id).length;

        const card = document.createElement('div');
        card.className = 'cat-admin-card';

        const subsHtml = isParent
            ? `<div class="cat-admin-subs">
          ${cat.subcats.map(sc => {
                const scCount = qs.filter(q => q.cat === sc.id).length;
                return `
              <span class="sub-chip">
                <i class='bx ${sc.icon}'></i>
                ${escapeHtml(sc.title)}
                <small>(${toFa(scCount)})</small>
                <button data-parent="${cat.id}" data-sub="${sc.id}" title="حذف زیرشاخه">×</button>
              </span>
            `;
            }).join('')}
        </div>`
            : '';

        card.innerHTML = `
      <div class="cat-admin-head">
        <div class="cat-admin-icon ${cat.color || 'purple'}">
          <i class='bx ${escapeHtml(cat.icon || 'bx-book')}'></i>
        </div>
        <div class="cat-admin-info">
          <div class="cat-admin-title">${escapeHtml(cat.title)}</div>
          <div class="cat-admin-meta">
            ${toFa(totalQ)} سوال
            ${isParent ? ` • ${toFa(cat.subcats.length)} زیرشاخه` : ''}
            ${cat.image ? ` • 🖼️ تصویر دارد` : ''}
          </div>
        </div>
        <div class="cat-admin-actions">
          <button class="del" data-cat="${cat.id}" title="حذف کل دسته">
            <i class='bx bx-trash'></i> حذف
          </button>
        </div>
      </div>
      ${subsHtml}
    `;
        list.appendChild(card);
    });

    // رویدادها
    $$('#categoryAdminList .cat-admin-actions .del').forEach(btn => {
        btn.addEventListener('click', () => deleteCategory(btn.dataset.cat));
    });
    $$('#categoryAdminList .sub-chip button').forEach(btn => {
        btn.addEventListener('click', () => deleteSubcategory(btn.dataset.parent, btn.dataset.sub));
    });
}

function handleAddCategory() {
    if (!isAdmin()) return toast('دسترسی ندارید.', 'error');

    const type = $('input[name="catType"]:checked').value;
    const title = $('#catTitle').value.trim();
    const id = $('#catId').value.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
    const icon = $('#catIcon').value.trim() || 'bx-book';
    const color = $('#catColor').value;
    const image = $('#catImage').value.trim();

    if (!title) return toast('نام دسته را وارد کن.', 'error');
    if (!id) return toast('شناسه (ID) را وارد کن.', 'error');

    const cats = getCategories();
    const allIds = [];
    cats.forEach(c => {
        allIds.push(c.id);
        if (c.subcats) c.subcats.forEach(s => allIds.push(s.id));
    });
    if (allIds.includes(id)) return toast('این شناسه قبلاً استفاده شده.', 'error');

    if (type === 'sub') {
        const parentId = $('#catParent').value;
        const parent = cats.find(c => c.id === parentId);
        if (!parent) return toast('دسته‌ی والد پیدا نشد.', 'error');

        if (!parent.subcats) parent.subcats = [];
        parent.subcats.push({ id, title, icon, color: '#8b5cf6' });
        saveCategories(cats);
        toast(`زیرشاخه "${title}" اضافه شد.`, 'success');
    } else {
        const newCat = { id, title, icon, color };
        if (image) newCat.image = image;
        cats.push(newCat);
        saveCategories(cats);
        toast(`دسته "${title}" اضافه شد.`, 'success');
    }

    // ریست فرم
    $('#catTitle').value = '';
    $('#catId').value = '';
    $('#catIcon').value = 'bx-book';
    $('#catImage').value = '';

    // رفرش
    renderCategoryAdmin();
    renderCategories();
    fillAdminSelects();
    renderAdminList();
}

function deleteCategory(catId) {
    if (!isAdmin()) return;

    const cats = getCategories();
    const cat = cats.find(c => c.id === catId);
    if (!cat) return;

    const qs = getQuestions();
    let qCount = 0;
    if (cat.subcats && cat.subcats.length) {
        const subIds = cat.subcats.map(s => s.id);
        qCount = qs.filter(q => subIds.includes(q.cat)).length;
    } else {
        qCount = qs.filter(q => q.cat === catId).length;
    }

    let msg = `دسته "${cat.title}" حذف شود؟`;
    if (qCount > 0) msg += `\n\n⚠️ ${qCount} سوال در این دسته وجود دارد. آن‌ها هم حذف می‌شوند.`;

    if (!confirm(msg)) return;

    // حذف سوالات مربوطه
    const remainingQs = qs.filter(q => {
        if (cat.subcats && cat.subcats.length) {
            return !cat.subcats.some(s => s.id === q.cat);
        }
        return q.cat !== catId;
    });
    saveQuestions(remainingQs);

    // حذف دسته
    saveCategories(cats.filter(c => c.id !== catId));

    toast(`دسته "${cat.title}" حذف شد.`, 'success');
    renderCategoryAdmin();
    renderCategories();
    fillAdminSelects();
    renderAdminList();
}

function deleteSubcategory(parentId, subId) {
    if (!isAdmin()) return;

    const cats = getCategories();
    const parent = cats.find(c => c.id === parentId);
    if (!parent || !parent.subcats) return;

    const sub = parent.subcats.find(s => s.id === subId);
    if (!sub) return;

    const qCount = getQuestions().filter(q => q.cat === subId).length;
    let msg = `زیرشاخه "${sub.title}" حذف شود؟`;
    if (qCount > 0) msg += `\n\n⚠️ ${qCount} سوال در این زیرشاخه وجود دارد. آن‌ها هم حذف می‌شوند.`;

    if (!confirm(msg)) return;

    // حذف سوالات
    saveQuestions(getQuestions().filter(q => q.cat !== subId));

    // حذف زیرشاخه
    parent.subcats = parent.subcats.filter(s => s.id !== subId);
    saveCategories(cats);

    toast(`زیرشاخه "${sub.title}" حذف شد.`, 'success');
    renderCategoryAdmin();
    renderCategories();
    fillAdminSelects();
    renderAdminList();
}

function resetCategoriesDefaults() {
    if (!isAdmin()) return;
    if (!confirm('همه‌ی دسته‌بندی‌ها به حالت پیش‌فرض برمی‌گردند. مطمئنی؟')) return;
    resetCategories();
    toast('دسته‌بندی‌ها بازنشانی شد.', 'success');
    renderCategoryAdmin();
    renderCategories();
    fillAdminSelects();
    renderAdminList();
}

/** پر کردن select والد */
function fillParentSelect() {
    const cats = getCategories();
    const sel = $('#catParent');
    sel.innerHTML = cats
        .map(c => `<option value="${c.id}">${escapeHtml(c.title)}</option>`)
        .join('');
    if (!cats.length) sel.innerHTML = '<option value="">دسته‌ای وجود ندارد</option>';
}

/* ============================================================
   ۱۶) آمار سراسری
   ============================================================ */
function renderAdminSiteStats() {
    if (!isAdmin()) return;

    const gs = getGlobalStats();
    const users = getUsers();

    $('#ssUsers').textContent = toFa(users.length + 1);
    $('#ssQuizzes').textContent = toFa(gs.totalQuizzes || 0);
    $('#ssCorrect').textContent = toFa(gs.totalCorrect || 0);
    $('#ssQuestions').textContent = toFa(getQuestions().length);

    renderSiteCatsChart(gs);
    renderSiteSubList(gs);
    renderSiteActivityChart(gs);
    renderUsersList(users, gs);
}

function renderSiteCatsChart(gs) {
    const canvas = $('#ssChartCats');
    const empty = $('#ssCatsEmpty');
    const leafCats = buildLeafCats();

    const data = Object.entries(gs.byCategory || {})
        .map(([catId, count]) => ({
            id: catId,
            title: leafCats[catId]?.title || catId,
            count,
        }))
        .sort((a, b) => b.count - a.count);

    if (!data.length) {
        canvas.style.display = 'none';
        empty.style.display = 'block';
        return;
    }
    canvas.style.display = 'block';
    empty.style.display = 'none';

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.clientWidth, H = 240;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const css = getComputedStyle(document.documentElement);
    const colText = css.getPropertyValue('--muted').trim();
    const colGrid = css.getPropertyValue('--border').trim();

    const pad = { top: 24, right: 16, bottom: 40, left: 40 };
    const cw = W - pad.left - pad.right;
    const ch = H - pad.top - pad.bottom;
    const maxVal = Math.max(...data.map(d => d.count), 1);

    ctx.strokeStyle = colGrid; ctx.fillStyle = colText;
    ctx.font = '11px Vazirmatn, sans-serif'; ctx.textAlign = 'left';
    for (let i = 0; i <= 4; i++) {
        const v = Math.round((maxVal / 4) * i);
        const y = pad.top + ch - (v / maxVal) * ch;
        ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cw, y); ctx.stroke();
        ctx.fillText(toFa(v), 6, y + 4);
    }

    const slotW = cw / data.length;
    const barW = Math.min(slotW * 0.6, 48);
    const colors = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#06b6d4'];

    data.forEach((d, i) => {
        const x = pad.left + i * slotW + (slotW - barW) / 2;
        const h = (d.count / maxVal) * ch;
        const y = pad.top + ch - h;

        const grad = ctx.createLinearGradient(0, y, 0, y + h);
        grad.addColorStop(0, colors[i % colors.length]);
        grad.addColorStop(1, colors[i % colors.length] + '55');

        ctx.fillStyle = grad;
        roundRect(ctx, x, y, barW, Math.max(h, 2), 7);
        ctx.fill();

        ctx.fillStyle = colText;
        ctx.textAlign = 'center';
        ctx.font = 'bold 11px Vazirmatn, sans-serif';
        ctx.fillText(toFa(d.count), x + barW / 2, y - 6);
        ctx.font = '11px Vazirmatn, sans-serif';
        ctx.fillText(d.title.slice(0, 9), x + barW / 2, pad.top + ch + 22);
    });
}

function renderSiteSubList(gs) {
    const wrap = $('#ssSubList');
    const total = gs.totalQuizzes || 0;
    const leafCats = buildLeafCats();

    if (!total) {
        wrap.innerHTML = '<p class="muted" style="text-align:center;padding:20px;">هنوز آزمونی ثبت نشده.</p>';
        return;
    }

    const sorted = Object.entries(gs.byCategory || {}).sort((a, b) => b[1] - a[1]);

    wrap.innerHTML = sorted.map(([catId, count]) => {
        const cat = leafCats[catId];
        const pct = Math.round((count / total) * 100);
        return `
      <div class="subcat-stat">
        <div class="subcat-stat-head">
          <div class="label">
            <i class='bx ${cat?.icon || "bx-book"}'></i>
            <span>${cat?.title || catId}</span>
          </div>
          <div class="value">${toFa(count)} آزمون • ${toFa(pct)}٪</div>
        </div>
        <div class="subcat-stat-bar">
          <div class="subcat-stat-fill" style="width: ${pct}%"></div>
        </div>
      </div>
    `;
    }).join('');
}

function renderSiteActivityChart(gs) {
    const canvas = $('#ssChartActivity');
    const empty = $('#ssActivityEmpty');

    const days = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = d.toISOString().slice(0, 10);
        days.push({
            date: key,
            label: toFa(d.toLocaleDateString('fa-IR', { weekday: 'short' })),
            count: gs.byDate?.[key] || 0,
        });
    }

    const hasData = days.some(d => d.count > 0);
    if (!hasData) {
        canvas.style.display = 'none';
        empty.style.display = 'block';
        return;
    }
    canvas.style.display = 'block';
    empty.style.display = 'none';

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.clientWidth, H = 200;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const css = getComputedStyle(document.documentElement);
    const colText = css.getPropertyValue('--muted').trim();
    const colPrim = css.getPropertyValue('--primary').trim();

    const pad = { top: 24, right: 16, bottom: 34, left: 40 };
    const cw = W - pad.left - pad.right;
    const ch = H - pad.top - pad.bottom;
    const maxVal = Math.max(...days.map(d => d.count), 1);

    const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + ch);
    grad.addColorStop(0, colPrim + '66');
    grad.addColorStop(1, colPrim + '00');

    const points = days.map((d, i) => ({
        x: pad.left + (i / (days.length - 1)) * cw,
        y: pad.top + ch - (d.count / maxVal) * ch,
    }));

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(points[0].x, pad.top + ch);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, pad.top + ch);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = colPrim; ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round'; ctx.beginPath();
    points.forEach((p, i) => { if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y); });
    ctx.stroke();

    ctx.fillStyle = colText;
    ctx.textAlign = 'center';
    ctx.font = '10px Vazirmatn, sans-serif';
    points.forEach((p, i) => {
        ctx.fillStyle = colPrim;
        ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = css.getPropertyValue('--card').trim();
        ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = colText;
        ctx.fillText(days[i].label, p.x, pad.top + ch + 20);
        if (days[i].count > 0) {
            ctx.font = 'bold 10px Vazirmatn, sans-serif';
            ctx.fillText(toFa(days[i].count), p.x, p.y - 8);
            ctx.font = '10px Vazirmatn, sans-serif';
        }
    });
}

function renderUsersList(users, gs) {
    const list = $('#usersList');
    const count = users.length + 1;
    $('#usersCount').textContent = toFa(count);

    if (!users.length) {
        list.innerHTML = `
      <div class="user-card">
        <div class="user-avatar">👑</div>
        <div class="user-info">
          <div class="user-name">admin <span class="admin-badge">مدیر</span></div>
          <div class="user-meta">admin@quizpro.local</div>
        </div>
      </div>
      <p class="muted" style="text-align:center;padding:12px;">هنوز کاربر دیگری ثبت‌نام نکرده.</p>
    `;
        return;
    }

    list.innerHTML = '';
    const adminCard = document.createElement('div');
    adminCard.className = 'user-card';
    adminCard.innerHTML = `
    <div class="user-avatar">👑</div>
    <div class="user-info">
      <div class="user-name">admin <span class="admin-badge">مدیر</span></div>
      <div class="user-meta">admin@quizpro.local</div>
    </div>
  `;
    list.appendChild(adminCard);

    users.forEach(u => {
        const profile = (() => {
            try { return JSON.parse(localStorage.getItem(KEY.profile(u.username))) || {}; } catch (e) { return {}; }
        })();
        const userStats = gs.byUser?.[u.username] || { quizzes: 0 };

        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
      <div class="user-avatar">${profile.avatar || '🧑'}</div>
      <div class="user-info">
        <div class="user-name">${escapeHtml(profile.nickname || u.username)}</div>
        <div class="user-meta">${escapeHtml(u.email)}</div>
        <div class="user-stats">
          <span><i class='bx bx-check-circle'></i> ${toFa(userStats.quizzes || 0)} آزمون</span>
          <span><i class='bx bx-calendar'></i> ${toFa(new Date(u.createdAt).toLocaleDateString('fa-IR'))}</span>
        </div>
      </div>
    `;
        list.appendChild(card);
    });
}

/* ============================================================
   ۱۷) کانفتی
   ============================================================ */
function triggerConfetti() {
    const canvas = $('#confetti');
    canvas.classList.add('active');
    const ctx = canvas.getContext('2d');

    const resize = () => {
        canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
        canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    resize();

    const colors = ['#8b5cf6', '#c084fc', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];
    const particles = Array.from({ length: 130 }, () => ({
        x: Math.random() * window.innerWidth,
        y: -20,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.2,
    }));

    let frames = 0;
    function tick() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy; p.vy += 0.08; p.rot += p.vrot;
            ctx.save();
            ctx.translate(p.x, p.y); ctx.rotate(p.rot);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            ctx.restore();
        });
        frames++;
        if (frames < 180) requestAnimationFrame(tick);
        else canvas.classList.remove('active');
    }
    tick();
}

/* ============================================================
   ۱۸) اشتراک
   ============================================================ */
function renderShareCard() {
    const r = state.lastResult;
    if (!r) return;
    const canvas = $('#shareCanvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;

    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, '#8b5cf6');
    grad.addColorStop(1, '#7c3aed');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = '#ffffff';
    roundRect(ctx, 24, 24, W - 48, H - 48, 24);
    ctx.fill();

    ctx.fillStyle = '#0f0f1e';
    ctx.font = 'bold 26px Vazirmatn, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🎯 نتیجه آزمون', W / 2, 92);

    ctx.font = '17px Vazirmatn, sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.fillText(`${r.catTitle}`, W / 2, 130);

    const cx = W / 2, cy = 280, radius = 90;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.lineWidth = 16; ctx.strokeStyle = '#ede9fe'; ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, radius, -Math.PI / 2, -Math.PI / 2 + (r.percent / 100) * Math.PI * 2);
    ctx.strokeStyle = r.percent >= 75 ? '#10b981' : r.percent >= 50 ? '#f59e0b' : '#ef4444';
    ctx.stroke();

    ctx.fillStyle = '#0f0f1e';
    ctx.font = 'bold 48px Vazirmatn, sans-serif';
    ctx.fillText(toFa(r.percent) + '٪', cx, cy + 10);
    ctx.font = '14px Vazirmatn, sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.fillText('درصد', cx, cy + 36);

    ctx.font = 'bold 18px Vazirmatn, sans-serif';
    ctx.fillStyle = '#10b981';
    ctx.fillText(`✅ ${toFa(r.correct)}`, W / 4 + 10, 440);
    ctx.fillStyle = '#ef4444';
    ctx.fillText(`❌ ${toFa(r.wrong)}`, (3 * W) / 4 - 10, 440);

    ctx.font = '14px Vazirmatn, sans-serif';
    ctx.fillStyle = '#9ca3af';
    const d = new Date(r.date);
    ctx.fillText(toFa(d.toLocaleDateString('fa-IR')), W / 2, 505);

    ctx.font = 'bold 18px Vazirmatn, sans-serif';
    ctx.fillStyle = '#8b5cf6';
    ctx.fillText('QuizPro', W / 2, H - 60);
}

function downloadShare() {
    const canvas = $('#shareCanvas');
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `quiz-result-${Date.now()}.png`;
    a.click();
}

/* ============================================================
   ۱۹) تم
   ============================================================ */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = $('#btnTheme i');
    if (icon) icon.className = theme === 'dark' ? 'bx bx-sun' : 'bx bx-moon';
    localStorage.setItem(KEY.theme, theme);
}

function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
    if ($('#screen-stats').classList.contains('active')) renderStats();
    if ($('#screen-admin').classList.contains('active')) {
        renderAdminSiteStats();
        renderCategoryAdmin();
    }
}

function initTheme() {
    const saved = localStorage.getItem(KEY.theme);
    if (saved) applyTheme(saved);
    else applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

/* ============================================================
   ۲۰) مودال‌ها
   ============================================================ */
function openModal(id) { $('#' + id).classList.add('active'); }
function closeModal(id) { $('#' + id).classList.remove('active'); }
function closeAllModals() { $$('.modal').forEach(m => m.classList.remove('active')); }

function openProfileModal() {
    const p = getProfile();
    const u = currentUser();
    $('#pNickname').value = p.nickname || '';
    $('#pUsername').textContent = u ? u.username : '—';
    $('#pEmail').textContent = u ? u.email : '—';

    const adminRow = $('#pAdminRow');
    if (u && u.role === 'admin') {
        $('#pRole').innerHTML = "<i class='bx bx-crown' style='color:var(--gold)'></i> مدیر سیستم";
        adminRow.style.display = 'flex';
        $('#pAdminInfo').textContent = 'دسترسی کامل به پنل مدیریت';
    } else {
        $('#pRole').innerHTML = "<i class='bx bx-user'></i> کاربر عادی";
        adminRow.style.display = 'none';
    }

    $$('.avatar-opt').forEach(b => b.classList.toggle('selected', b.dataset.avatar === p.avatar));
    openModal('modalProfile');
}

function showGuide() { openModal('modalGuide'); }

/* ============================================================
   ۲۱) احراز هویت - UI
   ============================================================ */
function showAuthWelcome() {
    $('#authWelcome').classList.add('active');
    $('#authForm').classList.remove('active');
}
function showAuthForm() {
    $('#authWelcome').classList.remove('active');
    $('#authForm').classList.add('active');
    refreshCaptcha('reg');
    refreshCaptcha('log');
}
function switchAuthTab(tab) {
    $$('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    $('.auth-tabs').dataset.active = tab;
    $$('.auth-form').forEach(f => {
        const isActive = (tab === 'register' && f.id === 'registerForm') ||
            (tab === 'login' && f.id === 'loginForm');
        f.classList.toggle('active', isActive);
    });
}

/* ============================================================
   ۲۲) ورود به اپ
   ============================================================ */
function enterApp(showGuideModal = false) {
    document.body.setAttribute('data-view', 'app');
    const u = currentUser();
    if (u && u.role === 'admin') {
        document.body.classList.add('is-admin');
        $('#btnAdmin').style.display = '';
    } else {
        document.body.classList.remove('is-admin');
        $('#btnAdmin').style.display = 'none';
    }
    renderHome();
    if (showGuideModal || !hasSeenGuide()) {
        setTimeout(() => showGuide(), 500);
    }
}

/* ============================================================
   ۲۳) رویدادها
   ============================================================ */
function bindEvents() {

    /* ---------- احراز هویت ---------- */
    $('#btnGoAuth').addEventListener('click', showAuthForm);
    $('#btnBackWelcome').addEventListener('click', showAuthWelcome);

    $$('.tab-btn').forEach(b => {
        b.addEventListener('click', () => switchAuthTab(b.dataset.tab));
    });

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.toggle-pw');
        if (!btn) return;
        e.preventDefault();
        const input = btn.parentElement.querySelector('input');
        if (!input) return;
        const isPw = input.type === 'password';
        input.type = isPw ? 'text' : 'password';
        const icon = btn.querySelector('i');
        if (icon) icon.className = isPw ? 'bx bx-hide' : 'bx bx-show';
    });

    $$('.refresh-cap').forEach(b => {
        b.addEventListener('click', () => refreshCaptcha(b.dataset.for));
    });

    $('#registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const res = registerUser(
            $('#regUsername').value,
            $('#regEmail').value,
            $('#regPassword').value,
            $('#regConfirm').value,
            $('#regCaptcha').value
        );
        if (!res.ok) {
            toast(res.msg, 'error');
            refreshCaptcha('reg');
            $('#regCaptcha').value = '';
            return;
        }
        toast('ثبت‌نام با موفقیت انجام شد! 🎉', 'success');
        setSession(res.user.username);
        e.target.reset();
        setTimeout(() => enterApp(true), 500);
    });

    $('#loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const res = loginUser(
            $('#logUsername').value,
            $('#logPassword').value,
            $('#logCaptcha').value
        );
        if (!res.ok) {
            toast(res.msg, 'error');
            refreshCaptcha('log');
            $('#logCaptcha').value = '';
            return;
        }
        toast(`خوش آمدی ${res.user.username}! 👋`, 'success');
        setSession(res.user.username);
        e.target.reset();
        setTimeout(() => enterApp(false), 400);
    });

    /* ---------- راهنما ---------- */
    $('#btnCloseGuide').addEventListener('click', () => {
        closeModal('modalGuide');
        markGuideSeen();
    });

    /* ---------- نوار بالا ---------- */
    $('#btnTheme').addEventListener('click', toggleTheme);
    $('#btnProfile').addEventListener('click', openProfileModal);
    $('#btnStats').addEventListener('click', () => { renderStats(); showScreen('stats'); });
    $('#btnShortcuts').addEventListener('click', () => openModal('modalShortcuts'));

    $('#btnAdmin').addEventListener('click', () => {
        if (!isAdmin()) {
            toast('شما دسترسی به پنل مدیریت ندارید.', 'error');
            return;
        }
        fillAdminSelects();
        renderAdminList();
        renderAdminSiteStats();
        renderCategoryAdmin();
        fillParentSelect();
        showScreen('admin');
    });

    $('#brandHome').addEventListener('click', () => { renderHome(); showScreen('home'); });

    /* ---------- تب‌های ادمین ---------- */
    $$('.atab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.atab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.dataset.atab;
            $$('.admin-tab-panel').forEach(p => p.classList.remove('active'));
            $(`#adminTab-${target}`).classList.add('active');

            if (target === 'siteStats') renderAdminSiteStats();
            if (target === 'users') renderAdminSiteStats();
            if (target === 'categories') {
                renderCategoryAdmin();
                fillParentSelect();
            }
        });
    });

    /* ---------- حالت بازی ---------- */
    $$('.mode-btn').forEach(b => {
        b.addEventListener('click', () => {
            $$('.mode-btn').forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            state.mode = b.dataset.mode;
        });
    });

    /* ---------- سختی ---------- */
    $$('.diff-btn').forEach(b => {
        b.addEventListener('click', () => {
            $$('.diff-btn').forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            state.difficulty = b.dataset.diff;
        });
    });

    /* ---------- آزمون ---------- */
    $('#btnNext').addEventListener('click', goNext);
    $('#btnPrev').addEventListener('click', goPrev);
    $('#btnSkip').addEventListener('click', goSkip);

    /* ---------- نتیجه ---------- */
    $('#btnReview').addEventListener('click', () => {
        state.reviewFilter = 'all';
        $$('.filter-btn').forEach(x => x.classList.toggle('active', x.dataset.filter === 'all'));
        renderReview();
        showScreen('review');
    });
    $('#btnRetry').addEventListener('click', () => {
        if (state.category) startQuiz(state.category.id);
    });
    $('#btnHome').addEventListener('click', () => { renderHome(); showScreen('home'); });
    $('#btnShare').addEventListener('click', () => {
        renderShareCard();
        openModal('modalShare');
    });

    /* ---------- مرور ---------- */
    $('#btnReviewBack').addEventListener('click', () => showScreen('result'));
    $$('.filter-btn').forEach(b => {
        b.addEventListener('click', () => {
            $$('.filter-btn').forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            state.reviewFilter = b.dataset.filter;
            renderReview();
        });
    });

    /* ---------- آمار ---------- */
    $('#btnStatsBack').addEventListener('click', () => { renderHome(); showScreen('home'); });
    $('#btnClearHistory').addEventListener('click', () => {
        if (!confirm('همه‌ی تاریخچه و آمار پاک شود؟')) return;
        localStorage.removeItem(KEY.results(userName()));
        localStorage.removeItem(KEY.stats(userName()));
        localStorage.removeItem(KEY.achievements(userName()));
        renderStats();
        renderHome();
        toast('تاریخچه پاک شد.', 'success');
    });

    /* ---------- ادمین - سوالات ---------- */
    $('#btnAdminBack').addEventListener('click', () => { renderHome(); showScreen('home'); });
    $('#questionForm').addEventListener('submit', handleAddQuestion);
    $('#btnCancelEdit').addEventListener('click', resetForm);
    $('#btnResetDefaults').addEventListener('click', resetDefaults);
    $('#fType').addEventListener('change', updateFormByType);
    $('#adminSearch').addEventListener('input', renderAdminList);
    $('#adminFilterCat').addEventListener('change', renderAdminList);
    $('#adminFilterDiff').addEventListener('change', renderAdminList);
    $('#btnExport').addEventListener('click', exportQuestions);
    $('#btnImport').addEventListener('click', () => $('#importFile').click());
    $('#importFile').addEventListener('change', (e) => {
        if (e.target.files[0]) importQuestions(e.target.files[0]);
        e.target.value = '';
    });

    /* ---------- ✅ ادمین - دسته‌بندی‌ها ---------- */
    $('#btnAddCategory').addEventListener('click', handleAddCategory);
    $('#btnResetCategories').addEventListener('click', resetCategoriesDefaults);

    // تغییر نوع دسته‌بندی (اصلی/زیرشاخه)
    $$('input[name="catType"]').forEach(r => {
        r.addEventListener('change', () => {
            const type = $('input[name="catType"]:checked').value;
            $('#parentSelectWrap').style.display = type === 'sub' ? '' : 'none';
            $('#catImageWrap').style.display = type === 'sub' ? 'none' : '';
        });
    });

    /* ---------- پروفایل ---------- */
    $('#avatarPicker').addEventListener('click', (e) => {
        const btn = e.target.closest('.avatar-opt');
        if (!btn) return;
        $$('.avatar-opt').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
    });
    $('#btnSaveProfile').addEventListener('click', () => {
        const selected = $('.avatar-opt.selected');
        const p = {
            nickname: $('#pNickname').value.trim() || userName(),
            avatar: selected ? selected.dataset.avatar : '🧑',
        };
        saveProfile(p);
        closeModal('modalProfile');
        renderHome();
        toast('پروفایل ذخیره شد.', 'success');
    });
    $('#btnLogout').addEventListener('click', () => {
        if (!confirm('از حساب خارج می‌شوی؟')) return;
        clearSession();
        closeModal('modalProfile');
        document.body.setAttribute('data-view', 'auth');
        document.body.classList.remove('is-admin');
        showAuthWelcome();
        toast('از حساب خارج شدی.', 'info');
    });
    $('#btnCloseProfile').addEventListener('click', () => closeModal('modalProfile'));

    /* ---------- میانبرها ---------- */
    $('#btnCloseShortcuts').addEventListener('click', () => closeModal('modalShortcuts'));

    /* ---------- اشتراک ---------- */
    $('#btnDownloadShare').addEventListener('click', downloadShare);
    $('#btnCloseShare').addEventListener('click', () => closeModal('modalShare'));

    /* ---------- بستن مودال ---------- */
    $$('.modal').forEach(m => {
        m.addEventListener('click', (e) => {
            if (e.target === m) {
                if (m.id !== 'modalGuide') m.classList.remove('active');
            }
        });
    });

    /* ---------- میانبرها ---------- */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeAllModals(); return; }
        if (e.target.matches('input, textarea, select')) return;

        const onQuiz = $('#screen-quiz').classList.contains('active');
        if (onQuiz) {
            if (['1', '2', '3', '4'].includes(e.key)) {
                const idx = Number(e.key) - 1;
                if (idx < state.questions[state.index].options.length) selectOption(idx);
            }
            if (e.key === 'Enter') { e.preventDefault(); goNext(); }
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key.toLowerCase() === 's') goSkip();
        }
        if (e.key.toLowerCase() === 'd') toggleTheme();
    });

    /* ---------- ریسایز ---------- */
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if ($('#screen-stats').classList.contains('active')) renderStats();
            if ($('#screen-admin').classList.contains('active')) renderAdminSiteStats();
        }, 200);
    });
}

/* ============================================================
   ۲۴) راه‌اندازی
   ============================================================ */
function init() {
    initTheme();
    getCategories(); // اطمینان از وجود دسته‌بندی‌های پیش‌فرض
    fillAdminSelects();
    updateFormByType();
    fillParentSelect();
    bindEvents();

    const u = currentUser();
    if (u) {
        document.body.setAttribute('data-view', 'app');
        if (u.role === 'admin') {
            document.body.classList.add('is-admin');
            $('#btnAdmin').style.display = '';
        }
        renderHome();
        if (!hasSeenGuide()) {
            setTimeout(() => showGuide(), 500);
        }
    } else {
        document.body.setAttribute('data-view', 'auth');
        showAuthWelcome();
        refreshCaptcha('reg');
        refreshCaptcha('log');
    }
}

document.addEventListener('DOMContentLoaded', init);