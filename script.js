// Random locatie voor de email input
setInterval(() => {
    const emailInput = document.querySelector('.input-email');
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    emailInput.style.left = randomX + "px";
    emailInput.style.top = randomY + "px";
}, 250);

// Random locatie voor de wachtwoord input
setInterval(() => {
    const passwordInput = document.querySelector('.input-password');
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    passwordInput.style.left = randomX + "px";
    passwordInput.style.top = randomY + "px";
}, 250);

// Random locatie voor de login en logout knoppen
setInterval(() => {
    const loginButton = document.querySelector('.login-button');
    const logoutButton = document.querySelector('.logout-button');
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    loginButton.style.left = randomX + "px";
    loginButton.style.top = randomY + "px";
    logoutButton.style.left = randomX + "px";
    logoutButton.style.top = randomY + "px";
}, 250);

// Functie om de pop-up elke 3 seconden te laten verschijnen
function showPopup() {
    const randomPopup = Math.random() > 0.5 ? 'login' : 'logout'; // Willekeurig kiezen tussen 'login' of 'logout'
    const popup = document.getElementById(`popup-${randomPopup}`);
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000); // Pop-up blijft 3 seconden zichtbaar
}

// Start de pop-up om de 3 seconden
setInterval(showPopup, 3000);

// Functie voor de Oops! banner om elke 3 seconden te verschijnen
function showOopsBanner() {
    const banner = document.getElementById('oops-banner');
    banner.style.display = 'block';
    setTimeout(() => {
        banner.style.display = 'none';
    }, 3000); // Banner blijft 3 seconden zichtbaar
}

// Start de Oops! banner om de 3 seconden
setInterval(showOopsBanner, 3000);
