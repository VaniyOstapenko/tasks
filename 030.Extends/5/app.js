// СоздайтеклассRectangle, который будет иметь свойства width иheight.
// Напишите метод getArea(), который возвращает площадь прямоугольника.
// Входные: Rectangle(5, 10) → Результат: 50
// Входные: Rectangle(3, 7) → Результат: 21
// Входные: Rectangle(6, 9) → Результат: 54

class Rectangle {
    constructor(width, heigh) {
        this.width = width;
        this.heigh = heigh;
    }

    getArea() {
        return this.width * this.heigh;
    }
}

const rectangle = new Rectangle(5, 10)
console.log(rectangle.getArea());