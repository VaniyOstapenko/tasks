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
        let count = this.arr[0];
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 1; j < count.length; j++) {
                if (count[j] !== this.arr[i][j]) {
                    count = count.slice(0, j)
                }
            }
        }
        return count;
    }
}

const commonPrefix = new CommonPrefix(["flower", "flow", "flight"])
console.log(commonPrefix.findLongestPrefix());