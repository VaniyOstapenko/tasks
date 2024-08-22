// СоздайтеклассStringRepository, которыйимеетстатичныймассивwords.
//НаследуйтеотнегоклассFilteredWords, добавивметодgetWordsByLength(length),
//которыйвозвращаеттолькотеслова, длинакоторыхравназаданномузначению.
// Входные:
// const repo = new FilteredWords(["apple", "banana", "kiwi", "plum"]);
// repo.getWordsByLength(5);
// → Результат: ["apple", "plum"]
// Входные:
// const repo = new FilteredWords(["cat", "dog", "elephant", "mouse"]);
// repo.getWordsByLength(3);
// → Результат: ["cat", "dog"]

class StringRepository {
    arr = ["apple", "banana", "kiwi", "plum"];
}

class FilteredWords extends StringRepository {
    getWordsByLength(length) {
        return this.arr.filter(el => el.length === length)
    }
}

const filteredWords = new FilteredWords()
console.log(filteredWords.getWordsByLength(4));