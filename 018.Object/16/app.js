// На входе объект из 5 свойств. Значения вводим с клавиатуры.
// Необходимо проитерироватьm значения объекта и сформировать на основе этих чисел массив

const obj = {
  Имя: "",
  Фамилия: "",
  Возраст: "",
  Рост: "",
  Вес: "",
};

for (let key in obj) {
  obj[key] = prompt(`введите значение ${obj[key]}`);
}

let arr = [];

for (let key in obj) {
  if (!isNaN(obj[key])) {
    arr.push(obj[key]);
  }
}

console.log(obj);
console.log(arr);
