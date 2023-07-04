window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
        document.querySelector('.cabeca').style.backgroundColor = 'white';
        document.querySelector('.cabeca').style.borderBottom = '1px solid black';
        document.querySelector('.cabeca').style.transition = 'background-color 0.5s, border-bottom 0.5s';
    } else {
        document.querySelector('.cabeca').style.backgroundColor = '#ffffb3';
        document.querySelector('.cabeca').style.borderBottom = '0px solid black';
        document.querySelector('.cabeca').style.transition = 'background-color 0.5s, border-bottom 0s';
    }
});

/* Abaixo é integrado o codigo do Igor*/

