// Проверить на палендром

const btn = document.querySelector('button');

function isValid(inp) {
    if (!inp) throw new Error('Пустое поле');
}

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        isValid(inp.value)
        const div = document.querySelector('.container');
        const reverse = inp.value.split('').reverse().join('');
        if (inp.value === reverse) {
            div.innerHTML = 'Палиндром';
        } else {
            div.innerHTML = 'Не дури голову, вводи Палиндром';
        }
    } catch (error) {
        alert(error.message);
    }
})