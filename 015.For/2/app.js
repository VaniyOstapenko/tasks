// Дан статичный массив элементов. 
// С помощью цикла for найдите 
// произведение всех элементов массива

const arr = [1, 2, 3, 4, 5];
let count = 1;

for (let i = 0; i < arr.length; i++) {
    count *= arr[i]
}

console.log(count);