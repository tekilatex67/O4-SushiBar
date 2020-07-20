let title = document.querySelector('#title h1')

function openclass() {
    title.classList.add('open');
}
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(openclass, 0050);
});