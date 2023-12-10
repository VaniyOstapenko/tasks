//Напишите программу, которая находит и выводит наиболее часто встречающийся символ в заданной строке.

const str14: string = "lhoel";

let newStr14: string = "";

let maxCount14: number = 0;

let timeCount: number = 0;

for (let i = 0; i < str14.length; i++) {
  timeCount = 0;
  for (let j = 0; j < str14.length; j++) {
    if (str14[i] === str14[j]) timeCount++;
    if (timeCount > maxCount14) {
      maxCount14 = timeCount;
      newStr14 = str14[i];
    }
  }
}

console.log(newStr14);
