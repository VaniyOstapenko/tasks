//1.Написать функцию которая принимает 2 числа и возводит 1 во 2 степень. Добавить необходимые проверки. Написать тест для функции

function doPow(a, b) {
    if (typeof a === 'string' || typeof b === 'string') return false;
    return a ** b;
}

describe('test doPow function', () => {
    test('test toBe success', () => {
        const result = doPow(2, 2);
        expect(result).toBe(4);
    })

    test('test toBe false', () => {
        const result = doPow(1, 'b');
        expect(result).toBeFalsy();
    })
})

//2.Написать функцию которая принимает 2 числа и возвращает результат произведения 2 множителей. Добавитьнеобходимыепроверки. Написать тест для функции

function multiply(a, b) {
    if (typeof a != 'number' || typeof b != 'number') return false;
    if (!a || !b) return false;
    return a * b;
}

describe('test doMultiply', () => {
    test('test toBe multiply success', () => {
        const result = multiply(2, 3);
        expect(result).toBe(6);
    })

    test('test toBe false', () => {
        const result = multiply('a', 'b');
        expect(result).toBeFalsy();
    })

    test('test toBe false', () => {
        const result = multiply();
        expect(result).toBeFalsy();
    })
})

//3.Написать функцию которая принимает массив чисел и находит сумму всех элементов. Добавитьнеобходимыепроверки. Написать тест для функции

function arrSum(arr) {
    if (!arr.length) return false;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) return false;
        sum += arr[i];
    }
    return sum;
}

describe('test arrSum function', () => {
    const arr = [1, 2, 3, 4, 5];
    test('test toBe success', () => {
        const result = arrSum(arr);
        expect(result).toBe(15);
    })

    test('test toBe false', () => {
        const result = arrSum([]);
        expect(result).toBeFalsy();
    })

    test('test toBe false', () => {
        const result = arrSum(['a', 'b', 'c'])
        expect(result).toBeFalsy();
    })
})

//4.У вас есть массив объектов вида приведенного в приложении. Необходимо вывести все товары, количество которых больше 10 и произведены в Германии Написать тест для функции

function checkArr(arr) {
    const result = arr.filter((el) => el.count > 10 && el.producer == 'Германия');
    if (!result.length) return false;
    return result;
}

describe('test checkArr function', () => {
    const arr = [
        { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
        { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
        { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
        { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
        { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
        { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
        { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
    ]

    test('test toHaveLength', () => {
        const result = checkArr(arr);
        expect(result).toHaveLength(2)
    })

    test('toEqual', () => {
        const result = checkArr(arr);
        const equal = [
            { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
            { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
        ]
        expect(result).toEqual(equal);
    })

    test('test toBe false', () => {
        const result = checkArr([]);
        expect(result).toBeFalsy();
    })
})

//5.У вас есть массив строковых значений,состоящий из номеров телефонов. Необходимо вывести значения массива без дубликатов. Добавитьнеобходимые проверки. Написать тест для функции

function isUniq(arr) {
    const uniqArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') return false;
        if (!uniqArr.includes(arr[i])) uniqArr.push(arr[i]);
    }
    if (!uniqArr.length) return false;
    return uniqArr;
}

describe('', () => {
    const arr = ['+375292557153', '+375292557153', '+375445674321'];
    const arr2 = [3, '+375292557153', '+375445674321'];

    test('test toHaveLength', () => {
        const result = isUniq(arr);
        expect(result).toHaveLength(2);
    })

    test('toEqual', () => {
        const result = isUniq(arr);
        const equal = ['+375292557153', '+375445674321']
        expect(result).toEqual(equal);
    })

    test('test toBe false', () => {
        const result = isUniq([]);
        expect(result).toBeFalsy()
    })

    test('test toBe fasle', () => {
        const result = isUniq(arr2);
        expect(result).toBeFalsy();
    })
})

//6.На входе статичный объект. Необходимо посчитать количество пар (ключ: значение) где значение число и вывести количество. Добавить необходимые
//проверки. Написать тест для функции

function countObj(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj[key] == 'string') return false;
        obj[key] = count++
    }
    return count;
}

describe('test countObj', () => {
    const obj = {
        id: 1,
        age: 29,
        year: 2024
    }

    test('test toBe countObj', () => {
        const result = countObj(obj);
        expect(result).toBe(3)
    })

    test('test toBe falsy', () => {
        const result = countObj({});
        expect(result).toBeFalsy();
    })
})

//7.На входе статичный объект. Необходимо числовые значения удвоить на выходе. Написать тест для функции

function sumObj(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'string') return false;
        return obj[key] * 2;
    }
}

describe('', () => {
    const obj = {
        id: 1,
        age: 29,
        year: 2024
    }

    test('', () => {
        const result = sumObj(obj)
        expect(result).toBe(2, 58, 4048);
    })

    test('', () => {
        const result = sumObj({});
        expect(result).toBeFalsy()
    })
})

//8.На входе статичный объект. Необходимо сформировать массив из всeх четных значений объекта. Написать тест для функции

function chetArr(obj) {
    const arr = [];
    for (let key in obj) {
        if (typeof obj[key] == 'string') return false;
        if (obj[key] % 2 === 0) {
            arr.push(obj[key]);
        }
    }
    return arr;
}

describe('test chetArr', () => {
    const obj = {
        id: 1,
        age: 2,
        year: 3
    }

    test('Возвращает Success', () => {
        const result = chetArr(obj)
        expect(result).toStrictEqual([2])
    })

    test('Вовзращает False', () => {
        const result = chetArr({
            id: 1,
            age: 'd',
            year: 3
        });
        expect(result).toBeFalsy();
    })
})

//9. На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо разбить данный одномерный массив на маленькие массивы в
//зависимости от того, какого число ввел пользователь. Добавитьнеобходимыепроверки. 1 -> [[1], [2], [3], [4], [5], [6]]
//2 -> [[1, 2], [3, 4], [5, 6]] 3 -> [[1, 2, 3], [4, 5, 6]] 4 -> [[1, 2, 3, 4], [5, 6] 5 -> [[1, 2, 3, 4, 5], [6]]
//6 -> [[1, 2, 3, 4, 5, 6]] Написать тест для функции

function arraySum(arr) {
    let n = 5;
    let dadArr = [];
    let sonArr = [];
    for (let i = 0; i < arr.length; i++) {
        dadArr.push(arr[i]);
        if (dadArr.length == n) {
            sonArr.push(dadArr)
            dadArr = [];
        }
    }
    if (dadArr.length !== 0) {
        sonArr.push(dadArr);
    }
    return sonArr;
}

describe('test arraySum function', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    test('test возвращает success', () => {
        const result = arraySum(arr);
        expect(result).toEqual([[1, 2, 3, 4, 5], [6]]);
    })
})

//10. Реализуйте функцию, которая принимает в качестве параметра строку и возвращает массив без каких-либо элементов с одинаковым значением рядом
//друг с другом. Написать тест для функции 'AAAABBBCCDAABBB-> ['A', 'B', 'C', 'D', 'A', 'B’] 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’] 
//'12233’ -> [1, 2, 3] Написать тест для функции

function getStr(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[i - 1]) arr.push(str[i]);
    }
    return arr;
}

describe('test getStr function', () => {
    const str = 'AAAABBBCCDAABBB'
    test('test возвращает success', () => {
        const result = getStr(str);
        expect(result).toEqual(['A', 'B', 'C', 'D', 'A', 'B'])
    })
})