//Напишите программу, которая определяет, является ли заданная строка анаграммой (состоит из тех же символов, но в другом порядке) другой строки.
let a = "пост";
let b = "стоп";
if (a.split("").sort().join("") == b.split("").sort().join("")) {
    console.log("Анаграмма");
}
else {
    console.log("Не анаграмма");
}
