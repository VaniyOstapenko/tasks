// Напишите программу для пересчёта величины временного интервала, 
// заданного в минутах, в величину, выраженную в часах и минутах: 
// Пример: 150 => 2 час 30 минут 50 => 0 час 50 минут 240 => 4 час 0 минут

let a = +prompt('введите время в минутах');
let minutes = a%60;
let houres = a/60;

console.log(Math.floor(houres), 'час', minutes, 'минут');
