// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа.
// Вторая для поиска максимального значения в массиве.
// Если результат функции проверки –true, то вызывать новую функцию, возвращающую максимальное значение массива

const arr = [1, 2, 35, 181, 4, 8, 9];

function doCheck(num) {
  let new_arr = num.every(function (el) {
    if (!isNaN(el)) {
      return true;
    }
  });
  return new_arr;
}

let result = doCheck(arr);

function doMaxValueArr(maximum) {
  if (result === true) {
    let max = maximum[0];
    for (let i = 0; i < maximum.length; i++) {
      if (maximum[i] > max) {
        max = maximum[i];
      }
    }
    return max;
  } else {
    return "первая функция false";
  }
}

let result2 = doMaxValueArr(arr);
console.log(result2);
