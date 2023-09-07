// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры.
// Необходимо создать функцию возвращающую новый массив из отфильтрованных значений, где строка начинается 
// на [a, h]. [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const n = 5;

function doArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt('элемент массива'));
    }
    return arr;
}

const result = doArray(n);

function doFilterArr(result) {
    const new_arr = result.filter((el) => el[0] === 'a' || el[0] === 'h');
    return new_arr;
}

const res = doFilterArr(result);
console.log(res);