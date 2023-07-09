// На вход программе подается строка. 
// Напишите программу, которая меняет регистр символов, 
// другими словами замените все строчные символы заглавными и наоборот. Swap Case => sWAPcASE

let a = prompt('ввод');

let result = '';

for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i].toUpperCase()) {
        result += a[i].toLowerCase();
    } else {
        result += a[i].toUpperCase();
    }
}
console.log(result);