// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ/значение. IIFE

const obj = {
  name: "Ivan",
  surname: "Ostapenko",
  age: 28,
  growth: 175,
};

(function (obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  console.log(count);
}(obj));
