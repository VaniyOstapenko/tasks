// Напишите функцию, которая принимает почту и возвращает
// объект, вида { email, active: true / false } true,
// если почта содержит @, .com / .ru. False в противном
// случае

const email = "ostapenkovaniy@mail.com";

function checkEmail(em) {
  let obj = {};
  obj.email = "em";
  if (
    (em.includes("@") && em.includes(".com")) || em.includes(".ru") || em.includes(".by")) {
    obj.active = true;
  } else {
    obj.active = false;
  }
  return obj;
}

let result = checkEmail(email);
console.log(result);
