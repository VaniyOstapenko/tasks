const str = "C:/Users/Admin/Desktop/test.txt";

function isValid(str) {
    try {
        if (!/^C:+\/[a-zA-Z]+\/[a-zA-Z]+\/[a-zA-Z]+\/[a-zA-Z]+\.[a-z]+$/g.test(str)) {
            throw new Error('неверный путь');
        }
        return true;
    } catch (error) {
        return error.message;
    }
}

let result = isValid(str);
console.log(result);