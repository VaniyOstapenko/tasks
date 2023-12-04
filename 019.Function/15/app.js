// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры.
// Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что в массиве только числа.
// Третья для получения произведения всех элементов массива.
// Если результат функции проверки –true, то вызывать новую функцию, возвращающую произведение всех элементов массива

const n = prompt("количество элементов массива");

function doArray(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(prompt("введите элемент"));
  }
  return arr;
}

let result = doArray(n);

function doCheck(str) {
  let arr1 = str.every(function (el) {
    if (!isNaN(el)) {
      return true;
    }
  });
  return arr1;
}

let result2 = doCheck(result);

function doMultiplication(m) {
  let arr2 = m.reduce(function (sum, el) {
    if (result2 === true) {
      return sum * el;
    } else {
      return "вторая функция false";
    }
  }, 1);
  return arr2;
}
let result3 = doMultiplication(result);
console.log(result3);
