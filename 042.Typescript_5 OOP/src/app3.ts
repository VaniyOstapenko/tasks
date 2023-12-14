//СоздайтеабстрактныйклассFruitсполемarray–массивобъектов(id, title,price).
//Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
//информациюофрукте,гдеtitle=яблоко.

interface iFruit {
  id: number;
  title: string;
  price: number;
}

abstract class Fruit {
  array: iFruit[];
}

class Apple extends Fruit {
  array: iFruit[] = [
    { id: 1, title: "Apple", price: 10 },
    { id: 2, title: "Pear", price: 20 },
  ];

  getAppleInfo(): iFruit[] {
    return this.array.filter((el: iFruit) => el.title == "Apple");
  }
}

const apple = new Apple();
console.log(apple.getAppleInfo());
