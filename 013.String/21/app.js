//У меня есть строка из символов, внутри строи не только буквы но и спец символы, задача найти 
//внутри этой строи спец знаки. Слова между символами перевернуть


const newStr = 'Vania@Hi&How%Are*You';
const reversedWords = newStr.replace(/[A-Za-z]+/g, word => word.split('').reverse().join(''));

console.log(reversedWords);