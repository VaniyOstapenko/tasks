// На вход программе подается строка текста содержащая “@”. 
// Напишите программу, которая удаляет все вхождения символа “@”. '
// Добавить проверки 123@1@@34 -> 123134

const str = '123@1@@34';

console.log(str.replaceAll('@', ''));
console.log(str.split('@').join(''));