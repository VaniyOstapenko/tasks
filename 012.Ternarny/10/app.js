// Пользователь вводит одно число. 
// Необходимо вывести обратное ему 
// (число является обратным при 1/x). 
// Если при этом введённое с клавиатуры 
// число –ноль, то вывести «Обратного числа не 
// существует». Добавить проверку на ввод 
// только чисел

const a = 4;

if (typeof (a) == 'string') {
    console.log('ошибка ввода');
} else {
    if (a != 0) {
        console.log(`ваше обратное число: ${1 / a}`);
    } else if (a == 0) {
        console.log('Обратного числа не существует');
    }
}
