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