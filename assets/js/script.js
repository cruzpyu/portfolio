// Fechando o menu hamburguer quando um link é clicado
const hamburguerMenu = document.querySelector('#check');
const navLinks = document.querySelectorAll('.header__menu__item');

for (let link = 0; link < navLinks.length; link++) {
    navLinks[link].onclick = () => {
        hamburguerMenu.click();
    }
}
// fechando o menu hamburguer quando a página é scrollada
document.addEventListener('scroll', () => {
    hamburguerMenu.checked = false;
});