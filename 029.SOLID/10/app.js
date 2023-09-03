// Реализуйте класс Сonversion, сдержащий метод doBinaryNumber, преобразующий все числа 2 системы счисления в 10

class Conversion {
    doDecimalNymber() {
        const num = 101010;
        return parseInt(num, 2);
    }
}

const conversion = new Conversion();
const result = conversion.doDecimalNymber();
console.log(result);