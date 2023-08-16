// Записать в результат удвоенное значение инпута. Добавить проверки 

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        if (!inp.value) throw new Error('Строка ввода пуста');
        const cont = document.querySelector('.container');
        const sum = inp.value * 2;
        cont.innerHTML = sum;
    } catch (error) {
        alert(error.message);
    }
})