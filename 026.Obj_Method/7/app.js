// На вход подается число. Необходимо каждое значение возвести в 
// степень индекса и вычислить сумму. 12345 = 10+21+32+43+54

const n = '12345';

function doMultyplySum(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i] ** i;
    }
    return sum;
}

let result = doMultyplySum(n)
console.log(result);