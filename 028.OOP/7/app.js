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


// class ServerById {
//     controller(obj) {
//         try {
//             const serv = this.service(obj)
//             return serv;
//         } catch (error) {
//             return error.message;
//         }
//     }

//     service(obj) {
//         const rep = this.repository(obj);
//         return rep;
//     }

//     repository(obj) {
//         const arr = [{ "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//         { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//         { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
//         ]
//         const result = arr.filter((el) => el.id === obj.id ? true : null)
//         return result;
//     }
// }

// const serverById = new ServerById()
// const obj = {
//     id: 'javascript'
// }

// console.log(serverById.controller(obj));


// 7. Пользователь вводит три числа: a, b и c. Напишите класс, которая определяет, является ли тройка
//  чиселсторонамитреугольника. Для этого следует проверитьследующиеусловия:
//  1.
//  Суммадвухсторондолжнабытьбольшетретьейстороны.(a+b>c,a+c>b,b+c>a)
//  2. Еслиэтотак,тодалееопределить,какойтиптреугольникаможнопостроить:
//  • Есливсетристороныравны,выведитеРавностороннийтреугольник.
//  • Еслидвестороныравны,выведитеРавнобедренныйтреугольник.
//  • Есливсетристороныразные,выведитеРазностороннийтреугольник.
//  3. Если треугольник не существует (условие не выполняется), выведите Треугольник не
//  существует.
//  Добавьтепроверкуна вводтолькочисел.
//  Входные: 5, 5, 5 → Результат: Равностороннийтреугольник
//  Входные: 3, 4, 5 → Результат: Разностороннийтреугольник
//  Входные: 6, 6, 10 → Результат: Равнобедренный треугольник
//  Входные: 1, 2, 3 → Результат: Треугольникне существует
//  Входные: 10, 15, 25 → Результат: Треугольник не существует
//  Входные: 7, 7, 14 → Результат: Треугольник не существует

class CheckingTheTriangle {
    checkTriangle(a, b, c) {
        if (a + b > c && a + c > b && b + c > a) {

            if (a === b && b === c) {
                return 'Равносторонний треугольник'
            } else if (a === b || b === c || a === c) {
                return 'Равнобедренный треугольник'
            } else {
                return 'Разносторонний треугольник'
            }
        } else {
            return 'Треугольник не существует'
        }
    }
}

const checkingTheTriangle = new CheckingTheTriangle()
console.log(checkingTheTriangle.checkTriangle(5, 5, 5));
console.log(checkingTheTriangle.checkTriangle(6, 6, 10));
console.log(checkingTheTriangle.checkTriangle(7, 7, 14));
console.log(checkingTheTriangle.checkTriangle(3, 4, 5));