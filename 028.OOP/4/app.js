// Реализуйте класс MathСalculation. В него передается 
// число n –количество элементов массива. На основании 
// числа формируется динамический массив из n элементов 
// внутри класса. Создать функцию для подсчета всех 
// четных чисел массива. Добавить проверки на ввод

class MathСalculation {
    constructor(n) {
        this.n = n;
    }
    count() {
        let arr = [];
        for (let i = 0; i < this.n; i++) {
            arr.push(Math.floor(Math.random() * 10));
        }
        let new_arr = arr.filter((el) => el % 2 === 0);
        return `${arr}, количество чётных элементов: ${new_arr.length} `;
    }
}


const mathСalculation = new MathСalculation(10);
const result = mathСalculation.count();
console.log(result);