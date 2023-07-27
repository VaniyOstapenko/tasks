// Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”.
// Функция должна преобразовать строку в формат “xxxx-xx-xx”.
const str = "xx/xx/xxxx";

function doReverse(num) {
  let r = "";
  for (let i = num.length - 1; i >= 0; i--) {
    r += num[i];
  }
  return r;
}

let result = doReverse(str);

function doHyphen(s) {
  return s.split("/").join("-");
}

let result2 = doHyphen(result)
console.log(result2);
