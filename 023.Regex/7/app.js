// На вход подается строка в виде пароля. Необходимо написать регулярное выражение для данной строки. 
// Если же строка подходит под регулярное выражение, то вывести булевое true, 
// в противном случае бросить исключение и обработать. Пароль должен содержать: 
// • Буквы в UPPER регистре 
// • Буквы в LOWER регистре 
// • Числа 
// • Специальные символы 
// • Длина не менее 8 символов

const str = 'Ivan->1229';

function isValid(str) {
    try {
        if (!(/^[\w\-><.,\/]+$/g.test(str))) {
            throw new Error('Небезопасный пароль');
        }
        return true;
    } catch (error) {
        return error.message;
    }
}

let result = isValid(str);
console.log(result);

