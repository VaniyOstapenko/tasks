//Факториал рекурсия и фибоначчи

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1)
}

console.log(factorial(5));

function fibon(n) {
    if (n <= 1) return n;
    return fibon(n - 1) + fibon(n - 2)
}

console.log(fibon(10));