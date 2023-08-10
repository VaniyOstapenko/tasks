// На вход подается строка в виде url. 
// Необходимо написать регулярное выражение для данной 
// строки. Если же строка подходит под регулярное 
// выражение, то вывести булевое true, в противном 
// случае бросить исключение и обработать

const str = 'http://regex101.com';

function testUrl(str) {
    try {
        if (!/^(http|https):\/\/[a-z0-9]+\.[a-z]{2,4}$/g.test(str)) {
            throw new Error('не красивый домен, подумай пожалуйста');
        }
        return true;
    } catch (error) {
        return error.message;
    }
}

const result = testUrl(str);
console.log(result);