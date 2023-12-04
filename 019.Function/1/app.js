// Пользователь вводит имя фамилию. Необходимо создать функцию возвращающую строку вида «Привет, {имя} {фамилия}»

function sayHello(a, b) {
  return `привет, ${a} ${b}`;
}

const result = sayHello("Иван", "Остапенко");
console.log(result);

const result_1 = sayHello("Роналдо", "Криштиано");
console.log(result_1);
