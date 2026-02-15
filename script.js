// Можна змінювати швидкість обертання через клік
const scene = document.querySelector('.scene');
let speed = 6;

document.addEventListener('click', () => {
    speed = speed === 6 ? 2 : 6; // змінює швидкість при кліку
    scene.style.animationDuration = speed + 's';
});
