// На вход подается url. 
// Необходимо вывести содержимое url после 
// протокола (http/https) 
// https://www.instagram.com/hschool.official/-> 
// www.instagram.com/hschool.official/

let str = 'https://www.instagram.com/hschool.official/';

console.log(str.slice(str.indexOf('/') + 2));