// Пользователь вводит строку. Необходимо посчитать количество гласных

const str = 'vania';

let sogl = 'aoeuiy'
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (sogl.includes(str[i])) {
        count += 1
    }
}

console.log(`${count} - гласные`);