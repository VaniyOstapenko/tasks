// Дан статичный массив элементов. 
// С помощью цикла for найдите 
// произведение всех элементов массива

let a = [4, 7, 9, 5, 2];
let result = 1;
for (let i = 0; i < a.length; i++) {
    result *= a[i];
}
console.log(result);