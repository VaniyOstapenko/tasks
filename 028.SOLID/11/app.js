// Реализуйте класс Сonversion, сдержащий метод doOctalNumber, преобразующий все числа 10 системы счисления в 8

class Conversion {
    doDecimalNymber() {
        const num = 42;
        return num.toString(8)
    }
}

const conversion = new Conversion();
const result = conversion.doDecimalNymber();
console.log(result);