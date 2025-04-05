 function updateDateTime() {
    const now = new Date();
    
    const dateOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };

    document.getElementById('current-date').textContent = now.toLocaleDateString('en-IN', dateOptions);
    document.getElementById('current-time').textContent = now.toLocaleTimeString('en-IN', timeOptions);
  }

  setInterval(updateDateTime, 1000); // Update every second
  updateDateTime(); 