//Создайте массив объектов, представляющих книги, и отобразите книги где цена каждой > 50(price –одно из полей объекта)

interface iUser19 {
  id: number;
  author: string;
  price: number;
}

const arr19: iUser19[] = [
  { id: 1, author: "Булгаков", price: 40 },
  { id: 2, author: "Достоевский", price: 30 },
  { id: 3, author: "Пушкин", price: 55 },
  { id: 4, author: "Лермантов", price: 60 },
  { id: 5, author: "Толстой", price: 70 },
];

const newArr19 = arr19.filter((el: iUser19) => {
  if (el.price > 50) {
    return true;
  }
});

console.log(newArr19);
