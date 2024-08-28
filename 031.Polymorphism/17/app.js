// Создайте родительский класс NumberProcessor, который будет содержать массив чисел [1,-1,-4,3,3,5,4,4,2,2,2] и метод processNumbers(), который 
// оставляет в массиве только положительные числа. Затем создайте дочерний класс UniqueNumberProcessor, который переопределяет метод 
// processNumbers() и удаляет дубликаты из массива.
// Входные:new NumberProcessor().processNumbers() → Результат:[1,2,3,4,5]

class NumberProcessor {
    constructor(arr) {
        this.arr = arr;
    }
    processNumbers() {
        const newArr = this.arr.filter((el) => el > 0);
        return newArr;
    }
}

class UniqueNumberProcessor extends NumberProcessor {
    processNumbers() {
        const newArr = super.processNumbers().sort();
        let res = [];
        for (let i = 0; i < newArr.length; i++) {
            const num = newArr[i];
            let num2 = newArr[i + 1]
            if (num !== num2) {
                res.push(num)
            }
        }
        return res;
    }
}

const uniqueNumberProcessorq = new UniqueNumberProcessor([1, -1, -4, 3, 2, 2, 3, 1, 5, 4, 4, 2, 2, 2]);
console.log(uniqueNumberProcessorq.processNumbers());
