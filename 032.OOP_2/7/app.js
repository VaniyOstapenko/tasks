// Вывести в строчку все вводимые значения через инпутв виде массива, а также все удвоенные значения данного 
// массива в div ниже. Добавить проверку, что поле не пустое

const btn = document.querySelector('button');
const arr = [];
function isValid(inp) {
    if (!inp) {
        throw new Error('Пусстой ввод')
    }
}
btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        const new_arr = document.querySelector('.arr');
        const mult = document.querySelector('.mult');
        isValid(inp.value);
        arr.push(inp.value);
        new_arr.innerHTML = arr;
        inp.value = '';
        const array = arr.map(function (el) {
            return el * 2;
        })
        mult.innerHTML = array;
    } catch (error) {
        alert(error.message);
    }
})