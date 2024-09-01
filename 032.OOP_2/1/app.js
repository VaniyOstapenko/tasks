// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры.
// Необходимо создать функцию возвращающую новый массив из отфильтрованных значений, где строка начинается 
// на [a, h]. [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

class StartPref {
    constructor(n) {
        this.n = n;
    }
    createArr() {
        const arr = [];
        for (let i = 0; i < this.n; i++) {
            arr.push(prompt('Введите элемент массива'))
        }
        console.log(arr);
        const newArr = arr.filter((el) => el[0] == 'a' || el[0] == 'h' ? el : null)
        console.log(newArr);
    }
}

const startPref = new StartPref(5);
startPref.createArr();