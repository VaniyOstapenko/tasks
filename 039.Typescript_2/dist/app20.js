//Создайте массив объектов, представляющих книги, и найдите книгу с самым большим количеством страниц(count –одно из полей объекта)
const arr20 = [
    { id: 1, author: "Булгаков", price: 30, count: 34 },
    { id: 2, author: "Достоевский", price: 50, count: 50 },
    { id: 3, author: "Пушкин", price: 28, count: 80 },
    { id: 4, author: "Лермантов", price: 67, count: 14 },
    { id: 5, author: "Каренина", price: 106, count: 154 },
];
let result20;
let newCount = 0;
for (let i = 0; i < arr20.length; i++) {
    if (newCount < arr20[i].count) {
        newCount = arr20[i].count;
        result20 = arr20[i];
    }
}
console.log(result20);
