let sidebarBottom = document.getElementById('sidebar-bottom');
let persistentOpenBottom = false;
document.getElementById('toggle-bottom').addEventListener('click',()=>{
  persistentOpenBottom=!persistentOpenBottom; sidebarBottom.classList.toggle('open',persistentOpenBottom); sidebarBottom.classList.toggle('collapsed',!persistentOpenBottom);
});
document.addEventListener('mousemove', e => {
  if(!persistentOpenBottom){
    if(e.clientY >= window.innerHeight-20){ sidebarBottom.classList.add('open'); sidebarBottom.classList.remove('collapsed'); }
    else if(e.clientY < window.innerHeight-80){ sidebarBottom.classList.remove('open'); sidebarBottom.classList.add('collapsed'); }
  }
});
document.getElementById("home-select").addEventListener("change", function(){ document.getElementById("home-logo").src=this.value; });
document.getElementById("guest-select").addEventListener("change", function(){ document.getElementById("guest-logo").src=this.value; });

const scores = {home:0, guest:0};
function updateScore(target, y, elem){
  if(y < elem.clientHeight/2) scores[target]++;
  else scores[target] = Math.max(0,scores[target]-1);
  const scoreElem = document.getElementById(target+'-score');
  scoreElem.textContent = scores[target];
  scoreElem.classList.add('animate');
  setTimeout(()=>scoreElem.classList.remove('animate'),300);
}
document.getElementById("home-score").addEventListener("click", e=>updateScore("home", e.offsetY, e.currentTarget));
document.getElementById("guest-score").addEventListener("click", e=>updateScore("guest", e.offsetY, e.currentTarget));
document.addEventListener('keydown', e=>{
  switch(e.key){
    case '1': updateScore('home',0,document.getElementById('home-score')); break;
    case '4': updateScore('home',1000,document.getElementById('home-score')); break;
    case '2': updateScore('guest',0,document.getElementById('guest-score')); break;
    case '5': updateScore('guest',1000,document.getElementById('guest-score')); break;
  }
});

let timerElement = document.getElementById("timer");
let duration = parseInt(document.getElementById("timeSelect").value);
let remaining = duration;
let timerInterval = null;
function updateTimer(){
  let minutes = Math.floor(remaining/60);
  let seconds = remaining%60;
  timerElement.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  let progress = (duration - remaining)/duration;
  document.querySelectorAll(".score").forEach(el=>{ el.style.setProperty("--progress",progress); });
}
function startTimer(){ if(timerInterval) return;
  timerInterval = setInterval(()=>{
    if(remaining>0){ remaining--; updateTimer(); }
    else{ clearInterval(timerInterval); timerInterval=null; timerElement.textContent="Spielende"; document.body.classList.add('blink'); }
  },1000);
}
function pauseTimer(){ clearInterval(timerInterval); timerInterval=null; }
function resetTimer(){ clearInterval(timerInterval); timerInterval=null;
  duration=parseInt(document.getElementById("timeSelect").value);
  remaining=duration; updateTimer(); document.body.classList.remove('blink');
  scores.home=0; scores.guest=0;
  document.getElementById("home-score").textContent=scores.home;
  document.getElementById("guest-score").textContent=scores.guest;
}
document.getElementById("start").addEventListener("click",startTimer);
document.getElementById("pause").addEventListener("click",pauseTimer);
document.getElementById("reset").addEventListener("click",resetTimer);
document.getElementById("timeSelect").addEventListener("change",resetTimer);
updateTimer();
