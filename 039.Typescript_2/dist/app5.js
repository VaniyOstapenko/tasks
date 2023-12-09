//Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не делятся на 2.
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let numNewArr = numArr.filter((el) => {
    if (el % 3 == 0 && el % 2 !== 0) {
        return true;
    }
});
console.log(numNewArr);
