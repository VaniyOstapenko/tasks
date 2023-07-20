// На входе n –количество элементов массива.
// Далее производится заполнение массива с клавиатуры.
// Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = prompt("количество значений");
let arr = [];
for (let i = 0; i < n; i++) {
  let el = prompt("быстро ввёл");
  if (isNaN(el)) {
    arr.push(el);
  }
}

// let new_arr = [];
// arr.forEach(function (el) {
//   new_arr.push("#" + el);
// });
// console.log(new_arr);

let new_arr = arr.map(function (el) {
  return "#" + el;
});
console.log(new_arr);
