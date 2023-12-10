//Создайте массив чисел и найдите сумму элементов, находящихся на нечетных позициях (индексах) массива.

const arr12: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr12 = arr12.reduce((sum: number, el: number) => {
  return sum + (el % 2 === 0 ? 0 : el);
}, 0);

console.log(newArr12);
