// На вход программе подаётся строка. 
// Замените все @ на '!' (2 способа)

const str = 'vania@mail.com'

console.log(str.replaceAll('@', '!'));

console.log(str.split('@').join('!'));