// Реализовать следующие классы Круг, Треугольник и Квадрат, которые наследуются от Figure. Каждый экземпляр 
// класса должен содержать свойства Площадь и Имя. Вывести всю информацию о фигурах в консоль. 
// Площадь должна рассчитываться по математическим формулам.Класс Figureсодержит 
// поля: pi= 3.14, r= radius, a= side, h= height, а также сеттеры для данных полей. 
// Дочерние классы содержать геттеры на получение площади

class Figure {
    pi = 3.14;
    radius;
    side;
    heigth;
    S_Circle;
    circleName;
    S_Triangle;
    triangleName;
    S_Square;
    squareName;
    setRadius(radius) {
        this.radius = radius;
    }
    setSide(side) {
        this.side = side;
    }
    setHeight(height) {
        this.height = height;
    }
    setS_Circle(S_Circle) {
        this.S_Circle = S_Circle;
    }
    setCircleName(circleName) {
        this.circleName = circleName;
    }
    setS_Triangle(S_Triangle) {
        this.S_Triangle = S_Triangle;
    }
    setTriangleName(triangleName) {
        this.triangleName = triangleName;
    }
    setS_Square(S_Square) {
        this.S_Square = S_Square;
    }
    setSquareName(squareName) {
        this.squareName = squareName;
    }
}

class Circle extends Figure {
    getCircle() {
        return `${this.S_Circle} ${this.circleName}` + ' = ' + this.pi * this.radius ** 2;
    }
}

class Triangle extends Figure {
    getTriangle() {
        return `${this.S_Triangle} ${this.triangleName}` + ' = ' + (this.side * this.height) / 2;
    }
}

class Square extends Figure {
    getSquare() {
        return `${this.S_Square} ${this.squareName}` + ' = ' + this.side ** 2;
    }
}

const circle = new Circle();
const triangle = new Triangle();
const square = new Square();
circle.setRadius(15);
circle.setS_Circle('S')
circle.setCircleName('Круга');
triangle.setSide(20);
triangle.setHeight(30);
triangle.setS_Triangle('S')
triangle.setTriangleName('Треугольника');
square.setSide(5);
square.setS_Square('S')
square.setSquareName('Квадрата');
console.log(circle.getCircle());
console.log(triangle.getTriangle());
console.log(square.getSquare());



