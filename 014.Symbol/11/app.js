// Напишите скрипт, который будет находить факториал числа. 
// Факториал –это произведение всех целых чисел, меньше данного, 
// и его самого. 5->120 (1*2*3*4*5)

let n = 5;
let b = 1
for (let i = 1; i <= n; i++) {
    b *= i
}

console.log(b);

function factorial(a) {
    if (a < 1) return 1;
    return a * factorial(a - 1)
}

console.log(factorial(5));