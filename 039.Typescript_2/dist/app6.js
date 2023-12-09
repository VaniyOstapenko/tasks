//Создайте массив строк и объедините все элементы в одну строку без пробелов.
const strArr = ["Hello", "World", "I'm", "Vania"];
let strNew = "";
for (let i = 0; i < strArr.length; i++) {
    strNew += strArr[i];
}
console.log(strNew);
