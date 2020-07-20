let btnMenu = document.querySelector('.menuBtn');
let menu = document.querySelector('.menu');
let roundNav = document.querySelector('#roundNav');




/* ROUND NAV */


btnMenu.addEventListener('click', function() {
    menu.classList.toggle('opMenu');
    btnMenu.classList.toggle('opMenu');
    roundNav.classList.toggle('opMenu');
})



/*CURENT PAGE CURRENT ICONE */
function curentIcon() {

    let name = window.location.href;
    let liens = document.querySelectorAll('.menu a');

    liens.forEach(lien => {
        if (lien.href === name) {
            lien.querySelector('img.noCurent').classList.add('curentI');
        }
    });

}

window.addEventListener('hashchange', curentIcon);
curentIcon();