// *Дана таблица c 1 колонкой. Под таблицей сделайте форму (инпут и кнопка), 
// с помощью которой можно будет добавить нового значение в таблицу. 

const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    const inp = document.querySelector('.inp');
    const td = document.querySelector('td');

    const tr = document.createElement('tr')

    tr.innerHTML = inp.value;
    td.appendChild(tr)
})