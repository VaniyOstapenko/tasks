//На вход программе подается натуральное число n. Напишите программу, которая печатает звездный треугольник. 4–>**** *** ** *

let num_: number = +prompt("Введите число");

for (let i = num_; i >= 1; i--) {
  console.log("*".repeat(i));
}
