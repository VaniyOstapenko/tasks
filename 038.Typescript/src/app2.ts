//Создайте переменные num1 и num2 и присвойте им два различных числовых значения. Выведите в консоль большее из двух чисел.

const num1: number = +prompt("Введите первое значение");
const num2: number = +prompt("Введите второе значение");

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}
if (num1 === num2) {
  console.log(`${num1} = ${num2} <- Вы ввели два равных значения`);
}

num1 > num2 ? console.log(num1) : console.log(num2);
num1 == num2
  ? console.log(`${num1} = ${num2} <- Вы ввели два равных значения`)
  : null;

console.log(num1 > num2 ? num1 : num2);
