// Реализуйте поиск максимального числа статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 4
// Входные: [10, 5, 8] → Результат: 10

const arr = [1, 2, 3, 4, 5];

function maxArr(arr) {
    if (!arr.length) return 0;
    return Math.max((arr[0]), maxArr(arr.slice(1)))
}

console.log(maxArr(arr));
