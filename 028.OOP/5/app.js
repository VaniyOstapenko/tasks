// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв исходного слова или фразы). 
// Создать функцию для вывода ряда true, если слова являются анаграммами. Добавить проверки на ввод

class Anagram {
    isValid(str) {
        if (!isNaN(str)) throw new Error('ошибка ввода')
    }
    doAnagram(str1, str2) {
        try {
            if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return error.message;
        }
    }
}

const anagram = new Anagram();
const sort = anagram.doAnagram('hello', 'llohe')
console.log(sort);