// Необходимо по кнопку включатьи выключать песню

const btn = document.querySelector('button');
const audio = document.querySelector('audio');
let flag = false;

btn.addEventListener('click', () => {
    audio.src = './song1.mp3';
    if (flag === false) {
        audio.play();
        flag = true;
    } else {
        audio.pause();
        flag = false;
    }
})

