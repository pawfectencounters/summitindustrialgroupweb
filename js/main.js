/* Summit Industrial Group — Main JavaScript
   Language switching, form validation, smooth scroll
*/

'use strict';

let lang='en';
function setLang(l){
  lang=l;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.lang-btn').forEach(b=>{ if(b.getAttribute('onclick')===`setLang('${l}')`) b.classList.add('active'); });
  document.querySelectorAll('[data-en]').forEach(el=>{
    const val=el.getAttribute('data-'+l);
    if(!val)return;
    if(el.tagName==='INPUT'||el.tagName==='TEXTAREA')return;
    if(val.includes('<'))el.innerHTML=val;
    else el.textContent=val;
  });
  document.querySelectorAll('select option[data-en]').forEach(o=>{
    o.textContent=o.getAttribute('data-'+l)||o.getAttribute('data-en');
  });
  document.getElementById('details').placeholder=l==='zh'
    ?'请描述您的仓库情况、现有设施以及希望达到的目标...'
    :l==='es'
    ?'Cuéntenos sobre su almacén, la configuración actual y lo que desea lograr...'
    :'Tell us about your warehouse and what you want to achieve...';
}
function submitForm(){
  const req=['fname','lname','email','company','service'];
  let ok=true;
  req.forEach(id=>{const el=document.getElementById(id);if(!el.value.trim()){el.style.borderColor='#c0392b';ok=false;}else el.style.borderColor='';});
  if(!ok)return;
  document.getElementById('form-fields').style.display='none';
  document.getElementById('form-ok').classList.add('show');
}
document.querySelectorAll('a[href^