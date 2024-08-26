// Создайте класс DataGenerator с полем size и методом generateArray(), который возвращает массив
//  чисел от 1 до size. Наследуйте от него класс SquareArray, добавив метод getSquareArray(), который
//  вызываетgenerateArray() и возвращает массив, где каждый элемент возведенв квадрат.
//  Входные: SquareArray(3).getSquareArray() → Результат: [1, 4, 9]
//  Входные: SquareArray(5).getSquareArray() → Результат: [1, 4, 9, 16, 25]
//  Входные: SquareArray(2).getSquareArray() → Результат: [1, 4]

class DataGenerator {
    constructor(size) {
        this.size = size;
    }

    generateArray() {
        const arr = [];
        for (let i = 1; i <= this.size; i++) {
            arr.push(i)
        }
        return arr;
    }
}

class SquareArray extends DataGenerator {
    getSquareArray() {
        return this.generateArray().map((el) => el ** 2);
    }
}

const squareArray = new SquareArray(3)
console.log(squareArray.getSquareArray());