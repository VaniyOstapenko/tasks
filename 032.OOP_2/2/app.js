// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры. Необходимо создать 
// функцию возвращающую новый массив из элементов, каждое значение которого имеет вид #name. 
// [“hschool”, “company”] -> [“#hschool”, “#company”]


const n = 5;

function doArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt('элемент массива'));
    }
    return arr;
}

const result = doArray(n);

function doSlesh(result) {
    const new_arr = result.map(function (el) {
        return '#' + el;
    })
    return new_arr;
}

const res = doSlesh(result);
console.log(res);