// По двойному клику на кнопку изменять цвет кнопки

const btn = document.querySelector('button');

let flage = false;

btn.addEventListener('dblclick', () => {
    if (flage === false) {
        btn.style = 'background-color:red';
        flage = true;
    } else {
        btn.style = 'background-color:white';
        flage = false;
    }
})
