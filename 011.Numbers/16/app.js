// Пользователь вводит с клавиатуры число. 
// Найдите корень введенного числа 
// (если же результат –число с плавающей точкой, то округлить до 2 знаков после запятой).

let a = +prompt('введите число');

console.log(Math.sqrt(a).toFixed(2));

