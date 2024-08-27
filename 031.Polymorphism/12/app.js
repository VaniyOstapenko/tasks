// СоздайтеродительскийклассNumber,которыйбудетхранитьчисло.
// ЗатемсоздайтедочернийклассPalindromeChecker,которыйбудетпроверять,
// являетсялиэточислопалиндромом.
// Входные:new PalindromeChecker(-121)→ Результат:false
// Входные:new PalindromeChecker(10)→ Результат:false
// Входные:new PalindromeChecker(12321)→ Результат:true

class Number {
    constructor(num) {
        this.num = num;
    }
}

class PalindromeChecker extends Number {
    checkPalindrom() {
        const str = this.num.toString();
        return str == str.split('').reverse().join('') ? true : false;
    }
}

const palindromeChecker = new PalindromeChecker(121);
console.log(palindromeChecker.checkPalindrom());