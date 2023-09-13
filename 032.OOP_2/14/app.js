// Наследование. Работа с геттерами и сеттерами. Классы Person и Customer. Напишите класс Person с атрибутами данных 
// для имени, фамилии. Затем напишите класс Customer, который является подклассом класса Person. Класс Customer 
// должен иметь поле телефонного номера человека.Продемонстрируйте экземпляр класса Customer вызвав геттеры и 
// сеттеры собственного класса и базового

class Person {
    name;
    surname;
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    getName() {
        return `${this.name} ${this.surname}`;
    }
}

class Customer extends Person {
    phoneNumber;
    setNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    getNumber() {
        return this.phoneNumber;
    }
}

const customer = new Customer();
customer.setName('Vaniy');
customer.setSurname('Ostapenko');
customer.setNumber('+37529 255 71 53');
console.log(customer.getName(), customer.getNumber());