// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры.
// Выведите сумму всех элементов массива. Проверки на ввод только чисел. Использовать forEach, reduce

const n = prompt("количество элементов массива");
let arr = [];

for (let i = 0; i < n; i++) {
  let el = prompt("заполните массив");
  if (!isNaN(el)) {
    arr.push(el);
  }
}

// const result = arr.reduce(function (sum, el) {
//   return sum + Number(el);
// }, 0);
// console.log(result);

