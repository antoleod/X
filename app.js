// =========================================================
// Shared helpers: storage, toasts, confetti, UI utilities (v2)
// =========================================================
export const STORAGE_KEY = "mathBlocksProgress_v2";
export const LANG_KEY = "mathBlocksLang_v2"; // 'fr' or 'nl'

export function getLang(){
  const l = localStorage.getItem(LANG_KEY);
  return (l === "nl") ? "nl" : "fr";
}
export function setLang(lang){
  localStorage.setItem(LANG_KEY, lang === "nl" ? "nl" : "fr");
}

export function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return { compose:{}, subtract:{} };
    const p = JSON.parse(raw);
    return { compose: p.compose || {}, subtract: p.subtract || {} };
  }catch(e){
    return { compose:{}, subtract:{} };
  }
}
export function saveProgress(p){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function toast(msg, type="info"){
  const el = document.getElementById("toast");
  if(!el) return;
  el.textContent = msg;
  el.classList.remove("show");
  el.style.borderColor = "rgba(255,255,255,.12)";
  if(type==="good") el.style.borderColor = "rgba(52,211,153,.45)";
  if(type==="warn") el.style.borderColor = "rgba(251,191,36,.45)";
  if(type==="bad")  el.style.borderColor = "rgba(251,113,133,.45)";
  requestAnimationFrame(()=> el.classList.add("show"));
  clearTimeout(window.__toastT);
  window.__toastT = setTimeout(()=> el.classList.remove("show"), 2400);
}

export function confettiBurst(count=80){
  const wrap = document.createElement("div");
  wrap.className="confetti";
  for(let i=0;i<count;i++){
    const p = document.createElement("i");
    const left = Math.random()*100;
    const delay = Math.random()*180;
    const dur = 820 + Math.random()*650;
    const size = 7 + Math.random()*10;
    p.style.left = left+"vw";
    p.style.animationDelay = delay+"ms";
    p.style.animationDuration = dur+"ms";
    p.style.width = size+"px";
    p.style.height = (size*1.3)+"px";
    p.style.transform = `rotate(${Math.random()*70}deg)`;
    wrap.appendChild(p);
  }
  document.body.appendChild(wrap);
  setTimeout(()=> wrap.remove(), 1700);
}

export function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

export function splitNumber(n){
  const tens = Math.floor(n/10);
  const ones = n%10;
  return {tens, ones};
}

export function renderBlocks({tens, ones, tenRowEl, oneRowEl, labelTen="10", labelOne="1"}){
  tenRowEl.innerHTML = "";
  oneRowEl.innerHTML = "";
  for(let i=0;i<tens;i++){
    const b = document.createElement("div");
    b.className="blockTen";
    b.innerHTML = `<div class="blockLabel">${labelTen}</div>`;
    tenRowEl.appendChild(b);
  }
  for(let i=0;i<ones;i++){
    const b = document.createElement("div");
    b.className="blockOne";
    b.innerHTML = `<div class="blockLabel">${labelOne}</div>`;
    oneRowEl.appendChild(b);
  }
}

export function animateShake(el){
  if(!el) return;
  el.classList.remove("shake");
  void el.offsetWidth;
  el.classList.add("shake");
}

export function setProgressBar(id, pct){
  const bar = document.getElementById(id);
  if(!bar) return;
  const inner = bar.querySelector("div");
  if(inner) inner.style.width = `${clamp(pct,0,100)}%`;
}

export function ensureBgFX(){
  if(document.querySelector(".bgFX")) return;
  const fx = document.createElement("div");
  fx.className = "bgFX";
  fx.innerHTML = `<div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div><div class="noise"></div>`;
  document.body.prepend(fx);
}

// very lightweight modal intro
export function showIntro(html){
  const existing = document.getElementById("introModal");
  if(existing) existing.remove();

  const wrap = document.createElement("div");
  wrap.id = "introModal";
  wrap.style.position = "fixed";
  wrap.style.inset = "0";
  wrap.style.zIndex = "1000";
  wrap.style.background = "rgba(0,0,0,.55)";
  wrap.style.backdropFilter = "blur(10px)";
  wrap.style.display = "grid";
  wrap.style.placeItems = "center";
  wrap.style.padding = "18px";

  const card = document.createElement("div");
  card.style.maxWidth = "780px";
  card.style.width = "100%";
  card.style.borderRadius = "18px";
  card.style.border = "1px solid rgba(255,255,255,.12)";
  card.style.background = "linear-gradient(180deg, rgba(18,31,59,.96), rgba(10,18,38,.94))";
  card.style.boxShadow = "0 22px 80px rgba(0,0,0,.45)";
  card.style.overflow = "hidden";

  const top = document.createElement("div");
  top.style.display = "flex";
  top.style.justifyContent = "space-between";
  top.style.alignItems = "center";
  top.style.padding = "14px 14px";
  top.style.borderBottom = "1px solid rgba(255,255,255,.10)";
  top.innerHTML = `<div style="font-weight:900">✨</div><button id="introClose" class="pill" style="background:rgba(255,255,255,.10);border-color:rgba(255,255,255,.18)">OK</button>`;

  const body = document.createElement("div");
  body.style.padding = "14px 14px 18px";
  body.style.color = "rgba(255,255,255,.86)";
  body.style.lineHeight = "1.55";
  body.innerHTML = html;

  card.appendChild(top);
  card.appendChild(body);
  wrap.appendChild(card);
  document.body.appendChild(wrap);

  const close = ()=> wrap.remove();
  wrap.addEventListener("click",(e)=>{ if(e.target===wrap) close(); });
  wrap.querySelector("#introClose").addEventListener("click", close);
}
