// Дан массив с элементами 
// 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью 
// цикла for создайте строку 
// '-1-2-3-4-5-6-7-8-9-‘

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
console.log(a.join('-'));