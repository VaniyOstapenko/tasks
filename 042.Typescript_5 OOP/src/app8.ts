//Создайте класс PasswordGenerator,который будет иметь метод generatePassword, позволяющий генерировать случайные безопасные пароли заданной длины.
//Метод generatePassword принимает в качестве параметра длину пароля. ИспользоватьGenerics

class PasswordGenerator {
  generatePassword<T>(pwd: T) {
    if (typeof pwd == "number") {
      let str: number[] = [];
      for (let i = 0; i < pwd; i++) {
        str.push(Math.floor(Math.random() * 10));
      }
      return str.join('');
    }
  }
}

const passwordGenerator = new PasswordGenerator();
console.log(passwordGenerator.generatePassword<number>(5));
