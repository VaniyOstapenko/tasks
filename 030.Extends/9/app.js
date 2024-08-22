// СоздайтеклассNumberGenerator сметодомgenerateNumbers(size), 
// которыйвозвращаетмассивчиселот1доsize. НаследуйтеотнегоклассEvenNumbers,
// добавивметодgetEvenNumbers(size), которыйвызываетgenerateNumbers(size) 
// ифильтруеттолькочетныечисла.
// Входные:EvenNumbers(6).getEvenNumbers() → Результат:[2,4,6]
// Входные:EvenNumbers(10).getEvenNumbers() → Результат:[2,4,6,8,10]
// Входные:EvenNumbers(3).getEvenNumbers() → Результат:[2]

class NumberGenerator {
    generateNumbers(size) {
        const arr = []
        for (let i = 1; i <= size; i++) {
            arr.push(i)
        }
        return arr;
    }
}

class EvenNumbers extends NumberGenerator {
    getEvenNumbers(size) {
        return this.generateNumbers(size).filter((el) => el % 2 === 0)
    }
}

const evenNumbers = new EvenNumbers()
console.log(evenNumbers.getEvenNumbers(10));