// На вход программе подается строка текста. 
// Напишите программу, которая проверяет, 
// что строка заканчивается подстрокой .com или .ru. 
// Если правильно заканчивается, то вывести true, в противном случае false

const str = 'vania.com';

if (str.includes('.com') || str.includes('.ru')) {
    console.log(true);
} else {
    console.log(false);
}