// Burger icom menu
const iconMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        iconMenu.classList.toggle('opened');
        menu.classList.toggle('opened');
    });

}