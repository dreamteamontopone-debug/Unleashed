// MENU LIST FOR MOBILE  | BORGER MENU STAYL
document.querySelectorAll('.navlinksH').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false; 
    });
});