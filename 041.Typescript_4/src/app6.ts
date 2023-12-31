//Создайте класс Calculator, который содержит методы add() (сложение), subtract() (вычитание), multiply() (умножение) и divide() (деление).
//Создайте экземпляр класса Calculator и выполните несколько операций.
//1
// class Calculator {
//   a: number;
//   b: number;

//   constructor(a: number, b: number) {
//     this.a = a;
//     this.b = b;
//   }

//   add() {
//     return this.a + this.b;
//   }

//   subtract() {
//     return this.a - this.b;
//   }

//   multiply() {
//     return this.a * this.b;
//   }

//   divide() {
//     return this.a / this.b;
//   }
// }

// const calculator = new Calculator(2, 8);
// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());

//2
// class Calculator {
//   a: number;
//   b: number;

//   add() {
//     return this.a + this.b;
//   }

//   subtract() {
//     return this.a - this.b;
//   }

//   multiply() {
//     return this.a * this.b;
//   }

//   divide() {
//     return this.a / this.b;
//   }
// }

// const calculator = new Calculator();

// calculator.a = 2;
// calculator.b = 8;

// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());

//3
// class Calculator {
//   a: number = 2;
//   b: number = 8;

//   add() {
//     return this.a + this.b;
//   }

//   subtract() {
//     return this.a - this.b;
//   }

//   multiply() {
//     return this.a * this.b;
//   }

//   divide() {
//     return this.a / this.b;
//   }
// }

// const calculator = new Calculator();

// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());

//4
class Calculator {
  a: number;
  b: number;

  setA(a: number) {
    this.a = a;
  }

  setB(b: number) {
    this.b = b;
  }
  getAdd() {
    return this.a + this.b;
  }

  getSubtract() {
    return this.a - this.b;
  }

  getMultiply() {
    return this.a * this.b;
  }

  getDivide() {
    return this.a / this.b;
  }
}

const calculator = new Calculator();
calculator.setA(2);
calculator.setB(8);
console.log(calculator.getAdd());
console.log(calculator.getSubtract());
console.log(calculator.getMultiply());
console.log(calculator.getDivide());
