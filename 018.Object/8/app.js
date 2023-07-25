// На входе статичный объект. Необходимо посчитать количество пар (ключ: значение)

const obj = {
  name: "Ivan",
  surname: "Ostapenko",
  age: 28,
};

let count = 0;

for (let key in obj) {
  if (obj[key]) {
    count++;
  }
}
console.log(count);
