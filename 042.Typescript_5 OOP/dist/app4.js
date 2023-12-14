//Создатьинтерфейс iAccount.Создайтекласс"Счет" (Account), которыйсодержит
//свойство"баланс" (balance)иметоды"пополнитьсчет" (deposit)и"снятьсосчета"
//(withdraw).Установитеприватноесвойство"баланс"иобеспечьтедоступкнему
//только через методы класса. Реализуйте проверку на достаточность средств
//передснятиемсосчета.
class Count {
    balance = 0;
    deposit(a) {
        this.balance += a;
    }
    withdraw(b) {
        this.balance -= b;
    }
}
const count = new Count();
count.deposit(100);
count.deposit(50);
count.withdraw(20);
console.log(count.balance);
