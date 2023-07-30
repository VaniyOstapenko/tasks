// На входе динамичный массив;число n с клавиатуры. Необходимо написать функцию,
// возвращающую элементы массива, которые больше указанного числа. [1, 9, 45, 11, 10], 10 -> 45, 11

const n = +prompt("количество элементов массива");

function doArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(+prompt("элемент массива"));
  }
  return arr;
}

let result = doArray(n);

const num = +prompt("число по условию");

function doNewArray(num) {
  let new_arr = result.filter(function (el) {
    if (el > num) {
      return true;
    }
  });
  return new_arr
}

let result2 = doNewArray(num)
console.log(result2);
