//СоздайтеабстрактныйклассFruitсполемarray–массивобъектов(id, title,price).
//Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
//информациюофрукте,гдеtitle=яблоко.
class Fruit {
    array;
}
class Apple extends Fruit {
    array = [
        { id: 1, title: "Apple", price: 10 },
        { id: 2, title: "Pear", price: 20 },
    ];
    getAppleInfo() {
        return this.array.filter((el) => el.title == "Apple");
    }
}
const apple = new Apple();
console.log(apple.getAppleInfo());
