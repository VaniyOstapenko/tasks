// Дана строка состоящая из чисел, букв, специальных символов. 
// Необходимо оставить в строке только буквенные символы используя регулярные выражения. 
// Если же длина исходной строки изменилась, вывести true, в противном случае бросить исключение и обработать

const str = '29.12.1994->Birthday'

function replaceStr(str) {
    let newStr = str.replaceAll(/[\d\-><.]/g, '')
    try {
        if (str.length === newStr.length) {
            throw new Error('ошибка');
        }
        return `${newStr} -> true`;
    } catch (error) {
        return error.message;
    }
}

let result = replaceStr(str);
console.log(result);