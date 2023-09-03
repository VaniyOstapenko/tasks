// Реализуйте класс ServerPost. Обязательными функциями считаются функции middleware, controller, service, repository. 
// Цепочка взаимодействия между методами следующая: middleware -> controller -> service -> repository, 
// где: middleware –функция валидатор controller–функция, принимающая данные. Принимает json service–функция 
// проверки на то что с repositoryвернулось значение repository–функция, симулирующая БД. Хранит массив данных. 
// Взаимодействие с этим массивом осуществляется только в repository. Массив находится в приложении 
// Задание: на вход подается JSON вида: `{ "name": "Test", "age": 1 }` Необходимо добавить в массив БД объект 
// только в том случае, если нет совпадений поname.Если совпадения нет, то в объект клиента добавить ключid 
// споследним возможным уникальным idБД,таким образом, чтобы в БД был запушен объект вида 
// {"id": 6, "name": "Test", "age": 1} Если совпадение есть –ошибка. Добавить проверки 

class ServerPost {
    controller(obj) {
        try {
            const serv = this.service(obj);
            return serv;
        } catch (error) {
            return error.message;
        }
    }

    service(obj) {
        const rep = this.repository(obj);
        return rep;
    }

    repository(obj) {
        const arr =
            [
                { "id": 1, "name": "Yesenia", "age": 22 },
                { "id": 2, "name": "Hanna", "age": 22 },
                { "id": 3, "name": "Stanislau", "age": 25 },
                { "id": 4, "name": "German", "age": 18 },
                { "id": 5, "name": "Maria", "age": 27 }
            ]
        const res = arr.filter((el) => el.name !== obj.name)
        return res;
    }

}

const serverPost = new ServerPost();
const obj = JSON.parse(`{ "name": "Test", "age": 1 }`);
const result = serverPost.controller(obj);
console.log(result);