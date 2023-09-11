// Реализуйте класс WordString, который содержит:конструктор со входной строкой; 
// метод ReverseString().Ваша задача перевернуть исходную строку

class WordString {
    constructor(str) {
        this.str = str;
    }
    ReverseString() {
        console.log(this.str.split('').reverse().join(''));
    }
}

const wordString = new WordString('Hello');
wordString.ReverseString();