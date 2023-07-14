// Напишите код, который разворачивает строку не используя reverse

let a = "Hello";

let result = '';

for (let i = a.length-1; i >= 0; i--) {
    result += a[i];
}
console.log(result);
