// Выведите столбец четных чисел в промежутке от 0 до 100 (for)

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let i = 0;
// while (i <= 100) {
//   i % 2 == 0 ? console.log(i) : null;
//   i++
// }

let i = 0;
do {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++
} while (i <= 100)