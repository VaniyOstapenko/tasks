// Напишите функцию, генерирующую пароль из 8 символов. (Math.random)

function doPassword() {
  return Math.random().toString(36).slice(-8);
}

let result = doPassword();
console.log(result);

function doPass() {
  let str = '';
  for (let i = 0; i < 8; i++) {
    let num = Math.round(Math.random() * 9);
    str += num
  }
  return str
}

let result1 = doPass()
console.log(result);
