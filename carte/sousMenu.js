let tabs = document.querySelectorAll('.tabs a');
let li = document.querySelectorAll('.tabs li');
let liActif = document.querySelector('.tabs .active a');
let cpt = 0;

history.replaceState(null, null, ' '); //Suprime le Hash au refresh de la page

//Changer le LI TAB

tabs.forEach(tab => tab.addEventListener('click', function() {

    tabs[cpt].parentNode.classList.remove('active');
    liActif.parentNode.classList.remove('active');


    if (tab.classList.contains('fleche_G')) {
        if (cpt <= 0) return;
        cpt -= 1;
    }
    if (tab.classList.contains('fleche_D')) {
        if (cpt >= (tabs.length - 1)) return;
        cpt += 1;
    }

    li[cpt].classList.add('active');

}));


//AFFICHER CONTENU ONGLET

function afficherOnglet(a) {
    liActif = document.querySelector('.tabs .active a');
    let activeTab = document.querySelector('.tab-content.active');
    let aAfficher = document.querySelector(a.getAttribute('href'));
    let li = aAfficher.parentNode;

    activeTab.classList.remove('active');
    aAfficher.classList.add('active');


}


tabs.forEach(tab => tab.addEventListener('click', function() {

    afficherOnglet(this)

}))