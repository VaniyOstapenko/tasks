// Задача на анаграмму. 
// На входе 2 строки, необходимо выявить 
// являются ли введенные значения 
// анаграммами

const str1 = 'стоп';
const str2 = 'пост';


if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
    console.log('Анаграмма');
} else {
    console.log('Не анаграмма');
}
