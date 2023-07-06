// Найдите минимальное значение в массиве 
// используя цикл

let arr = [2, 3, 5, 55, 105, 3, 4, 205, 7];

let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);