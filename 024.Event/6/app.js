// Необходимо отобразить кнопку и инпут со значением по умолчанию. 
// По клику на кнопку заменить значение инпута

const btn = document.querySelector('button');
let flage = false;

btn.addEventListener('click', function () {
    const inp = document.querySelector('input');
    if (flage === false) {
        inp.value = 'значение Не по умолчанию';
        flage = true;
    } else {
        inp.value = 'значение по умолчанию';
        flage = false;
    }
});