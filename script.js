const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const discordLogo = document.getElementById('discord-logo');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

discordLogo.addEventListener('click', (e) => {
    e.stopPropagation();
});
