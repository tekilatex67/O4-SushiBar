let u = document.querySelector('#home h2 span.u');
let r = document.querySelector('#home h2 span.r');

let observed = document.querySelectorAll('.observed');


let engagement = document.querySelector('#engagement');
let sRight = document.querySelector('.slideRight');
let sLeft = document.querySelector('.slideLeft');

// ------  ANIMATION NEON H2
//let slow;
let mid;
//let fast;


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

// ------- FADEIN MIRROR

const ratio = .2
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('actif');
            observer.unobserve(entry.target)
        }
    });
}

let observer = new IntersectionObserver(handleIntersect, options);
observed.forEach(function(r) {
    observer.observe(r);
});

// ---------- SLIDE SCROLL
let home = document.querySelector('#home');

window.addEventListener('scroll', function() {

    let attRight = sRight.getBoundingClientRect();
    let attLeft = sLeft.getBoundingClientRect();
    let slidPosR;
    let slidPosL;



    if (attRight.top <= window.innerHeight && attRight.top >= 0 - attRight.height) {
        slidPosR = ((`-${attRight.top +attRight.height}` - `-${window.innerHeight}`) / 10) * 1.2;

        sRight.style.transform = `translateX(${-slidPosR}%)`;
    }

    if (attLeft.top <= window.innerHeight && attLeft.top >= 0 - attLeft.height) {
        slidPosL = (`-${attLeft.top + attLeft.height}` - `-${window.innerHeight}`) / 10;

        sLeft.style.transform = `translateX(${slidPosL - 100}%)`;
    }
})

// ------------- BTN TOP PAGE 
let btnTop = document.querySelector('.topPage');
let btnAttribut = btnTop.getBoundingClientRect();

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

window.addEventListener('scroll', btnScroll);
btnTop.addEventListener('click', scrollToTop);