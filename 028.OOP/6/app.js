// 6. Реализуйте класс, который находит полное число метров по заданному числу сантиметров.
//  Добавьтепроверкуна вводтолькочисел.
//  Входные: 345 →Результат: 3 метров
//  Входные: 100 → Результат: 1 метр
//  Входные: 99 →Результат: 0 метров
//  Входные: 750 →Результат: 7 метров
//  Входные: 10 →Результат: 0 метров
//  Входные: hi → Результат: Вы ввелине число!

class TheNumberOfMeters {
    constructor(n) {
        this.n = n;
    }

    numOfMetr() {
        if (isNaN(this.n)) throw new Error('Вы ввели не число');

        return `${Math.floor(this.n / 100)} метр(ов)`;
    }
}

try {
    const theNumberOfMeters = new TheNumberOfMeters(358)
    console.log(theNumberOfMeters.numOfMetr());
} catch (error) {
    console.log(error.message);
}


// class TheNumberOfMeters {
//     numOfMetr(n) {
//         if (isNaN(n)) throw new Error('Вы ввели не число');

//         return `${Math.floor(n / 100)} метр(ов)`;
//     }
// }

// try {
//     const theNumberOfMeters = new TheNumberOfMeters()
//     console.log(theNumberOfMeters.numOfMetr(345));
//     console.log(theNumberOfMeters.numOfMetr(100));
//     console.log(theNumberOfMeters.numOfMetr(99));
//     console.log(theNumberOfMeters.numOfMetr('hi'));
// } catch (error) {
//     console.log(error.message);
// }
