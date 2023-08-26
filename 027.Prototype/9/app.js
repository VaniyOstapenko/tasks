// На входе объект. Ключи и значения -автоинкремент (генерируется автоматически от 1 до n). 
// Необходимо вывести количество пар ключ значение объекта)
const n = Math.floor(Math.random() * 10);

function doObj(n) {
    const obj = {};
    for (let i = 0; i < n; i++) {
        obj[i] = Math.floor(Math.random() * n)
    }
    return obj
}

const result = doObj(n);
console.log(result);

function countObj(result) {
    let count = 0;
    for (let key in result) {
        count++;
    }
    return count;
}

const res = countObj(result);
console.log(res);
