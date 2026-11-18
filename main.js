(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const on = (s, fn) => { const e = $(s); if (e) fn(e); };
  const save = v => { try { localStorage.setItem("lang", v); } catch (e) {} };
  const load = () => { try { return localStorage.getItem("lang"); } catch (e) { return null; } };
  let lang = load() || ((navigator.language || "fr").startsWith("fr") ? "fr" : "en");
  const get = p => p.split(".").reduce((o, k) => o && o[k], SITE[lang]);
  const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt) e.textContent = txt; return e; };
  const home = $("#accueil") ? "" : "index.html"; // les liens "#..." pointent vers l’accueil depuis les autres pages

  function cards(id, items, emptyKey = "empty") {
    on("#" + id, box => {
      box.replaceChildren();
      if (!items.length) { box.append(el("div", "card empty", get(emptyKey))); return; }
      items.forEach(it => {
        const c = el(it.href ? "a" : "div", "card");
        if (it.href) c.href = it.href;
        c.append(el("h3", "", it.title), el("p", "", it.text || ""));
        box.append(c);
      });
    });
  }

  function render() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(e => e.textContent = get(e.dataset.i18n) || "");
    $("#lang").textContent = lang === "fr" ? "EN" : "FR";
    $("#lang").setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
    const menu = $("#menu"); menu.replaceChildren();
    Object.keys(SITE.navLinks).forEach(k => {
      const li = el("li"), a = el("a", "", get("nav." + k)), h = SITE.navLinks[k];
      a.href = h.length > 1 && h[0] === "#" ? home + h : h; li.append(a); menu.append(li);
    });
    on("#stats", s => { s.replaceChildren(); get("stats").forEach(([n, l]) => { const d = el("div"); d.append(el("b", "", n), el("span", "", l)); s.append(d); }); });
    on("#timeline", t => { t.replaceChildren(); get("timeline").forEach(([y, ti, w]) => { const li = el("li"); li.append(el("b", "", y + " : " + ti), el("small", "", w)); t.append(li); }); });
    cards("articles-track", get("articles") || []); cards("creations-track", get("creations") || []);
    on("#certs", () => cards("certs", get("about.certs") || [], "about.certEmpty"));
    on("#how", u => { u.replaceChildren(); get("about.how").forEach(x => u.append(el("li", "", x))); });
    on("#frise", f => {
      f.replaceChildren();
      get("about.tl").forEach(s => {
        const d = el("details", s.key ? "key" : ""); if (s.key) d.open = true;
        const sm = el("summary"); sm.append(el("span", "when", s.when), el("span", "ttl", s.title));
        const ul = el("ul"); s.points.forEach(p => ul.append(el("li", "", p)));
        d.append(sm, el("p", "pl", s.place), ul); f.append(d);
      });
    });
    on("#cv", a => a.href = SITE.cvFile);
    $$("[data-link]").forEach(a => a.href = SITE.links[a.dataset.link]);
    on("#mail", m => { m.href = "mailto:" + SITE.email; m.textContent = SITE.email; });
  }

  $("#lang").onclick = () => { lang = lang === "fr" ? "en" : "fr"; save(lang); render(); };
  $("#burger").onclick = e => { const o = $("nav").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); };
  $("#menu").onclick = () => $("nav").classList.remove("open");
  $$("[data-scroll]").forEach(b => b.onclick = () => { $("#" + b.dataset.scroll).scrollBy({ left: b.dataset.dir * 320, behavior: "smooth" }); });
  const onScroll = () => $("#top").classList.toggle("solid", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  render();

  /* Fond « toile » (accueil seulement) : grille de points reliés par des fils autour du curseur.
     Sans souris (mobile), le point d’attraction se déplace tout seul. */
  const cv = $("#web"); if (!cv) return;
  const ctx = cv.getContext("2d");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touch = !matchMedia("(pointer: fine)").matches;
  const css = getComputedStyle(document.documentElement);
  const SAND = css.getPropertyValue("--sand").trim(), ROSE = css.getPropertyValue("--rose").trim();
  const G = 44, R = 150;
  let W, H, pts = [], m = { x: -999, y: -999 };

  function size() {
    const r = cv.parentElement.getBoundingClientRect(), d = devicePixelRatio || 1;
    W = r.width; H = r.height; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0);
    pts = [];
    for (let x = G / 2; x < W; x += G) for (let y = G / 2; y < H; y += G) pts.push({ ox: x, oy: y, x, y });
  }
  function draw(t) {
    if (touch || still) { m.x = W * (.5 + .3 * Math.sin(t / 2600)); m.y = H * (.5 + .3 * Math.cos(t / 3300)); }
    ctx.clearRect(0, 0, W, H);
    const near = [];
    for (const p of pts) {
      const dx = m.x - p.ox, dy = m.y - p.oy, d = Math.hypot(dx, dy);
      const k = d < R ? (1 - d / R) * .22 : 0;
      p.x = p.ox + dx * k; p.y = p.oy + dy * k;
      ctx.fillStyle = SAND; ctx.globalAlpha = d < R ? .9 : .35;
      ctx.beginPath(); ctx.arc(p.x, p.y, d < R ? 2.2 : 1.5, 0, 6.283); ctx.fill();
      if (d < R) near.push([p, d]);
    }
    ctx.strokeStyle = ROSE; ctx.lineWidth = 1;
    for (let i = 0; i < near.length; i++) for (let j = i + 1; j < near.length; j++) {
      const a = near[i][0], b = near[j][0], l = Math.hypot(a.x - b.x, a.y - b.y);
      if (l < G * 1.6) { ctx.globalAlpha = (1 - Math.max(near[i][1], near[j][1]) / R) * .8; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
  }
  let run = true;
  new IntersectionObserver(([e]) => { run = e.isIntersecting; }).observe(cv.parentElement);
  addEventListener("pointermove", e => { const r = cv.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top; });
  addEventListener("resize", size);
  size();
  if (still) draw(0);
  else (function loop(t) { if (run) draw(t); requestAnimationFrame(loop); })(0);
})();
