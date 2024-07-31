// Преобразуйте первую букву каждого 
// слова строки в верхний регистр.

const str = 'i am vania'.split(' ');
let newStr = ''
for (let i = 0; i < str.length; i++) {
    newStr += str[i][0].toUpperCase() + str[i].slice(1) + ' '
}

console.log(newStr);