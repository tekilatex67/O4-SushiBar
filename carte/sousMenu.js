let tabs = document.querySelectorAll('.tabs a');
let liActif = document.querySelector('.tabs .active a');
let cpt = 0


//Changer le LI TAB
tabs.forEach(tab => tab.addEventListener('click', function() {

    tabs[cpt].parentNode.classList.remove('active');
    liActif.parentNode.classList.remove('active');

    if (tab.classList.contains('fleche_G')) {
        if (cpt <= 0) return;
        cpt -= 1;
    }
    if (tab.classList.contains('fleche_D')) {
        if (cpt >= tabs.length - 1) return;
        cpt += 1;
    }
    tabs[cpt].parentNode.classList.add('active');
}));


//AFFICHER CONTENU ONGLET

function afficherOnglet(a) {
    let activeTab = document.querySelector('.tab-content.active');
    let aAfficher = document.querySelector(a.getAttribute('href'));
    let li = a.parentNode;

    activeTab.classList.remove('active');
    aAfficher.classList.add('active')

}


tabs.forEach(tab => tab.addEventListener('click', function(a) {
    afficherOnglet(this)
}))



//Recuperer le HASH

function changeHash(e) {
    let hash = window.location.hash;
    let a = document.querySelector('a[href="' + hash + '"]');

    if (a != null && !a.parentNode.classList.contains('active')) {
        afficherOnglet(a);
    }
}