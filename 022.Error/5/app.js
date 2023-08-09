// На вход подается число n –количество элементов массива. Необходимо заполнить массив случайными элементами. 
// Если значение массива находится в диапазоне 10<n< 100, то занести в новый массив. 
// Добавить проверки и обработать их. Обратите внимание, тут как минимум 3 функции. 
// Первая: формирование массива. Вторая: валидация. Третья: основная логика задачи

const n = prompt('количество элементов массива');

function doArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt('элемент массива'))
    }
    return arr;
}

let result = doArray(n);

function doCheck(result) {
    let check = result.map(function (el) {
        if (!isNaN(el)) {
            return el;
        } else {
            return 'Не число';
        }
    })
    return check;
}

let result2 = doCheck(result);

function doRange(result2) {
    let res = result2.filter(function (el) {
        if (el > 10 && el < 100) {
            return true;
        }
    })
    return res;
}

let result3 = doRange(result2);
console.log(result3);