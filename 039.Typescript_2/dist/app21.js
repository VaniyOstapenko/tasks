//Напишите программу, которая находит и выводит длину наиболее длинного слова в заданной строке.
const str21 = "hello vaniatka how are you".split(" ");
let newStr21 = "";
for (let i = 0; i < str21.length; i++) {
    if (str21[i].length > newStr21.length) {
        newStr21 = str21[i];
    }
}
console.log(newStr21);
