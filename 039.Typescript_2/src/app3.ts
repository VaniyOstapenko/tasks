//На входе динамичный массив чисел. Используя reduce выведите сумму чисел массива

const array: number[] = [];

for (let i = 0; i < 5; i++) {
  array.push(+prompt("Введите значение массива"));
}

let newArray = array.reduce((sum: number, el: number) => {
  return sum + el;
}, 0);

console.log(newArray);
