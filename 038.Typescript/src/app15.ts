//Напишите программу, которая принимает строку и возвращает новую строку, в которой каждое слово заменено на последнюю букву
//этого слова, а все остальные символы остаются без изменений. "Hello World"->"o d“

const _str_: string[] = "Hello World".split(" ");

let arr_: string[] = [];
for (let i = 0; i < _str_.length; i++) {
  arr_.push(_str_[i][_str_[i].length - 1]);
}

console.log(arr_.join(" "));
