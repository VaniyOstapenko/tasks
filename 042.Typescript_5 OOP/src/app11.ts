//Создайте абстрактный класс University, который содержит абстрактный метод getStudentById и поле students – массив объектов. Student–класс наследник,
//реализующий абстрактный метод getStudentById.

interface iStudent {
  id: number;
  name: string;
  surname: string;
}

abstract class University {
  abstract getStudentById(num: number): iStudent[];

  students: iStudent[] = [
    { id: 1, name: "Vania", surname: "Ostapenko" },
    { id: 2, name: "Anton", surname: "Ostapenko" },
    { id: 3, name: "Regina", surname: "Belaia" },
  ];
}

class Student extends University {
  getStudentById(num: number): iStudent[] {
    return this.students.filter((el: iStudent) => el.id == num);
  }
}

const student = new Student();
console.log(student.getStudentById(3));
