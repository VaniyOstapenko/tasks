//Напишите программу, которая принимает строку и возвращает новую строку, в которой все символы уникальны (не повторяются).
//Например, для строки "hello" результатом должна быть строка "helo".

const st: string[] = "Hello".split("");

let result: string = "";

for (let i = 0; i < st.length; i++) {
  if (!result.includes(st[i])) {
    result += st[i];
  }
}

console.log(result);
