// На входе n –количество элементов массива. Далее
// производится заполнение массива arr с клавиатуры.
// Также в памяти есть статичная переменная со значением
// javascript.Необходимо создать новый массив из
// отфильтрованных значений, где строка массива arr включают
// значениепеременной javascript. Проверка на ввод только
// текстовых значений на заполнение массива. forEach

const n = prompt("количество элементов");
let arr = [];
for (let i = 0; i < n; i++) {
  let el = prompt("введите элементы");
  if (isNaN(el)) {
    arr.push(el);
  }
}

const str = "javascript";
// let result = [];
// arr.forEach(function (el) {
//   if (el.includes(str)) {
//     result.push(el);
//   }
// });
// console.log(result);

let result = arr.filter(function (el) {
  if (el.includes("javascript")) {
    return true;
  }
});
console.log(result);
