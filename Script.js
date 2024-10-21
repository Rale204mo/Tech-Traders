// Get references to the menu and button
const menu = document.getElementById('sidemenu');
const menuBtn = document.getElementById('menuBtn');

// Add event listener to toggle the menu
menuBtn.addEventListener('click', function() {
    menu.classList.toggle('open'); // This will open/close the menu
});