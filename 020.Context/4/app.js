// Напишите функцию, которая принимает массив чисел и
// находит минимальное и максимальное числа соответственно.
// Добавить проверки на ввод и если значения массива не
// соответствуют условию задания, вывести сообщение об
// ошибке.

const arr = [1, 2, 3, 4, 5, -7, -10, 0, 25];

function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return [min, max];
}

let result = findMinMax(arr);
console.log(result);
