import {
  isPalindrome,
  calculateFactorial,
  capitalizeString,
  StringArray,
  flattenArray,
  chunkArray,
} from "./app";

describe("test isPalindrom function", () => {
  test("возвращает успех", () => {
    const result = isPalindrome("anna");
    expect(result).toBeTruthy();
  });

  test("Возвращает ошибку empty", () => {
    const result = isPalindrome("");
    expect(result).toBe("empty");
  });

  test("ошибка типа данных", () => {
    const result = isPalindrome(6);
    expect(result).toBe("word must be a string");
  });
});

describe("test calculateFactorial function", () => {
  test("to be success", () => {
    const result = calculateFactorial(3);
    expect(result).toBe(6);
  });

  test("Возвращает ошибку empty", () => {
    const result = calculateFactorial("");
    expect(result).toBe("empty");
  });

  test("ошибка типа данных", () => {
    const result = calculateFactorial("6");
    expect(result).toBe("n must be a number");
  });
});

describe("test  capitalizeString function", () => {
  test("to be success", () => {
    const result = capitalizeString("hello vania");
    expect(result).toBe("HelloVania");
  });

  test("to be empty", () => {
    const result = capitalizeString("");
    expect(result).toBe("empty");
  });

  test("to be typeof", () => {
    const result = capitalizeString(123);
    expect(result).toBe("str must be a string");
  });
});

describe("test StringArray class", () => {
  test("вoзвращает success", () => {
    const stringArray = new StringArray();
    const result = stringArray.getLongestWord();
    expect(result).toBe("vania");
  });

  test("вoзвращает success", () => {
    const stringArray = new StringArray();
    const result = stringArray.getUniqueWords();
    expect(result).toEqual(["helo", "vania", "hi"]);
  });
});

describe("test flattenArray", () => {
  test("возвращает Success", () => {
    const result = flattenArray([1, 2, "d", ["a", 4]]);
    expect(result).toEqual([1, 2, "d", "a", 4]);
  });
});

describe("test chunkArray function", () => {
  test("возвращает Success", () => {
    let size = 5;
    const result = chunkArray([1, 2, 3, 4, 5, 6], size);
    expect(result).toEqual([[1, 2, 3, 4, 5], [6]]);
  });
});
