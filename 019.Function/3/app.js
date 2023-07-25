// Напишите функцию, которая принимает строку в маленьком
// регистре и возаращает строку, где каждое слово
// начинается с большого регистра hschoolcompany ->
// HschoolCompany

const str = "hschool company".split(" ");

function doUpperCase(string) {
  let a = "";
  for (let i = 0; i < string.length; i++) {
    a += string[i][0].toUpperCase() + string[i].slice(1) + " ";
  }
  return a;
}

let result = doUpperCase(str);

console.log(result);
