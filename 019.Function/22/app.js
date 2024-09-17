// Отобразите в строке через пробел четные числа от 5 до 0 по убываниюиспользуя рекурсию
// Входные: 5 → Результат: 4 2 0

function test(n) {
    if (n == 0) return 0;
    if (n % 2 == 0) {
        return n + ' ' + test(n - 2)
    } else {
        return test(n - 1)
    }
}

console.log(test(5));