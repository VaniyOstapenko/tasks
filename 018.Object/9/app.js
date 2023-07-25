// На входе статичный объект. Необходимо
// посчитать количество пар (ключ: значение)
// где значение число и вывести количество

const obj = {
  name: "Ivan",
  surname: "Ostapenko",
  age: 28,
  weigth: 72,
  heigth: 175,
};

let count = 0;

for(let key in obj){
    if(!isNaN(obj[key])){
        count++
    }
}

console.log(count);