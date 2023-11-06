// На входе статичный объект. Необходимо
// вывести все числовые ключи.

const obj = {
    1: "Ivan",
    Surname: "Ostapenko",
    3: "Igorevich",
  };
  
  for (let key in obj) {
    if (!isNaN(key)) {
      console.log(key);
    }
  }
  