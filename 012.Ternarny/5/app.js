// Пользователь вводит число с клавиатуры. 
// Нужно вывести на экран сколько в этом числе цифр, 
// а также положительное оно или отрицательное. 
// Например, "Число " + num + " положительное".
// Добавить проверку на число

let a = prompt('введите число');

if (isNaN(a)) {
    console.log('ошибка');
} else {
    if (a > 0) {
        alert(`положительное, количество цифр= ${a.length}`);
    } else {
        alert(`отрицательное, количество цифр= ${a.length-1}`)
    }
}