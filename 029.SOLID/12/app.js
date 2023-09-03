// Реализуйте класс Sort, сдержащий метод sortData, сортирующий все числа статичного массива сортировкой пузырьком

class Sort {
    sortData() {
        const arr = [1, 3, 2, 5, 4, 6, 7];
        for (let i = arr.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arr[i] > arr[i + 1]) {
                    let num = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = num;
                }
            }
        }
        return arr;
    }
}

const sort = new Sort();
const result = sort.sortData();
console.log(result);