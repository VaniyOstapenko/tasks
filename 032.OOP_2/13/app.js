// Реализуйте класс Calculator, который будет содержать метод
// doSqrt, возвращающий корень числа принимаемого в параметрах. 

class Calculator {
    doSqrt(n) {
        console.log(Math.sqrt(n));
    }
}

const calculator = new Calculator();
calculator.doSqrt(16);