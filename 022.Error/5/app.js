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
    try {
        let check = [];
        result.forEach(function (el) {
            if (!isNaN(el)) {
                check.push(el);
            } else {
                throw new Error('Не число');
            }
        })
        return check;
    } catch (error) {
        return error.message;
    }
}

let result2 = doCheck(result);

function doRange(result2) {
    try {
        let arr4 = [];
        for (let i = 0; i < result2.length; i++) {
            if (result2[i] > 10 && result2[i] < 100) {
                arr4.push(result2[i]);
            } else if (isNaN(result2[i])) {
                throw new Error('Ошибка ввода');
            }
        }
        return arr4;
    } catch (error) {
        return error.message;
    }
}


let result3 = doRange(result2);
console.log(result3);