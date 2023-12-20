//Создайте абстрактный класс"Транспортное средство"(Vehicle), который содержит абстрактные методы "завести" (start) и "остановить" (stop).
//Реализуйте классы наследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle), которые расширяют класс"Транспортное средство"и реализуют абстрактные
//методы в соответствии с особенностями каждого транспортного средства. (седержимое методов: console.log)

abstract class Vehicle {
  abstract start(): void;
  abstract stop(): void;
}

class Car extends Vehicle {
  start(): void {
    console.log("Go");
  }
  stop(): void {}
}

class Motorcycle extends Vehicle {
  stop(): void {
    console.log("Stop");
  }
  start(): void {}
}

const car = new Car();
car.start();

const motorcycle = new Motorcycle();
motorcycle.stop();
