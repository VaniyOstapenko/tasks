// У вас есть массив из строк, чисел и иных примитивов.
// Необходимо создать новый массив, заполненный только числами первоначального массива

const arr = ["", 10, 30, 28, undefined, 15, null, 84];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (Number(arr[i])) {
    newArr.push(arr[i])
  }
}

console.log(newArr);