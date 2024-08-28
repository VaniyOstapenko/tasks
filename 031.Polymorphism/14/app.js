// Создайте родительский класс NumberGenerator, который будет генерировать и возвращать случайное число с помощью метода generateNumber(). 
// Затем создайте дочерний класс SquareRootCalculator, который переопределяет метод generateNumber() и находит квадратный корень этого числа без 
// использования встроенной функции Math.sqrt().
// Входные: new SquareRootCalculator().generateNumber()(предположим, сгенерированноечисло16)→Результат: 4
// Входные: new SquareRootCalculator().generateNumber()(предположим, сгенерированноечисло25)→Результат: 5

class NumberGenerator {
    generateNumber() {
        return Math.floor(Math.random() * 100)
    }
}

class SquareRootCalculator extends NumberGenerator {
    generateNumber() {
        const n = super.generateNumber()
        for (let i = 0; i <= 100; i++) {
            if (i * i == n) {
                return `Квадратный корень числа: ${n} -> ${i}`;
            } else {
                return `Число ${n} не имеет адекватного квадратного кореня`;
            }
        }
    }
}

const squareRootCalculator = new SquareRootCalculator()
console.log(squareRootCalculator.generateNumber());
