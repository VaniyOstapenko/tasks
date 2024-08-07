//1. Напишите функцию isPalindrome(word: string):boolean, которая принимает слово и возвращает true, если оно является палиндромом
//(читается одинаково слева направо и справа налево),и false в противном случае.

import { stringify } from "ts-jest";

function isPalindrome(word: string | number): boolean {
  try {
    if (!word) throw new Error("empty");
    if (typeof word == "number") throw new Error("word must be a string");
    return word == word.split("").reverse().join("") ? true : false;
  } catch (error: any) {
    return error.message;
  }
}

//2. Напишите функцию calculateFactorial(n: number): number, которая принимает
//число nи возвращает его факториал.

function calculateFactorial(n: any): number {
  try {
    if (!n) throw new Error("empty");
    if (typeof n == "string") throw new Error("n must be a number");
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
  } catch (error: any) {
    return error.message;
  }
}

//3. Напишите функцию capitalizeString(str: string): string, которая принимает
//строку и возвращает новую строку,в которой каждое слово начинается с
//заглавной буквы.

function capitalizeString(str: any): string | number {
  try {
    if (!str) throw new Error("empty");
    if (typeof str == "number") throw new Error("str must be a string");
    let newStr = str.split(" ");
    let res = "";
    for (let i = 0; i < newStr.length; i++) {
      res += newStr[i][0].toUpperCase() + newStr[i].slice(1);
    }
    return res;
  } catch (error: any) {
    return error.message;
  }
}

//8. Создайте класс StringArray, который имеет свойство array (массив строк) и
//методы: getLongestWord(): string -возвращает самое длинное слово из массива.
//getUniqueWords(): string[] -возвращает массив уникальных слов из массива.

class StringArray {
  array: string[] = ["helo", "vania", "hi", "hi"];
  getLongestWord(): string {
    try {
      let res: string = this.array[0];
      for (let i = 0; i < this.array.length; i++) {
        if (res.length < this.array[i].length) {
          res = this.array[i];
        }
      }
      return res;
    } catch (error: any) {
      return error.message;
    }
  }

  getUniqueWords(): string[] {
    try {
      let newArr: string[] = [];
      for (let i = 0; i < this.array.length; i++) {
        if (!newArr.includes(this.array[i])) {
          newArr.push(this.array[i]);
        }
      }
      return newArr;
    } catch (error: any) {
      return error.message;
    }
  }
}

//4. Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в котором могут быть вложенные массивы, и возвращает новый
//массив, в котором все элементы являются плоским списком без вложенности.

function flattenArray(array: any[]): any {
  try {
    const arr: (number | string)[] = [];
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] == "number" || typeof array[i] == "string") {
        arr.push(array[i]);
      } else {
        arr.push(...array[i]);
      }
    }
    return arr;
  } catch (error: any) {
    return error.message;
  }
}

//5. Напишите функцию chunkArray(array: any[], size: number): any[][], которая принимает массив и число size, и возвращает новый массив, разделенный
//на подмассивы указанного размера.

function chunkArray(array: any[], size: number): any[][] {
  try {
    let newArr: any[] = [];
    let sonArr: any[] = [];
    for (let i = 0; i < array.length; i++) {
      sonArr.push(array[i]);
      if (sonArr.length == size) {
        newArr.push(sonArr);
        sonArr = [];
      }
    }
    if (sonArr.length !== 0) newArr.push(sonArr);
    return newArr;
  } catch (error: any) {
    return error.message;
  }
}

//6.Напишите функцию findMissingNumber(numbers: number[]): number, которая принимает массив чисел, в котором пропущено одно число из
//последовательности, и возвращает пропущенное число.

function findMissingNumber(numbers: number[]): number {
  try {
    let res: number = 0;
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] !== numbers[i - 1] + 1) {
        res += numbers[i - 1] + 1;
      }
    }
    return res;
  } catch (error: any) {
    return error.message;
  }
}

//7.Напишите функцию findPairWithSum(numbers: number[], targetSum: number): [number, number] | null, которая принимает массив чисел и целевую сумму, и возвращает
//пару чисел из массива, сумма которых равна целевой сумме. Если такая пара не найдена,функция должна возвращать null.

function findPairWithSum(
  numbers: number[],
  targetSum: number
): [number, number] | null {
  try {
    if (!numbers.length) throw new Error("empty");

    let result: [number, number] | null = null;

    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] == targetSum) {
          result = [numbers[i], numbers[j]];
        }
      }
    }

    return result;
  } catch (error) {
    return error.message;
  }
}

//9.Создайте класс NumberArray, который имеет свойство array(массив чисел) и методы: getSum(): number-возвращает сумму всех чисел в массиве.
// getEvenNumbers(): number[] -возвращает массив только четных чисел из массива.

class NumberArray {
  array: number[] = [1, 2, 3, 4, 5];

  getSum(): any {
    const arr = this.array.reduce((sum: number, el: number) => {
      return sum + el;
    }, 0);
    return arr;
  }

  getEvenNumbers(): any {
    const arr = this.array.filter((el: number) => {
      if (el % 2 == 0) {
        return true;
      }
    });
    return arr;
  }
}

//10.Создайте класс PersonArray, который имеет свойство array (массив объектов Person) и методы: getNames(): string[] -возвращает массив имен
//всех людей. getAdults(): Person[] -возвращает массив только совершеннолетних людей. getAverageAge(): number -возвращает средний
//возраст всех людей.

interface iPerson {
  id: number;
  name: string;
  age: number;
}

class PersonArray {
  array: iPerson[] = [
    { id: 1, name: "Ivan", age: 29 },
    { id: 1, name: "Anton", age: 31 },
    { id: 1, name: "Daria", age: 19 },
  ];
  getNames(): string[] {
    const newArr: string[] = [];
    for (let i = 0; i < this.array.length; i++) {
      newArr.push(this.array[i].name);
    }
    return newArr;
  }

  getAdults(): iPerson[] {
    const newArr = this.array.filter((el: iPerson) => {
      if (el.age > 18) {
        return true;
      }
    });
    return newArr;
  }

  getAverageAge(): number {
    const newArr = this.array.reduce((sum: number, el: iPerson) => {
      return sum + el.age;
    }, 0);
    return Math.floor(newArr / this.array.length);
  }
}

//11.Создайте класс StringManipulator, который имеет свойство text (строка) и методы: getCharacterCount(): number -возвращает количество
//символов в тексте. getWords(): string[] -возвращает массив слов из текста. getReversedText(): string -возвращает текст в обратном порядке.

class StringManipulator {
  text: string = "Hello How are you?";

  getCharacterCount(): number {
    return this.text.length;
  }

  getWords(): string[] {
    const arr: string[] = this.text.split(" ");
    return arr;
  }

  getReversedText(): string {
    const arr: string = this.text.split(" ").reverse().join(" ");
    return arr;
  }
}

//12.Реализуйте функцию, которая принимает в качестве параметра строку и возвращает массив без каких-либо элементов с одинаковым значением рядом
//друг с другом. Написать тест для функции 'AAAABBBCCDAABBB-> ['A', 'B', 'C', 'D', 'A', 'B’] 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’] '12233’
//-> [1, 2, 3] Написать тест для функции

function repeatStr(str: string) {
  try {
    const newStr: string[] = str.split("");
    const arr: string[] = [];
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] !== newStr[i - 1]) {
        arr.push(newStr[i]);
      }
    }
    return arr;
  } catch (error: any) {
    return error.message;
  }
}

export {
  isPalindrome,
  calculateFactorial,
  capitalizeString,
  StringArray,
  flattenArray,
  chunkArray,
  findMissingNumber,
  findPairWithSum,
  NumberArray,
  PersonArray,
  StringManipulator,
  repeatStr,
};
