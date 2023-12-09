//Создайте массив строк и выведите на экран все элементы, которые содержат букву 'o'.

const arr_: string[] = ["hello", "my", "friend", "how", "are", "you"];

let new_arr: string[] = [];

for (let i = 0; i < arr_.length; i++) {
  if (arr_[i].includes("o")) {
    new_arr.push(arr_[i]);
  }
}

console.log(new_arr);
