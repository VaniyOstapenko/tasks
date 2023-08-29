// Реализуйте класс Hashtag. В него передается число n –количество элементов массива. 
// На основании числа формируется динамический массив из n элементов внутри класса. 
// Создать функцию doHashtag, заполняющую новый массив из элементов, каждое значение которого имеет вид #name

class Hashtag {
    n = 5;
    doHashtag(n) {
        let arr = [];
        for (let i = 0; i < n.length; i++) {
            arr.push(`#${n}`)
        }
        return arr;
    }
}

const hashtag = new Hashtag();
const result = hashtag.doHashtag('vaniy');
console.log(result);