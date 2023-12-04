// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры.
// Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что в массиве только числа.
// Третья для формирования массива из всех четных чисел, возведенных в квадрат.
// Если результат функции проверки –true, то вызывать новую функцию, возвращающую массив из всех четных чисел,
// возведенных в квадрат

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
  let arr2 = str.every(function (el) {
    if (!isNaN(el)) {
      return true;
    }
  });
  return arr2;
}

let result2 = doCheck(result);

function doErection(m) {
  let arr3 = m.map(function (el) {
    if (result2 === true) {
      return el ** 2;
    } else {
      return "вторая функция false";
    }
  });
  return arr3;
}

let result3 = doErection(result);
console.log(result3);
