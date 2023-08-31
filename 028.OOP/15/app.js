// Реализуйте класс ServerDelete. Обязательными функциями 
// считаются функции middleware, controller, service, repository. 
// Цепочка взаимодействия между методами следующая: middleware 
// -> controller -> service -> repository, где: middleware 
// –функция валидатор controller–функция, принимающая данные. 
// Принимает json service–функция проверки на то что с 
// repositoryвернулось значение repository–функция, 
// симулирующая БД. Хранит массив данных. Взаимодействие с 
// этим массивом осуществляется только в repository. Массив 
// находится в приложении Задание: на вход подается JSON 
// вида: `{ "id": "javascript" }` Необходимо осуществить 
// удаление по id.Если совпадения нет –ошибка. Добавить 
// проверки

class ServerDelete {
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
        { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }]
        const new_arr = arr.filter((el) => el.id !== obj.id)
        if (new_arr.length === arr.length) {
            throw new Error('Ошибка')
        }
        return new_arr;
    }
}

const serverDelete = new ServerDelete();
const obj = JSON.parse(`{ "id": "javascript" }`)
const result = serverDelete.controller(obj);
console.log(result);