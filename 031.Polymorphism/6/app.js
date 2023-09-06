// Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить данные из 2 инпутов: 
// почта и пароль и по клику на кнопку «отправить запрос на сервер» (отправку запроса мы не проходили => 
// просто вывести на экран образовавщийсяобъект вида: {email: email, pwd: pwd}

class Client {
    sendRequest() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', function () {
            const inp1 = document.querySelector('.inp1').value;
            const inp2 = document.querySelector('.inp2').value;
            const div = document.querySelector('div');
            const obj = {};
            obj.email = inp1;
            obj.pwd = inp2;
            div.innerHTML = JSON.stringify(obj);
        })
    }
}

const client = new Client();
client.sendRequest();