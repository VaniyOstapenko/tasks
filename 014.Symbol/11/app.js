// Напишите скрипт, который будет находить факториал числа. 
// Факториал –это произведение всех целых чисел, меньше данного, 
// и его самого. 5->120 (1*2*3*4*5)

let a = 5;
let b = 1;
for (let i = 1; i <=a; i++) {
    b *= i;
}
console.log(b);