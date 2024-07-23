// Ввести строку. Проверить на isNaN. 
// Если число, то ошибка ввода. 
// Если это строка то узнать какая у нее длина.
// Привести к одному регистру, убрать 
// лишние пробелы

const str = '     Hello worlD my Name is Vania  '.toLowerCase().trimEnd().trimStart();

if (isNaN(str)) {
    console.log(`Длина строки: ${str.length} ${str}`);
} else {
    console.log('Ошибка ввода');
}