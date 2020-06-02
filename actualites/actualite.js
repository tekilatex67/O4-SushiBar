// ANIMATION MOSAIQUE 

let div = document.querySelector('.mosaiqueAnim');
let text = document.querySelector('.mosaiqueAnim p');
let cpt = 0;
let img = document.querySelector(`img[data-image=""]`);

function sizeDiv() {
    let img = document.querySelector(`img[data-image="${cpt}"]`);
    let imgAtt = img.getBoundingClientRect();

    div.style.width = `${imgAtt.width}px`;
    div.style.height = `${imgAtt.height}px`;
    div.style.left = `${imgAtt.x + window.scrollX}px`;
    div.style.top = `${imgAtt.y + window.scrollY}px`;
}


function mosaiqueAnimation() {
    cpt = cpt + 1;
    if (cpt > 7) {
        /* clearInterval(compteur);*/
        cpt = 1;
    }

    sizeDiv();
    img = document.querySelector(`img[data-image="${cpt}"]`);
    div.style.background = `var(--${img.dataset.background})`;
    text.textContent = `${img.dataset.text}`;
    text.style.fontSize = "0.8rem";

    window.addEventListener('resize', function() {
        let imgAtt = img.getBoundingClientRect();
    })
}

window.addEventListener('resize', sizeDiv);
mosaiqueAnimation();
let compteur = setInterval(mosaiqueAnimation, 2000)



// TOGGLE ARTICLE LIRE 

let lires = document.querySelectorAll('.openClose');

function toggleRead(e) {
    let info = e.target.parentNode.parentNode;
    let paragrapheCible = info.querySelector('.toggle');
    paragrapheCible.classList.toggle('active');
    paragrapheCible.style.position = "relative";

    if (!paragrapheCible.classList.contains("active")) {
        setTimeout(function() {
            paragrapheCible.style.position = "absolute";
        }, 0200)
    }
    info.parentNode.classList.toggle('active');
}


lires.forEach(lire => lire.addEventListener('click', toggleRead));