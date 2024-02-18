const ul = document.querySelector('ul');

ul.addEventListener('click', (event) => {
    const div = document.querySelector('div');
    div.innerHTML = event.target.textContent;
})