// Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо распознать по какому из значений 
// контейнера производится событие клика. Если клик происходит, то удалить данное значение из массива в div

const div = document.querySelector('.result');
const arr = [];

div.addEventListener('click', function () {
    for (let i = 0; i < 15; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    div.innerHTML = arr;
})
