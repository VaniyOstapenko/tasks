// Вывести в строчку все вводимые значения через инпутв виде массива. Добавить проверку, что поле не пустое. 
// После каждого клика очищать значение input.Если вводимое значение не проходит валидацию, то на месте 
// массива вывести сообщение об ошибке красным цветом 

const btn = document.querySelector('button');
const div = document.querySelector('div');
const arr = [];
function isValid(inp) {
    if (!inp) {
        throw new Error('Пустой ввод')
    }
}
btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');

        isValid(inp.value)
        arr.push(inp.value);
        div.innerHTML = arr;
        div.style = 'background-color:white';
        inp.value = '';
    } catch (error) {
        div.style = 'background-color:red';
        div.innerHTML = error.message;
    }
})