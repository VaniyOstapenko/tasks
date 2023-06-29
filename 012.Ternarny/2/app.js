// Выявить является ли введенное число четным

let a = +prompt('введите число');

if (a % 2 === 0) {
    console.log('чётное');
} else {
    console.log('нечётное');
}

a % 2 === 0 ? console.log('чётное') : console.log('нечётное');

console.log(a % 2 === 0 ? 'чётное' : 'нечётное');