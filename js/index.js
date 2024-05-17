var f = 0;
setInterval(function slide() {
    var intro = document.getElementById('intro');
    if (f == 0) {
        intro.style.backgroundImage = 'url(img/intro.jpg)';
        f++;
    }
    else if (f == 1) {
        intro.style.backgroundImage = 'url(img/cosmetic.jpeg)';
        f++;
    }
    else if (f == 2) {
        intro.style.backgroundImage = 'url(img/head.jpeg)';
        f=0;
    }
}, 3000);