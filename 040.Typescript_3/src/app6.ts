//У вас есть массив объектов вида приведенного в приложении. Необходимо вывести средний прайс среди всех продуктов

interface iUser6 {
  id: number;
  title: string;
  count: number;
  price: number;
}

const arr6: iUser6[] = [
  { id: 1, title: "Часы", count: 10, price: 500 },
  { id: 2, title: "Смартфон", count: 33, price: 1500 },
  { id: 3, title: "Моноблок", count: 6, price: 2200 },
  { id: 4, title: "Ноутбук", count: 13, price: 3000 },
  { id: 5, title: "Планшет", count: 22, price: 2100 },
];

const newArr6 = arr6.reduce((sum: number, el: iUser6) => {
  return sum + el.price;
}, 0);

console.log(newArr6 / arr6.length);
