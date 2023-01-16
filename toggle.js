var toggle = document.getElementById('toggle-container');
var body = document.querySelector('*');
var logo = document.querySelector('.volcan');
var toggleLogo = document.querySelector('.toggle');

toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    logo.classList.toggle('active');
    toggleLogo.classList.toggle('active');
}