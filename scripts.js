
const button = document.querySelector(".img_menu_desplegable");

const menu = document.querySelector(".menu_flex");

addEventListener('load', (e) => {
    if (e.currentTarget.innerWidth < 991) {
        menu.classList.replace('visible', 'invisible');
    }
})

addEventListener('resize', (e) => {
    if (e.currentTarget.innerWidth < 991) {
        menu.classList.replace('visible', 'invisible');
    }
    if (e.target.innerWidth > 991) {
        menu.classList.replace('invisible', 'visible');
    }
})

button.addEventListener("click", () => {
    if (menu.classList.contains('invisible')) {
        menu.classList.replace('invisible', 'visible');
    } else if (menu.classList.contains('visible')) {
        menu.classList.replace('visible', 'invisible');
    }
})

const nombre = document.getElementById('nombre');

nombre.textContent = '<Mateo Buena/>';
