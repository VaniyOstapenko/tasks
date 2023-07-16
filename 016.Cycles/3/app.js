// Дан массив с элементами
// [2, 3, 4, 5]. С помощью 3 циклов
// найдите произведение элементов
// этого массива.

const a = [2, 3, 4, 5];

let result = 1;

// for (let i = 0; i < a.length; i++) {
//   result *= a[i];
// }
// console.log(result);

// let i = 0;

// while (i < a.length) {
//   result *= a[i];
//   i++;
// }
// console.log(result);

// for (let elem of a) {
//   result *= elem;
// }
// console.log(result);

let i = 0;

do {
  result *= a[i];
  i++;
} while (i < a.length);

console.log(result);
