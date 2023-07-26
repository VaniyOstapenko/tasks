// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа.
// Вторая для получения суммы всех элементов массива.
// Если результат функции проверки –true, то вызывать новую функцию, возвращающую сумму всех элементов массива

const arr = [1, 2, 3, 4, 5, 6];

function doCheck(num) {
  let result = num.every(function (el) {
    if (!isNaN(el)) {
      return true;
    }
  });
  return result;
}

let result = doCheck(arr);

function doSum(count) {
  let function_2 = count.reduce(function (sum, el) {
    if (result === true) {
      return sum + +el;
    }else{
        return 'Ответ первой функции False'
    }
  }, 0);
  return function_2;
}

let result_2 = doSum(arr);
console.log(result_2);
