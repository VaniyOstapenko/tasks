// Реализуйте класс MathСalculation. В него передается 
// число n –количество элементов массива. На основании 
// числа формируется динамический массив из n элементов 
// внутри класса. Создать функцию для подсчета всех 
// четных чисел массива. Добавить проверки на ввод

// class MathСalculation {
//     constructor(n) {
//         this.n = n;
//     }
//     countArr() {
//         const arr = [];
//         for (let i = 0; i < this.n; i++) {
//             arr.push(Math.floor(Math.random() * 10));
//         }
//         const newArr = arr.filter((el) => el % 2 == 0)
//         return newArr.length;
//     }
// }

// const mathСalculation = new MathСalculation(5);
// console.log(mathСalculation.countArr());

class MathСalculation {
    countArr(n) {
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(Math.floor(Math.random() * 10));
        }
        const newArr = arr.filter((el) => el % 2 == 0)
        return newArr.length;
    }
}

const mathСalculation = new MathСalculation();
console.log(mathСalculation.countArr(5));