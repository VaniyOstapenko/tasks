// На входе объект и число n, символизирующее количество пар 
// ключ-значение. Ключи -автоинкремент 
// (генерируется автоматически от 1 до n). 
//  каждого ключа –рандомное число от 1 до 100. 
//  Вывести каждое значение объекта с помощью values

const n = 10;

function doObj(n) {
    const obj = {};
    for (let i = 1; i < n; i++) {
        obj[i] = Math.floor(Math.random() * 100);
    }
    return obj;
}

const obj = doObj(n);

function result(obj) {
    const array = Object.values(obj)
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

const res = result(obj);