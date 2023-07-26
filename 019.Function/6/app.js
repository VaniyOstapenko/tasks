// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры.
// Реализуйте 2 функции. Первая для формирования массива. Вторая для нахождения количества элементов массива

const n = prompt("количество элементов массива");

function searchArr(new_arr) {
  let arr = [];
  for (let i = 0; i < new_arr; i++) {
    arr.push(prompt("элемент массива"));
  }
  return arr;
}

let result = searchArr(n);

function count(el) {
  let count = 0;
  for (let i = 0; i < el; i++) {
    count++;
  }
  return count;
}

let result_2 = count(n);
console.log(result);
console.log(result_2);
