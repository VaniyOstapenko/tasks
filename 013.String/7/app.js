// На вход программе подаётся строка. 
// Замените все @ на '!' (2 способа)

let a = prompt();

if (isNaN(a)) {
    console.log(a.replaceAll('@', '!'));
} else {
    console.log('ошибка');
}

console.log(isNaN(a) ? a.replaceAll('@', '!') : 'ошибка');

console.log(isNaN(a) ? a.split('@').join('!') : 'ошибка');