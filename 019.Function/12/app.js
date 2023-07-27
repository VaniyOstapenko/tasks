// На входе строка. Необходимо создать функцию,
// возвращающую true, если это слово палиндром и false в противном случае

const str = "Anna".toLowerCase();

// function doPalindrom(word) {
//   if (word === word.split("").reverse().join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let result = doPalindrom(str);
// console.log(result);

const doPalindrom = (word) => word === word.split("").reverse().join("");

let result = doPalindrom(str);
console.log(result);