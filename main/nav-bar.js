document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const serviciosContainer = document.querySelector('.servicios-container');
    const closeMenu = document.querySelector('.close-menu');
    const menuLinks = document.querySelectorAll('.servicios-container a');

    hamburgerMenu.addEventListener('click', function() {
        serviciosContainer.classList.toggle('active');
    });

    closeMenu.addEventListener('click', function() {
        serviciosContainer.classList.remove('active');
    });

    // Cerrar el menú cuando se haga clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            serviciosContainer.classList.remove('active');
        });
    });
});
