// На входе массив. Необходимо создать функцию проверки на то
// что в массиве только числа. Функция возвращает true,
// если в массиве только числа и false в противном случае

const arr = [1, 2, "Ivan", 7, 3, 5, "Hello"];

function isTrue(a) {
  let result2 = a.every(function (el) {
    !isNaN(el);
  });
  return result2;
}
let result = isTrue(arr);
console.log(result);