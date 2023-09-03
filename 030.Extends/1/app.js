// Классы Employeeи ProductionWorker. Напишите класс Employee(Сотрудник),который содержит: • имя сотрудника; • номер 
// сотрудника. Затем напишите класс ProductionWorker(Рабочий), который является подклассом класса Employee. 
// Класс ProductionWorkerсодержит: • номер смены (целое число, к примеру, 1, 2 или 3); • ставка почасовой оплаты 
// труда. Напишите методыполучатели и методы-модификаторы длякаждого класса. После того как эти классы будут 
// написаны, напишите программу, которая создает объект класса ProductionWorkerи предлагает пользователю ввести 
// данные по каждому атрибуту данных этого объекта. Сохраните данные в объекте и примените в этом объекте методы 
// получатели, чтобы получить эти данные и вывести их на экран. 

class Employee {
    nameOfEmployee;
    numOfEmloyee;
    getNameOfEmloyee() {
        return this.nameOfEmployee;
    }
    getNumOfEmployee() {
        return this.numOfEmloyee;
    }
    setNameOfEmloyee(nameOfEmployee) {
        this.nameOfEmployee = nameOfEmployee;
    }
    setNumOfEmloyee(numOfEmloyee) {
        this.numOfEmloyee = numOfEmloyee;
    }
}

class ProductionWorker extends Employee {
    numOfChange;
    rateOfChage;
    getNumOfChange() {
        return this.numOfChange;
    }
    getRateOfChange() {
        return this.rateOfChage;
    }
    setNumOfChage(numOfChange) {
        this.numOfChange = numOfChange;
    }
    setRateOfChange(rateOfChage) {
        this.rateOfChage = rateOfChage;
    }
}

const productionWorker = new ProductionWorker();
productionWorker.setNameOfEmloyee('Vaniy');
productionWorker.setNumOfEmloyee(1);
productionWorker.setNumOfChage(2);
productionWorker.setRateOfChange(1000000);
console.log(productionWorker.getNameOfEmloyee());
console.log(productionWorker.getNumOfEmployee());
console.log(productionWorker.getNumOfChange());
console.log(productionWorker.getRateOfChange());