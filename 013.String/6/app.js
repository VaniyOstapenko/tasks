// На вход программе подается строка текста. 
// Напишите программу, которая проверяет, 
// что строка заканчивается подстрокой .com или .ru. 
// Если правильно заканчивается, то вывести true, в противном случае false

let email = prompt('введите строку');

if (email.includes('.com') || email.includes('.ru')) {
    console.log(true);
}else{
    console.log(false);
}

console.log(email.includes('.com') || email.includes('.ru')? true : false);