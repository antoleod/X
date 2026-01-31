
const LANG_KEY="mb_lang_v3";
const PROGRESS_KEY="mb_progress_v3";

export function getLang(){return localStorage.getItem(LANG_KEY)||"fr"}
export function setLang(l){localStorage.setItem(LANG_KEY,l)}

export function t(fr,nl){
  return getLang()==="nl"?nl:fr;
}

export function confetti(){
  const c=document.createElement("div");
  c.className="confetti";
  for(let i=0;i<40;i++){
    const s=document.createElement("span");
    s.style.left=Math.random()*100+"vw";
    s.style.background=["#7dd3fc","#34d399","#a78bfa","#fbbf24"][i%4];
    c.appendChild(s);
  }
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),1200);
}

export function loadProgress(){
  return JSON.parse(localStorage.getItem(PROGRESS_KEY)||"{}");
}
export function saveProgress(p){
  localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));
}
