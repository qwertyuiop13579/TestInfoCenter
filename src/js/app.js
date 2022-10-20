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
});


// Select
var x, i, j, l, ll, selElmnt, a, b, c, img;
/* Look for any elements with the class "custom-select": */
x = document.querySelector(".form__select");
l = x.length;
selElmnt = x.getElementsByTagName("select")[0];
img = x.querySelector(".form__arrow");
ll = selElmnt.length;
/* For each element, create a new DIV that will act as the selected item: */
a = document.createElement("DIV");
a.setAttribute("class", "select-selected");
a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
x.appendChild(a);
/* For each element, create a new DIV that will contain the option list: */
b = document.createElement("DIV");
b.setAttribute("class", "select-items select-hide");
for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                    y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
            }
        }
        h.click();
    });
    b.appendChild(c);
}
x.appendChild(b);
a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    if (this.classList.contains("select-active")) {
        this.classList.remove("select-active");
        img.src = "../img/order/arrow.svg";
    }
    else {
        this.classList.add("select-active");
        img.src = "../img/order/arrow-reverse.svg";
    }
});


function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
