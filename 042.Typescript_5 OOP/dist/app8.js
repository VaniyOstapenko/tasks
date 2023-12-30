//Создайте класс PasswordGenerator,который будет иметь метод generatePassword, позволяющий генерировать случайные безопасные пароли заданной длины.
//Метод generatePassword принимает в качестве параметра длину пароля. ИспользоватьGenerics
class PasswordGenerator {
    generatePassword(pwd) {
        if (typeof pwd == "number") {
            let str = [];
            for (let i = 0; i < pwd; i++) {
                str.push(Math.floor(Math.random() * 10));
            }
            return str.join('');
        }
    }
}
const passwordGenerator = new PasswordGenerator();
console.log(passwordGenerator.generatePassword(5));
