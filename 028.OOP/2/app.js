// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность, произведение, частное. 
// 2 числа передаются в класс, далее вызываеются соответствующие функции. Добавить проверки на ввод

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sum() {
        return `Результат ${this.num1} + ${this.num2}`;
    }
    minus() {
        return `Результат ${this.num1} - ${this.num2}`;
    }
    multy() {
        return `Результат ${this.num1} * ${this.num2}`;
    }
    del() {
        return `Результат ${this.num1} / ${this.num2}`;
    }
}

const calculator = new Calculator(2, 6)
console.log(calculator.sum());
console.log(calculator.minus());
console.log(calculator.multy());
console.log(calculator.del());