// По нажатию на кнопку поменять местами значения 2 инпутов.

const btn = document.querySelector('button');
const inp_1 = document.querySelector('.nn1');
const inp_2 = document.querySelector('.nn2');

btn.addEventListener('click', function () {
    let _n1 = inp_1.value;
    let _n2 = inp_2.value;

    inp_1.value = _n2;
    inp_2.value = _n1;
})


