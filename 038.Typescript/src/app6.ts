//Напишите программу, которая проверяет, является ли заданная строка палиндромом.

const str: string = prompt("Введите строку");

//1
if (str.split("").reverse().join("") == str) {
  console.log("Палиндром");
} else {
  console.log("Не палиндром");
}

//2
str.split("").reverse().join("") == str
  ? console.log("Палиндром")
  : console.log("Не палиндром");

//3
console.log(
  str.split("").reverse().join("") == str ? "Палиндром" : "Не палиндром"
);
