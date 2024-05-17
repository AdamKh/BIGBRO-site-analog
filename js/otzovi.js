function send() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if ((name == '') || (email == '') || (username == '') || (password == '')) {
        alert('Заполните обязательные поля');
    }
    else {
        alert('Спасибо за отзыв, ' + name + '! Мы его обязательно прочитаем!');
    }
}