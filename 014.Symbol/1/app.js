// Подается строка из нескольких слов. Необходимо добавить тире между словами 

const str = 'Vania Hi'

console.log(str.split(' ').join('-'));
console.log(str.replaceAll(' ', '-'));