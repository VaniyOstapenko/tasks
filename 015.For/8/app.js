// Преобразуйте первую букву каждого 
// слова строки в верхний регистр.

let a = 'i am developer'.split(' ');

let b = '';

for (let i = 0; i < a.length; i++) {
    b += a[i][0].toUpperCase()+a[i].slice(1)+' ';
}
console.log(b);