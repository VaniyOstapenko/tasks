// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры.
// Если все элементы массива –числа, то вывести логическое true, в противном случае false. Every, forEach

const n = prompt("количество элементов");

let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt("ввод"));
}

const result = arr.every(function (el) {
  if (el == Number(el)) {
    return true;
  } else {
    return false;
  }
});
console.log(result);

// arr.forEach(function (el) {
//   if (el == Number(el)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// });
