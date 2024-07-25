// На вход подаются 2 строки. 
// Необходимо найти в 1 строке 2 подстроку и вывести true, 
// если совпадение есть, в противном случае false

const str1 = 'Hi i"m Ivan, How are you?'
const str2 = 'How are you';

if (str1.includes(str2)) {
    console.log(true);
} else {
    console.log(false);
}