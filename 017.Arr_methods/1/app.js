// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и заполяет массив.
// Далее необходимо создать массив только из чисел.
// Если длина массива равна 0, то вывести ‘Массив пуст’. filter

const n = 5;

let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt("ввод"));
}

const new_arr = arr.filter(function (el) {
  if (!isNaN(el) && el !== "") {
    return true;
  } else {
    return false;
  }
});
if (new_arr.length === 0) {
  console.log("массив пуст");
} else {
  console.log(new_arr);
}
