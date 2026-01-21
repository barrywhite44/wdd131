// scripts/temples.js
const hambutton = document.querySelector('#navBtn');
const navLinks = document.querySelector('#nav');
hambutton.addEventListener('click', () => {navLinks.classList.toggle('active')});
  // Footer updates
let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

