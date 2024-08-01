// Дана строка в виде числа. 
// Необходимо просуммировать все элементы числа ‘123’ -> 6 ‘111111111111’ -> 12

const str = '123';
let count = 0;
for (let i = 0; i < str.length; i++) {
    count += Number(str[i])
}

console.log(count);