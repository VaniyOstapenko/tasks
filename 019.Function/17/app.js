// Написать функцию, принимающую в параметрах строку текста в маленьком регистре.
// Разбить строку на массив. Функция должна вернуть строку,
// где каждый элемент массива в чередование регистров toLowerCase, toUpperCase hschool-> HsChOoL

const str = "hschool".split("");

function doUppLow(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      arr.push(str[i].toUpperCase());
    } else {
      arr.push(str[i].toLowerCase());
    }
  }
  return arr.join("");
}

const result = doUppLow(str);
console.log(result);
