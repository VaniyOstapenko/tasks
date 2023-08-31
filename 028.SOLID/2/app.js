// Реализуйте класс DomHtml, который будет взаимодействовать 
// с DOM по клику на кнопку. Класс содержит 1методвалидации, 
// называемый middleware, в котором происходит проверка на 
// почту. Вывести true, если провека успешна

class DomHtml {
    constructor() {
        this.middleware()
    }

    middleware() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', function () {
            try {
                const inp = document.querySelector('input').value;
                if (!/^[a-zA-Z]+@+[a-z]+\.+[a-z]{2,4}$/g.test(inp)) throw new Error('Ошибка ввода почты');
                alert(true);
            } catch (error) {
                alert(error.message)
            }
        })
    }
}

const domHtml = new DomHtml();