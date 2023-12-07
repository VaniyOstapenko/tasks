//Создайте переменную sentence и присвойте ей строковое значение предложения. Напишите программу, которая преобразует первую
//букву каждого слова в предложении в верхний регистр. Например, для предложения "hello world" результатом должна быть строка "Hello World".
const sentence = "hello world".split(" ");
let arr = [];
for (let i = 0; i < sentence.length; i++) {
    arr.push(sentence[i][0].toUpperCase() + sentence[i].slice(1).toLowerCase());
}
console.log(arr.join(" "));
