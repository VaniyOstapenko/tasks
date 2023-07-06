// Задача на слово палиндром. 
// Если слово одинаковое с 2 сторон, то true, 
// в противном случае false мем -> true тест -> false

let str = 'мем'.toLowerCase().trim();

let reverse = str.split('').reverse().join('');

console.log(str);
console.log(reverse);

if (str === reverse) {
    console.log(true);
} else {
    console.log(false);
}