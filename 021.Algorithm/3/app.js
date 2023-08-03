// Вычислите сумму массива целых(положительные)чисел 
// статичного массива используя рекурсию

const arr = [0, 1, 2, 3.4, 21, -4, -5, 7];

function isValid(arr) {
    let res = arr.filter(function (el) {
        if (el > 0 && el == Math.round(el)) return true;
    })
    return res
}

function doSum(arr) {
    if (arr.length === 1) return arr[0];
    return arr[0] + doSum(arr.slice(1))
}

let valid = isValid(arr)//возвращает отфильтрованный массив
let result = doSum(valid);
console.log(result);