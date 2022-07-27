"use strict";

// Fechando o menu hamburguer quando um link é clicado
var hamburguerMenu = document.querySelector('#check');
var navLinks = document.querySelectorAll('.header__menu__item');

for (var link = 0; link < navLinks.length; link++) {
  navLinks[link].onclick = function () {
    hamburguerMenu.click();
  };
} // fechando o menu hamburguer quando a página é scrollada


document.addEventListener('scroll', function () {
  hamburguerMenu.checked = false;
});