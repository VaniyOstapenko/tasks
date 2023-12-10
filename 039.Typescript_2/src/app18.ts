//Создайте массив объектов, представляющих книги, и найдите книгу где автор Булгаков(author –одно из полей объекта)

interface iUser {
  id: number;
  author: string;
}

const arr18: iUser[] = [
  { id: 1, author: "Булгаков" },
  { id: 2, author: "Достоевский" },
  { id: 3, author: "Толстой" },
];

let newArr18 = arr18.filter((el: iUser) => {
  if (el.author == "Булгаков") {
    return true;
  }
});

console.log(newArr18);
