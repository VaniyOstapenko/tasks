//Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
const palindrom = ["hello", "anna", "how", "are", "you"];
const isValidPalindrom = palindrom.some((el) => {
    if (el === el.split("").reverse().join("")) {
        return true;
    }
});
console.log(isValidPalindrom);
