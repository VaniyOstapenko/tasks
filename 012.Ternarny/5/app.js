// Пользователь вводит число с клавиатуры. 
// Нужно вывести на экран сколько в этом числе цифр, 
// а также положительное оно или отрицательное. 
// Например, "Число " + num + " положительное".
// Добавить проверку на число

const n = +prompt('Введите число');

if (n > 0 && !isNaN(n)) {
    console.log(`${String(n).length} ${n} Положительное`);
} else if (isNaN(n)) {
    console.log('Вы ввели строку');
}
else {
    console.log(`Отрицательное ${n}`);
}