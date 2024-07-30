// На вход подается строка в виде электронной почты. 
// Если строка содержит “@”и оканчивается на .com, .ru, то вывести true, иначе false

const str = 'ostapenkovania@mail.com';

if (str.includes('@') && (str.includes('.com') || str.includes('.ru'))) {
    console.log(true);
} else {
    console.log(false);
}