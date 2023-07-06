// На вход подается строка в виде электронной почты. 
// Если строка содержит “@”и оканчивается на .com, .ru, то вывести true, иначе false

let a = prompt('введите строку');

if (a.includes('@') && (a.includes('.com') || a.includes('.ru'))) {
    console.log(true);
} else {
    console.log(false);
}