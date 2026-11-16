(function(){var l='uz';try{l=localStorage.getItem('nokk_lang')||((navigator.language||'').startsWith('ru')?'ru':'uz')}catch(e){}
if(location.hash==='#ru'||location.hash==='#uz')l=location.hash.slice(1);
function set(x){document.body.className=x;document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.set===x)});try{localStorage.setItem('nokk_lang',x)}catch(e){}}
document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('.lang button').forEach(function(b){b.onclick=function(){set(b.dataset.set)}});set(l)})})();
