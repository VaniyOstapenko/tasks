// Найти значение массива, повторяющееся в нем наибольшее количество раз

let arr = [1, 2, 2, 2, 3, 3, 4, 5, 5, 29, 29, 29, 3, 29, 292, 9];

const obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]] += 1;
  } else {
    obj[arr[i]] = 1;
  }
}

let max = obj[arr[0]];

for (let key in obj) {
  if (obj[key] > max) {
    max = obj[key];
  }
}

for (let key in obj) {
  if (obj[key] === max) {
    console.log(key);
  }
}
