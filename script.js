// Start menu functionality
const startBtn = document.getElementById('startBtn');
const startMenu = document.getElementById('startMenu');
let isStartMenuOpen = false;

startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleStartMenu();
});

function toggleStartMenu() {
    isStartMenuOpen = !isStartMenuOpen;
    if (isStartMenuOpen) {
        startMenu.classList.add('show');
        startBtn.classList.add('active');
    } else {
        startMenu.classList.remove('show');
        startBtn.classList.remove('active');
    }
}

// Close start menu when clicking outside
document.addEventListener('click', (e) => {
    if (isStartMenuOpen && !startMenu.contains(e.target) && e.target !== startBtn) {
        toggleStartMenu();
    }
});

// Prevent start menu from closing when clicking inside
startMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Update clock
function updateClock() {
    const now = new Date();
    
    // Format time
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const timeString = `${hours}:${minutes} ${ampm}`;
    
    // Format date
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    const dateString = `${month}/${day}/${year}`;
    
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);

// App tile interactions
const appTiles = document.querySelectorAll('.app-tile');
appTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        const appName = tile.querySelector('span').textContent;
        console.log(`Opening ${appName}...`);
        // In a real implementation, this would open the actual app
    });
});

// Power button functionality
const powerButton = document.querySelector('.power-button');
powerButton.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Power menu clicked');
    // In a real implementation, this would show power options
});

// User profile functionality
const userProfile = document.querySelector('.user-profile');
userProfile.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('User profile clicked');
    // In a real implementation, this would show user options
});

// Search box functionality
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    console.log(`Searching for: ${searchTerm}`);
    // In a real implementation, this would filter the apps
});

// Taskbar app interactions
const taskbarApps = document.querySelectorAll('.taskbar-app');
taskbarApps.forEach(app => {
    app.addEventListener('click', () => {
        console.log('Taskbar app clicked');
        // In a real implementation, this would open or focus the app window
    });
});

// System tray interactions
const trayIcons = document.querySelectorAll('.tray-icon');
trayIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        console.log('Tray icon clicked');
        // In a real implementation, this would show quick settings or notifications
    });
});

// Date/time click functionality
const datetime = document.querySelector('.datetime');
datetime.addEventListener('click', () => {
    console.log('Date/time clicked');
    // In a real implementation, this would show calendar and notifications
});
