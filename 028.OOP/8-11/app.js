// Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет, 
// является ли она корректным емейлом или нет. Если является -возвращает true, если не является -то false.
// Дополнить класс Validator. Добавить метод isURL для проверки на url. 
// Дополнить класс Validator. Добавить метод isDate для проверки на дату. 
// Дополнить класс Validator. Добавить метод isPhone для проверки на номер телефона.

class Validator {
    isEmail(str) {
        try {
            if (!/^[a-zA-Z]+@+[a-z]+\.+[a-z]{2,4}$/g.test(str)) {
                throw new Error('ошибка ввода почты')
            } else {
                return true;
            }
        } catch (error) {
            return error.message
        }
    }
    isURL(str) {
        try {
            if (!/^(https:\/\/)+www+\.[a-zA-Z]+\.+[a-z]{2,3}\/$/g.test(str)) {
                throw new Error('ошибка ввода URL')
            } else {
                return true;
            }
        } catch (error) {
            return error.message
        }
    }
    isDate(str) {
        try {
            if (!/^[0-9]{2}\.+[0-9]{2}\.+[0-9]{4}$/g.test(str)) {
                throw new Error('ошибка ввода даты')
            } else {
                return true;
            }
        } catch (error) {
            return error.message
        }
    }
    isPhone(str) {
        try {
            if (!/^(\+375)+[0-9]{9}$/g.test(str)) {
                throw new Error('ошибка ввода номера телефона')
            } else {
                return true;
            }
        } catch (error) {
            return error.message
        }
    }
}

const validator = new Validator();
const result1 = validator.isEmail('ostapenko@mail.com')
const result2 = validator.isURL('https://www.manutd.com/')
const result3 = validator.isDate('29.08.2023')
const result4 = validator.isPhone('+375292557153')
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);