// Дан массив с числами.
// Числа могут быть положительными и
// отрицательными. Найдите сумму всех
// положительных элементов массива
// циклом for of

const arr = [-15, 0, 8, 4, -10, 3];

let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     result += arr[i];
//   }
// }
// console.log(result);

for (let el of arr){
    el>=0? result += el : null
}
console.log(result);
