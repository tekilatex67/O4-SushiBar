let rollstype = document.querySelectorAll('.rollstype a');
let linkActif = document.querySelector('.rollstype .index a');
let liens = document.querySelectorAll('.rollstype li');

// POUR GERER LES OVERFLOW AU RECHARGEMENT DE LA PAGE
window.addEventListener('DOMContentLoaded', function() {
    liens.forEach(lien => {
        if (!lien.classList.contains('index') && !lien.firstElementChild.classList.contains('overlayBlackGradient')) {
            lien.firstElementChild.classList.add('overlayBlackGradient');

        } else if (lien.classList.contains('index') && lien.firstElementChild.classList.contains('overlayBlackGradient')) {
            lien.firstElementChild.classList.remove('overlayBlackGradient');
        }
    });
})

//FONCTION ONGLET
function displayTabs(a) {
    linkActif = a;
    let indexOnglet = document.querySelector('.rolls-content.index');
    let rollsIndex = document.querySelector('.rollstype .index')
    let toDisplay = document.querySelector(a.getAttribute('href'));
    let li = a.parentNode



    linkActif.classList.remove('overlayBlackGradient');
    indexOnglet.classList.remove('index');
    toDisplay.classList.add('index');
    rollsIndex.classList.remove('index');
    li.classList.add('index');


}

rollstype.forEach(onglet => onglet.addEventListener('click', function() {
    linkActif.classList.add('overlayBlackGradient');
    displayTabs(this);
    console.log(this);
}))


// CHANGE HASH


function changeHash(e) {
    let hash = window.location.hash;
    let a = document.querySelector('.rollstype a[href="' + hash + '"]');

    if (a != null && !a.parentNode.classList.contains('index')) {
        displayTabs(a);
    }

}

window.addEventListener('hashchange', changeHash);


changeHash();