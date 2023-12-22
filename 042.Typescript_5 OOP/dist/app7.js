//Создайте класс StringManipulator, который будет иметь методы reverseString(str), isPalindrome(str), countVowels(str). Реализуйте функционал для
//разворота строки, проверки, является ли строка палиндромом, и подсчета гласных букв в строке. Использовать Generics
class StringManipulator {
    reverseString(str) {
        if (typeof str === "string") {
            return str.split("").reverse().join("");
        }
    }
    isPalindrome(str) {
        if (typeof str === "string") {
            return str === str.split("").reverse().join("")
                ? "Палиндром"
                : "Не палиндром";
        }
    }
    countVowels(str) {
        if (typeof str === "string") {
            return str.split("").reduce((count, el) => {
                if (/^[aeiouy]$/gm.test(el))
                    return count++;
            }, 0);
        }
    }
}
const stringManipulator = new StringManipulator();
console.log(stringManipulator.reverseString("anna"));
console.log(stringManipulator.isPalindrome("anna"));
console.log(stringManipulator.countVowels("anna"));
