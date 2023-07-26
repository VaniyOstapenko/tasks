// На входе статичный объект с повторяющимися значениями.
// Необходимо отфильтровать значения объекта и оставить только уникальные значения
// {           {
//     0:7,        0:7,
//     1:7,        1:6,
//     2:6,        2:5,
//     3:5,  ->    3:2,
//     4:2,        4:1
//     5:2,        }
//     6:1
// }

const obj = {
  0: 7,
  1: 7,
  2: 6,
  3: 5,
  4: 2,
  5: 2,
  6: 1,
};

let new_obj = {};
let arr = [];

for (let key in obj) {
  arr.push(obj[key]);
}

let new_arr = [];
arr.forEach(function (el) {
  if (!new_arr.includes(el)) {
    return new_arr.push(el);
  } else {
    return "error";
  }
});

for (let i = 0; i < new_arr.length; i++) {
  new_obj[i] = new_arr[i];
}

console.log(new_obj);
