// Реализуйте класс WordString, который будет иметь 
// следующие методы: метод reverseString, 
// переворачивающий строку, метод upperFirst, 
// возвращающий строку, где первая буква заглавная и 
// метод upperEvery, который делает заглавной первую 
// букву каждого слова этой строки.

class WordString {
    constructor(str) {
        this.str = str;
    }

    reverseString() {
        return this.str.split('').reverse().join('');
    }

    upperFirst() {
        return this.str[0].toUpperCase() + this.str.slice(1);
    }

    upperEvery() {
        return this.str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
    }
}

const wordString = new WordString('hello world')
console.log(wordString.reverseString());
console.log(wordString.upperFirst());
console.log(wordString.upperEvery());