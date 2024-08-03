// Дан массив 2, 5, 9, 15, 0, 4.
// Выведите все числа кратные 3
// циклом  for of

const arr = [2, 5, 9, 15, 0, 4];
let count = [];

for (let el of arr) {
    el % 3 === 0 ? count.push(el) : null;
}

console.log(count);