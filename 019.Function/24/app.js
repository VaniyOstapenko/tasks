// На входе число n = 2, step = 5. Возведите n в степень stepи спользуя рекурсию
// Входные: 2, 5 → Результат: 32
// Входные: 3, 4 → Результат: 81

function test(n, step) {
    if (step == 0) return 1;
    return n * test(n, step - 1)
}

console.log(test(2, 5));