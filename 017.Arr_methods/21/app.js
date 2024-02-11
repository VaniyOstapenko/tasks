//Сложить все числа массива при помощи forEach и reduce(все чётные числа)

const arr = [1, 2, 3, 4, 5, 6]

let sum = 0;
arr.forEach((el) => {
    sum += el;
})

console.log(sum);

const newArr = arr.reduce((sum, el) => {
    if (el % 2 == 0) {
        return sum + el;
    } else {
        return null;
    }
}, 0)

console.log(newArr);