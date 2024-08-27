// Создайте родительский классNumber, которыйбудетхранитьстатичноечисло.ЗатемсоздайтедочернийклассSquareRootCalculator, 
// которыйбудетсодержатьметодcalculateSquareRoot(), вычисляющийквадратныйкореньэтогочислабезиспользованиявстроеннойфункцииMath.sqrt().
// Входные: new SquareRootCalculator(16) → Результат: 4
// Входные: new SquareRootCalculator(25) → Результат: 5
// Входные: new SquareRootCalculator(1) → Результат: 1

class Number {
    constructor(n) {
        this.n = n;
    }
}

class SquareRootCalculator extends Number {
    calculateSquareRoot() {
        for (let i = 0; i <= this.n; i++) {
            if (i * i === this.n) {
                return i;
            }
        }
    }
}

const squareRootCalculator = new SquareRootCalculator(16);
console.log(squareRootCalculator.calculateSquareRoot());