// Реализуйте класс CommonPrefix, который будет принимать массив строк. В 
// классе должен быть метод findLongestPrefix(), который возвращает самый 
// длинный общий префикс среди всех строк в массиве. Если общего префикса 
// нет, метод возвращает пустую строку.
// Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
// Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
// Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inte"

class CommonPrefix {
    constructor(arr) {
        this.arr = arr;
    }

    findLongestPrefix() {
        const prefix = this.arr[0]
        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[0][i] === prefix) {
                return this.arr[i]
            }
        }
    }
}

const commonPrefix = new CommonPrefix(["flower", "flow", "flight"]);
console.log(commonPrefix.findLongestPrefix());