// Пользователь вводит число от 1 до 7, 
// соответствующее дню недели.
//  Необходимо вывести день для введенного числа. 1 -> Понедельник

const n = +prompt('Введите число от 1 до 7')

switch (n) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
    case 7:
        console.log('Воскресенье');
        break;
    default:
        console.log('Вы ввели число не в нужно диапозоне');
        break;
}