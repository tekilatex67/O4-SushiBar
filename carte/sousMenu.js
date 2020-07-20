//ONGLETS
let tabs = document.querySelectorAll('.tabs a');
let li = document.querySelectorAll('.tabs li');
let liActif = document.querySelector('.tabs .active a');
let elementsActif = document.querySelectorAll('.active');
let cpt = 0;

function timerIn(element) {
    setTimeout(function() {
        element.classList.add('in');
    }, 0100);
}

//SUPLEMENTS ET PLATEAUX CONTENT
let supplements = document.querySelectorAll('.supplements');
let sticky = document.querySelectorAll('[data-sticky]');
let plateaux = document.querySelectorAll('.plateauContent');



//APPARITION DES ELEMENTS ACTIFS

window.addEventListener("DOMContentLoaded", function() {
    elementsActif.forEach(el => timerIn(el));
})


//ONGLETS
history.replaceState(null, null, ' '); //Suprime le Hash au refresh de la page

//Changer le LI TAB

tabs.forEach(tab => tab.addEventListener('click', function() {

    tabs[cpt].parentNode.classList.remove('active');
    liActif.parentNode.classList.remove('active');
    tabs[cpt].parentNode.classList.remove('in');
    liActif.parentNode.classList.remove('in');


    if (tab.classList.contains('fleche_G')) {
        if (cpt <= 0) return;
        cpt -= 1;
    }
    if (tab.classList.contains('fleche_D')) {
        if (cpt >= (tabs.length - 1)) return;
        cpt += 1;
    }


    li[cpt].classList.add('active');
    timerIn(li[cpt])
}));


//AFFICHER CONTENU ONGLET

function afficherOnglet(a) {
    liActif = document.querySelector('.tabs .active a');
    let activeTab = document.querySelector('.tab-content.active');
    let aAfficher = document.querySelector(a.getAttribute('href'));
    let li = aAfficher.parentNode;

    activeTab.classList.remove('active');
    activeTab.classList.remove('in');
    aAfficher.classList.add('active');

    timerIn(aAfficher)
}


tabs.forEach(tab => tab.addEventListener('click', function() {

    afficherOnglet(this)

}))

// SUPPLEMENTS ------------------------------------




//toggle open
function toggleSuplements(e) {
    let contenue = this.querySelectorAll('.plus li');

    this.classList.toggle('open');

    if (this.classList.contains('open') && this.classList.contains('supplements')) {
        this.querySelector('span').innerHTML = "\u25b3";

    } else if (!this.classList.contains('open') && this.classList.contains('supplements')) {
        this.querySelector('span').innerHTML = "\u25bd";
    }

    // apparition contenue (plateaux)
    if (this.classList.contains('open') && this.classList.contains('plateauContent')) {
        setTimeout(function() {
            contenue.forEach(item => {
                item.style.whiteSpace = "normal"
            });
        }, 300);
    } else if (!this.classList.contains('open') && this.classList.contains('plateauContent')) {
        contenue.forEach(item => {
            item.style.whiteSpace = "nowrap"
        });
    }
}

supplements.forEach(sup => sup.addEventListener('click', toggleSuplements));
plateaux.forEach(plate => plate.addEventListener('click', toggleSuplements));




//sticky
function makeSticky(element) {


    let rec = element.getBoundingClientRect()
    let positionTop = rec.top + scrollY
    let offset = parseInt(element.getAttribute('data-offset'));

    let gosthElement = document.createElement('div');
    gosthElement.style.height = rec.height + ('px');
    gosthElement.style.width = rec.width + ('px');



    function onScroll() {


        if (scrollY > positionTop - offset && element.style.position != 'fixed' && element.parentNode.classList.contains('active')) {

            element.style.position = 'fixed';
            element.style.top = offset + 'px';
            element.style.bottom = "auto";
            element.style.width = '60%';
            element.parentNode.insertBefore(gosthElement, element); // On insert le faux div

        } else if (scrollY < positionTop - offset && element.style.position != 'static' && element.parentNode.classList.contains('active')) {

            element.style.position = 'static';
            if (element.parentNode.contains(gosthElement)) {
                element.parentNode.removeChild(gosthElement) //On retire le faux div
            }
        }
    }

    function onResize() {

        element.style.width = "60%";
        element.style.position = "static";
        gosthElement.style.display = "none";

        //On re-calcule
        rec = element.getBoundingClientRect();
        positionTop = rec.top + scrollY;
        gosthElement.style.height = rec.height + ('px');
        gosthElement.style.width = rec.width + ('px');
        gosthElement.style.display = "block";
        onScroll();

    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener("DOMContentLoaded", onScroll);
    window.addEventListener('resize', onResize);
    window.addEventListener('hashchange', onResize);

}




for (let i = 0; i < sticky.length; i++) {
    makeSticky(sticky[i]);
}