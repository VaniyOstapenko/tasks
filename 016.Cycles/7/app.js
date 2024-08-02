// Дан массив с элементами[1, 2, 3, 4, 5].
// С помощью цикла for of найдите сумму элементов этого массива

const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let el of arr) {
  sum += el;
}

console.log(sum);