//Создать интерфейс iPwd. Создайте классPwd. Pwd хранит функцию showPwd, которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
//Класс Validation является производным по отношению к базовому, родительскому Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
//базового класса и записать в переменную используя метод super. Далее дополняем переопределенный метод отображением результата в console.
class Pwd {
    showPwd() {
        const arr = [];
        for (let i = 0; i < 8; i++) {
            arr.push(Math.floor(Math.random() * 10));
        }
        return arr.join("");
    }
}
class Validation10 extends Pwd {
    showPwd() {
        return super.showPwd();
    }
}
const validation10 = new Validation10();
console.log(validation10.showPwd());
