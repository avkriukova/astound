
window.onload = function () {
    let hero = document.querySelector('.hero');
    let colorButtons = document.querySelectorAll('.color-button');

    colorButtons.forEach(button => {
        button.style.background = button.dataset.color;
        button.addEventListener('click', (e => {
            e.preventDefault();

            hero.style.border = '1rem solid ' + button.dataset.color;
        }));
    })
}
