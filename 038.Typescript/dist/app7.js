//Напишите программу, которая находит факториал заданного числа numи выводит результат в консоль.
//1
let n = +prompt("Введите значение");
let s = 1;
for (let i = 1; i <= n; i++) {
    s *= i;
}
console.log(s);
//2
function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
console.log(factorial(n));
