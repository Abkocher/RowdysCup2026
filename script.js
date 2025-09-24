// Sidebar Toggle
let sidebar = document.getElementById('sidebar');
let sidebarBottom = document.getElementById('sidebar-bottom');
let persistentOpenLeft = false;
let persistentOpenBottom = false;

document.getElementById('toggle-left').addEventListener('click', () => {
  persistentOpenLeft = !persistentOpenLeft;
  sidebar.classList.toggle('open', persistentOpenLeft);
  sidebar.classList.toggle('collapsed', !persistentOpenLeft);
});
document.getElementById('toggle-bottom').addEventListener('click', () => {
  persistentOpenBottom = !persistentOpenBottom;
  sidebarBottom.classList.toggle('open', persistentOpenBottom);
  sidebarBottom.classList.toggle('collapsed', !persistentOpenBottom);
});

// Mouseover Automatik
document.addEventListener('mousemove', function(e){
  if(!persistentOpenLeft){
    if(e.clientX <= 20){
      sidebar.classList.add('open');
      sidebar.classList.remove('collapsed');
    } else if(e.clientX > 220){
      sidebar.classList.remove('open');
      sidebar.classList.add('collapsed');
    }
  }
  if(!persistentOpenBottom){
    if(e.clientY >= window.innerHeight - 20){
      sidebarBottom.classList.add('open');
      sidebarBottom.classList.remove('collapsed');
    } else if(e.clientY < window.innerHeight - 140){
      sidebarBottom.classList.remove('open');
      sidebarBottom.classList.add('collapsed');
    }
  }
});

// Drag & Drop
document.querySelectorAll('#sidebar img').forEach(img => {
  img.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.src);
  });
});
function setupDrop(containerId, logoId){
  const container = document.getElementById(containerId);
  const logo = document.getElementById(logoId);
  container.addEventListener('dragover', e => e.preventDefault());
  container.addEventListener('drop', e => {
    e.preventDefault();
    const src = e.dataTransfer.getData('text/plain');
    if(src) logo.src = src;
  });
}
setupDrop('home-container','home-logo');
setupDrop('guest-container','guest-logo');

// Klick-Auswahl Sidebar → Dropdown
document.querySelectorAll('#sidebar img').forEach(img => {
  img.addEventListener('click', () => {
    if(document.querySelector(".logo-select.active")){
      let select = document.querySelector(".logo-select.active");
      if(select.id === "home-select") document.getElementById("home-logo").src = img.src;
      if(select.id === "guest-select") document.getElementById("guest-logo").src = img.src;
      document.querySelectorAll('.logo-select').forEach(b => b.classList.remove('active'));
    }
  });
});

// Dropdown Buttons aktivieren
document.querySelectorAll('.logo-select').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.logo-select').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('#sidebar-bottom button').forEach(b => b.classList.remove('active'));
  });
});

// Dropdown → Logo setzen
document.getElementById("home-select").addEventListener("change", function(){
  document.getElementById("home-logo").src = this.value;
  document.querySelectorAll('#sidebar-bottom button').forEach(b => b.classList.remove('active'));
});
document.getElementById("guest-select").addEventListener("change", function(){
  document.getElementById("guest-logo").src = this.value;
  document.querySelectorAll('#sidebar-bottom button').forEach(b => b.classList.remove('active'));
});

// Scores
const scores = { home: 0, guest: 0 };
function updateScore(target, y, elem){
  if(y < elem.clientHeight / 2) scores[target]++;
  else scores[target] = Math.max(0, scores[target]-1);
  const scoreElem = document.getElementById(target + '-score');
  scoreElem.textContent = scores[target];
  scoreElem.classList.add('animate');
  setTimeout(() => scoreElem.classList.remove('animate'), 300);
}
document.getElementById("home-score").addEventListener("click", e => {
  updateScore("home", e.offsetY, e.currentTarget);
});
document.getElementById("guest-score").addEventListener("click", e => {
  updateScore("guest", e.offsetY, e.currentTarget);
});

// Tastatursteuerung
document.addEventListener('keydown', function(e){
  switch(e.key){
    case '1': updateScore('home',0,document.getElementById('home-score')); break;
    case '4': updateScore('home',1000,document.getElementById('home-score')); break;
    case '2': updateScore('guest',0,document.getElementById('guest-score')); break;
    case '5': updateScore('guest',1000,document.getElementById('guest-score')); break;
  }
});

// Timer
let timerElement = document.getElementById("timer");
let duration = parseInt(document.getElementById("timeSelect").value);
let remaining = duration;
let timerInterval = null;

function updateTimer(){
  let minutes = Math.floor(remaining / 60);
  let seconds = remaining % 60;
  timerElement.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  let progress = (duration - remaining) / duration;
  document.querySelectorAll(".score").forEach(el => {
    el.style.setProperty("--progress", progress);
  });
}
function startTimer(){
  if(timerInterval) return;
  timerInterval = setInterval(() => {
    if(remaining > 0){
      remaining--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      timerElement.textContent = "Spielende";
      document.body.classList.add('blink');
    }
  },1000);
}
function pauseTimer(){
  clearInterval(timerInterval);
  timerInterval = null;
}
function resetTimer(){
  clearInterval(timerInterval);
  timerInterval = null;
  duration = parseInt(document.getElementById("timeSelect").value);
  remaining = duration;
  updateTimer();
  document.body.classList.remove('blink');
  // Punkte zurücksetzen
  scores.home = 0;
  scores.guest = 0;
  document.getElementById("home-score").textContent = scores.home;
  document.getElementById("guest-score").textContent = scores.guest;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("timeSelect").addEventListener("change", resetTimer);

updateTimer();
