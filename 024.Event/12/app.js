// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить проверку, что поле не пустое

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const inp = document.querySelector('input');
    let arr = [];
    for (let i = 0; i < inp.value; i++) {
        arr.push(inp.value);
    }
})
