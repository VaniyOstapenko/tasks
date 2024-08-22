// СоздайтеклассStudent, которыйбудетсодержатьимя, возрастимассивоценок.
//НапишитеметодgetAverageGrade(), которыйвозвращаетсреднийбаллстудента.
// Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20)имеетсреднийбалл4.2"
// Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22)имеетсреднийбалл3.0"
// Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19)имеетсреднийбалл4.4"

class Student {
    constructor(name, age, arr) {
        this.name = name;
        this.age = age;
        this.arr = arr;
    }

    getAverageGrade() {
        return `${this.name}(${this.age}) имеет средний балл ${this.arr.reduce((sum, el) => {
            return sum += el / this.arr.length;
        }, 0)}`
    }
}

const student = new Student("Alice", 20, [5, 4, 5, 3, 4])
console.log(student.getAverageGrade());