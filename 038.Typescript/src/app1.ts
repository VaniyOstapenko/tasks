//Напишите программу, которая проверяет, является ли заданное число num четным или нечетным.

const num: number = +prompt("Введите число");

if (num % 2 === 0) {
  console.log("Чётное");
} else {
  console.log("Нечётное");
}

num % 2 === 0 ? console.log("Чётное") : console.log("Нечётное");

console.log(num % 2 === 0 ? "Чётное" : "Нечётное");