// На входе объект. Ключи и значения -автоинкремент (генерируется автоматически от 1 до n).
// Необходимо отобразить на экране объект (помните, что окно браузера не воспринимает 
//     объекты как тип данных JavaScript. Для отображения неоходимо преобразовать строку в ...)

const n = Math.floor(Math.random() * 10);

function doObj(n) {
    const obj = {};
    for (let i = 0; i < n; i++) {
        obj[i] = Math.floor(Math.random() * n)
    }
    return obj;
}

const result = doObj(n);
console.log(JSON.stringify(result));