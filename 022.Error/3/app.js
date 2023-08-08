// Дана строка массива чисел. Необходимо спарсить строку. 
// Если же после того как вы спарсили данные у вас не массив–бросить исключение. 
// Добавить проверку на числа. Далее вывести только те числа, которые кратны 3

const arr = JSON.parse(`[1,2,3,4,5,6,7,8,9,10,11,12]`);

function parsArray(arr) {
    try {
        if (!Array.isArray(arr)) {
            throw new Error('не массив');
        }
        let res = arr.filter(function (el) {
            if (!isNaN(el)) {
                return el % 3 === 0
            }
        });
        return res;
    } catch (error) {
        return error.message;
    }
}

let result = parsArray(arr);
console.log(result);