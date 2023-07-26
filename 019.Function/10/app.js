// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа.
// Вторая для получения только четных элементов массива. Если результат функции проверки –true,
// то вызывать новую функцию, возвращающую массив с четными элементами массива

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function doCheck(num) {
  let result = num.every(function (el) {
    if (!isNaN(el)) {
      return true;
    }
  });
  return result;
}

let result = doCheck(arr);

function doRemainder(str) {
  let result2 = str.filter(function (el) {
    if (result === true) {
      return el % 2 === 0;
    }
  });
  return result2;
}

let result2 = doRemainder(arr);
console.log(result2);
