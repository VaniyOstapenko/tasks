// Вы вводите значение с клавиатуры. 
// Если значение четное, то вывести true, в противном случае false

const n = +prompt('Введите значение')

if (n % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}
