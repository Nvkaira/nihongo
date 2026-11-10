/* Nihongo Quest — mesin mockup bersama.
 * File ini hanya mengurus alur (peta → 4 fase → hasil) dan logika kuis.
 * Seluruh tampilan diatur oleh CSS di masing-masing file mockup.
 *
 * Lompat langsung untuk review: tambahkan #step-N di URL (mis. mockup-x.html#step-6).
 */
(function () {
  "use strict";

  const D = window.BAB1;
  const PHASES = D.stage.phases;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Ikon garis 24×24 (gaya Lucide), digambar ulang agar konsisten di semua mockup.
  const ICONS = {
    torii: '<path d="M3 5.5c4 1.3 14 1.3 18 0"/><path d="M5 9.5h14"/><path d="M7.5 6.4V21"/><path d="M16.5 6.4V21"/><path d="M12 9.5V6.8"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5v-3a4 4 0 0 1 8 0v3"/>',
    play: '<path d="M8 5.5v13l10.5-6.5z"/>',
    volume: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9.5 9.5 0 0 1 0 13"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z"/>',
    heart: '<path d="M12 20s-7.5-4.4-9-9.2C2 7.4 4.2 4.5 7.4 4.5c1.9 0 3.4 1 4.6 2.6 1.2-1.6 2.7-2.6 4.6-2.6 3.2 0 5.4 2.9 4.4 6.3C19.5 15.6 12 20 12 20z"/>',
    flame: '<path d="M12 21.5c3.9 0 7-2.7 7-6.5 0-4.1-3.1-6.4-4.4-10-.9 2.3-2 3.5-3.3 4C11.4 5.8 10.2 3.5 8 2c.3 3.5-1.7 5.7-2.7 7.4C4.6 10.6 5 12.4 5 15c0 3.8 3.1 6.5 7 6.5z"/>',
    bolt: '<path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12z"/>',
    book: '<path d="M3 5h5.5A3.5 3.5 0 0 1 12 8.5V20a2.5 2.5 0 0 0-2.5-2.5H3z"/><path d="M21 5h-5.5A3.5 3.5 0 0 0 12 8.5V20a2.5 2.5 0 0 1 2.5-2.5H21z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    bulb: '<path d="M9.5 18h5M10.5 21.5h3"/><path d="M12 2.5a6.5 6.5 0 0 0-3.8 11.8c.7.5 1.3 1.4 1.3 2.4v1.3h5v-1.3c0-1 .6-1.9 1.3-2.4A6.5 6.5 0 0 0 12 2.5z"/>',
    crown: '<path d="M3.5 18.5h17"/><path d="m4 15.5-1-9 5 4 4-6 4 6 5-4-1 9z"/>',
    arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.5-4.5L3 9"/><path d="M3 4v5h5"/><path d="M4 13a8 8 0 0 0 14.5 4.5L21 15"/><path d="M21 20v-5h-5"/>',
    sparkle: '<path d="M12 3.5 13.9 9l5.6 2-5.6 2L12 18.5 10.1 13l-5.6-2 5.6-2z"/>',
    map: '<path d="m9 4.5-5.5 2v13l5.5-2 6 2 5.5-2v-13l-5.5 2z"/><path d="M9 4.5v13M15 6.5v13"/>',
    trophy: '<path d="M8 4.5h8v5a4 4 0 0 1-8 0z"/><path d="M8 6.5H4.5a3.5 3.5 0 0 0 3.8 4M16 6.5h3.5a3.5 3.5 0 0 1-3.8 4"/><path d="M12 13.5v4M8.5 20.5h7M10 17.5h4"/>',
  };
  const icon = (name, cls = "") =>
    `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name]}</svg>`;

  // ---------- Teks Jepang ----------
  const RUBY = /\{([^|}]+)\|([^}]+)\}/g;
  const parseSeg = (t) => {
    const i = t.lastIndexOf("|");
    return { k: t.slice(0, i), r: t.slice(i + 1) };
  };
  function jp(tokens, cls = "") {
    const segs = [].concat(tokens).map((t) => {
      const s = parseSeg(t);
      return `<span class="seg"><span class="kana">${s.k.replace(RUBY, "<ruby>$1<rt>$2</rt></ruby>")}</span><span class="romaji" lang="ja-Latn">${s.r}</span></span>`;
    });
    return `<span class="jp ${cls}" lang="ja">${segs.join("")}</span>`;
  }
  const rich = (html) => html.replace(/\[\[(.+?)\]\]/g, (_, t) => jp(t.split("+"), "jp--inline"));
  const enc = (tokens) => encodeURIComponent(JSON.stringify([].concat(tokens)));
  const dec = (s) => JSON.parse(decodeURIComponent(s));

  // ---------- Suara (TTS bawaan browser) ----------
  let jaVoice = null;
  let warnedVoice = false;
  const hasTTS = "speechSynthesis" in window;
  function loadVoices() {
    jaVoice = speechSynthesis.getVoices().find((v) => /^ja/i.test(v.lang)) || null;
  }
  if (hasTTS) {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }
  function say(tokens, rate = 0.85) {
    if (!hasTTS) return toast("Browser ini belum mendukung suara.");
    const text = [].concat(tokens).map((t) => parseSeg(t).k.replace(RUBY, "$2")).join("");
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ja-JP";
    u.rate = rate;
    if (jaVoice) u.voice = jaVoice;
    speechSynthesis.speak(u);
    if (!jaVoice && !warnedVoice) {
      warnedVoice = true;
      toast("Suara bahasa Jepang belum terpasang di perangkat ini, jadi pelafalannya mungkin kurang pas.");
    }
  }
  const hush = () => hasTTS && speechSynthesis.cancel();

  function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) {
      t = document.createElement("div");
      t.className = "toast";
      t.setAttribute("role", "status");
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => t.classList.remove("is-on"), 2800);
  }

  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- State ----------
  const S = {
    screen: "map",
    romaji: true,
    nodes: D.nodes.map((n) => ({ ...n })),
    stars: 0,
    fresh: null,
    steps: [],
    i: 0,
    fills: PHASES.map(() => 0),
    local: {},
    answered: false,
    start: 0,
    hearts: 3,
    mistakes: 0,
    fast: 0,
    total: 0,
    correct: 0,
  };
  try {
    S.romaji = localStorage.getItem("nq-romaji") !== "0";
  } catch (e) {}

  let cfg, root;

  function start(opts) {
    cfg = Object.assign(
      {
        root: "#app",
        brand: "Nihongo Quest",
        fastMs: 15000,
        mapDecor: "",
        okWords: ["Benar!", "Mantap!", "Tepat sekali!"],
        badWords: ["Belum tepat", "Hampir!"],
      },
      opts
    );
    root = document.querySelector(cfg.root);
    root.addEventListener("click", onClick);
    const m = location.hash.match(/^#step-(\d+)$/);
    if (m) {
      startLesson();
      go(Math.min(+m[1], S.steps.length - 1));
    } else {
      renderMap();
    }
  }
  window.NihongoMock = { start };

  const setRootClass = () => (root.className = `app app--${S.screen}${S.romaji ? "" : " romaji-off"}`);
  const romajiToggle = () =>
    `<button class="toggle" type="button" data-act="romaji" aria-pressed="${S.romaji}"><span class="toggle-track" aria-hidden="true"><span class="toggle-thumb"></span></span><span class="toggle-label">Romaji</span></button>`;
  const btn = (label, act, cls = "btn-primary", attrs = "") =>
    `<button class="btn ${cls}" type="button" data-act="${act}" ${attrs}>${label}</button>`;
  const nextBtn = (attrs = "") => btn(`<span>Lanjut</span>${icon("arrowR")}`, "next", "btn-primary", attrs);
  const speakBtn = (tokens, label = "Dengarkan", cls = "speak") =>
    `<button class="${cls}" type="button" data-act="say" data-say="${enc(tokens)}" aria-label="${label}">${icon("volume")}</button>`;

  // ---------- Peta stage ----------
  function renderMap() {
    S.screen = "map";
    setRootClass();
    const stages = S.nodes.filter((n) => n.stage);
    const done = stages.filter((n) => n.state === "done").length;
    const stat = (ic, val, label, mod) =>
      `<div class="stat stat--${mod}">${icon(ic)}<strong>${val}</strong><span>${label}</span></div>`;
    root.innerHTML = `
      <header class="topbar">
        <div class="brand">${icon("torii")}<span>${cfg.brand}</span></div>
        ${romajiToggle()}
      </header>
      <main class="map">
        <section class="unit" aria-labelledby="unit-title">
          <span class="unit-label">${D.unit.label}</span>
          <h1 class="unit-title" id="unit-title">${jp(D.unit.title)}</h1>
          <p class="unit-sub">${D.unit.sub}</p>
          <div class="unit-progress">
            <span class="bar"><span class="bar-fill" style="width:${(done / stages.length) * 100}%"></span></span>
            <span class="unit-count">${done}/${stages.length} stage</span>
          </div>
        </section>
        <section class="stats" aria-label="Statistik belajar">
          ${stat("flame", D.stats.streak, "hari beruntun", "streak")}
          ${stat("bolt", D.stats.xp + S.stars * 10, "XP", "xp")}
          ${stat("star", S.stars, "bintang", "stars")}
        </section>
        <ol class="path" aria-label="Peta stage">${S.nodes.map(nodeHTML).join("")}</ol>
        ${cfg.mapDecor}
      </main>`;
    S.fresh = null;
  }

  function nodeHTML(n, idx) {
    const ic = n.state === "done" ? "check" : n.state === "locked" ? "lock" : "play";
    const status = { done: "selesai", current: "siap dimainkan", locked: "terkunci" }[n.state];
    return `<li class="node node--${n.state}${S.fresh === n.id ? " is-new" : ""}" style="--i:${idx}">
      <button class="node-btn" type="button" data-act="node" data-id="${n.id}" aria-label="${n.label}, ${n.title}, ${status}">
        <span class="node-icon">${icon(ic)}</span>
        <span class="node-text"><span class="node-label">${n.label}</span><span class="node-title">${n.title}</span><span class="node-sub" lang="ja">${n.sub}</span></span>
        ${n.state === "current" ? `<span class="node-start">Mulai</span>` : ""}
      </button>
    </li>`;
  }

  function onNode(id) {
    const i = S.nodes.findIndex((n) => n.id === id);
    const n = S.nodes[i];
    if (n.state === "locked") return toast(`Selesaikan ${S.nodes[i - 1].label} dulu untuk membuka ${n.label}.`);
    if (n.playable) return startLesson(), go(0);
    toast(n.state === "done" ? `${n.label} sudah selesai. (Belum bisa diulang di mockup ini.)` : `${n.label} sudah terbuka! Isinya belum dibuat di mockup ini.`);
  }

  // ---------- Alur pelajaran ----------
  function startLesson() {
    S.steps = [];
    PHASES.forEach((p, pi) => {
      S.steps.push({ type: "intro", phase: pi });
      p.steps.forEach((s, si) => S.steps.push({ ...s, phase: pi, idx: si, count: p.steps.length }));
    });
    S.steps.push({ type: "result", phase: PHASES.length });
    S.fills = PHASES.map(() => 0);
    S.screen = "lesson";
  }
  const cur = () => S.steps[S.i];
  const inBoss = (st) => st.phase === PHASES.length - 1;

  function go(i) {
    S.i = i;
    const st = cur();
    if (st.type === "intro" && inBoss(st)) Object.assign(S, { hearts: 3, mistakes: 0, fast: 0, total: 0, correct: 0 });
    renderLesson();
  }
  function next() {
    if (inBoss(cur()) && S.hearts <= 0) return go(S.steps.length - 1);
    go(S.i + 1);
  }

  function fillFor(st, pi) {
    if (pi < st.phase) return 100;
    if (pi > st.phase) return 0;
    return st.type === "intro" ? 0 : Math.round(((st.idx + 1) / st.count) * 100);
  }
  function phaseSeg(p, pi, st) {
    const state = pi < st.phase ? " is-done" : pi === st.phase ? " is-active" : "";
    return `<li class="phase-seg phase-seg--${p.key}${state}"${pi === st.phase ? ' aria-current="step"' : ""}><span class="phase-bar"><span class="phase-fill" style="width:${S.fills[pi]}%"></span></span><span class="phase-name">${p.name}</span></li>`;
  }
  const heartsHTML = () => [0, 1, 2].map((i) => icon("heart", "heart" + (i < S.hearts ? "" : " is-lost"))).join("");
  function drawHearts() {
    const h = root.querySelector(".hearts");
    h.innerHTML = heartsHTML();
    h.setAttribute("aria-label", `Nyawa ${S.hearts} dari 3`);
    h.classList.remove("is-hit");
    void h.offsetWidth;
    h.classList.add("is-hit");
  }

  function renderLesson() {
    hush();
    setRootClass();
    const st = cur();
    const view = VIEWS[st.type](st);
    const target = PHASES.map((p, pi) => fillFor(st, pi));
    const key = st.type === "result" ? "result" : PHASES[st.phase].key;
    root.innerHTML = `
      <div class="lesson lesson--${key}">
        <header class="lhead">
          <button class="icon-btn close" type="button" data-act="map" aria-label="Keluar ke peta">${icon("close")}</button>
          <ol class="phases" aria-label="Fase belajar">${PHASES.map((p, pi) => phaseSeg(p, pi, st)).join("")}</ol>
          <div class="hearts${inBoss(st) ? "" : " is-hidden"}" aria-label="Nyawa ${S.hearts} dari 3">${heartsHTML()}</div>
          ${romajiToggle()}
        </header>
        <main class="stage-body"><div class="step step--${st.type}">${view.body}</div></main>
        <footer class="lfoot">${view.foot || ""}</footer>
        <div class="sheet" role="status" aria-live="polite" hidden></div>
      </div>`;
    // Progress fase bergerak dari posisi sebelumnya ke posisi baru.
    const fills = root.querySelectorAll(".phase-fill");
    requestAnimationFrame(() => requestAnimationFrame(() => fills.forEach((f, pi) => (f.style.width = target[pi] + "%"))));
    S.fills = target;
    S.local = {};
    S.answered = false;
    S.start = performance.now();
    if (view.bind) view.bind(st);
    const tf = root.querySelector(".timer-fill");
    if (tf)
      tf.addEventListener("animationend", () => {
        const t = root.querySelector(".timer");
        t.classList.add("is-over");
        t.querySelector(".timer-text").textContent = "Bonus kilat lewat, santai aja";
      });
    window.scrollTo(0, 0);
    const h = root.querySelector(".step-title");
    if (h) {
      h.tabIndex = -1;
      h.focus({ preventScroll: true });
    }
  }

  // ---------- Potongan tampilan ----------
  function phaseTag(st) {
    const p = PHASES[st.phase];
    return `<p class="phase-tag">${icon(p.icon)}<span>Fase ${st.phase + 1} · ${p.long}</span><span class="step-count">${st.idx + 1}/${st.count}</span></p>`;
  }
  function topOf(st) {
    if (!inBoss(st)) return phaseTag(st);
    return (
      phaseTag(st) +
      `<div class="timer" style="--t:${cfg.fastMs}ms"><span class="timer-fill"></span><span class="timer-label">${icon("bolt")}<span class="timer-text">Bonus kilat</span></span></div>`
    );
  }
  const hintBox = (st) => (st.hint && !inBoss(st) ? `<div class="hint" hidden>${icon("bulb")}<p>${rich(st.hint)}</p></div>` : "");
  const checkFoot = (st) =>
    (st.hint && !inBoss(st) ? btn(`${icon("bulb")}<span>Petunjuk</span>`, "hint", "btn-ghost") : "") + btn("Cek", "check", "btn-primary", "disabled");
  const optionsHTML = (st) =>
    `<div class="options" role="group" aria-label="Pilihan jawaban">${st.options
      .map(
        (o, i) =>
          `<button class="option" type="button" data-act="opt" data-i="${i}" aria-pressed="false"><span class="option-key">${"ABCD"[i]}</span><span class="option-body">${o.jp ? jp(o.jp) : o.text}</span></button>`
      )
      .join("")}</div>`;
  const formulaHTML = (f) =>
    `<div class="formula" role="group" aria-label="Pola kalimat">${f
      .map((c) => `<div class="f-chip f-chip--${c.kind}"><span class="f-main">${c.jp ? jp(c.jp) : c.text}</span><span class="f-note">${c.note}</span></div>`)
      .join(`<span class="f-plus" aria-hidden="true">+</span>`)}</div>`;
  const exampleHTML = (ex) =>
    `<div class="example">${speakBtn(ex.jp)}<div class="example-text">${jp(ex.jp, "jp--lg")}<p class="trans">${ex.id}</p></div></div>`;
  const rstat = (val, label) => `<div class="rstat"><strong>${val}</strong><span>${label}</span></div>`;

  const VIEWS = {
    intro(st) {
      const p = PHASES[st.phase];
      return {
        body: `<div class="intro"><div class="intro-icon">${icon(p.icon)}</div><p class="intro-kicker">Fase ${st.phase + 1} dari ${PHASES.length}</p><h2 class="step-title">${p.long}</h2><p class="intro-desc">${rich(p.intro)}</p><ul class="intro-list">${p.points
          .map((x) => `<li>${icon("check")}<span>${rich(x)}</span></li>`)
          .join("")}</ul></div>`,
        foot: inBoss(st) ? btn(`${icon("crown")}<span>Hadapi Boss</span>`, "next") : btn(`<span>Mulai</span>${icon("arrowR")}`, "next"),
      };
    },

    concept(st) {
      return {
        body: `${phaseTag(st)}<h2 class="step-title">${st.title}</h2><div class="card concept">${st.body ? `<p class="concept-text">${rich(st.body)}</p>` : ""}${
          st.formula ? formulaHTML(st.formula) : ""
        }${(st.examples || []).map(exampleHTML).join("")}${st.tip ? `<div class="tip">${icon("bulb")}<p>${rich(st.tip)}</p></div>` : ""}</div>`,
        foot: nextBtn(),
      };
    },

    vocab(st) {
      return {
        body: `${phaseTag(st)}<h2 class="step-title">${st.title}</h2><p class="step-prompt">${st.body}</p><div class="vocab-grid">${st.items
          .map(
            (v) =>
              `<button class="vocab-item" type="button" data-act="say" data-say="${enc(v.jp)}"><span class="vocab-word">${jp(v.jp)}</span><span class="vocab-mean">${v.id}</span>${icon("volume", "vocab-ico")}</button>`
          )
          .join("")}</div>`,
        foot: nextBtn(),
      };
    },

    fact(st) {
      return {
        body: `${phaseTag(st)}<article class="card fact"><p class="fact-kicker">${icon("sparkle")}<span>${st.kicker}</span></p><h2 class="step-title">${st.title}</h2>${
          st.art ? `<div class="fact-art">${rich(st.art)}</div>` : ""
        }<p class="fact-body">${rich(st.body)}</p></article>`,
        foot: nextBtn(),
      };
    },

    flip(st) {
      return {
        body: `${phaseTag(st)}<h2 class="step-title">${st.title}</h2><div class="flip"><div class="flip-card"><div class="flip-face flip-front card"><p class="flip-q">${rich(
          st.statement
        )}</p><div class="flip-actions">${btn("Benar", "flip", "btn-choice", 'data-v="1"')}${btn("Mitos", "flip", "btn-choice", 'data-v="0"')}</div></div><div class="flip-face flip-back card" aria-hidden="true"><p class="flip-verdict"></p><p>${rich(
          st.reveal
        )}</p></div></div></div>`,
        foot: nextBtn("disabled"),
      };
    },

    mc(st) {
      const prompt = st.jp
        ? `<div class="card prompt-card"><div>${jp(st.jp, "jp--lg")}${st.trans ? `<p class="trans">${st.trans}</p>` : ""}</div>${st.speak === false ? "" : speakBtn(st.jp)}</div>`
        : "";
      return { body: `${topOf(st)}<h2 class="step-title">${st.prompt}</h2>${prompt}${hintBox(st)}${optionsHTML(st)}`, foot: checkFoot(st) };
    },

    listen(st) {
      return {
        body: `${topOf(st)}<h2 class="step-title">${st.prompt}</h2><div class="card listen">${speakBtn(st.audio, "Putar audio", "speak big-speak")}<div class="listen-tools"><button class="chip-btn" type="button" data-act="slow" data-say="${enc(
          st.audio
        )}">Putar pelan</button><button class="chip-btn" type="button" data-act="reveal" aria-expanded="false">Tampilkan teks</button></div><div class="listen-text" hidden>${jp(
          st.audio,
          "jp--lg"
        )}</div></div>${optionsHTML(st)}`,
        foot: checkFoot(st),
        bind: () => setTimeout(() => say(st.audio), 400),
      };
    },

    wordbank(st) {
      return {
        body: `${topOf(st)}<h2 class="step-title">Susun kalimat ini</h2><p class="step-prompt wb-target">“${st.prompt}”</p>${hintBox(
          st
        )}<div class="answer-line" aria-label="Jawabanmu"></div><div class="bank" role="group" aria-label="Blok kata"></div>`,
        foot: checkFoot(st),
        bind() {
          const all = [...st.answer, ...st.extra];
          let bank = shuffle(all);
          for (let n = 0; n < 5 && bank.slice(0, st.answer.length).join() === st.answer.join(); n++) bank = shuffle(all);
          Object.assign(S.local, { bank, ans: [], last: null });
          drawBank();
        },
      };
    },

    match(st) {
      const items = st.pairs.map((p, k) => ({ p, k }));
      return {
        body: `${topOf(st)}<h2 class="step-title">${st.prompt}</h2><p class="step-prompt">Ketuk satu kata Jepang, lalu ketuk artinya.</p><div class="match"><div class="match-col" role="group" aria-label="Bahasa Jepang">${shuffle(items)
          .map(({ p, k }) => `<button class="match-item match-item--jp" type="button" data-act="pick" data-side="L" data-k="${k}" aria-pressed="false">${jp(p[0])}</button>`)
          .join("")}</div><div class="match-col" role="group" aria-label="Arti">${shuffle(items)
          .map(({ p, k }) => `<button class="match-item match-item--id" type="button" data-act="pick" data-side="R" data-k="${k}" aria-pressed="false">${p[1]}</button>`)
          .join("")}</div></div>`,
        foot: `<p class="foot-note">Pasangan ditemukan: <strong class="match-count">0</strong>/${st.pairs.length}</p>`,
        bind: () => Object.assign(S.local, { sel: null, found: 0, miss: 0 }),
      };
    },

    swipe(st) {
      return {
        body: `${topOf(st)}<h2 class="step-title">${st.prompt}</h2><p class="step-prompt swipe-help">${icon("arrowL")}<span>Geser kiri = Salah</span><span class="sep" aria-hidden="true">·</span><span>Geser kanan = Benar</span>${icon(
          "arrowR"
        )}</p><div class="swipe-zone"><div class="swipe-card" tabindex="0" role="group" aria-roledescription="kartu geser" aria-label="Tekan panah kiri untuk Salah atau panah kanan untuk Benar"><span class="swipe-stamp swipe-stamp--no" aria-hidden="true">Salah</span><span class="swipe-stamp swipe-stamp--yes" aria-hidden="true">Benar</span>${jp(
          st.card.jp,
          "jp--lg"
        )}<p class="swipe-claim">artinya</p><p class="swipe-mean">“${st.card.claim}”</p></div></div>`,
        foot: btn(`${icon("close")}<span>Salah</span>`, "tf", "btn-no", 'data-v="0"') + btn(`${icon("check")}<span>Benar</span>`, "tf", "btn-yes", 'data-v="1"'),
        bind: bindSwipe,
      };
    },

    result() {
      if (S.hearts <= 0) {
        return {
          body: `<div class="result result--fail"><div class="result-badge">${icon("heart")}</div><p class="intro-kicker">Nyawa habis</p><h2 class="step-title">Hampir! Coba sekali lagi?</h2><p class="intro-desc">Kamu menjawab benar ${S.correct} dari ${S.total} soal. Mau langsung ulang Boss, atau baca lagi materinya dulu?</p></div>`,
          foot: btn(`${icon("book")}<span>Ulang materi</span>`, "restart", "btn-ghost") + btn(`${icon("refresh")}<span>Ulang Boss</span>`, "retry"),
        };
      }
      const stars = Math.max(1, 3 - S.mistakes);
      unlockNext(stars);
      return {
        body: `<div class="result result--pass"><div class="result-badge">${icon("trophy")}</div><p class="intro-kicker">Stage 1-1 selesai</p><h2 class="step-title">Boss dikalahkan!</h2><div class="stars" role="img" aria-label="${stars} dari 3 bintang">${[0, 1, 2]
          .map((i) => icon("star", "star" + (i < stars ? " is-on" : "")))
          .join("")}</div><div class="result-stats">${rstat(`${S.correct}/${S.total}`, "Jawaban benar")}${rstat(S.hearts, "Nyawa tersisa")}${rstat(
          S.fast,
          "Bonus kilat"
        )}</div><p class="unlock-note">${icon("sparkle")}<span>Stage 1-2 <span lang="ja">か・も</span> sekarang terbuka!</span></p></div>`,
        foot: btn(`${icon("map")}<span>Kembali ke peta</span>`, "map"),
      };
    },
  };

  function unlockNext(stars) {
    const s1 = S.nodes.find((n) => n.id === "s1");
    const s2 = S.nodes.find((n) => n.id === "s2");
    S.stars = Math.max(S.stars, stars);
    if (s2.state === "locked") S.fresh = "s2";
    s1.state = "done";
    if (s2.state === "locked") s2.state = "current";
  }

  // ---------- Interaksi kuis ----------
  function setCheck(on) {
    const b = root.querySelector('[data-act="check"]');
    if (b) b.disabled = !on;
  }

  function judge(ok, explain) {
    if (S.answered) return;
    S.answered = true;
    const st = cur();
    const boss = inBoss(st);
    const timer = root.querySelector(".timer");
    if (timer) timer.classList.add("is-stopped");
    let bonus = false;
    if (boss) {
      S.total++;
      if (ok) {
        S.correct++;
        if (performance.now() - S.start < cfg.fastMs) (S.fast++, (bonus = true));
      } else {
        S.mistakes++;
        S.hearts = Math.max(0, S.hearts - 1);
        drawHearts();
      }
    }
    root.querySelector(".lfoot").innerHTML = "";
    const words = ok ? cfg.okWords : cfg.badWords;
    const sheet = root.querySelector(".sheet");
    sheet.className = `sheet ${ok ? "sheet--ok" : "sheet--bad"}`;
    sheet.hidden = false;
    sheet.innerHTML = `<div class="sheet-inner"><div class="sheet-icon">${icon(ok ? "check" : "close")}</div><div class="sheet-text"><p class="sheet-title">${
      words[Math.floor(Math.random() * words.length)]
    }${bonus ? `<span class="sheet-bonus">${icon("bolt")}Bonus kilat!</span>` : ""}</p><p>${rich(explain)}</p></div>${btn(
      boss && S.hearts === 0 ? "Lihat hasil" : `<span>Lanjut</span>${icon("arrowR")}`,
      "next",
      ok ? "btn-ok" : "btn-bad"
    )}</div>`;
    sheet.querySelector("button").focus({ preventScroll: true });
  }

  function checkMC(st) {
    if (S.local.pick == null) return;
    const ok = !!st.options[S.local.pick].correct;
    root.querySelector(".options").classList.add("is-locked");
    root.querySelectorAll(".option").forEach((o, i) => {
      o.disabled = true;
      if (st.options[i].correct) o.classList.add("is-correct");
      else if (i === S.local.pick) o.classList.add("is-wrong");
    });
    judge(ok, st.explain);
  }

  function drawBank() {
    const { bank, ans, last } = S.local;
    root.querySelector(".answer-line").innerHTML = ans.length
      ? ans.map((bi, pos) => `<button class="token${bi === last ? " is-new" : ""}" type="button" data-act="ans" data-pos="${pos}">${jp(bank[bi])}</button>`).join("")
      : `<span class="answer-placeholder">Ketuk blok kata di bawah</span>`;
    root.querySelector(".bank").innerHTML = bank
      .map((t, bi) => {
        const used = ans.includes(bi);
        return `<button class="token${used ? " is-used" : ""}" type="button" data-act="bank" data-i="${bi}"${used ? ' disabled aria-hidden="true" tabindex="-1"' : ""}>${jp(t)}</button>`;
      })
      .join("");
    setCheck(ans.length > 0);
  }

  function checkWB(st) {
    const ok = S.local.ans.map((bi) => S.local.bank[bi]).join("§") === st.answer.join("§");
    root.querySelector(".answer-line").classList.add(ok ? "is-correct" : "is-wrong");
    root.querySelectorAll(".token").forEach((t) => (t.disabled = true));
    judge(ok, ok ? st.explain : `Susunan yang benar: ${jp(st.answer, "jp--inline")}<br>${st.explain}`);
  }

  function pick(el) {
    if (S.answered) return;
    const st = cur();
    const L = S.local;
    if (el.dataset.side === "L") say(st.pairs[+el.dataset.k][0]);
    if (L.sel === el) {
      el.setAttribute("aria-pressed", "false");
      L.sel = null;
      return;
    }
    if (!L.sel || L.sel.dataset.side === el.dataset.side) {
      if (L.sel) L.sel.setAttribute("aria-pressed", "false");
      L.sel = el;
      el.setAttribute("aria-pressed", "true");
      return;
    }
    const a = L.sel;
    L.sel = null;
    a.setAttribute("aria-pressed", "false");
    if (a.dataset.k === el.dataset.k) {
      [a, el].forEach((b) => {
        b.classList.add("is-matched");
        b.disabled = true;
      });
      L.found++;
      root.querySelector(".match-count").textContent = L.found;
      if (L.found === st.pairs.length) {
        // Di latihan, salah pasang tidak dihukum; di Boss, ada salah = soal dianggap salah.
        const ok = L.miss === 0 || !inBoss(st);
        const note = L.miss ? `Semua pasangan ketemu, tapi sempat ketuker ${L.miss}×. ` : "";
        setTimeout(() => judge(ok, note + st.explain), 350);
      }
    } else {
      L.miss++;
      [a, el].forEach((b) => {
        b.classList.remove("is-wrong");
        void b.offsetWidth;
        b.classList.add("is-wrong");
        setTimeout(() => b.classList.remove("is-wrong"), 600);
      });
    }
  }

  function bindSwipe() {
    const card = root.querySelector(".swipe-card");
    let x0 = null;
    let dx = 0;
    card.addEventListener("pointerdown", (e) => {
      if (S.answered) return;
      x0 = e.clientX;
      dx = 0;
      card.setPointerCapture(e.pointerId);
      card.classList.add("is-drag");
    });
    card.addEventListener("pointermove", (e) => {
      if (x0 === null) return;
      dx = e.clientX - x0;
      card.style.transform = `translateX(${dx}px) rotate(${dx / 18}deg)`;
      card.classList.toggle("lean-right", dx > 40);
      card.classList.toggle("lean-left", dx < -40);
    });
    const end = () => {
      if (x0 === null) return;
      x0 = null;
      card.classList.remove("is-drag");
      if (Math.abs(dx) > 90) return decide(dx > 0);
      card.style.transform = "";
      card.classList.remove("lean-left", "lean-right");
    };
    card.addEventListener("pointerup", end);
    card.addEventListener("pointercancel", end);
    card.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") decide(true);
      if (e.key === "ArrowLeft") decide(false);
    });
  }

  function decide(v) {
    if (S.answered || S.local.decided) return;
    S.local.decided = true;
    const st = cur();
    const card = root.querySelector(".swipe-card");
    card.style.transform = "";
    card.classList.add(v ? "is-out-right" : "is-out-left");
    root.querySelectorAll('[data-act="tf"]').forEach((b) => (b.disabled = true));
    setTimeout(() => judge(v === st.answer, st.explain), reduceMotion ? 0 : 280);
  }

  // ---------- Event ----------
  const ACT = {
    romaji() {
      S.romaji = !S.romaji;
      try {
        localStorage.setItem("nq-romaji", S.romaji ? "1" : "0");
      } catch (e) {}
      root.classList.toggle("romaji-off", !S.romaji);
      root.querySelectorAll(".toggle").forEach((t) => t.setAttribute("aria-pressed", S.romaji));
    },
    node: (el) => onNode(el.dataset.id),
    map() {
      hush();
      renderMap();
      window.scrollTo(0, 0);
    },
    next: () => next(),
    say(el) {
      say(dec(el.dataset.say));
      el.classList.remove("is-playing");
      void el.offsetWidth;
      el.classList.add("is-playing");
    },
    slow: (el) => say(dec(el.dataset.say), 0.6),
    reveal(el) {
      const t = root.querySelector(".listen-text");
      t.hidden = !t.hidden;
      el.setAttribute("aria-expanded", !t.hidden);
      el.textContent = t.hidden ? "Tampilkan teks" : "Sembunyikan teks";
    },
    hint(el) {
      root.querySelector(".hint").hidden = false;
      el.disabled = true;
    },
    opt(el) {
      if (S.answered) return;
      root.querySelectorAll(".option").forEach((o) => o.setAttribute("aria-pressed", o === el));
      S.local.pick = +el.dataset.i;
      setCheck(true);
    },
    check() {
      const st = cur();
      (st.type === "wordbank" ? checkWB : checkMC)(st);
    },
    bank(el) {
      if (S.answered) return;
      S.local.ans.push(+el.dataset.i);
      S.local.last = +el.dataset.i;
      drawBank();
    },
    ans(el) {
      if (S.answered) return;
      S.local.ans.splice(+el.dataset.pos, 1);
      S.local.last = null;
      drawBank();
    },
    pick,
    tf: (el) => decide(el.dataset.v === "1"),
    flip(el) {
      const st = cur();
      const right = (el.dataset.v === "1") === st.answer;
      const card = root.querySelector(".flip-card");
      card.querySelector(".flip-verdict").innerHTML = `${icon(right ? "check" : "sparkle")}<span>${right ? "Tebakanmu tepat!" : "Ups, kena jebakan!"}</span>`;
      card.classList.add("is-flipped", right ? "is-right" : "is-miss");
      card.querySelector(".flip-front").setAttribute("aria-hidden", "true");
      card.querySelector(".flip-back").removeAttribute("aria-hidden");
      card.querySelectorAll(".flip-front button").forEach((b) => (b.disabled = true));
      root.querySelector('.lfoot [data-act="next"]').disabled = false;
    },
    restart: () => go(0),
    retry: () => go(S.steps.findIndex((s) => s.type === "intro" && inBoss(s))),
  };

  function onClick(e) {
    const el = e.target.closest("[data-act]");
    if (!el || el.disabled || !root.contains(el)) return;
    ACT[el.dataset.act](el);
  }
})();
