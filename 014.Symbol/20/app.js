// Пользователь вводит число, характеризующее количество
// элементов будущего массива Необходимо составить ряд Фибоначчи,
// где каждое число образуется при сложении 2 предыдущих

const n = 10;

let arr = [0, 1];

for (let i = 2; i < n; i++) {
  const sum = arr[i - 1] + arr[i - 2];
  arr.push(sum);
}

console.log(arr);
