function updateClock() {
    const now = new Date();

    const dayName = now.toLocaleString('default', { weekday: 'long' });
    const month = now.toLocaleString('default', { month: 'long' });
    const dayNum = now.getDate();
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const period = hour >= 12 ? 'PM' : 'AM';

    // Format hours to 12-hour format
    const hour12 = hour % 12 || 12;

    // Update HTML elements
    document.getElementById('dayname').textContent = dayName;
    document.getElementById('month').textContent = month;
    document.getElementById('daynum').textContent = dayNum;
    document.getElementById('year').textContent = year;
    document.getElementById('hour').textContent = String(hour12).padStart(2, '0');
    document.getElementById('minute').textContent = String(minute).padStart(2, '0');
    document.getElementById('second').textContent = String(second).padStart(2, '0');
    document.getElementById('period').textContent = period;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
