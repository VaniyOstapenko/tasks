//Реализуйте класс ServerGetAll. Обязательными функциями считаются функции controller, service, repository. Цепочка взаимодействия между методами
//следующая:controller-> service-> repository, где: Задание: Необходимо вывести в консоль массив из репозитория

interface iArr {
  id: number;
  name: string;
  surname: string;
}

class ServerGetAll {
  controller(): iArr[] {
    return this.service();
  }
  service(): iArr[] {
    return this.repository();
  }
  repository(): iArr[] {
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
