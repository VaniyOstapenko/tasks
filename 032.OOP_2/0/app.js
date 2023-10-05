// Необходимо отобразить числовой инпути кнопку. 
// После нажатия на кнопку необходимо получить значение 
// из инпута. Проверить, что это число > 0, а также, 
// добавить проверку на ввод только чисел. Если проверка 
// true, то вывестив div удвоенное значение инпута

const btn = document.querySelector('button');
function isValid(inp) {
    if (isNaN(inp)) {
        throw new Error('не число');
    } else if (inp <= 0) {
        throw new Error('меньше 0');
    }
}
btn.addEventListener('click', function () {
    const inp = document.querySelector('input').value;
    const div = document.querySelector('div');
    try {
        isValid(inp);
        div.innerHTML = inp * 2;
    } catch (error) {
        alert(error.message);
    }
})