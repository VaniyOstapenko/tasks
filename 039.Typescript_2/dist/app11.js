//На входе динамичный массив строк. Используя every выведите true если все элементы массива соответствуют регулярному выражению почты
const str11 = [
    "vania@mail.com",
    "ivan12@mail.by",
    "kalivan12@gmail.com",
];
let arr11 = str11.every((el) => {
    if (/^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,5}$/gm.test(el)) {
        return true;
    }
});
console.log(arr11);
