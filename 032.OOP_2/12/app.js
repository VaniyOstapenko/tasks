// Работа с геттерами и сеттерами. Реализуйте класс Validator.Класс содержит getEmail, setEmail, 
// а также метод IsEmail, проверяющий, является ли входная строка корректным email(Если является -возвращает true, 
// если не является -false. Вызвать из экземпляра класса методы setEmail. getEmail, isEmail

class Validator {
    email;
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    isEmail() {
        if (!/^[a-zA-Z0-9\.]+@+[a-z]+\.+[a-z]{2,4}$/g.test(this.email)) {
            return 'Неверный ввод почты';
        } else {
            return true;
        }
    }
}

const validator = new Validator();
validator.setEmail('ostapenko@mail.com');
console.log(validator.getEmail());
console.log(validator.isEmail());