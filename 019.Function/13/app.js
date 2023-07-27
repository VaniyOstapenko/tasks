// На входе строка. Необходимо создать функцию, возвращающую true,
// если это слово анаграмма и false в противном случае

let str1 = "пила";
let str2 = "липа";

function doCheckAnagrama(word_1, word_2) {
  if (word_1.split("").sort().join("") === word_2.split("").sort().join("")) {
    return true;
  } else {
    return false;
  }
}

let result = doCheckAnagrama(str1, str2);
console.log(result);
