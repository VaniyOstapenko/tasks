// Задача на анаграмму. 
// На входе 2 строки, необходимо выявить 
// являются ли введенные значения 
// анаграммами

let a = 'пила';
let b = 'липа';

if (a.split('').sort().join('') === b.split('').sort().join('')){
    console.log('анаграмма');
}else{
    console.log('не анаграмма');
}