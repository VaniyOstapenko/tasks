// Реализуйте класс NumberArray. NumberArrayхранит функцию 
// showArr, которая заполняет и возвращает массив из 
// 5 рандомныхэлементов. Класс ConsoleArray является 
// производным по отношению к базовому, родительскому 
// NumberArrayи содержит функциюshowArr. Необходимо 
// переопределить showArrиз базового класса и записать в 
// переменную используя метод super. Далее дополняем 
// переопределенный метод отображением результата в console.

class NumberArray {
    showArr() {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(Math.floor(Math.random() * 10));
        }
        return arr;
    }
}

class ConsoleArray extends NumberArray {
    showArr() {
        const arr = super.showArr();
        console.log(arr);
    }
}

const consoleArray = new ConsoleArray();
consoleArray.showArr();