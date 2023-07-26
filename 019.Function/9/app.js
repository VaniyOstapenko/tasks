// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа.
// Вторая для получения массива с удвоенными значенями каждого элемента.
// Если результат функции проверки –true, то вызывать новую функцию, возвращающую массив с удвоенными элементами

const arr = [1, 2, 3, 4, 5];

function doCheck(num) {
  let result = num.every(function (el) {
    if (!isNaN(el)) {
      return true;
    }
  });
  return result;
}

let result = doCheck(arr);

function doMultiplication(num2) {
  let result2 = num2.map(function (el) {
    if (result === true) {
      return el * 2;
    } else {
      return "первая функция вывела false";
    }
  });
  return result2;
}

let result2 = doMultiplication(arr);
console.log(result2);
