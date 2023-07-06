// На вход подается строка. 
// Необходимо сложить все элементы числа. 
// Добавить проверку на ввод только чисел 
// 53 -> 8
// 135 -> 9

let a = prompt('введите значение');
let str = a.split('')
if (isNaN(a)) {
    console.log('ошибка');
} else {
    console.log(Number(str[0]) + Number(str[1]) + Number(str[2]));
} 