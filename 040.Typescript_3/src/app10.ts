//Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже вернет 5. Использовать каррирование

function carrirovanie(a: number, b: number): number {
  return a + b;
}

console.log(carrirovanie(2, 3));

function carrirovanie2(a: number) {
  return (b:number) => {
    return a + b;
  };
}

console.log(carrirovanie2(2)(3));

function carrirovanie3<A, B>(a: A) {
  return (b: B) => {
  if (typeof (a) === 'number' && typeof (b) === 'number') return a + b
  }
  }
  console.log(carrirovanie3<number, number>(2)(3));