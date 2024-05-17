function send() {
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    if ((name == '') || (number == '')) {
        alert('Заполните обязательные поля');
    }
    else {
        let city = document.getElementById('city').value;
        let haircut = document.getElementById('haircut').value;
        let barber = document.getElementById('barber').value;
        let comment = document.getElementById('comment').value;

        let title = 'Спасибо что записался у нас, ' + name + '!';
        let str = 'Тебе будет делать ' + haircut + ' барбер ' + barber + ' в городе ' + city + '.';
        let src;
        if (comment != '') {
            str +=  ' Твои пожелания "' + comment + '" мы обязательно передадим барберу!';
        }

        const newWindow = window.open("", title, `width=1100,height=800`);
        const newWindowBody = newWindow.document.body;
        const newWindowTitle = newWindow.document.createElement("h1");
        const newWindowParagraph = newWindow.document.createElement("p");
        const newWindowImg = newWindow.document.createElement("img");
        
        newWindowTitle.textContent = title;
        newWindowParagraph.textContent = str;
        switch (haircut) {
            case 'мужскую стрижку головы':
                src = 'C:/Users/adam_kh/Desktop/4sem/Web/site/img/muj_str.png'
                break;
            case 'детскую стрижку':
                src = 'C:/Users/adam_kh/Desktop/4sem/Web/site/img/det_str.png'
                break;
            case 'окантовку или стрижку бороды':
                src = 'C:/Users/adam_kh/Desktop/4sem/Web/site/img/str_bor.png'
                break;
            case 'мужскую стрижку головы и бороды':
                src = 'C:/Users/adam_kh/Desktop/4sem/Web/site/img/muj_str+bor.png'
                break;
        }

        newWindowBody.appendChild(newWindowTitle);
        newWindowBody.appendChild(newWindowParagraph);
        newWindowBody.appendChild(newWindowImg);
        newWindowImg.src = src;
    }
}