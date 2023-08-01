// *Вычислить факториал числа используя рекурсию

let num = 5;
function doFactorial(num) {
    if (num === 1) return num;
    return num * doFactorial(num - 1);
}

let result = doFactorial(num)
console.log(result);
