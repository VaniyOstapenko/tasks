// Дан массив с элементами
// [2, 3, 4, 5]. С помощью 3 циклов
// найдите произведение элементов
// этого массива.

const arr = [2, 3, 4, 5];
let count = 1;

// for (let i = 0; i < arr.length; i++) {
//   count *= arr[i]
// }

// console.log(count);

// let i = 0;
// while (i < arr.length) {
//   count *= arr[i]
//   i++
// }

// console.log(count);

// let i = 0;
// do {
//   count *= arr[i]
//   i++
// } while (i < arr.length)

// console.log(count);

for (let el of arr) {
  count *= el;
}

console.log(count);