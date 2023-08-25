// По условию задачи даны 2 инпута и кнопка. 
// Необходимо вернуть true, если часть символов 1 строки есть в другой. 
// 'rkqodlw', 'world‘–true 'kacvtas', 'steak' –false

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const inp1 = document.querySelector('.res1');
    const inp2 = document.querySelector('.res2');
    const div = document.querySelector('.result');

    let str1 = inp1.value;
    let str2 = inp2.value;
    let count = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i])) {
            count++
        }
    }
    if (str2.length === count) {
        div.innerHTML = 'true';
    } else {
        div.innerHTML = 'false';
    }
})
