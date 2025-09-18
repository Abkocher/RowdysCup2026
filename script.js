// Sidebar Toggle mit Button und Mouseover Automatik
let sidebar = document.getElementById('sidebar');
let persistentOpen = false;

document.getElementById('toggle').addEventListener('click', () => {
  persistentOpen = !persistentOpen;
  
  if (persistentOpen) {
    sidebar.classList.add('open');
    sidebar.classList.remove('collapsed');
  } else {
    sidebar.classList.remove('open');
    sidebar.classList.add('collapsed');
  }
});

document.addEventListener('mousemove', function(e) {
  if (!persistentOpen) {
    if (e.clientX <= 20) {
      sidebar.classList.add('open');
      sidebar.classList.remove('collapsed');
    } else if (e.clientX > 220) {
      sidebar.classList.remove('open');
      sidebar.classList.add('collapsed');
    }
  }
});

// Drag & Drop Logos
document.querySelectorAll('#sidebar img').forEach(img => {
  img.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
});
function setupDrop(containerId, logoId) {
  const container = document.getElementById(containerId);
  const logo = document.getElementById(logoId);
  container.addEventListener('dragover', e => e.preventDefault());
  container.addEventListener('drop', e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const dragged = document.getElementById(id);
    if (dragged) logo.src = dragged.src;
  });
}
setupDrop('home-container','home-logo');
setupDrop('guest-container','guest-logo');

// --- Klick-Auswahl für Logos ---
let selectedTeam = null;

// Buttons für "Logo wählen" (falls vorhanden)
document.querySelectorAll('.logo-select').forEach(btn => {
  btn.addEventListener('click', () => {
    // alle Buttons deaktivieren
    document.querySelectorAll('.logo-select').forEach(b => b.classList.remove('active'));

    // merken, für welches Team gerade gewählt wird
    selectedTeam = btn.dataset.team;
    btn.classList.add('active');
  });
});

// Klick auf Sidebar-Logo
document.querySelectorAll('#sidebar img').forEach(img => {
  img.addEventListener('click', () => {
    if (selectedTeam) {
      // gezieltes Logo setzen
      const logoElem = document.getElementById(selectedTeam + '-logo');
      if (logoElem) logoElem.src = img.src;

      // Auswahl zurücksetzen
      document.querySelectorAll('.logo-select').forEach(b => b.classList.remove('active'));
      selectedTeam = null;
    }
  });
});

// Dropdown → Logo setzen
document.getElementById("home-select").addEventListener("change", function() {
  document.getElementById("home-logo").src = this.value;
});
document.getElementById("guest-select").addEventListener("change", function() {
  document.getElementById("guest-logo").src = this.value;
});

// Scores
const scores = { home: 0, guest: 0 };
function updateScore(target, y, elem) {
  if (y < elem.clientHeight / 2) {
    scores[target]++;
  } else {
    scores[target] = Math.max(0, scores[target] - 1);
  }
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

// Tastatursteuerung für Punkte
document.addEventListener('keydown', function(e) {
  switch (e.key) {
    case '1': updateScore('home', 0, document.getElementById('home-score')); break;
    case '4': updateScore('home', 1000, document.getElementById('home-score')); break;
    case '2': updateScore('guest', 0, document.getElementById('guest-score')); break;
    case '5': updateScore('guest', 1000, document.getElementById('guest-score')); break;
  }
});

// Timer
let timerElement = document.getElementById("timer");
let duration = parseInt(document.getElementById("timeSelect").value);
let remaining = duration;
let timerInterval = null;

function updateTimer() {
  let minutes = Math.floor(remaining / 60);
  let seconds = remaining % 60;
  timerElement.textContent =
    `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

  let progress = (duration - remaining) / duration;
  document.querySelectorAll(".score").forEach(el => {
    el.style.setProperty("--progress", progress);
  });
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (remaining > 0) {
      remaining--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      timerElement.textContent = "Spielende";
      document.body.classList.add('blink');
    }
  }, 1000);
}
function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  duration = parseInt(document.getElementById("timeSelect").value);
  remaining = duration;
  updateTimer();
  document.body.classList.remove('blink');
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("timeSelect").addEventListener("change", resetTimer);

updateTimer();
