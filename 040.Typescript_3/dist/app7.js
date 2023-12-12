//У вас есть массив объектов вида приведенного в приложении. Необходимо вывести тот товар, где количество * прайс является наибольшим значением
const arr7 = [
    { id: 1, title: "Часы", count: 10, price: 500 },
    { id: 2, title: "Смартфон", count: 33, price: 1500 },
    { id: 3, title: "Моноблок", count: 6, price: 2200 },
    { id: 4, title: "Ноутбук", count: 13, price: 3000 },
    { id: 5, title: "Планшет", count: 22, price: 2100 },
];
let result7;
let maxCount7 = 0;
for (let i = 0; i < arr7.length; i++) {
    if (maxCount7 < arr7[i].count * arr7[i].price) {
        maxCount7 = arr7[i].count * arr7[i].price;
        result7 = arr7[i];
    }
}
console.log(result7);
