// На входе статичный объект и строка str. 
// Написать функцию на поиск в объекте значения str. 
// Values 

const obj = {
    id: 'str',
    name: 'vaniy@mail.com',
    age: 18
}

const str = 'vaniy@mail.com';

function SearchStr(obj, str) {
    try {
        const bool = Object.values(obj);
        if (!bool.includes(str)) throw new Error(false);
        return true;
    } catch (error) {
        return error.message;
    }
}

let result = SearchStr(obj, str);
console.log(result);

