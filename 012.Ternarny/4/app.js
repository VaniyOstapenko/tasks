// Есть значение. 
// Добавить проверку на ввод только чисел. 
// Если число, вывести true, 
// в противном случае false (isNaN)

const n = prompt('Введите число')

// if (!isNaN(n)) {
//     console.log(true);
// } else {
//     console.log(false);
// }

!isNaN(n) ? console.log(true) : console.log(false);