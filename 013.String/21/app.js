//У меня есть строка из символов, внутри строи не только буквы но и спец символы, задача найти 
//внутри этой строи спец знаки. Слова между символами перевернуть


const str = 'Vania@Hi&How%Are*You';

console.log(str.replace(/[A-Za-z]+/g, newStr => newStr.split('').reverse().join('')));