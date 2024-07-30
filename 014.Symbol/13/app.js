// На вход подается строка. 
// Необходимо сложить все элементы числа. 
// Добавить проверку на ввод только чисел 
// 53 -> 8
// 135 -> 9

const str = '53';

let result = 0;

if (!isNaN(str)) {
    for (let i = 0; i < str.length; i++) {
        result += +str[i];
    }
    console.log(result);
} else {
    console.log('error');
}