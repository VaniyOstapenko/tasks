//Тренировочный урок контекст this

console.log(this);//window

const obj = {
    name: 'Ivan',
    test: function () {
        console.log(this.id);//undefined//если ключ который есть в объекте, то выведет объект
    }
}
obj.test()

if (true) {
    console.log(this);//window
}

function test() {
    console.log(this);//window
}
test()

//Сортировка пузырьком

function bubble(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    console.log(arr);
}
bubble([1, 5, 4, 3]);
