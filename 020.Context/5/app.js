// На входе строка в виде пароля. Необходимо написать
// функцию на проверку, что пароль является надежным
// (содержит хотя бы 1 букву в большом регистре, числа,
//     буквы, символ, длина не менее 8 символов)

const pass = "121dasaASWQ@";

function check(pass) {
  let specSymbol;
  let upperCase;
  let includeNum;
  let includeLetter;
  let passLength;

  pass.includes("@") || pass.includes("$") || pass.includes("#")
    ? (specSymbol = true)
    : (specSymbol = false);

  for (let i = 0; i < pass.length; i++) {
    if (pass[i] == pass[i].toUpperCase()) {
      upperCase = true;
      break;
    } else {
      upperCase = false;
    }
  }

  for (let i = 0; i < pass.length; i++) {
    if (!isNaN(pass[i])) {
      includeNum = true;
      break;
    } else {
      includeNum = false;
    }
  }

  for (let i = 0; i < pass.length; i++) {
    if (isNaN(pass[i])) {
      includeLetter = true;
      break;
    } else {
      includeLetter = false;
    }
  }

  pass.length >= 8 ? (passLength = true) : (passLength = false);

  return specSymbol == true &&
    upperCase == true &&
    includeNum == true &&
    includeLetter == true &&
    passLength == true
    ? "надёжный пароль"
    : "ненадёжный пароль";
}

let result = check(pass);
console.log(result);
