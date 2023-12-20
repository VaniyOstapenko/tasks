//Создайте абстрактный класс"Транспортное средство"(Vehicle), который содержит абстрактные методы "завести" (start) и "остановить" (stop).
//Реализуйте классы наследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle), которые расширяют класс"Транспортное средство"и реализуют абстрактные
//методы в соответствии с особенностями каждого транспортного средства. (седержимое методов: console.log)
class Vehicle {
}
class Car extends Vehicle {
    start() {
        console.log("Go");
    }
    stop() { }
}
class Motorcycle extends Vehicle {
    stop() {
        console.log("Stop");
    }
    start() { }
}
const car = new Car();
car.start();
const motorcycle = new Motorcycle();
motorcycle.stop();
