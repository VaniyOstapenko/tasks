// Написать функцию на подсчет количества пар ключ 
// значение в объекте. Добавить проверки 

const obj = {
    id: 'email',
    name: 'vaniy@mail.com',
    age: 18
}

function doCount(obj) {
    try {
        const parCount = Object.entries(obj).length;
        if (parCount === 0) throw new Error('объект пустой');
        return parCount;
    } catch (error) {
        return error.message;
    }

}

let result = doCount(obj)
console.log(result);