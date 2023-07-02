// Ввести строку. Проверить на isNaN. 
// Если число, то ошибка ввода. 
// Если это строка то узнать какая у нее длина.
// Привести к одному регистру, убрать 
// лишние пробелы

let a = prompt('введите строку').trim().toLowerCase();

if (!isNaN(a)) {
    console.log('ошибка')
} else {
    console.log(a.length);
}

console.log(!isNaN(a) ? 'ошибка' : a.length);