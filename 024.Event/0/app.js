// У вас есть кнопка. После нажатия поменять background.

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    btn.style = 'color:red';
})

btn.addEventListener('dblclick', function () {
    btn.style = 'color:white';
})