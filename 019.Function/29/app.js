// На входе строка s. Проверьте, является ли строка палиндромом (читается одинаково в обе стороны), используя рекурсию.
// Входные: "madam" → Результат: True
// Входные: "hello" → Результат: False
// Входные: "racecar" → Результат: True

function palindrom(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return palindrom(str.slice(1, -1))
}

console.log(palindrom('madam'));