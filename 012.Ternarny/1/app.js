// Найти максимальное число из 2 введенных (2 способа)

const num1 = +prompt('Введите число')
const num2 = +prompt('Введите число')

// if (num1 > num2) {
//     console.log(num1);
// } else {
//     console.log(num2);
// }

// console.log(num1 > num2 ? num1 : num2);

// console.log(Math.max(num1, num2));

const arr = []
for (let i = 0; i < num1 && num2; i++) {
    arr.push(num1, num2)
    if (arr[i] > arr[i + 1]) {
        console.log(arr[i]);
    } else {
        console.log(arr[i + 1]);
    }
}
