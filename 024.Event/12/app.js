// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить проверку, что поле не пустое

const btn = document.querySelector('button');
let arr = [];

function isValid(inp) {
    if (!inp) {
        throw new Error('Пустой ввод')
    }
}
btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        const par = document.querySelector('p')
        isValid(inp.value);
        arr.push(inp.value);
        par.innerHTML = arr;
        inp.value = ''
    } catch (error) {
        alert(error.message);
    }
})
