// Даны переменные a и b. Проверьте, чтоaделится без остатка наb. Если это так выведите'Делится'и результат деления, иначе выведите'Делится с остатком'и само значение деления

const a = 5;
const b = 3;

if (a % b == 0) {
    console.log(`Делится. Результат:${a / b}`);
} else {
    console.log(`Не делится. Результат:${a / b}`);
}
