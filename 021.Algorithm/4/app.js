// Пользователь вводитn –порядковый номер числа из ряда 
// Фибоначчи. Реализуйте функцию на поискчисла n в 
// данной последовательности используя рекурсию 
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233,… 
// 5 -> 5 10 -> 55 7 -> 13

const num = 10;

function fibon(n) {
    if (n === 0 || n === 1) return n; 
    return fibon(n - 1) + fibon(n - 2);

    //9+8
    //8+7
    //7+6
    //6+5
    //5+4
    //4+3
    //3+2
    //2+1
}

const result = fibon(num);
console.log(result);