// На входе массив чисел. На основе этого массива сформировать объект,
// где ключ число массива, значение –true/false. True–число четное, false –нечетное

const arr = [1, 2, 3, 9, 4, 5, 6, 7, 8];

let obj = {};

let new_arr = arr.map(function (el) {
  if (el % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

obj.arr = new_arr;
console.log(obj);
