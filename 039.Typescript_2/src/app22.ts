//Создайте массив объектов, представляющих сотрудников, с полями "имя"и "зарплата". Найдите среднюю зарплату всех сотрудников.

interface iUser22 {
  id: number;
  name: string;
  salary: number;
}

const arr22: iUser22[] = [
  { id: 1, name: "Vania", salary: 1000 },
  { id: 2, name: "Anton", salary: 2000 },
  { id: 3, name: "Nastia", salary: 3000 },
];

let newArr22 = arr22.reduce((sum: number, el: iUser22) => {
  return sum + el.salary;
}, 0);

console.log(newArr22 / arr22.length);
