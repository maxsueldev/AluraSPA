const menuHamburger = document.querySelector('#menu-hamburger');
const listaHamburger = document.querySelector('#lista-menu');

menuHamburger.addEventListener('click', () => {
    listaHamburger.classList.toggle('active');
    const isActive = listaHamburger.classList.contains('active');

    menuHamburger.classList = isActive ? 'fas fa-times fa-lg hamburger' : 'fas fa-bars fa-lg hamburger';
});
