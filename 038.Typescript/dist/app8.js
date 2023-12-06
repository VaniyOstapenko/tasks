//Создайте переменную str и присвойте ей строковое значение. Используя цикл for, выведите каждый второй символ строки.
let stri = "hello vania".split(" ");
let res = [];
for (let i = 0; i < stri.length; i++) {
    res.push(stri[i].slice(1, 2));
}
console.log(res.join(" "));
