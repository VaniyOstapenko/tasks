// Реализуйте класс Сonversion, сдержащий метод do DecimalNumber, преобразующий все числа 10 системы счисления в 2

class Conversion {
    doDecimalNymber() {
        const num = 42;
        return num.toString(2)
    }
}

const conversion = new Conversion();
const result = conversion.doDecimalNymber();
console.log(result);