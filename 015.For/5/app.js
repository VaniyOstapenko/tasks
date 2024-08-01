// Найдите максимальное значение в 
// статичном массиве используя цикл.

const arr = [2, 5, 55, 105, 3, 4, 205, 7];
let max = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}

console.log(max);