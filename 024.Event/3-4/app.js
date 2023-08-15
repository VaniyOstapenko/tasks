// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой 
// инпут. По клику на кнопку вызвать alert и отобразить 
// сообщение из значения инпута

const btn = document.querySelector('button');

function isValid(inp) {
    if (!inp.value) {
        throw new Error('Пустой ввод')
    }
}
btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        isValid(inp.value);
        alert(inp.value);
    } catch (error) {
        alert(error.message);
    }
})