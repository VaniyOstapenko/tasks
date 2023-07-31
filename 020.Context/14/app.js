// Напишите функцию, генерирующую пароль из 8 символов. (Math.random)

function doPassword() {
  return Math.random().toString(36).slice(-8);
}

let result = doPassword();
console.log(result);
