// По условию задачи даны инпути кнопка. Напишите функцию, которая преобразует любое предложение инпута в предложение 
// VAPORWAVE. предложение VAPORWAVE преобразует все буквы в верхний регистр и добавляет 2 пробела 
// между каждой буквой (или специальным символом) 
// Why isn't my code working?–W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const inp = document.querySelector('input');
    const div = document.querySelector('div');

    let str = inp.value;
    let new_str = '';
    for (let i = 0; i < str.length; i++) {
        new_str += `${str[i].toUpperCase()}  `;
    }
    div.innerHTML = new_str;
})  