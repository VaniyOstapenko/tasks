// Пользователь вводит число, характеризующее количество
// элементов будущего массива Необходимо составить ряд Фибоначчи,
// где каждое число образуется при сложении 2 предыдущих

// 10 -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// let a = 10;
// let arr = "0,1";
// let num = 0;
// let str = 1;
// for (let i = 3; i <= a; i++) {
//   let sum = num + str;
//   num = str;
//   str = sum;
//   arr += `, ${sum}`;
// }
// console.log(arr);

let a = 10;
let arr = [0, 1];
for (let i = 2; i < a; i++) {
  let sum = arr[i - 1] + arr[i - 2];
  arr.push(sum);
}
console.log(arr);
