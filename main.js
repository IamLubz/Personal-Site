const timeEl = document.getElementById('time');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

function tick() {
  timeEl.textContent = new Date().toLocaleTimeString('nl-NL', {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    timeZone: 'Europe/Amsterdam'
  });
}

tick();
setInterval(tick, 1000);
