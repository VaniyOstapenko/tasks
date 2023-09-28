// На входе статичный объект. Необходимо
// числовые значения удвоить на выходе.

const obj = {
    num1: 1,
    num2: 2,
    num3: 3,
    str: 'Привет'
}

const arr = []

for (let key in obj) {
    if (obj[key] % 2 === 1) {
        arr.push(obj[key]);
    }
}

console.log(arr);