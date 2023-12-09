//На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и заполняет массив. Необходимо создать массив только из чисел.

let strNumArr: (string | number)[] = [];

for (let i = 0; i < 5; i++) {
  strNumArr.push(prompt("Введите элементы массива"));
}

let feet = strNumArr.filter((el: number) => {
  if (!isNaN(el)) {
    return true;
  }
});

console.log(feet);
