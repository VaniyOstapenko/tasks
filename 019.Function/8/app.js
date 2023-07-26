// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только строки.
// Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки –true, то вызывать новую функцию, возвращающую конкатенацию всех
// строчных элементов массива

const arr = ["Hello", "Ivan", "How are you"];

function doCheck(str) {
  let result = str.every(function (el) {
    if (isNaN(el)) {
      return true;
    }
  });
  return result;
}

let result = doCheck(arr);

function doSumStr(count) {
  let result_2 = count.reduce(function (sum, el) {
    if (result === true) {
      return sum + " " + el;
    } else {
      return "первая функция выдала false";
    }
  }, "");
  return result_2;
}

let result_2 = doSumStr(arr);
console.log(result_2);
