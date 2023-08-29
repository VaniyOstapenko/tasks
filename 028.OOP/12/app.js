// Реализуйте класс Hashtag. В него передается число n –количество элементов массива. 
// На основании числа формируется динамический массив из n элементов внутри класса. 
// Создать функцию doHashtag, заполняющую новый массив из элементов, каждое значение которого имеет вид #name

class Hashtag {
    doHashtag(n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            let element = prompt('Введите слово')
            arr.push('#' + element);
        }
        return arr;
    }
}

const hashtag = new Hashtag();
const result = hashtag.doHashtag(5);
console.log(result);