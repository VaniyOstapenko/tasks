//Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr = arr.reduce((sum: number, el: number) => {
  return sum + (el % 2 === 0 ? 0 : el);
}, 0);

console.log(newArr);
