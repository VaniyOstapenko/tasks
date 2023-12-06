//Напишите программу, которая находит факториал заданного числа numи выводит результат в консоль.

//1
let n: number = +prompt("Введите значение");

let s: number = 1;
for (let i = 1; i <= n; i++) {
  s *= i;
}

console.log(s);

//2
function factorial(n: number) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(n));
