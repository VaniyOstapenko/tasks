// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры.
// Необходимо вывести true, если хотя бы 1 элемент массива число. Some

const n = prompt("количество элементов");

let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt("ввод"));
}

const result = arr.some(function (el) {
  if (el == Number(el)) {
    return true;
  } else {
    return false;
  }
});
console.log(result);
