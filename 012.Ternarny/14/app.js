// Ввести строку. Если эта равна “hschool”, вывести true. 
// В противном случае false. 
// Добавить проверки для строк. Удалить лишние пробелы

let a = prompt('ввести строку').trim();
let str = 'hschool'
if (!isNaN(a)) {
    console.log('ошибка');
} else if (a === str) {
    console.log(true);
} else {
    console.log(false);
}