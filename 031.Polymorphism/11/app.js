// Создайте класс TwoSum, который будет принимать массив целых чисел nums и целое число target. Реализуйте метод findIndices(), 
// который возвращает индексы двух чисел, сумма которых равна target.Гарантируется, что существует ровно одно решение, и вы не можете использовать 
// один и тот же элемент дважды.
//     Условия:
// •
// Массивnumsсодержиттолькоцелыечисла.
// •
// Выможетевернутьиндексывлюбомпорядке.
// •
// Длякаждогонаборавходныхданныхсуществуетровнооднорешение.
//     Входные: new TwoSum([2, 7, 11, 15], 9) → Результат: [0, 1]
// Объяснение: Посколькуnums[0] + nums[1] == 9, мывозвращаем[0, 1].
//     Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]
// Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]

class TwoSum {
    constructor(nums, target) {
        this.nums = nums;
        this.target = target;
    }

    findIndices() {
        const indexArr = []
        for (let i = 0; i < this.arr.length; i++) {
            const firstEl = this.arr[i]
            for (let j = 1; j < this.arr.length; j++) {
                const secondEl = this.arr[j];
                if (firstEl + this.arr[j] === this.target) {
                    indexArr.push(firstEl, secondEl)
                }
            }
        }
        return indexArr;
    }
}

const twoSum = new TwoSum([2, 7, 11, 15], 9);
console.log(twoSum.findIndices());
