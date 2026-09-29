/* Aviso de Upwork que aparece al 20% de lectura en todas las paginas.
   Sale una vez por visita, se cierra con la X y se esconde solo cuando ya se ve
   un bloque de contratacion de la pagina (.dcta o #contacto). */
(function(){
  var TXT={
    es:{k:"// contrátame",t:"¿Quieres algo así en tu empresa?",p:"Contrátame o escríbeme por Upwork. El pago queda protegido para los dos.",b:"Ver mi perfil en Upwork →",x:"Cerrar"},
    en:{k:"// hire me",t:"Want something like this for your company?",p:"Hire me or message me through Upwork. Payment stays protected for both of us.",b:"View my Upwork profile →",x:"Close"}
  };
  var CSS=".upPop{position:fixed;right:22px;bottom:22px;z-index:9999;max-width:340px;background:var(--panel,#fff);color:var(--fg,#191712);border:1px solid var(--line,rgba(20,18,15,.15));border-left:3px solid var(--accent,#ff5c35);border-radius:14px;padding:1.1rem 1.2rem 1.15rem;box-shadow:0 14px 40px rgba(0,0,0,.18);opacity:0;transform:translateY(16px);pointer-events:none;transition:opacity .35s,transform .35s;text-align:left}"
   +".upPop.on{opacity:1;transform:none;pointer-events:auto}"
   +".upPopK{font-family:'JetBrains Mono',monospace;font-size:.72rem;color:var(--accent,#ff5c35);letter-spacing:.3px;margin-bottom:.35rem}"
   +".upPopT{font-size:1.02rem;font-weight:600;line-height:1.35;margin:0 1.4rem .45rem 0}"
   +".upPopP{font-size:.86rem;line-height:1.5;color:var(--dim,#6b675e);margin:0 0 .85rem}"
   +".upPopB{display:inline-block;background:var(--accent,#ff5c35);color:var(--btnfg,#0b0b0d);font-size:.86rem;font-weight:500;padding:.55rem .9rem;border-radius:8px;text-decoration:none}"
   +".upPopX{position:absolute;top:.55rem;right:.6rem;background:none;border:0;color:var(--dim,#6b675e);font-size:1rem;cursor:pointer;padding:.25rem .4rem;line-height:1}"
   +".upPopX:hover{color:var(--accent,#ff5c35)}"
   +"@media (max-width:640px){.upPop{left:12px;right:12px;bottom:12px;max-width:none}}";
  var visto=false;
  try{visto=sessionStorage.getItem("upPop")==="1";}catch(e){}
  if(visto)return;
  var pop=null;
  function idioma(){try{if(localStorage.getItem("ap-lang")==="en")return "en";}catch(e){}return "es";}
  function crear(){
    var host=document.querySelector(".site");
    if(!host)return null;
    var st=document.createElement("style");st.textContent=CSS;document.head.appendChild(st);
    var T=TXT[idioma()];
    var d=document.createElement("div");d.className="upPop";d.setAttribute("role","dialog");d.setAttribute("aria-label","Upwork");
    d.innerHTML='<button class="upPopX" type="button" aria-label="'+T.x+'">✕</button><div class="upPopK">'+T.k+'</div><p class="upPopT">'+T.t+'</p><p class="upPopP">'+T.p+'</p><a class="upPopB" href="https://www.upwork.com/freelancers/agustinperalta" target="_blank" rel="noopener" data-umami-event="upwork-popup">'+T.b+'</a>';
    d.querySelector(".upPopX").addEventListener("click",function(){d.classList.remove("on");removeEventListener("scroll",revisar);});
    host.appendChild(d);
    return d;
  }
  function ctaVisible(){
    var els=document.querySelectorAll(".dcta, #contacto");
    for(var i=0;i<els.length;i++){var r=els[i].getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)return true;}
    return false;
  }
  var mostrado=false;
  function revisar(){
    var alto=document.documentElement.scrollHeight-innerHeight;
    var avance=alto>0?scrollY/alto:0;
    if(!mostrado&&avance>=0.2&&!ctaVisible()){
      pop=pop||crear();if(!pop)return;
      pop.classList.add("on");mostrado=true;
      try{sessionStorage.setItem("upPop","1");}catch(e){}
    }
    if(pop&&pop.classList.contains("on")&&ctaVisible())pop.classList.remove("on");
  }
  addEventListener("scroll",revisar,{passive:true});
})();
