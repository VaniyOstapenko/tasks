// Реализуйте функцию, которая будет считать количество своих вызовов

function doCount() {
    let count = 0;
    return function resultCount() {
        count++
        console.log(count);
    }
}

const res = doCount()
res()
res()
res()
res()
res()
res()
res()
res()
res()