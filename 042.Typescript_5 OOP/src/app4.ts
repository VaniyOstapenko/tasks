//Создатьинтерфейс iAccount.Создайтекласс"Счет" (Account), которыйсодержит
//свойство"баланс" (balance)иметоды"пополнитьсчет" (deposit)и"снятьсосчета"
//(withdraw).Установитеприватноесвойство"баланс"иобеспечьтедоступкнему
//только через методы класса. Реализуйте проверку на достаточность средств
//передснятиемсосчета.

interface iAccount {
  balance: number;
  deposit(a: number): void;
  withdraw(b: number): void;
}

class Count implements iAccount {
  balance: number = 0;
  deposit(a: number): void {
    this.balance += a;
  }
  withdraw(b: number): void {
    this.balance -= b;
  }
}

const count = new Count();
count.deposit(100);
count.deposit(50);
count.withdraw(20);

console.log(count.balance);
