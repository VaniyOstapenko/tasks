// Задача на слово палиндром. 
// Если слово одинаковое с 2 сторон, то true, 
// в противном случае false мем -> true тест -> false

const str = 'Anna'.toLowerCase().trim();

console.log(str === str.split('').reverse().join('') ? true : false);