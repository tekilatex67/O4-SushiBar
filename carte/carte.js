let pages = document.querySelectorAll('.page');

function toggleOpen() {
    pages.forEach(page => {
        if (page.classList.contains('open') && page !== this) {
            page.classList.remove('open');
        }
    })
    this.classList.toggle('open');
}

function toggleActive(e) {

    if (e.propertyName.includes('flex')) { //flex a cause du flex grow
        this.classList.toggle('active')
    }
    if (!this.classList.contains('open') && this.classList.contains('active')) {
        this.classList.remove('active');
    };
    if (this.classList.contains('open') && !this.classList.contains('active')) {
        this.classList.remove('open');
    }
}

pages.forEach(page => page.addEventListener('click', toggleOpen));
pages.forEach(page => page.addEventListener('transitionend', toggleActive));