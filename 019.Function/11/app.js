// На входе число. Необходимо создать функцию, возвращающую факториал числа 4! = 1 * 2 * 3 * 4

const num = 4;

function doFactorial(count) {
  let sum = 1;
  for (let i = 1; i <= count; i++) {
    sum *= i;
  }
  return sum;
}

let result = doFactorial(num);
console.log(result);
