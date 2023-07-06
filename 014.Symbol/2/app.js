// На вход подаются 2 строки. 
// Необходимо найти в 1 строке 2 подстроку и вывести true, 
// если совпадение есть, в противном случае false

let str_1 = 'Hello Ivan. How are you?';
let str_2 = "I'm fine. And you?";

if (str_1.includes('Ivan')) {
    console.log(true);
} else {
    console.log(false);
} if (str_2.includes('Ivan')) {
    console.log(true);
} else {
    console.log(false);
}