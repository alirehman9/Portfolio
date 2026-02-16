// Simple smooth scroll effect
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        alert("Section coming soon!");
    });
});
