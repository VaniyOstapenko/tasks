//Создайте переменную password и присвойте ей строковое значение. Если длина пароля больше 8 символов,
//выведите сообщение "Пароль надежный", иначе выведите сообщение "Пароль слишком короткий".
const password = prompt("Введите значение");
//1
if (password.length > 8) {
    console.log("Пароль надёжный");
}
else {
    console.log("Пароль слишком короткий");
}
//2
password.length > 8
    ? console.log("Пароль надёжный")
    : console.log("Пароль слишком короткий");
//3
console.log(password.length > 8 ? "Пароль надёжный" : "Пароль слишком короткий");
//4
if (/^[A-Za-z0-9]{8,}$/gm.test(password)) {
    console.log("Пароль надёжный");
}
else {
    console.log("Пароль слишком короткий");
}
