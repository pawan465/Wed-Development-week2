// Find the clock display on the page.
const clock = document.getElementById('clock');

// Get the current time and show hours, minutes, and seconds.
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Show the time immediately, then update it every second.
updateClock();
setInterval(updateClock, 1000);
