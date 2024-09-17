// Вычислите сумму массива чисел статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 10
// Входные: [10, 20, 30] → Результат: 60

const arr = [1, 2, 3, 4];

function sum(arr) {
    if (!arr.length) return 0;
    return arr[0] + sum(arr.slice(1))
}

console.log(sum(arr));