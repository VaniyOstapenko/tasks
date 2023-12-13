//Создайте класс Student, который содержит свойства name(имя)и
//age(возраст). Инициализация свойств name, age происходит в
//конструкторе класса.Создайте несколькоэкземпляровкласса
//Studentивыведитесвойства.
class Student3 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const student3 = new Student3("Vania", 28);
console.log(student3.name);
console.log(student3.age);
