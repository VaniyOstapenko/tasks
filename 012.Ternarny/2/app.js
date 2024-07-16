// Выявить является ли введенное число четным

// const n = 5;

// if (n % 2 == 0) {
//     console.log('Чётное');
// } else {
//     console.log('Нечётное');
// }

// n % 2 == 0 ? console.log('Чётное') : console.log('Нечётное');

function show(n) {
    return n % 2 == 0 ? 'Чётное' : 'Нечётное'
}

console.log(show(5));