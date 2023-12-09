//Создайте массив строк и объедините все элементы в одну строку без пробелов.

const strArr: string[] = ["Hello", "World", "I'm", "Vania"];

let strNew: string = "";

for (let i = 0; i < strArr.length; i++) {
  strNew += strArr[i];
}

console.log(strNew);
