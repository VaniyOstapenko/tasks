// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в инпут. 
// После нажатия на заблокировать данное действие запрещается, тем самым выключая 
// возможность редактирования значения инпута

const a = document.querySelector('.block');
const b = document.querySelector('.unlock');
const inp = document.querySelector('input');

a.addEventListener('click', function () {
    inp.disabled = true;
})

b.addEventListener('click', function () {
    inp.disabled = false;
})