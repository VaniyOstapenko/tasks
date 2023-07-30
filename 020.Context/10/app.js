// Напишите функцию, которая принимает два параметра: предложение из нескольких слов и букву.
// Функция должна подсчитывать количество вхождений указанной буквы в строке.Добавить проверки

let str = "manchester united".split("");
let letter = "e";

function doCountLetter(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

let result = doCountLetter(str, letter);
console.log(result);
