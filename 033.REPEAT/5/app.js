// Реализуйте класс Client, содержащий метод doRegistration. Ваша 
// задача получить данные из 2 инпуто в: почта,пароль.По клику на 
// кнопку «отправить запрос на сервер» для последующей записи в 
// массив репозитория класса Server

class Client {
    doRegistration() {
        const getLog = {
            email: '',
            password: ''
        }

        const btn = document.querySelector('button');

        btn.addEventListener('click', () => {
            const email = document.querySelector('.email');
            const password = document.querySelector('.password');

            getLog.email = email.value;
            getLog.password = password.value;
        });
        console.log(getLog);
    }
}

const client = new Client();
client.doRegistration();