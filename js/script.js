const menuHamburger = document.querySelector('#menu-hamburger');
const listaHamburger = document.querySelector('#lista-menu');

menuHamburger.addEventListener('click', () => {
    listaHamburger.classList.toggle('active');
});
