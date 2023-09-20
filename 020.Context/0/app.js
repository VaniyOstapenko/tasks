// //Тренировочный урок

// console.log(this);//window

// const obj = {
//     name: 'Ivan',
//     test: function () {
//         console.log(this.id);//undefined//если ключ который есть в объекте, то выведет объект
//     }
// }
// obj.test()

// if (true) {
//     console.log(this);//window
// }

// function test() {
//     console.log(this);//window
// }
// test()

// //Сортировка пузырьком

// function bubble(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (arr[i] > arr[i + 1]) {
//                 let num = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = num;
//             }
//         }
//     }
//     console.log(arr);
// }

// bubble([1, 3, 2, 5, 4]);

// Фибоначчи

// const n = 10;

// const arr = [0, 1];

// for (let i = 2; i < n; i++) {
//     let sum = arr[i - 1] + arr[i - 2];
//     arr.push(sum)
// }

// console.log(arr);

// Факториал

// function Recurs(n) {
//     if (n <= 1) return 1;
//     return n * Recurs(n - 1);
// }

// console.log(Recurs(3));

// каррирование

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(sum(1)(2)(3));

// Перебор массив

// const arr = [1,2,3,4,5];

// const new_arr = arr.reduce(function(sum,el){
//     return sum * el;
// },1)

// console.log(new_arr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const new_arr = arr.map(function(el){
//     if(el%2==0){
//         return el;
//     }
// })

// console.log(new_arr);

// const new_arr = arr.filter(function(el){
//     if(el%2===0){
//         return true;
//     }
// })

// console.log(new_arr);

