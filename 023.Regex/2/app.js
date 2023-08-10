// На вход подается строка вида “имя фамилия возраст”. 
// Необходимо написать регулярное выражение для данной 
// строки. Если же строка подходит под регулярное 
// выражение, то вывести булевое true, в противном случае 
// бросить исключение и обработать

const str = 'Ivan Ostapenko 28 age';

function isValid(str) {
    try {
        if (!/^[a-zA-Z]+ [a-zA-Z]+ [0-9]+ [a-zA-Z]+$/g.test(str)) {
            throw new Error('не соответствует правильному вводу строк');
        }
        return true;
    } catch (error) {
        return error.message;
    }
}

const result = isValid(str);
console.log(result);