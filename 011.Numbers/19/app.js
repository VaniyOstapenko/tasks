// Даны три числа a, b, c. 
// Напишите программу, которая находит корни квадратного уравнения
//  ax2 + bx + c = 0 
//  Если уравнение имеет два корня, то следует вывести их в порядке возрастания.

let a = +prompt('введите значение');
let b = +prompt('введите значение');
let c = +prompt('введите значение');

const D = b ** 2 - 4 * a * c;

if (a + b + c === 0) {
    console.log(x1 = 1, x2 = c / a);
} else if (b ** 2 - 4 * a * c < 0) {
    console.log('нет действительных корней');
} else if (b ** 2 - 4 * a * c > 0) {
    console.log(-b + Math.sqrt(b ** 2 - 4 * a * c) / (2 * a));
    console.log(-b - Math.sqrt(b ** 2 - 4 * a * c) / (2 * a));
}
