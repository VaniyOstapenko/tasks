// Создайте класс Car с параметрами make, model, year.
// НапишитеметодgetCarAge(currentYear), который
// возвращает возраст машины.
// Входные: Car("Toyota", "Camry", 2015) → Результат: Возрастмашины: 9лет
// Входные: Car("Honda", "Civic", 2020) → Результат: Возрастмашины: 4года
// Входные: Car("Ford", "Mustang", 1967) → Результат: Возрастмашины: 57лет

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(currentYear) {
        const res = currentYear - this.year

        return `Возраст машины ${res} лет`
    }
}

const car = new Car("Toyota", "Camry", 2015)
console.log(car.getCarAge(2024));