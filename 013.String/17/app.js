// На вход программе подается строка текста. 
// Напишите программу, которая определяет является ли строка хорошей. 
// Текст хороший, если содержит подстроку «хорош» во всевозможных регистрах. 
// я очень хороший текст => true

let a = prompt('введите текст');

if (a.indexOf('хорош')) {
    console.log(true);
} else {
    console.log(false);
}