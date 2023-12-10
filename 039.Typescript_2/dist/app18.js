//Создайте массив объектов, представляющих книги, и найдите книгу где автор Булгаков(author –одно из полей объекта)
const arr18 = [
    { id: 1, author: "Булгаков" },
    { id: 2, author: "Достоевский" },
    { id: 3, author: "Толстой" },
];
let newArr18 = arr18.filter((el) => {
    if (el.author == "Булгаков") {
        return true;
    }
});
console.log(newArr18);
