// На вход подается строка в виде электронной почты пользователя. 
// Необходимо написать регулярное выражение для данной строки. 
// Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае 
// бросить исключение и обработать

const str = 'ostapenko_12-29-94_vaniy@mail.com';

function isValid(str) {
    try {
        if (!/^[\w\.\-\$]+@+[a-z]+\.[a-z]{2,4}$/g.test(str)) {
            throw new Error('глупец писать научись почту');
        }
        return true;
    } catch (error) {
        return error.message;
    }
}

const result = isValid(str);
console.log(result);