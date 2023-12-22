//Создайте класс StringManipulator, который будет иметь методы reverseString(str), isPalindrome(str), countVowels(str). Реализуйте функционал для
//разворота строки, проверки, является ли строка палиндромом, и подсчета гласных букв в строке. Использовать Generics

class StringManipulator {
  reverseString<T>(str: T): string {
    if (typeof str === "string") {
      return str.split("").reverse().join("");
    }
  }

  isPalindrome<T>(str: T): string {
    if (typeof str === "string") {
      return str === str.split("").reverse().join("")
        ? "Палиндром"
        : "Не палиндром";
    }
  }

  countVowels<T>(str: T): number {
    if (typeof str === "string") {
      return str.split("").reduce((count: number, el: string) => {
        if (/^[aeiouy]$/gm.test(el)) return count++;
      }, 0);
    }
  }
}

const stringManipulator = new StringManipulator();
console.log(stringManipulator.reverseString<string>("anna"));
console.log(stringManipulator.isPalindrome<string>("anna"));
console.log(stringManipulator.countVowels<string>("anna"));
