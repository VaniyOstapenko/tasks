//Напишите программу, которая проверяет, является ли заданная строка палиндромом.
const str = prompt("Введите строку");
if (str.split("").reverse().join("") == str) {
    console.log("Палиндром");
}
else {
    console.log("Не палиндром");
}
str.split("").reverse().join("") == str
    ? console.log("Палиндром")
    : console.log("Не палиндром");
console.log(str.split("").reverse().join("") == str ? "Палиндром" : "Не палиндром");
