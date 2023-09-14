// Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо распознать по какому из значений 
// контейнера производится событие клика. Если клик происходит, то удалить данное значение из массива в div

const result = document.querySelector('.result')


for (let i = 0; i < 15; i++) {
    let arr = (Math.floor(Math.random() * 100));

    let p = document.createElement('p');
    result.appendChild(p);
    p.innerHTML = arr;
}

result.addEventListener('click', function (event) {
    result.removeChild(event.target);
})
