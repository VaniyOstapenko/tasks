//Создайте массив чисел и определите, является ли он строго возрастающей последовательностью.

const arr16: number[] = [1, 2, 3, 4, 5, 6];

let flag: boolean = true;

for (let i = 0; i < arr16.length; i++) {
  if (arr16[i] >= arr16[i + 1]) {
    flag = false;
    break;
  }
}

if (flag == true) {
  console.log("Массив явялется возростающей последовательностью");
} else {
  console.log("Массив явялется не возростающей последовательностью");
}
