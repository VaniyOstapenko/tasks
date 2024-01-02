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

export {
  isPalindrome,
  calculateFactorial,
  capitalizeString,
  StringArray,
  flattenArray,
  chunkArray,
};
