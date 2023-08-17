// У вас есть кнопка. После каждого нажатия менять background.

const btn = document.querySelector('button');

let flage = false;

btn.addEventListener('click', function () {
    if (flage === false) {
        btn.style = 'background-color: red';
        flage = true;
    } else {
        btn.style = 'background-color: white';
        flage = false;
    }
})