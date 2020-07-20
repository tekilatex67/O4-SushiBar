let linkActif = document.querySelector('.rollstype .index');
let liens = document.querySelectorAll('.rollstype li');
let articles = document.querySelectorAll('article.rolls-content');
let artActif = document.querySelector('article.rolls-content.index');

function timerIn(element) {
    setTimeout(function() {
        element.classList.add('in');
    }, 0100);
}
timerIn(artActif);


function toggleList() {
    let id = this.getAttribute("id");
    let imgActif = document.querySelector('.rollstype li.index');
    artActif = document.querySelector('article.rolls-content.index');

    if (this.classList.contains('index')) return;
    imgActif.classList.remove('index');
    this.classList.add('index');

    articles.forEach(article => {
        if (article.classList.contains(id)) {
            artActif.classList.remove('index');
            artActif.classList.remove('in')
            article.classList.add('index');
            timerIn(article);

        }

    });
}

liens.forEach(lien => lien.addEventListener('click', toggleList));