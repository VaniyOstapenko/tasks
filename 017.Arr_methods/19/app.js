// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры
// (хотя бы один элемент массива –0). Необходимо вывести сумму всех значений массива до первого 0.
// Добавить проверки на ввод чисел.

const n = prompt("количество элементов");
let arr = [];
for (let i = 0; i < n; i++) {
  let check = prompt("введите элемент массива");
  if (!isNaN(check)) {
    arr.push(check);
  }
}

