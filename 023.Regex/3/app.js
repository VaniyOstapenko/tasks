// На вход подается строка из 2 и более слов. 
// Необходимо все симводызаменить на пустую строку. 

const str = 'Anton@Miranovich-30';

function replaceStr(str) {
    try {
        let newStr = str.replaceAll(/[@\-]/g, ' ');
        if (str.length===0) {
            throw new Error('не верно');
        }
        return newStr;
    } catch (error) {
        return error.message;
    }
}

const result = replaceStr(str);
console.log(result);