// Полиморфизм. Реализуйте класс NumberArray. NumberArray
// хранит функцию multArr, которая заполняет и возвращает 
// массив из 5рандомныхэлементов. Класс ConsoleArrayявляется 
// производным по отношению к базовому, родительскому NumberArray
// и содержит функциюmultArr. Необходимо переопределить multArr 
// из базового класса записав в переменную используя метод super. 
// Далее посчитать произведение всех элементов массива 
// используя reduce

class NumberArray {
    multArr() {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(Math.floor(Math.random() * 10));
        }
        return arr;
    }
}

class ConsoleArray extends NumberArray {
    multArr() {
        const func = super.multArr();
        console.log(func);
        const result = func.reduce((res, el) => res * el, 1)
        return result;
    }
}

const consoleArray = new ConsoleArray();
console.log(consoleArray.multArr());