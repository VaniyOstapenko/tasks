// Реализуйте класс ServerById. Обязательными функциями 
// считаются функции middleware, controller, service, 
// repository. Цепочка взаимодействия между методами 
// следующая: middleware -> controller -> service -> 
// repository, где: middleware –функция валидатор 
// controller–функция, принимающая данные. Принимает 
// json service–функция проверки на то что с 
// repositoryвернулось значение repository–функция, 
// симулирующая БД. Хранит массив данных. Взаимодействие 
// с этим массивом осуществляется только в repository. 
// Массив находится в приложении Задание: на вход 
// подается JSON вида: `{ "id": "javascript" }` '
// Необходимо вывести в консоль найденный элемент массива 
// по id если таковой имеется. В противном случае бросить 
// исключение. Добавить проверки. 


class ServerById {
    controller(obj) {
        try {
            const serv = this.service(obj)
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
        const arr = [{ "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
        { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
        { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
        { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
        { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ]
        const result = arr.filter((el) => el.id === obj.id ? true : null)
        return result;
    }
}

const serverById = new ServerById()
const obj = {
    id: 'javascript'
}

console.log(serverById.controller(obj));
