//Создайте переменную grade и присвойте ей значение от 1 до 5. Используя оператор switch, выведите в консоль описание оценки
//(например, "Отлично", "Хорошо" и т.д.) в зависимости от значения переменной grade.
const grade = +prompt("Введите оценку");
switch (grade) {
    case 1:
        console.log("Очень плохо");
        break;
    case 2:
        console.log("Плохо");
        break;
    case 3:
        console.log("нормально");
        break;
    case 4:
        console.log("Хорошо");
        break;
    case 5:
        console.log("Отлично");
        break;
    default:
        console.log("Оценка не найдена");
}
