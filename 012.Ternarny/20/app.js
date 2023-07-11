// Ввести строку. Проверить является ли это число или текст. 
// Если число, то выяснить, четное или нет. 
// Если это текст и равен “hschool”, вывести true. В противном случае false

let a = prompt('ввести строку');
let b = 'hschool';

if (!isNaN(a)) {
    a % 2 === 0 ? console.log('чётное') : console.log('нечётное');
} else {
    a === b ? console.log(true) : console.log(false);
}