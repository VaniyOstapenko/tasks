//Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже вернет 5. Использовать каррирование
function carrirovanie(a, b) {
    return a + b;
}
console.log(carrirovanie(2, 3));
function carrirovanie2(a) {
    return (b) => {
        return a + b;
    };
}
console.log(carrirovanie2(2)(3));
function carrirovanie3(a) {
    return (b) => {
        if (typeof (a) === 'number' && typeof (b) === 'number')
            return a + b;
    };
}
console.log(carrirovanie3(2)(3));
