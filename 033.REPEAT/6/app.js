// Реализуйте класс Server, получающий объект из предыдущего задания и сохраняющий его в «БД» (массив). Обязательными 
// функциями считаются функции middleware, controller, service, repository. Цепочка взаимодействия между методами 
// следующая: middleware -> controller -> service -> repository, где: middleware –функция валидатор controller–функция, 
// принимающая данные. Принимает json service–функция проверки на то что с repository вернулось значение 
// repository–функция, симулирующая БД. Хранит массив данных. Взаимодействие с этим массивом осуществляется только в 
// repository. Массив находится в приложении

class Client {
    doRegistration() {
        const getLog = {
            email: '',
            password: ''
        }

        const btn = document.querySelector('button');

        btn.addEventListener('click', () => {
            const email = document.querySelector('.email');
            const password = document.querySelector('.password');

            getLog.email = email.value;
            getLog.password = password.value;
        });
        console.log(getLog);
    }
}

class Server extends Client {
    name = super.doRegistration()
    controller(array) {
        const serv = this.service(array);
        return serv;
    }

    service(array) {
        const rep = this.repository(array);
        return rep;
    }

    repository(array) {
        const arr = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
        ]
        const new_arr = arr.filter((el) => el.email === array.email);
        if (!new_arr.length) {
            arr.push(array);
        } else {
            throw new Error('Элемент в наличии')
        }
        return arr;
    }
}


const server = new Server();
const array = server.controller(this.name);
const result = server.controller(array);
console.log(result);

