//Создайте массив из чисел и строк и удалите из него все повторяющиеся элементы, оставив только уникальные значения.

let arr9: (string | number)[] = [1, 35, "Vania", 34, "Ostapenko", 35, "Vania"];

let newArr9: (string | number)[] = [];

for (let i = 0; i < arr9.length; i++) {
  if (!newArr9.includes(arr9[i])) {
    newArr9.push(arr9[i]);
  }
}

console.log(newArr9);
