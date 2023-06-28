// Вы вводите значение с клавиатуры. 
// Если значение четное, то вывести true, в противном случае false

let a = +prompt('ввести значение');

if (a % 2 === 0) {
    console.log(true);
} else if (a % 2 === 1) {
    console.log(false);
}
