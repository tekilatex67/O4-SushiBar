let menuP = document.querySelector('.pages');
let pages = document.querySelectorAll('.page');

function toggleOpen() {
    let open = document.querySelector('.page.open.active')
    this.classList.toggle('open');

    pages.forEach(page => {
        if (page.classList.contains('open') && page !== this) {
            page.classList.remove('open');
        }
    })

    //Pour eviter le transition end en fermant le menu
    if (open === null) return;
    open.classList.remove('active');

    if (!this.classList.contains('open') && this.classList.contains('active')) {
        this.classList.remove('active');
    }
    //----------

}

function toggleActive(e) {

    /* if (e.propertyName.includes('flex')) { //flex a cause du flex grow
         this.classList.toggle('active')
         console.log(e.target);
     }*/
    if (e.target.classList.contains('open') && !e.target.classList.contains('active')) {
        this.classList.toggle('active');
    }

    if (!this.classList.contains('open') && this.classList.contains('active')) {
        this.classList.remove('active');
    };

    if (this.classList.contains('open') && !this.classList.contains('active')) {
        this.classList.remove('open');
    }
}
if (window.innerWidth <= 800) {
    pages.forEach(page => page.addEventListener('click', toggleOpen));
    pages.forEach(page => page.addEventListener('transitionend', toggleActive));
}



//ANIMATION ONLOAD

setTimeout(function() {
    menuP.classList.add('open');
}, 0001);