//Создайте переменную str и присвойте ей строковое значение. Используя цикл while, замените все гласные символы в строке на символ *.

let t: string = "hello";

let stf: string = "aeiouy";
let i: number = 0;
while (i < stf.length) {
  if (t.includes(stf[i])) {
    t = t.replaceAll(stf[i], "*");
  }
  i++;
}

console.log(t);
