//Создайте класс Student, который содержит свойства name(имя)иage(возраст).
//Инициализация свойств name, age происходит в getter, setter класса. Создайте
//экземпляр класса Student и выведитес войства.

class Student4 {
  name: string;
  age: number;

  setName(name: string): void {
    this.name = name;
  }

  setAge(age: number): void {
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }
}

const student4 = new Student4();
student4.setName("Vania");
student4.setAge(28);
console.log(student4.getName());
console.log(student4.getAge());
