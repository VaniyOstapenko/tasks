// Напишите функцию, которая принимает статичный массив строк.
// Необходимо отфильтровать значения и оставить только те,
// где длина строк до 2символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] ->
// [“by”, “de”, “ru”]

const arr = ["by", "belarus", "de", "ru", "germany"];

function doFilter(array) {
  let new_arr = array.filter(function (el) {
    if (el.length <= 2) {
      return true;
    }
  });
  return new_arr;
}

const result = doFilter(arr);
console.log(result);