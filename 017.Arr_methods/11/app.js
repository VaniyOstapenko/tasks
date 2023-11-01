// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры.
// Выведите произведение всех элементов массива. Проверки на ввод только чисел.
// Использовать forEach, reduce

const n = prompt("количество элементов");
let arr = [];

for (let i = 0; i < n; i++) {
  let res = prompt("что ты хочешь ввести хозяин");
  if (!isNaN(res)) {
    arr.push(res);
  }
}

let str = 1;
arr.forEach(function (el) {
  str *= el;
});
console.log(str);