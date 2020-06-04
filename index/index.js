let title = document.querySelector('#title p')

function openclass() {
    title.classList.add('open');
}
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(openclass, 0050);
})