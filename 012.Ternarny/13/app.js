// Пользователь вводит четырехзначное число. 
// Напишите скрипт, который будет выявлять является ли 
// каждое составляющее число четным либо нечетным. 
// Добавить проверку на ввод только чисел 
// 1234 -> 1 –неч 2 –чет 3 –неч 4 –чет 

let a = prompt('введите четырёхзначное число');
let num = a.split('');
if (isNaN(a)) {
    console.log('ошибка');
} else if (a > 999 && a < 10000) {
    console.log(a[0] % 2 === 0 ? `${a[0]}-чётное` : `${a[0]}-нечётное`);
    console.log(a[1] % 2 === 0 ? `${a[1]}-чётное` : `${a[0]}-нечётное`);
    console.log(a[2] % 2 === 0 ? `${a[2]}-чётное` : `${a[0]}-нечётное`);
    console.log(a[3] % 2 === 0 ? `${a[3]}-чётное` : `${a[0]}-нечётное`);
} else {
    console.log(a[0] % 2 === 1 ? `${a[0]}-чётное` : `${a[0]}-нечётное`);
    console.log(a[1] % 2 === 1 ? `${a[1]}-чётное` : `${a[0]}-нечётное`);
    console.log(a[2] % 2 === 1 ? `${a[2]}-чётное` : `${a[0]}-нечётное`);
    console.log(a[3] % 2 === 1 ? `${a[3]}-чётное` : `${a[0]}-нечётное`);
}  