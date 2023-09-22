const btn = document.querySelector('button');
const arr = [];
btn.addEventListener('click', function () {
    const div = document.querySelector('div');
    const inp = document.querySelector('input');

    arr.push(inp.value);
    div.innerHTML = arr;
    inp.value = '';
})