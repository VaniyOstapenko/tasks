// Дан массив с элементами [2, 3, 4, 5].
// С помощью цикла for найдите произведение 
// элементов этого массива

const arr = [2, 3, 4, 5];
let count = 1;

for (let i = 0; i < arr.length; i++) {
    count *= arr[i]
}

console.log(count);