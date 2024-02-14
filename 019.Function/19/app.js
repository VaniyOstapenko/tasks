//Сложение чисел в массиве рекурсией

const arr = [1, 2, 3, 4, 5]

function sum(arr) {
    if (arr.length == []) return 0;
    return arr[0] + sum(arr.slice(1))
}

console.log(sum(arr));