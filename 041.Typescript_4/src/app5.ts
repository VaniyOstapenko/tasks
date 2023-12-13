//Создайте класс Rectangle, который содержит свойства width(ширина)и height
//(высота), а так же метод getArea(), который возвращает площадь прямоугольника
//(ширина*высота).Создайте экземпляр класса Rectangleи выведите его площадь.

//1
// class Rectangle {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea():number {
//     return this.width * this.height;
//   }
// }

// const rectangle = new Rectangle(25, 4);
// console.log(rectangle.getArea());

//2
// class Rectangle {
//   width: number;
//   height: number;

//   getArea(): number {
//     return this.width * this.height;
//   }
// }

// const rectangle = new Rectangle();
// rectangle.width = 25;
// rectangle.height = 4;
// console.log(rectangle.getArea());

//3
class Rectangle {
  getArea(width: number, height: number): number {
    return width * height;
  }
}

const rectangle = new Rectangle();
console.log(rectangle.getArea(25, 4));
