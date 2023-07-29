// На входе число n. Напишите функцию, которая переворачивает число.

const num = "150";

function doReverse(num) {
  return num.split("").reverse().join("");
}

let result = doReverse(num);
console.log(result);
