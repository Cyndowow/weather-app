(()=>{function t(t,e,n,c,d,a){const o=document.getElementById("content");o.innerHTML="";const s=document.createElement("div"),i=document.createElement("p"),l=document.createElement("img");l.classList.add("img"),s.classList.add("top"),i.classList.add("name"),i.textContent=t,l.src=`https://${a.slice(2)}`,s.appendChild(i),s.appendChild(l);const r=document.createElement("div");r.classList.add("mid"),r.textContent=d;const m=document.createElement("div");m.classList.add("data");const p=document.createElement("div");p.classList.add("temperatures");const u=document.createElement("div"),h=document.createElement("p");h.classList.add("temp_c_text"),h.textContent="Temperature:";const C=document.createElement("p");C.classList.add("temp_c"),C.textContent=n,u.appendChild(h),u.appendChild(C);const f=document.createElement("div");f.classList.add("temp_felt_container");const E=document.createElement("p");E.classList.add("temp_felt_text"),E.textContent="Felt Temperature:";const L=document.createElement("p");L.classList.add("temp_felt"),L.textContent=c,f.appendChild(E),f.appendChild(L);const _=document.createElement("div");_.classList.add("bottom"),_.textContent=e,p.appendChild(u),p.appendChild(f),m.appendChild(p),m.appendChild(_),o.appendChild(s),o.appendChild(r),o.appendChild(m)}document.getElementById("submit").addEventListener("click",(async function(e){try{e=function(){const t=document.getElementById("search"),e=t.value;if(""!==e)return e;alert("Enter a location!"),t.value=""}();const n=await fetch(`https://api.weatherapi.com/v1/current.json?key=b17e082a2d9f4fffad193156232104&q=${e}`,{mode:"cors"}),c=await n.json(),d=c.location.name,a=c.current.last_updated,o=c.current.temp_c,s=c.current.feelslike_c,i=c.current.condition.text,l=c.current.condition.icon;console.log(c),t(d,a,o,s,i,l)}catch(t){console.log(t)}})),window.addEventListener("DOMContentLoaded",async function(){const e=await fetch("https://api.weatherapi.com/v1/current.json?key=b17e082a2d9f4fffad193156232104&q=berlin",{mode:"cors"}),n=await e.json();t(n.location.name,n.current.last_updated,n.current.temp_c,n.current.feelslike_c,n.current.condition.text,n.current.condition.icon)}())})();