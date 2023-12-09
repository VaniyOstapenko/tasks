//На входе динамичный массив чисел. Используя reduce выведите сумму чисел массива
const array = [];
for (let i = 0; i < 5; i++) {
    array.push(+prompt("Введите значение массива"));
}
let newArray = array.reduce((sum, el) => {
    return sum + el;
}, 0);
console.log(newArray);
