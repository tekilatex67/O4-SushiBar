//NEON
let u = document.querySelector('#home h2 span.u');
let r = document.querySelector('#home h2 span.r');
let mid;
//SERVICE
let boxs = document.querySelectorAll('#services .conteneur .box');
/* REVEAL */
let reveals = document.querySelectorAll('.reveal,#propos img');
//OBSERVER
let observed = document.querySelectorAll('.observed');
//SLIDE TO SCROLL
let home = document.querySelector('#home');
let engagement = document.querySelector('#engagement');
let sRight = document.querySelectorAll('.slideRight');
let sLeft = document.querySelectorAll('.slideLeft');
// ------------- BTN TOP PAGE 
let btnTop = document.querySelector('.topPage');
let btnAttribut = btnTop.getBoundingClientRect();
// H3 SCALE ON SCROLL 
let title = document.querySelector('#engagement h3');
let titleBis = document.querySelector('#satisfaction h3');
let span = document.querySelectorAll('#engagement h3 span')
let growElements = [title, titleBis];
/* SHARK ANIME ROUND */
let sharkCont = document.querySelector('#sharkRound');
let logoShark = document.querySelector('.shark img');
let textShark = document.querySelector('.textCercle img');
let round = document.querySelector('.contentShark');
let roundWidht = Math.round(round.getBoundingClientRect().width);
round.style.height = `${roundWidht}px`;
round.style.borderRadius = `${roundWidht}px`;
/*SLIDEBOX*/
let slides = document.querySelector('.slides');
let slideBox = document.querySelector('.slidesBox');
/* SUSHI PARALAX */
const imgPara = document.querySelectorAll('.imgPara');
const right = document.querySelectorAll('.right');
const left = document.querySelectorAll('.left');

// ------  ANIMATION NEON H2

function neonLight(el) {
    el.classList.toggle('light');
}

function lightLetter(el, delay) {
    mid = setInterval(function() { neonLight(el) }, delay);
}

function clearInter(vari, timer) {
    setTimeout(function() {
        clearInterval(vari);
    }, timer);
}

function timerOut(func, timer) {
    setTimeout(function(func) { func }, timer);
}


function neon(letter) {
    lightLetter(letter, 1000);
    clearInter(mid, 2000);

    setTimeout(function() {
        lightLetter(letter, 0100);
        clearInter(mid, 1000);
    }, 4100);

    setTimeout(function() {
        lightLetter(letter, 2000);
        clearInter(mid, 4000);
    }, 7500);

    setTimeout(function() {
        lightLetter(letter, 0200);
        clearInter(mid, 1000);
    }, 12000);

    setTimeout(function() {
        lightLetter(letter, 0050);
        clearInter(mid, 1000);
    }, 12600);

    setTimeout(function() {
        lightLetter(letter, 1000);
        clearInter(mid, 2000);
    }, 15600);

    setTimeout(function() {
        if (letter.classList.contains('light')) {
            letter.classList.remove('light');
        }
    }, 15000)

};

neon(u);

setTimeout(function() { neon(r) }, 3000);

// ---------------- SERVICE --------------

let boxWidht;

if (window.innerWidth >= 800) {
    boxs.forEach(box => {
        boxWidht = Math.round(box.getBoundingClientRect().width);
        box.style.height = `${boxWidht}px`;
    });
}

// ------- FADEIN MIRROR -------------------------

const ratio = .2;

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

function handleIntersect(entries, observer) {
    entries.forEach(entry => {

            let element = entry.target;
            /*Pourcentage*/
            let cpt = 0;
            let timer = 1;
            let n = element.dataset.to;
            let delta = Math.ceil((timer * 1000) / n);
            console.log(element);

            if (entry.intersectionRatio > ratio) {
                /*Pourcentage*/
                if (element.classList.contains('number')) {
                    function count() {
                        element.innerHTML = cpt++;
                        if (cpt <= n) {
                            setTimeout(count, delta);
                        }
                    }
                    setTimeout(count, delta);
                } else {
                    element.classList.add('actif');
                    observer.unobserve(entry.target);
                }
            }

        }

    );
}

let observer = new IntersectionObserver(handleIntersect, options);
observed.forEach(function(r) {
    observer.observe(r);
});

// ------------- BTN TOP PAGE ------------------

function btnScroll() {
    if (scrollY >= window.innerHeight * 1.8) {
        btnTop.style.transform = 'translateY(0)';
    } else {
        btnTop.style.transform = 'translateY(500%)';
    }
}

function scrollToTop() {
    let position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 30);
    } else clearTimeout(scrollAnimation);
}

btnScroll()
btnTop.addEventListener('click', scrollToTop);

// H3 SCALE ON SCROLL 

function scaleElement(Arrays) {

    Arrays.forEach(element => {

        let titleToTop = element.getBoundingClientRect().top;
        let pixels = Math.round(((titleToTop * 100) / window.innerHeight) * -1);

        if (window.innerWidth >= 800) {
            if (pixels <= -25) {
                element.style.fontSize = `${pixels + 100}px`
            } else {
                element.style.fontSize = `${(pixels*-1)+50}px`
            }
        } else {
            element.style.fontSize = '2rem';
        }

    })
}
scaleElement(growElements);

/*SLIDEBOX*/

let blocslide;

function sliderSize() {
    let satiHeight = document.querySelector('#satisfaction').getBoundingClientRect().height;
    let slideHeight = slideBox.getBoundingClientRect().height;
    let cpt = Math.round(satiHeight / slideHeight);

    //Fonction pour remove les blocSlide
    const removeElements = (elms) => elms.forEach(el => el.remove());
    removeElements(document.querySelectorAll(".blocSlide"));

    for (let i = 0; i <= cpt; i++) {
        blocslide = document.createElement('div');
        blocslide.classList.add('blocSlide');
        blocslide.innerHTML = `<div class=" slideRight flex">
                    <img src="image/icon1.png" alt="sushi"><img src="image/icon2.png" alt="sushi"><img src="image/icon3.png" alt="sushi"><img src="image/icon4.png" alt="sushi"><img src="image/icon5.png" alt="sushi"><img src="image/icon6.png" alt="sushi">
                    <img src="image/icon7.png" alt="sushi"><img src="image/icon8.png" alt="sushi"><img src="image/icon9.png" alt="sushi"><img src="image/icon10.png" alt="sushi"><img src="image/icon11.png" alt="sushi"><img src="image/icon12.png" alt="sushi">
                    <img src="image/icon13.png" alt="sushi"><img src="image/icon14.png" alt="sushi"><img src="image/icon15.png" alt="sushi"><img src="image/icon16.png" alt="sushi">
                    </div>
                    <div class=" slideLeft flex">
                    <img src="image/icon1.png" alt="sushi"><img src="image/icon2.png" alt="sushi"><img src="image/icon3.png" alt="sushi"><img src="image/icon4.png" alt="sushi"><img src="image/icon5.png" alt="sushi"><img src="image/icon6.png" alt="sushi">
                    <img src="image/icon7.png" alt="sushi"><img src="image/icon8.png" alt="sushi"><img src="image/icon9.png" alt="sushi"><img src="image/icon10.png" alt="sushi"><img src="image/icon11.png" alt="sushi"><img src="image/icon12.png" alt="sushi">
                    <img src="image/icon13.png" alt="sushi"><img src="image/icon14.png" alt="sushi"><img src="image/icon15.png" alt="sushi"><img src="image/icon16.png" alt="sushi">
                    </div>`;

        slides.appendChild(blocslide);

    }
}
sliderSize();
/* ------------ EVENT LISTENER ------------ */


/*SCROLL*/


window.addEventListener('scroll', () => {

    //REVEAL
    reveals.forEach(reveal => {
        let toTop = reveal.getBoundingClientRect().top;
        let pourcentToTop = 100 - ((toTop * 100) / window.innerHeight);

        if (pourcentToTop >= 20) {
            reveal.classList.add('active');
        }
        if (pourcentToTop >= 95 || pourcentToTop < 20) {
            reveal.classList.remove('active');
        }
    });

    //SLIDE TO SCROLL
    sRight = document.querySelectorAll('.slideRight');

    sRight.forEach(right => {
        let attRight = right.getBoundingClientRect();
        let slidPosR;

        if (attRight.top <= window.innerHeight && attRight.top >= 0 - attRight.height) {
            slidPosR = ((`-${attRight.top +attRight.height}` - `-${window.innerHeight}`) / 50) * 1.2;
            right.style.transform = `translateX(${-slidPosR}%)`;
        }
    })

    sLeft = document.querySelectorAll('.slideLeft');

    sLeft.forEach(left => {
        let attLeft = left.getBoundingClientRect();
        let slidPosL;

        if (attLeft.top <= window.innerHeight && attLeft.top >= 0 - attLeft.height) {
            slidPosL = (`-${attLeft.top + attLeft.height}` - `-${window.innerHeight}`) / 50;
            left.style.transform = `translateX(${slidPosL - 80}%)`;
        }
    })

    //BTN TOP PAGE
    btnScroll()

    // H3 SCALE ON SCROLL 
    if (window.innerWidth >= 800) {
        scaleElement(growElements);
    }

    /* SHARK ANIME ROUND */

    let sharkToTop = sharkCont.getBoundingClientRect().top;
    let pix = sharkToTop / 2.5;

    if (sharkToTop <= window.innerHeight) {
        logoShark.style.transform = `rotate(${(pix*-1)}deg)`;
        textShark.style.transform = `rotate(${(pix*-1)}deg) translateY(-50%)`;
    }

    /*PARALAX*/

    let scroll = ((sharkCont.getBoundingClientRect().top) - window.innerHeight) * -1;

    if (sharkCont.getBoundingClientRect().top <= window.innerHeight) {
        imgPara.forEach(element => {
            let speed = element.dataset.speed;

            if (element.classList.contains('right')) {
                element.style.transform = `translateY(${(((scroll * speed))*-1)/2}%) translateX(${(scroll * speed)/10}%)`;
            } else if (element.classList.contains('left')) {
                element.style.transform = `translateY(${(((scroll * speed))*-1)/2}%) translateX(-${(scroll * speed)/10}%)`;
            } else {
                element.style.transform = `translateY(${(((scroll * speed))*-1)/2}%) rotate(${(scroll * speed) / 10}deg)`;
            }
        })
    }
})

/*RESIZE*/

window.addEventListener('resize', function() {
    /*ROUND SHARK*/
    roundWidht = Math.round(round.getBoundingClientRect().width);
    round.style.height = `${roundWidht}px`;

    // H3 SCALE ON SCROLL 

    scaleElement(growElements);


    /*SLIDE TO SCROLL */
    satiHeight = document.querySelector('#satisfaction').getBoundingClientRect().height;
    slideHeight = slideBox.getBoundingClientRect().height;

    sliderSize()

})