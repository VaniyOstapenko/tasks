// Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо распознать по какому из значений 
// контейнера производится событие клика. Если клик происходит, то удалить данное значение из массива в div

const arr = [];

const result = document.querySelector('.result')

for (let i = 0; i < 15; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
result.innerHTML = arr;

const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
    const new_arr = document.querySelector('.new_arr');
    new_arr.innerHTML = event.target.textContent;
})
