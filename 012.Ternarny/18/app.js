// Пользователь вводит строку. 
// Необходимо сделать проверку, что это не число и вывести текущую строку в большом регистре

let a = prompt('введите строку');

if (!isNaN(a)) {
    console.log('ошибка');
} else {
    console.log(a.toUpperCase());
}

