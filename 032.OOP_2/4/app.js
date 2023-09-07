// На входе статичный объект. Написать функцию на 
// формирование массива значений данного объекта

const obj = {
    id: 1,
    name: 'Vaniy',
    age: 28
}

function doArr(obj) {
    let arr = Object.values(obj);
    return arr;
}

const result = doArr(obj);
console.log(result);