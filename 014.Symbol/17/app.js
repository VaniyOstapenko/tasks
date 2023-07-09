// На вход программе подается строка, где каждое слово заканчивается “_”. 
// Программа должна убрать “_” и первую букву каждого слова (помимо первого) 
// преобразовать в верхний регистр anna_test_test-> annaTestTest

let a = 'anna_test_test'.split('_');

// console.log(a[0] + a[1][0].toUpperCase() + a[1].slice(1) + a[2][0].toUpperCase() + a[2].slice(1));

let result = '';

for (let i = 1; i < a.length; i++) {
    result += a[i][0].toUpperCase() + a[i].slice(1);
}
console.log(a[0] + result);