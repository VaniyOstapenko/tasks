//На входе динамичный массив строк. Используя forEach создайте новый массив из элементов, каждое значение которого имеет вид !name
//[“hschool”, “company”] -> [“!hschool”, “!company”]
const arr15 = [];
for (let i = 0; i < 5; i++) {
    arr15.push(prompt("Введите элемент массива"));
}
let newArr15 = [];
arr15.forEach((el) => {
    newArr15.push("!" + el);
});
console.log(newArr15);
