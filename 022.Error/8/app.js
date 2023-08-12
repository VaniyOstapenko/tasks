// Реализуйте функцию, которая принимает массив последовательных (возрастающих) 
// букв и возвращает отсутствующую в массиве. Добавить проверки 
// ["a","b","c","d","f"] -> "e" ["O","Q","R","S"] -> "P"

const arr = ["a", "b", "c", "d", "f"].join('').toLowerCase();



function searchLetter(arr) {
    try {
        const str = 'abcdefghijklmnopqrstuvwxyz';
        const indexStr = str.indexOf(arr[0]);
        const sliceStr = str.slice(indexStr, indexStr + arr.length + 1);

        for (let i = 0; i < sliceStr.length; i++) {
            if (sliceStr[i] !== arr[i]) {
                console.log(sliceStr[i]);
                break;
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}

searchLetter(arr);