//Создайте переменные num1 и num2 и присвойте им два различных числовых значения. Выведите в консоль большее из двух чисел.
const num1 = +prompt("Введите первое значение");
const num2 = +prompt("Введите второе значение");
//1
if (num1 > num2) {
    console.log(num1);
}
else {
    console.log(num2);
}
if (num1 === num2) {
    console.log(`${num1} = ${num2} <- Вы ввели два равных значения`);
}
//2
num1 > num2 ? console.log(num1) : console.log(num2);
num1 == num2
    ? console.log(`${num1} = ${num2} <- Вы ввели два равных значения`)
    : null;
//3
console.log(num1 > num2 ? num1 : num2);
