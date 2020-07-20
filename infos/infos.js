let infos = document.querySelector('#infos');
let buttons = document.querySelectorAll('button');


//ANIMATION LOAD


setTimeout(function() {
    infos.classList.add('load')
}, 0001)





// TOGGLE OPEN MAP

function linkToggle(element) {
    element.parentNode.classList.add('open');
    displayLinkToggle(element);
    setTimeout(function() {
        element.parentNode.classList.remove('open');
        displayLinkToggle(element);
    }, 1000);
}

function displayLinkToggle(element) {
    if (element.parentNode.classList.contains('open')) {
        element.querySelector('a').innerHTML = `<img src="images/${element.dataset.open}.png" alt="adresseIcone">`;
    } else {
        element.querySelector('a').innerHTML = `<img src="images/${element.dataset.close}.png" alt="adresseIcone">`;
    };
}


function toggleOpen(element) {
    element.parentNode.classList.toggle('open');
    displayToggle(element);
}

function displayToggle(element) {
    if (element.parentNode.classList.contains('open')) {
        element.innerHTML = `<img src="images/${element.dataset.open}.png" alt="adresseIcone">`;
    } else {
        element.innerHTML = `<img src="images/${element.dataset.close}.png" alt="adresseIcone">`;
    };
}

buttons.forEach(button => {
    button.addEventListener('click', function() {

        if (this.parentNode.classList.contains('link')) {
            linkToggle(this);
        } else {
            toggleOpen(this);
        }
    })
})