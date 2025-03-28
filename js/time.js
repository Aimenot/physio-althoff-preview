function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('de-DE');
    document.getElementById('clock').textContent = time;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // Initialer Aufruf
  