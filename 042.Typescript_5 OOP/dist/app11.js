//Создайте абстрактный класс University, который содержит абстрактный метод getStudentById и поле students – массив объектов. Student–класс наследник,
//реализующий абстрактный метод getStudentById.
class University {
    students = [
        { id: 1, name: "Vania", surname: "Ostapenko" },
        { id: 2, name: "Anton", surname: "Ostapenko" },
        { id: 3, name: "Regina", surname: "Belaia" },
    ];
}
class Student extends University {
    getStudentById(num) {
        return this.students.filter((el) => el.id == num);
    }
}
const student = new Student();
console.log(student.getStudentById(3));
