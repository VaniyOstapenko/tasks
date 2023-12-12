//У вас есть массив строковых значений почт. Необходимо вывести значения массива без дубликатов. Добавить проверки на тип данных, почту

const arr8: string[] = ["vania@mail.com", "ivan@mail.by", "vania@mail.com"];

function test8(arr8: string[]): string[] {
  try {
    isValid(arr8);
    let newArr8: string[] = [];
    for (let i = 0; i < arr8.length; i++) {
      if (!newArr8.includes(arr8[i])) {
        newArr8.push(arr8[i]);
      }
    }
    return newArr8;
  } catch (error) {
    return error.message;
  }
}

function isValid(arr8: string[]): never | void {
  if (!Array.isArray(arr8)) throw new Error("Неверный тип данных");
  if (
    !arr8.every((el: string) => /^[a-zA-Z09]+@[a-z]+\.[a-z]{2,5}$/gm.test(el))
  )
    throw new Error("Неверный ввод почты");
}

console.log(test8(arr8));
