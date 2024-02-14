const buttons = document.querySelectorAll('.day');
const boxes = document.querySelector('.boxes');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.dataset.color;
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = color;
        boxes.appendChild(box);
        setTimeout(() => {
            box.classList.add('visible');
        }, 100);
    });
});
