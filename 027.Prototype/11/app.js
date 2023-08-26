// Напишите функцию, принимающую в качестве параметра статичный объект. 
// Функция возвращает новый объект, где значения –исключительно числа первоначального объекта. IIFE

(function () {
    let new_obj = {};
    for (let key in obj) {
        if (!isNaN(obj[key])) {
            new_obj[key] = obj[key];
        }
    }
    console.log(new_obj);
}(obj = {
    id: 1,
    name: 'Ivan',
    age: 28
}))