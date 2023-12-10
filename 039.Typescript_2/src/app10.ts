//Создайте массив строк и преобразуйте каждую строку в новую строку, содержащую только гласные буквы.

const arr10: string[] = ["hello", "vania", "ostapenko"];

let str10: string = "";

for (let i = 0; i < arr10.length; i++) {
  str10 += arr10[i] + ' ';
}

let newStr10: string = "pbkfvsmzhtdln";

for (let i = 0; i < newStr10.length; i++) {
  if (str10.includes(newStr10[i])) {
    str10 = str10.replaceAll(newStr10[i], "");
  }
}

console.log(str10.split(" "));
