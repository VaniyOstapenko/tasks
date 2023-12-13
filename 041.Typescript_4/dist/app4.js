//Создайте класс Student, который содержит свойства name(имя)иage(возраст).
//Инициализация свойств name, age происходит в getter, setter класса. Создайте
//экземпляр класса Student и выведитес войства.
class Student4 {
    name;
    age;
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const student4 = new Student4();
student4.setName("Vania");
student4.setAge(28);
console.log(student4.getName());
console.log(student4.getAge());
