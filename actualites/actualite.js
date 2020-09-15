let actu = document.querySelector('#actualites');
let div;
let text;
let cpt = 0;
//let img = document.querySelector(`.bloc_img[data-image=""]`); /*img*/


//----------------------------------------------------- ANIMATION MOSAIQUE 

function sizeDiv() {
    let img;

    if (window.innerWidth <= 800) {
        img = document.querySelector(`img[data-image="${cpt}"]`);
        div = document.querySelector('.mosaiqueAnimMobile');
        text = document.querySelector('.mosaiqueAnimMobile p');
    }

    if (window.innerWidth > 800) {
        img = document.querySelector(`a[data-image="${cpt}"]`);
        div = document.querySelector('.mosaiqueAnim');
        text = document.querySelector('.mosaiqueAnim p');
    }



    let imgAtt = img.getBoundingClientRect();

    div.style.width = `${imgAtt.width}px`;
    div.style.height = `${imgAtt.height}px`;
    div.style.left = `${imgAtt.x + window.scrollX }px`;
    if (window.innerWidth <= 800) {
        div.style.top = `${imgAtt.y + window.scrollY}px`;
    }
    if (window.innerWidth > 800) {
        div.style.top = `${(imgAtt.y + window.scrollY- window.innerHeight)-100}px`;
    }

}


function mosaiqueAnimation() {
    if (scrollY === 0) return;
    cpt = cpt + 1;
    if (cpt > 7) {
        /*clearInterval(compteur);*/
        cpt = 1;
    }

    sizeDiv();
    if (window.innerWidth <= 800) {
        img = document.querySelector(`img[data-image="${cpt}"]`);
    }

    if (window.innerWidth > 800) {
        img = document.querySelector(`a[data-image="${cpt}"]`);
    }

    div.style.background = `var(--${img.dataset.background})`;
    text.textContent = `${img.dataset.text}`;
    text.style.fontSize = "0.8rem";

    window.addEventListener('resize', function() {
        let imgAtt = img.getBoundingClientRect();
    })
}

window.addEventListener('resize', sizeDiv);
setTimeout(mosaiqueAnimation, 1000);
let compteur = setInterval(mosaiqueAnimation, 2000)



//---------------------------------------------- TOGGLE ARTICLE LIRE 

let lires = document.querySelectorAll('.openClose');

function toggleRead(e) {

    let info = e.target.parentNode;

    if (info.classList.contains('article')) {
        let paragrapheCible = info.querySelector('.toggle');
        paragrapheCible.classList.toggle('active');
        info.parentNode.classList.toggle('active');
    } else {
        let paragrapheCible = info.parentNode.querySelector('.toggle');
        paragrapheCible.classList.toggle('active');
        info.parentNode.parentNode.classList.toggle('active');
    }

}


lires.forEach(lire => lire.addEventListener('click', toggleRead));

//---------------------------------------------- ANIMATION ONLOAD

setTimeout(function() {
    actu.classList.add('open');
}, 0010);

//--------------------------------------------------- BTN ACTU

let btns = document.querySelectorAll('.btnDefile li');

let paragraphe = document.querySelectorAll('.textDefile');


btns.forEach(btn => btn.addEventListener('click', function(e) {
    let currentBtn = document.querySelector('.btnDefile li.index');
    let currentPara = document.querySelector('.textDefile.index');

    let newCurrent = e.target;
    let currentData = newCurrent.dataset.name;


    if (newCurrent === currentBtn) return;
    currentBtn.classList.remove('index');
    currentPara.classList.remove('index');

    newCurrent.classList.add('index');
    paragraphe.forEach(para =>  {
        if (para.classList.contains(`${currentData}`)) {
            para.classList.add('index');
        }
    })
}))

// ----- CAROUSELLE ------


let body = document.querySelector('body');
let imgArr = document.querySelectorAll('.bloc_img');
let end = document.querySelector('#img10');
let start = document.querySelector('#img1');
let aCoter = document.querySelector('.contain_images');



for (let i = 0; i < imgArr.length; i++) {


    let lienImg = imgArr[i]; // lien du tableau de liens
    let href = imgArr[i].href; // href du lien

    //Listener click sur une image
    lienImg.addEventListener('click', function(e) {

        e.preventDefault();

        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';

        lienImg = imgArr[i];
        href = imgArr[i].href;
        let compteur = i;


        //----- CREATION DES ELEMENTS ---
        let slideBox = document.createElement('div');
        slideBox.classList.add('slider');

        // DIV et IMG
        let divImage = document.createElement('div');
        divImage.classList.add('image');
        let img = document.createElement('img');
        img.src = href;

        //BOUTON QUITTER
        let btnExit = document.createElement('div');
        let exitImg = document.createElement('img');
        exitImg.src = 'image/exit1.png';
        btnExit.appendChild(exitImg);
        btnExit.classList.add('quitter');
        btnExit.addEventListener('click', function() {
            body.removeChild(slideBox);
            //Maintenir pos page scroll apres fermeture
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        })

        //BOUTTON PRECEDENT
        let btnPrev = document.createElement('div');
        let prevImg = document.createElement('img');
        prevImg.src = 'image/left2.png';
        btnPrev.appendChild(prevImg);
        btnPrev.classList.add('precedent');
        btnPrev.addEventListener('click', prev);


        //BOUTTON SUIVANT
        let btnNext = document.createElement('div');
        let nextImg = document.createElement('img');
        nextImg.src = 'image/right2.png';
        btnNext.appendChild(nextImg);
        btnNext.classList.add('suivant');
        btnNext.addEventListener('click', next);


        //IMBRICATION DES ELEMENTS
        divImage.appendChild(img);
        slideBox.appendChild(divImage);
        slideBox.appendChild(btnNext);
        slideBox.appendChild(btnPrev);
        slideBox.appendChild(btnExit);

        body.appendChild(slideBox);
        removeBtn();
        addBtn();


        // -- LES FONCTION --

        function removeBtn() {
            if (compteur === 9) {
                slideBox.removeChild(btnNext);
            } else if (compteur === 0) {
                slideBox.removeChild(btnPrev);
            }
        }

        function addBtn() {
            if (compteur < 9) {
                slideBox.appendChild(btnNext);
            }
            if (compteur > 0) {
                slideBox.appendChild(btnPrev);
            }
        }

        function next() {

            lienImg = lienImg.nextElementSibling;
            href = lienImg.href;
            img.src = href;
            compteur++;
            removeBtn();
            addBtn();

        }

        function prev() {

            lienImg = lienImg.previousElementSibling;
            href = lienImg.href;
            img.src = href
            compteur--;
            addBtn();
            removeBtn();

        }
    })

}

// ------------------ SLIDER ARTICLE  --------------------------

let btnPhoto = document.querySelectorAll('.blocParagraphe .photo');
let divPhoto = document.querySelector('.principalPhoto');
let mini = document.querySelectorAll('.miniPhoto a');
let photoPrincipale;
let cptImage = 1;

btnPhoto.forEach(btn => {
    btn.addEventListener('click', function(e) {

        // Bouton photo pour sliderimg DESKTOP
        if (window.innerWidth >= 800) {
            photoPrincipale = btn.parentNode.querySelector('.principalPhoto img');
            photoPrincipale.src = `${photoPrincipale.src}`

            if (!btn.parentNode.classList.contains('active')) return;

            let sliderBlock = btn.parentElement.querySelector('.sliderImg');

            sliderBlock.classList.toggle('active');
            sliderBlock.style.top = `${scrollY}px`; //position top tjr en haut de la fenetre

            //empecher le scroll du body
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.position = 'fixed';
            const scrollTop = document.body.style.top;

            sliderBlock.addEventListener('click', function(e) {

                if (e.target.classList.contains('principalPhoto') || e.target.classList.contains('miniPhoto')) {
                    sliderBlock.classList.remove('active');
                    document.body.style.position = '';
                    document.body.style.top = '';
                    window.scrollTo(0, parseInt(scrollTop || '0') * -1);
                }
            })
        }

        // Bouton photo pour sliderimg MOBILE
        if (window.innerWidth < 800) {

            let article = e.target.parentNode.parentNode.parentNode.parentNode;
            console.log(article);
            let couvertureImg = article.querySelector('.conteneurImg img');
            console.log(couvertureImg);
            let imgs = article.querySelectorAll('img[data-img]');

            cptImage += 1;
            if (cptImage > imgs.length) {
                cptImage = 1;
            }



            imgs.forEach(img => {
                if (parseInt(img.dataset.img) === cptImage) {
                    couvertureImg.src = img.src;
                    console.log(img.src);
                }
            });
        }
    })
})


// Slider open ------

mini.forEach(img => {
    img.addEventListener('click', function(e) {

        e.preventDefault();
        let href = img.href
        photoPrincipale.src = href;


    })
})