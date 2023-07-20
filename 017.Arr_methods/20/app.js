// На входе n –количество элементов массива. Далее производится заполнение массива с клавиатуры.
// Оставьте в нем только положительные числа. Filter

const n = prompt("количество элементов");
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(prompt('введите число'))
}

const result = arr.filter(function(el){
    if(el>=0){
        return true
    }
})
console.log(result);
