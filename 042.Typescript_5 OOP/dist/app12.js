//Реализуйте класс ServerGetAll. Обязательными функциями считаются функции controller, service, repository. Цепочка взаимодействия между методами
//следующая:controller-> service-> repository, где: Задание: Необходимо вывести в консоль массив из репозитория
class ServerGetAll {
    controller() {
        return this.service();
    }
    service() {
        return this.repository();
    }
    repository() {
        const arr = [
            { id: 1, name: "Ivan", surname: "Ostapenko" },
            { id: 2, name: "Daria", surname: "Drozd" },
            { id: 3, name: "Anton", surname: "Miranovich" },
        ];
        return arr;
    }
}
const serverGetAll = new ServerGetAll();
console.log(serverGetAll.controller());
