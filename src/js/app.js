// Burger icon menu
const iconMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        iconMenu.classList.toggle('opened');
        menu.classList.toggle('opened');
    });
}

// Slider value
var slider = document.getElementById("range__input");
var output = document.getElementById("range__value");
output.innerHTML = slider.value + "%";

slider.oninput = function () {
    output.innerHTML = this.value + "%";
}


// Submitting form
var form = document.querySelector(".order__form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Submit form');
    alert('Submit form');
})
