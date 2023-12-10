//Дан массив объектов с полями "название", "цена" и "количество". Найдите суммарную стоимостью всех товаров учитывая количество каждого.
//Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

interface iUser23 {
  id: number;
  name: string;
  price: number;
  count: number;
}

const arr23: iUser23[] = [
  { id: 1, name: "Пельмени", price: 2.35, count: 5 },
  { id: 2, name: "Яйца", price: 3.23, count: 10 },
  { id: 3, name: "Хлеб", price: 1.24, count: 8 },
  { id: 4, name: "Молоко", price: 3.5, count: 4 },
];

let newArr23 = arr23.reduce((sum: number, el: iUser23) => {
  return sum + el.price * el.count;
}, 0);

console.log(newArr23);
