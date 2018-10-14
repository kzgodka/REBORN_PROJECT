const bullets = document.querySelectorAll('.tour__bullets-item');
const content = document.querySelectorAll('.tour__content--item');

bullets.forEach(function(elem, i) {
    elem.onclick = function() {
        for (let j = 0; j < bullets.length; j++) {
            bullets[j].classList.remove('is-active');
        }
        this.classList.add('is-active');

        for (let j = 0; j < content.length; j++) {
            content[j].classList.remove('content--active');
        }
        content[i].classList.add('content--active');
    }
});