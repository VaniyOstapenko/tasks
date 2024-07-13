// Даны три числа a, b, c. 
// Напишите программу, которая находит корни квадратного уравнения
//  ax2 + bx + c = 0 
//  Если уравнение имеет два корня, то следует вывести их в порядке возрастания.

const a = +prompt('введите значение');
const b = +prompt('введите значение');
const c = +prompt('введите значение');

const D = b ** 2 - 4 * a * c;

const x1 = (-b + Math.sqrt(D)) / (2 * a);
const x2 = (-b - Math.sqrt(D)) / (2 * a);


if (a + b + c === 0) {
    console.log(x1 = 1, x2 = c / a);
} else if (D < 0) {
    console.log('нет действительных корней');
} else if (D > 0) {
    if (x1 > x2) {
        console.log(`${x2}, ${x1}`);
    } else {
        console.log(`${x1}, ${x2}`);
    }
}
