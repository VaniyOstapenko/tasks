// Найдите минимальное значение в массиве 
// используя цикл

const arr = [1, 2, 3, 4, 5, -7, - 20, 34];
let minValue = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (minValue > arr[i]) {
        minValue = arr[i];
    }
}

console.log(minValue);