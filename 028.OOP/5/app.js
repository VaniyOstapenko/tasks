// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв исходного слова или фразы). 
// Создать функцию для вывода ряда true, если слова являются анаграммами. Добавить проверки на ввод

class Anagram {
    constructor(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
    }

    show() {
        if (this.str1.split('').sort().join('') === this.str2.split('').sort().join('')) {
            return 'true'
        } else {
            return 'false'
        }
    }
}

const anagram = new Anagram('стоп', 'пост');
console.log(anagram.show());