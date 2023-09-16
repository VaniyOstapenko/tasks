// На вход подается строка в виде электронной почты пользователя. 
// Необходимо написать регулярное выражение для данной строки. 
// Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае 
// бросить исключение и обработать

class Regex {
    isValid(n) {
        try {
            if (!/^[\w\.\-\$]+@+[a-z]+\.[a-z]{2,4}$/g.test(n)) {
                throw new Error('глупец писать научись почту');
            }
            return true;
        } catch (error) {
            return error.message;
        }
    }
}
const result = new Regex();
console.log(result.isValid('ostapenko_12-29-94_vaniy@mail.com'));
