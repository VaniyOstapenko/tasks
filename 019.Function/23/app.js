// На входе число n. Вычислитесуммунатуральных чисел от 1 до n используя рекурсию
// Входные: 5 → Результат: 15
// Входные: 3 → Результат: 6
// Входные: 10 → Результат: 55

function sum(n) {
    if (n == 1) return 1;
    return n + sum(n - 1)
}

console.log(sum(5));