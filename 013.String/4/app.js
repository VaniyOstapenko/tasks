// ‘HTML JavaScript PHP’ 
// преобразовать в "HTML-JAVASCRIPT-PHP"

let a = 'HTML JavaScript PHP'.toUpperCase();
console.log(a.split(' ').join('-'));

console.log(a.replaceAll(' ', '-'));