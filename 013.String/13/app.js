// Пользователь вводит дату в формате 'xxxx-xx-xx'. 
// Преобразуйте эту дату в формат 'xx.xx.xxxx'.

const date = '1994-12-29';

console.log(date.split('-').join('.'));