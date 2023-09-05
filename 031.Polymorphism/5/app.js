// Реализуйте Validation–производный класс, базовый –StringValue. 
// Класс StringValueсостоит из: свойствavalue в конструкторе; 
// Класс Validationнаследует value в конструкторе при помощи 
// метода super и дополнительно принимает и дополняет 
// конструктор свойством: confirmValue; класс Validation 
// включает метод checkValue(), который проверяет, что 
// передаваемое значение value в конструктор –строка и состоит 
// из букв.Также добавить проверку на равенство value и 
// confirmValue Необходимо вызвать методcheckValueэкземпляра 
// validation

class StringValue {
    constructor(value) {
        this.value = value;
    }
}

class Validation extends StringValue {
    constructor(value, confirmValue) {
        super(value);
        this.confirmValue = confirmValue;
    }
    checkValue() {
        try {
            if (!isNaN(this.value)) {
                throw new Error('не строка');
            } else if (this.value !== this.confirmValue) {
                throw new Error('строки не равны');
            } else {
                console.log(true);
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}

const validation = new Validation('test', 'test');
validation.checkValue();