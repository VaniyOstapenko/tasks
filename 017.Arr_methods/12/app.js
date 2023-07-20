// На входе n –количество элементов массива.
// Далее производится заполнение массива с
// клавиатуры.Необходимо создать новый
// массив из отфильтрованных значений,
// где строка начинается на [a, h].
// Проверка на ввод только текстовых
// значений на заполнение массива.
// filter [“ann”, “school”, “hschool”, “borabora”] ->
// [“ann”, “hschool”]

const n = prompt("количество элементов");
let arr = [];
for (let i = 0; i < n; i++) {
  let el = prompt("введите пожалуйста");
  if (isNaN(el)) {
    arr.push(el);
  }
}

let result = arr.filter(function (el) {
  return el[0] === "a" || el[0] === "h" ? true : false;
});
console.log(result);
