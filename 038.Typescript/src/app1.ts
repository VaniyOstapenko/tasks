//Напишите программу, которая проверяет, является ли заданное число num четным или нечетным.

const num: number = +prompt("Введите число");

//1
if (num % 2 === 0) {
  console.log("Чётное");
} else {
  console.log("Нечётное");
}

//2
num % 2 === 0 ? console.log("Чётное") : console.log("Нечётное");

//3
console.log(num % 2 === 0 ? "Чётное" : "Нечётное");
