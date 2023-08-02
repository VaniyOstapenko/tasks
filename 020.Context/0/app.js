//Тренировочный урок контекст this

console.log(this);//window

const obj = {
    name: 'Ivan',
    test: function () {
        console.log(this.id);//undefined//если ключ который есть в объекте, то выведет объект
    }
}
obj.test()

if(true){
    console.log(this);//window
}

function test(){
    console.log(this);//window
}
test()


