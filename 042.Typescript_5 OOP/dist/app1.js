//Создайте абстрактный класс Shape, содержащий абстрактный метод calculateArea().Напишите дочерний классRectangle, который наследует Shapeи
//реализует метод calculateArea() для расчета площадь и прямоугольника. Затем создайте объект класса Rectangle и выведите его площадь на экран.
//(для вычисления площадь и прямоугольника S = height * wigth)
class Shape {
}
class Rectangle extends Shape {
    width;
    height;
    calculateArea() {
        return this.height * this.width;
    }
}
const rectangle = new Rectangle();
rectangle.width = 10;
rectangle.height = 5;
console.log(rectangle.calculateArea());
