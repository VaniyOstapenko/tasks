// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой fullstack=> ua\
// a o e u i y

const str = 'fullstack';
let glas = 'aoeuiy';
let count = ''

for (let i = 0; i < str.length; i++) {
    if (glas.includes(str[i])) {
        count += str[i]
    }
}

console.log(`${count}`);