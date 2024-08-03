// Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
// Выведите на экран только те числа из массива, которые
// начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

const arr = [10, 20, 30, 50, 235, 3000];
let newArr = []

for (let i = 0; i < arr.length; i++) {
  if (arr[i].toString()[0] === '1' || arr[i].toString()[0] === '2' || arr[i].toString()[0] === '5') {
    newArr.push(arr[i])
  }
}

console.log(newArr);