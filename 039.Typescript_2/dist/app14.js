//Напишите программу, которая находит и выводит наиболее часто встречающийся символ в заданной строке.
const str14 = "hello";
let newStr14 = "";
let newStrRepeat = "";
for (let i = 0; i < str14.length; i++) {
    if (!newStr14.includes(str14[i])) {
        newStr14 += str14[i];
    }
    else {
        newStrRepeat += str14[i].repeat(1);
    }
}
console.log(newStrRepeat);
