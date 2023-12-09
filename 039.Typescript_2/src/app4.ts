//Создайте динамический массив строк. Используя Some выведите true в случае если хотя бы 1 элемент массива имеет длину > 5 символов.

const strArray: string[] = [];

for (let i = 0; i < 5; i++) {
  strArray.push(prompt("Введите элемент массива"));
}

let strNewArr = strArray.some((el: string) => el.length > 5);

console.log(strNewArr);
