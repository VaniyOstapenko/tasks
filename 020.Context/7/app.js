// Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом последующем вызове функции
function sumStr() {
  let str = "hello";
  return function sumStr2() {
    str += "Vaniy";
    console.log(str);
  };
}

let result = sumStr();

result();
result();
result();
