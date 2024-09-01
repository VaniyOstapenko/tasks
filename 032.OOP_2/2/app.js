// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры. Необходимо создать 
// функцию возвращающую новый массив из элементов, каждое значение которого имеет вид #name. 
// [“hschool”, “company”] -> [“#hschool”, “#company”]

class HashArr {
    constructor(n) {
        this.n = n;
    }

    createArr() {
        const arr = [];
        for (let i = 0; i < this.n; i++) {
            arr.push(prompt('Введите элемент массива'))
        }
        console.log(arr);
        const newArr = arr.map((el) => `#${el}`)
        console.log(newArr);
    }
}

const hashArr = new HashArr(5);
hashArr.createArr()