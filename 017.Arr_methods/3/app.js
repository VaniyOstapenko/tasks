//На входе n –количество элементов массива.
//Далее производится заполнение массива с
//клавиатуры. Необходимо вывести
//значения массива без дублирования.
//Если длина массива равна 0, то
//вывести ‘Массив пуст’. Добавить
//проверку на ввод только чисел после
//каждого введенного элемента.
//1, 1, 3, 4, 4, 4, 2, 5 ->
//1, 2, 3, 4, 5

const n = prompt("введите количество элементов массива");

let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt());
}
console.log(arr);
let new_arr = [];
for (let i = 0; i < n; i++) {
  if (!isNaN(arr[i])) {
    if (!new_arr.includes(arr[i])) {
      new_arr.push(arr[i]);
    }
  }
}
if (new_arr.length === 0) {
  console.log("Массив пуст");
} else {
  console.log(new_arr);
}
