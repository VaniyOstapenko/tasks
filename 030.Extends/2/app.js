// Классы Personи Customer. Напишите класс Personс атрибутами 
// данных для имени, адреса и телефонного номера человека. 
// Затем напишите класс Customer (Клиент), который является 
// подклассом класса Person. Класс Customer должен иметь поле 
// для номера клиента и атрибут булевых данных, указывающий, 
// хочет ли клиент быть в списке рассылки или нет. 
// Продемонстрируйте методы получатели и модификаторы 
// экземпляракласса Customer

class Person {
    name;
    address;
    phone;
    number;
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    getNumber() {
        return this.number;
    }
    setName(name) {
        this.name = name;
    }
    setAddress(address) {
        this.address = address;
    }
    setNumber(number) {
        this.number = number;
    }
}

class Customer extends Person {
    numberOfClient;
    bool;
    getNumberOfClient() {
        return this.numberOfClient;
    }
    getBool() {
        return this.bool;
    }
    setNumberOfClient(numberOfClient) {
        this.numberOfClient = numberOfClient;
    }
    setBool(bool) {
        this.bool = bool;
    }
}

const customer = new Customer();
customer.setName('Vaniy');
customer.setAddress('Александрова 11');
customer.setNumber('+(375) 29 255 71 53');
customer.setNumberOfClient(1);
customer.setBool(true);
const name_ = customer.getName();
const address = customer.getAddress();
const number = customer.getNumber();
const numberOfClient = customer.getNumberOfClient();
const bool = customer.getBool();
console.log(name_, '->', address, '->', number, '->', numberOfClient, '->', bool);