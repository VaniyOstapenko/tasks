// По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за границы кнопки сновка скрывать

const btn = document.querySelector('button');
const div = document.querySelector('div');

btn.addEventListener('mouseover', function () {
    div.innerHTML = 'hi';
})

btn.addEventListener('mouseout', function () {
    div.innerHTML = '';
})