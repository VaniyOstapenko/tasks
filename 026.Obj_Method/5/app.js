// На входе объекти число n, символизирующее количество пар 
// ключ-значение. Ключи и значения -автоинкремент 
// (генерируется автоматически от 1 до n). 
// Проверить есть ли ключ 10 в объекте. 

const n = 15;

function doObj(n) {
    const obj = {};
    for (let i = 1; i < n; i++) {
        obj[i] = i;
    }
    return obj;
}

function checkKey(obj) {
    const arrayKeys = Object.keys(obj);
    const key = arrayKeys.some(function (el) {
        if (el == 10) {
            return true;
        }
    })
    return key;
}

let res = doObj(n);
const result = checkKey(res)
console.log(result);