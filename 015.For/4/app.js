// Дан статичный массив с элементами и 
// число вводимое с клавиатуры. 
// С помощью цикла for и оператора if 
// проверьте есть ли в массиве введенное 
// число. Если есть, то остановите 
// выполнение цикла. Если нет, то найдите 
// среднее арифметическое всех чисел до 
// введенного

let a = 5;
let arr = [1, 2, 3, 5, 6, 10];
let sum = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) {
        break;
    } else {
        sum += arr[i];
        count++;
    }
}
console.log(sum / count);